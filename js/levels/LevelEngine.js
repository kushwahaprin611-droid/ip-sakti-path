// Level Progression Engine & Objective Manager for IP Sakti Path
import { levelData } from "./LevelData.js";
import { MiniSimulations } from "./MiniSimulations.js";
import { sound } from "../audio/SoundSynth.js";
import { saktiRAG } from "../ai/SaktiSahayakRAG.js";

export class LevelEngine {
  constructor(gameWorld, inventoryManager) {
    this.gameWorld = gameWorld;
    this.inventoryManager = inventoryManager;
    this.miniSims = new MiniSimulations(this);

    this.currentLevelIndex = 0; // 0 = Level 1, 7 = Final Boss
    this.playerXP = 0;
    this.earnedBadges = [];
    this.ipReadinessScore = 25; // 0-100
    this.lang = "en";

    this.onStateChanged = null;
    this.onLevelComplete = null;
    this.onGameFinished = null;
  }

  getCurrentLevel() {
    return levelData[this.currentLevelIndex] || levelData[0];
  }

  startLevel(index) {
    this.currentLevelIndex = Math.min(levelData.length - 1, Math.max(0, index));
    const lvl = this.getCurrentLevel();

    // Fast travel to level 3D location if available
    if (this.gameWorld && lvl.location) {
      this.gameWorld.loadEnvironment(lvl.location);
    }

    this.saveState();
    if (this.onStateChanged) this.onStateChanged();
  }

  openSimulationModal() {
    const lvl = this.getCurrentLevel();
    const modal = document.getElementById("sim-modal");
    const title = document.getElementById("sim-modal-title");
    const container = document.getElementById("sim-modal-body");
    if (!modal || !container) return;

    if (title) {
      title.innerText = lvl.title[this.lang] || lvl.title.en;
    }

    this.miniSims.renderSim(lvl.simType, container, this.lang);
    modal.classList.remove("hidden");
  }

  onSimCompleted(isSuccess, message) {
    if (!isSuccess) return;

    const lvl = this.getCurrentLevel();

    // Close sim modal
    const modal = document.getElementById("sim-modal");
    if (modal) modal.classList.add("hidden");

    // Add rewards
    this.playerXP += lvl.xpReward;
    if (lvl.badgeId && this.inventoryManager) {
      this.inventoryManager.unlockBadge(lvl.badgeId);
    }

    // Add inventory reward
    if (lvl.itemReward && this.inventoryManager) {
      this.inventoryManager.addItem(lvl.itemReward.id);
    }

    // Increase Eris bond & IP readiness
    if (this.gameWorld && this.gameWorld.erisCompanion) {
      this.gameWorld.erisCompanion.increaseBond(10);
    }
    this.ipReadinessScore = Math.min(100, this.ipReadinessScore + 10);

    this.saveState();

    // Show Level Complete modal with Dual AI feedback
    this.showLevelSuccessModal(lvl, message);

    if (this.onStateChanged) this.onStateChanged();
  }

  showLevelSuccessModal(lvl, message) {
    const modal = document.getElementById("level-success-modal");
    const title = document.getElementById("success-title");
    const desc = document.getElementById("success-desc");
    const xpDisp = document.getElementById("success-xp");
    const badgeDisp = document.getElementById("success-badge");
    const itemDisp = document.getElementById("success-item");
    const btnNext = document.getElementById("btn-next-level");

    if (modal) {
      if (title) title.innerText = (this.lang === "hi" ? "स्तर पूर्ण! " : "Level Complete: ") + (lvl.title[this.lang] || lvl.title.en);
      
      // Query RAG for exact statutory evaluation
      const ragEval = saktiRAG.query(lvl.subtitle.en);
      const erisHint = this.gameWorld && this.gameWorld.erisCompanion 
        ? this.gameWorld.erisCompanion.getHintForLevel(lvl.id, this.lang)
        : "You have walked the path with honor and wisdom!";

      if (desc) {
        desc.innerHTML = `
          <div style="font-size:0.92rem; color:#f8fafc; margin-bottom:12px; line-height:1.45;">${message}</div>

          <!-- Dual AI Post-Decision Evaluations -->
          <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:14px; text-align:left;">
            <!-- Eris Emotional Reaction -->
            <div class="glass-panel" style="padding:10px; border-radius:8px; border:1px solid rgba(52,211,153,0.4); background:rgba(6,78,59,0.35);">
              <div style="display:flex; align-items:center; gap:6px; font-weight:700; color:#34d399; font-size:0.8rem; margin-bottom:4px;">
                <span>🪷</span>
                <span>Eris (Wisdom Spirit):</span>
              </div>
              <div style="font-size:0.78rem; color:#a7f3d0; line-height:1.4;">
                "${erisHint}"
              </div>
            </div>

            <!-- Sakti Sahayak Strict Statutory Evaluation -->
            <div class="glass-panel" style="padding:10px; border-radius:8px; border:1px solid rgba(6,182,212,0.4); background:rgba(8,51,68,0.35);">
              <div style="display:flex; align-items:center; justify-content:space-between; font-weight:700; color:#67e8f9; font-size:0.8rem; margin-bottom:4px;">
                <span style="display:flex; align-items:center; gap:6px;"><span>⚖️</span><span>Sakti Sahayak (Legal Evaluation):</span></span>
                <span class="rag-stat-pill" style="font-size:0.65rem;">${ragEval.confidence}% Match</span>
              </div>
              <div style="font-size:0.78rem; color:#cbd5e1; line-height:1.4; margin-bottom:4px;">
                ${ragEval.directAnswer}
              </div>
              <div style="font-size:0.7rem; color:#f59e0b;">
                <b>Citations:</b> ${ragEval.citations}
              </div>
            </div>
          </div>
        `;
      }

      if (xpDisp) xpDisp.innerText = `+${lvl.xpReward} XP`;
      if (badgeDisp) badgeDisp.innerText = lvl.badgeName[this.lang] || lvl.badgeName.en;
      if (itemDisp && lvl.itemReward) itemDisp.innerText = lvl.itemReward.name[this.lang] || lvl.itemReward.name.en;

      if (btnNext) {
        if (this.currentLevelIndex >= levelData.length - 1) {
          btnNext.innerText = this.lang === "hi" ? "✨ महा-प्रमाण पत्र एवं अंतिम परिणाम देखें" : "✨ View Grand Certificate & Ending";
          btnNext.onclick = () => {
            modal.classList.add("hidden");
            if (this.onGameFinished) this.onGameFinished();
          };
        } else {
          btnNext.innerText = this.lang === "hi" ? "अगला स्तर प्रारंभ करें →" : "Proceed to Next Level →";
          btnNext.onclick = () => {
            modal.classList.add("hidden");
            this.startLevel(this.currentLevelIndex + 1);
          };
        }
      }

      modal.classList.remove("hidden");
      sound.playSparkle();
    }
  }

  getEnding(bondLevel = 50) {
    const score = this.ipReadinessScore;
    if (score >= 90 && bondLevel >= 75) {
      return {
        title: { en: "Sovereign Grandmaster of Ayurveda", hi: "आयुर्वेद संप्रभु महागुरु" },
        desc: {
          en: "You have achieved absolute mastery over modern patent law, biodiversity governance, and international regulatory science while preserving the spiritual sanctity and community rights of traditional knowledge.",
          hi: "आपने पारंपरिक ज्ञान की पवित्रता और सामुदायिक अधिकारों की रक्षा करते हुए आधुनिक पेटेंट कानून, जैव विविधता शासन और अंतरराष्ट्रीय नियामक विज्ञान में सर्वोच्च सिद्धि प्राप्त की है।"
        },
        tier: "Legendary Sovereign"
      };
    } else if (score >= 80) {
      return {
        title: { en: "Global Ethnomedicine Pioneer", hi: "वैश्विक लोक-औषधि प्रणेता" },
        desc: {
          en: "You successfully brought traditional Ayurvedic formulations into the global market with impeccable USFDA, EU THMPD, and patent compliance.",
          hi: "आपने निर्दोष यूएसएफडीए, यूरोपीय संघ टीएचएमपीडी और पेटेंट अनुपालन के साथ पारंपरिक आयुर्वेदिक योगों को वैश्विक बाजार में स्थापित किया।"
        },
        tier: "Master Pioneer"
      };
    } else if (bondLevel >= 80) {
      return {
        title: { en: "Sacred Heritage Guardian", hi: "पावन धरोहर रक्षक" },
        desc: {
          en: "Your deep reverence for ancient Ayurvedic manuscripts, forest communities, and biodiversity stewardship has protected sacred traditions from biopiracy.",
          hi: "प्राचीन आयुर्वेदिक ग्रंथों, वन समुदायों और जैव विविधता के प्रति आपकी अगाध निष्ठा ने पावन परंपराओं को जैव-चोरी से सुरक्षित रखा है।"
        },
        tier: "Heritage Guardian"
      };
    } else {
      return {
        title: { en: "Certified AYUSH IP Practitioner", hi: "प्रमाणित आयुष आईपी विशेषज्ञ" },
        desc: {
          en: "You have successfully navigated the foundational statutes of the Patents Act, Drugs & Cosmetics Rules, and Biodiversity Act.",
          hi: "आपने पेटेंट अधिनियम, औषधि व प्रसाधन नियमावली और जैव विविधता अधिनियम के मूलभूत नियमों को सफलतापूर्वक सिद्ध किया है।"
        },
        tier: "Certified Specialist"
      };
    }
  }

  saveState() {
    try {
      const state = {
        levelIndex: this.currentLevelIndex,
        xp: this.playerXP,
        badges: this.inventoryManager ? this.inventoryManager.badges.filter(b => b.unlocked).map(b => b.id) : [],
        items: this.inventoryManager ? this.inventoryManager.items.map(i => i.id) : [],
        score: this.ipReadinessScore,
        bond: this.gameWorld && this.gameWorld.erisCompanion ? this.gameWorld.erisCompanion.bondLevel : 20
      };
      localStorage.setItem("ip_sakti_save", JSON.stringify(state));
    } catch (e) {
      // localStorage may not be available in private mode
    }
  }

  loadState() {
    try {
      const raw = localStorage.getItem("ip_sakti_save");
      if (raw) {
        const state = JSON.parse(raw);
        if (typeof state.levelIndex === "number") this.currentLevelIndex = state.levelIndex;
        if (typeof state.xp === "number") this.playerXP = state.xp;
        if (typeof state.score === "number") this.ipReadinessScore = state.score;

        if (state.badges && this.inventoryManager) {
          state.badges.forEach(bId => this.inventoryManager.unlockBadge(bId));
        }
        if (state.items && this.inventoryManager) {
          state.items.forEach(iId => this.inventoryManager.addItem(iId));
        }
        if (state.bond && this.gameWorld && this.gameWorld.erisCompanion) {
          this.gameWorld.erisCompanion.bondLevel = state.bond;
        }
      }
    } catch (e) {}
  }

  setLanguage(lang) {
    this.lang = lang;
    if (this.onStateChanged) this.onStateChanged();
  }
}