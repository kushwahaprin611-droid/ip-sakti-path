// High-Impact Visual Ayurvedic Toy & Awareness Laboratory (SIH Presentation Edition)
import { sound } from "../audio/SoundSynth.js";

export class AyurToyLab {
  constructor(app) {
    this.app = app;
    this.currentTab = "alchemy"; // "alchemy", "herbarium", "farming", "dosha", "biopiracy", "trivia", "pitch"
    
    this.selectedHerbs = [];
    this.selectedLiquid = null;
    this.grindProgress = 0;

    // Biopiracy game state
    this.arcadeScore = 0;
    this.arcadeRunning = false;
    this.arcadeInterval = null;

    // Farming Minigame State
    this.pots = [
      { id: 1, herb: "tulsi", stage: 0, watered: false, name: "Tulsi Pot" },
      { id: 2, herb: "haridra", stage: 0, watered: false, name: "Haridra Pot" },
      { id: 3, herb: "ashwagandha", stage: 0, watered: false, name: "Ashwagandha Pot" },
      { id: 4, herb: "neem", stage: 0, watered: false, name: "Neem Pot" }
    ];

    // Trivia Game Show State
    this.triviaIndex = 0;
    this.triviaScore = 0;
    this.triviaStreak = 0;
    this.triviaLifelines = { eris: true, fifty: true, freeze: true };

    this.triviaQuestions = [
      {
        q: "Why was the US Patent 5,401,504 on Turmeric successfully REVOKED?",
        options: [
          "India proved prior art from ancient Sanskrit compendia (TKDL)",
          "Turmeric is not an edible root in India",
          "The company forgot to pay annual patent fees",
          "US FDA banned all turmeric extracts"
        ],
        correct: 0,
        hint: "🪷 Eris: 'Look into our ancient palm-leaf scrolls of prior art that defeated the foreign monopoly!'"
      },
      {
        q: "Under Patents Act Section 3(e), what must a herbal mixture prove to be patentable?",
        options: [
          "It must contain at least 10 different wild herbs",
          "It must demonstrate synergistic efficacy greater than simple addition (E_combo > E_A + E_B)",
          "It must be blessed in a traditional temple ritual",
          "It must only use herbs harvested during a full moon"
        ],
        correct: 1,
        hint: "🪷 Eris: 'Remember our golden rule: 1 + 1 must equal 10 in power, not just 2!'"
      },
      {
        q: "When a foreign company sources wild Himalayan Kutki, what is legally MANDATORY under the Biological Diversity Act?",
        options: [
          "Nothing, foreign companies have free access",
          "NBA Form 1 approval and sharing 4.0% Access and Benefit Sharing (ABS) royalties with tribal farmers",
          "Only registering a trademark in New York",
          "Exporting the entire plant without cleaning"
        ],
        correct: 1,
        hint: "🪷 Eris: 'The guardians of the sacred forest must receive their fair 4% community blessing!'"
      },
      {
        q: "Which ancient digital encyclopedia does India use to block foreign biopiracy patents across the USPTO and EPO?",
        options: [
          "Wikipedia Health",
          "TKDL (Traditional Knowledge Digital Library with 4.4 Lakh formulations)",
          "Google Scholar Ayurveda",
          "Ayurvedic Social Media Network"
        ],
        correct: 1,
        hint: "🪷 Eris: 'The mighty digital vault of 4.4 lakh ancestral formulas created by CSIR and AYUSH!'"
      }
    ];

    // Ultra Visual Illustrated Herb Database
    this.herbsData = [
      {
        id: "haridra",
        name: { en: "Haridra / Turmeric (Curcuma longa)", hi: "हरिद्रा / हल्दी (Curcuma longa)" },
        simpleTitle: "🟡 The Golden Wound Healer",
        sanskrit: "हरिद्रा कटुतिक्तोष्णा कफपित्तविनाशिनी।",
        icon: "🟡",
        partIcon: "🫚 Rhizome (कंद)",
        color: "#fbbf24",
        bgGradient: "linear-gradient(135deg, rgba(245,158,11,0.25), rgba(217,119,6,0.1))",
        potency: "🔥 Hot (Ushna)",
        actives: "Curcuminoids (Curcumin I, II, III), Turmerone",
        simpleAnalogy: "Nature's premier antiseptic and anti-inflammatory golden root.",
        ipBadge: "❌ US Patent 5,401,504 REVOKED",
        ipStory: "CSIR produced 32 ancient Sanskrit & Hindi compendia proving Indians used turmeric for centuries, forcing the US Patent Office to REVOKE the illegal patent!",
        medicinalUse: "Vrana-shodhana (wound healing), blood purification, joint flexibility, and antioxidant cell protection."
      },
      {
        id: "maricha",
        name: { en: "Maricha / Black Pepper (Piper nigrum)", hi: "मरिच / काली मिर्च (Piper nigrum)" },
        simpleTitle: "🌶️ The Bio-Enhancer Turbo",
        sanskrit: "मरिचं कटुकं तीक्ष्णं दीपनं कफवातजित्।",
        icon: "🌶️",
        partIcon: "🍒 Dried Berry (फल)",
        color: "#f87171",
        bgGradient: "linear-gradient(135deg, rgba(239,68,68,0.25), rgba(185,28,28,0.1))",
        potency: "🔥 Very Hot (Tikshna/Ushna)",
        actives: "Piperine (98% Pure Bio-active), Chavicine",
        simpleAnalogy: "The biological turbocharger that boosts absorption of other herbs by 2000%!",
        ipBadge: "⚡ Section 3(e) Synergistic Hero",
        ipStory: "Mixing Curcumin with Piperine isn't just 1+1=2; it makes Curcumin 20x more powerful! This quantitative synergy is exactly what wins modern patents under Section 3(e).",
        medicinalUse: "Deepana-Pachana (kindles digestive fire), Yogavahi (bioavailability amplifier), and clears respiratory channels."
      },
      {
        id: "neem",
        name: { en: "Nimba / Neem (Azadirachta indica)", hi: "निम्ब / नीम (Azadirachta indica)" },
        simpleTitle: "🍃 The Village Pharmacy",
        sanskrit: "निम्बः शीतो लघुर्ग्राही कटुपाकोऽग्निवातकृत्।",
        icon: "🍃",
        partIcon: "🌿 Leaves & Bark (पत्र)",
        color: "#34d399",
        bgGradient: "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(5,150,105,0.1))",
        potency: "❄️ Cooling (Sheeta)",
        actives: "Azadirachtin, Nimbin, Salannin",
        simpleAnalogy: "Ancient natural pesticide and antibacterial tree of India.",
        ipBadge: "❌ EPO Patent EP0436257 REVOKED",
        ipStory: "The European Patent Office revoked a multinational patent on Neem after a 10-year legal battle led by India proving traditional Indian farmers used neem extracts for millennia.",
        medicinalUse: "Krimighna (antimicrobial), Kushtaghna (skin healer), natural dental protection, and blood purification."
      },
      {
        id: "tulsi",
        name: { en: "Tulsi / Holy Basil (Ocimum sanctum)", hi: "तुलसी / सुरसा (Ocimum sanctum)" },
        simpleTitle: "🌿 Queen of Sacred Herbs",
        sanskrit: "तुलसी कटुका तिक्ता हृद्योष्णा दाहपित्तकृत्।",
        icon: "🌿",
        partIcon: "🌱 Leaves & Inflorescence",
        color: "#10b981",
        bgGradient: "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(6,95,70,0.1))",
        potency: "🔥 Mild Heating (Ushna)",
        actives: "Eugenol (70%), Ursolic Acid, Rosmarinic Acid",
        simpleAnalogy: "Sacred adaptogen that relieves stress, clears lungs, and boosts immunity.",
        ipBadge: "🛡️ TKDL Core Heritage (100+ Formulas)",
        ipStory: "Protected in the TKDL across 100+ classical formulations to prevent foreign pharmaceutical monopolies over respiratory extracts.",
        medicinalUse: "Shvasahara (respiratory comfort), adaptogenic stress relief, microbial defense, and longevity."
      },
      {
        id: "ashwagandha",
        name: { en: "Ashwagandha (Withania somnifera)", hi: "अश्वगंधा (Withania somnifera)" },
        simpleTitle: "🌾 Indian Ginseng of Vitality",
        sanskrit: "अश्वगन्धाऽनिलश्लेष्मश्वित्रशोथक्षयापहा।",
        icon: "🌾",
        partIcon: "🪵 Root (मूल)",
        color: "#f59e0b",
        bgGradient: "linear-gradient(135deg, rgba(245,158,11,0.25), rgba(180,83,9,0.1))",
        potency: "🔥 Heating & Nourishing",
        actives: "Withanolides (Withaferin A), Withanosides",
        simpleAnalogy: "Gives strength and stamina of a horse while calming the nervous system.",
        ipBadge: "🌍 Madrid Protocol Protected",
        ipStory: "Extensively registered under global Madrid trademarks and key to modern synergy patents in stress and sleep wellness.",
        medicinalUse: "Balya & Rasayana (deep restorative vitality), Medhya (nervous system tonic), and cortisol stress management."
      },
      {
        id: "kutki",
        name: { en: "Kutki / Katuki (Picrorhiza kurroa)", hi: "कुटकी / कटुका (Picrorhiza kurroa)" },
        simpleTitle: "❄️ The Himalayan Liver Shield",
        sanskrit: "कटुका तिक्तका शीता पित्तश्लेष्मज्वरापहा।",
        icon: "❄️",
        partIcon: "🏔️ Alpine Root (कंद)",
        color: "#06b6d4",
        bgGradient: "linear-gradient(135deg, rgba(6,182,212,0.25), rgba(8,145,178,0.1))",
        potency: "❄️ Intensely Cooling (Sheeta)",
        actives: "Picroside I & II, Kutkoside",
        simpleAnalogy: "Endangered Himalayan herb that cleanses and protects liver and spleen cells.",
        ipBadge: "⚖️ NBA Form 1 & 4% ABS Royalty",
        ipStory: "Protected under the Biological Diversity Act 2002/2023. Companies harvesting wild Kutki must pay 4.0% royalties to local Himalayan tribal communities!",
        medicinalUse: "Yakrit-pleeha rogahara (liver & spleen protector), potent cellular detoxifier, and fever reducer."
      },
      {
        id: "brahmi",
        name: { en: "Brahmi / Memory Herb (Bacopa monnieri)", hi: "ब्राह्मी (Bacopa monnieri)" },
        simpleTitle: "🧠 The Cognitive Memory Enhancer",
        sanskrit: "ब्राह्मी हिमा सरा तिक्ता मत्यायुःस्वरदायिनी।",
        icon: "🧠",
        partIcon: "🌱 Whole Plant (पंचांग)",
        color: "#c084fc",
        bgGradient: "linear-gradient(135deg, rgba(192,132,252,0.25), rgba(126,34,206,0.1))",
        potency: "❄️ Cooling (Sheeta)",
        actives: "Bacosides A & B, Brahmine",
        simpleAnalogy: "Brain tonic that nourishes neurons, sharpens focus, and calms mental chatter.",
        ipBadge: "📜 D&C Rule 158B Validated",
        ipStory: "Requires verified clinical and pharmacokinetic proof under Rule 158B for cognitive claims.",
        medicinalUse: "Medhya Rasayana (memory retention, cognitive speed, and mental calm), neuroprotective."
      },
      {
        id: "amalaki",
        name: { en: "Amalaki / Indian Gooseberry (Phyllanthus emblica)", hi: "आमलकी / आँवला (Phyllanthus emblica)" },
        simpleTitle: "🍈 The Fountain of Youth (Rasayana)",
        sanskrit: "वयःस्थापनानां श्रेष्ठं धात्रीफलं मतम्।",
        icon: "🍈",
        partIcon: "🍈 Fresh Fruit (फल)",
        color: "#84cc16",
        bgGradient: "linear-gradient(135deg, rgba(132,204,22,0.25), rgba(77,124,15,0.1))",
        potency: "❄️ Cooling (Sheeta)",
        actives: "Stable Vitamin C, Ellagic Acid, Gallotannins",
        simpleAnalogy: "Contains 20x more Vitamin C than oranges and naturally balances all 3 doshas.",
        ipBadge: "🛡️ Section 3(p) TKDL Core",
        ipStory: "The primary ingredient in classical Chyawanprash, legally excluded from single-monopoly patents under Section 3(p).",
        medicinalUse: "Vayahsthapana (anti-aging & cell rejuvenation), vision boost, supreme immunity, and digestive nourishment."
      }
    ];
  }
  renderModal(container, lang = "en") {
    let html = `
      <div class="toy-lab-container">
        <!-- SIH Special Header Banner -->
        <div class="sih-banner-pill" style="margin-bottom:12px; padding:10px 16px; background:linear-gradient(90deg, rgba(245,158,11,0.3), rgba(16,185,129,0.3)); border:2px solid #f59e0b; border-radius:20px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 0 20px rgba(245,158,11,0.3);">
          <span style="font-size:0.88rem; font-weight:900; color:#fef08a; letter-spacing:0.5px;">🏆 SIH 2026: AYURVEDIC VISUAL TOY & AWARENESS HUB</span>
          <span style="font-size:0.75rem; color:#34d399; font-weight:800; background:rgba(6,78,59,0.6); padding:3px 10px; border-radius:12px;">ज्ञानम् & शक्ति</span>
        </div>

        <!-- 7 Visual Navigation Tabs -->
        <div class="toy-nav-tabs" style="display:flex; gap:6px; margin-bottom:14px; flex-wrap:wrap;">
          <button class="toy-tab-btn ${this.currentTab === 'alchemy' ? 'active-toy-tab' : ''}" data-tab="alchemy" style="flex:1; min-width:120px; padding:8px 10px; border-radius:10px; font-size:0.78rem; font-weight:800; cursor:pointer; background:rgba(30,41,59,0.85); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1; display:flex; align-items:center; justify-content:center; gap:4px;">
            ⚗️ ${lang === 'hi' ? 'खरल' : 'Kharal Toy'}
          </button>
          <button class="toy-tab-btn ${this.currentTab === 'herbarium' ? 'active-toy-tab' : ''}" data-tab="herbarium" style="flex:1; min-width:120px; padding:8px 10px; border-radius:10px; font-size:0.78rem; font-weight:800; cursor:pointer; background:rgba(30,41,59,0.85); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1; display:flex; align-items:center; justify-content:center; gap:4px;">
            🌿 ${lang === 'hi' ? 'वाटिका' : 'Herbarium'}
          </button>
          <button class="toy-tab-btn ${this.currentTab === 'farming' ? 'active-toy-tab' : ''}" data-tab="farming" style="flex:1; min-width:120px; padding:8px 10px; border-radius:10px; font-size:0.78rem; font-weight:800; cursor:pointer; background:rgba(30,41,59,0.85); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1; display:flex; align-items:center; justify-content:center; gap:4px;">
            🌱 ${lang === 'hi' ? 'कृषि वाटिका' : 'Plant Growth Toy'}
          </button>
          <button class="toy-tab-btn ${this.currentTab === 'dosha' ? 'active-toy-tab' : ''}" data-tab="dosha" style="flex:1; min-width:120px; padding:8px 10px; border-radius:10px; font-size:0.78rem; font-weight:800; cursor:pointer; background:rgba(30,41,59,0.85); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1; display:flex; align-items:center; justify-content:center; gap:4px;">
            ☸️ ${lang === 'hi' ? 'दोष चक्र' : 'Dosha Wheel'}
          </button>
          <button class="toy-tab-btn ${this.currentTab === 'biopiracy' ? 'active-toy-tab' : ''}" data-tab="biopiracy" style="flex:1; min-width:120px; padding:8px 10px; border-radius:10px; font-size:0.78rem; font-weight:800; cursor:pointer; background:rgba(30,41,59,0.85); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1; display:flex; align-items:center; justify-content:center; gap:4px;">
            ⚡ ${lang === 'hi' ? 'जैव-चोरी ढाल' : 'Biopiracy Zap'}
          </button>
          <button class="toy-tab-btn ${this.currentTab === 'trivia' ? 'active-toy-tab' : ''}" data-tab="trivia" style="flex:1; min-width:120px; padding:8px 10px; border-radius:10px; font-size:0.78rem; font-weight:800; cursor:pointer; background:rgba(30,41,59,0.85); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1; display:flex; align-items:center; justify-content:center; gap:4px;">
            ⚔️ ${lang === 'hi' ? 'ज्ञान चक्रव्यूह' : 'Trivia Arena'}
          </button>
          <button class="toy-tab-btn ${this.currentTab === 'pitch' ? 'active-toy-tab' : ''}" data-tab="pitch" style="flex:1; min-width:120px; padding:8px 10px; border-radius:10px; font-size:0.78rem; font-weight:800; cursor:pointer; background:rgba(30,41,59,0.85); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1; display:flex; align-items:center; justify-content:center; gap:4px;">
            🎬 ${lang === 'hi' ? 'प्रस्तुति स्लाइड्स' : 'Pitch Deck'}
          </button>
        </div>

        <!-- Tab Body Content -->
        <div id="toy-tab-content">
          <!-- Injected dynamically -->
        </div>
      </div>
    `;

    container.innerHTML = html;

    const tabs = container.querySelectorAll(".toy-tab-btn");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        sound.playClick();
        this.currentTab = tab.dataset.tab;
        tabs.forEach(t => {
          const isActive = (t.dataset.tab === this.currentTab);
          t.style.borderColor = isActive ? "#f59e0b" : "rgba(255,255,255,0.15)";
          t.style.background = isActive ? "rgba(245,158,11,0.25)" : "rgba(30,41,59,0.85)";
          t.style.color = isActive ? "#fef08a" : "#cbd5e1";
        });
        this.renderTabContent(container.querySelector("#toy-tab-content"), lang);
      });
    });

    this.renderTabContent(container.querySelector("#toy-tab-content"), lang);
  }

  renderTabContent(contentEl, lang = "en") {
    contentEl.innerHTML = "";
    if (this.arcadeInterval) { clearInterval(this.arcadeInterval); this.arcadeInterval = null; }

    switch (this.currentTab) {
      case "alchemy":
        this.renderAlchemyToy(contentEl, lang);
        break;
      case "herbarium":
        this.renderHerbarium(contentEl, lang);
        break;
      case "farming":
        this.renderFarmingToy(contentEl, lang);
        break;
      case "dosha":
        this.renderDoshaScanner(contentEl, lang);
        break;
      case "biopiracy":
        this.renderBiopiracyArcade(contentEl, lang);
        break;
      case "trivia":
        this.renderTriviaArena(contentEl, lang);
        break;
      case "pitch":
        this.renderPitchDeck(contentEl, lang);
        break;
      case "graph":
        this.renderKnowledgeGraph(contentEl, lang);
        break;
      default:
        this.renderAlchemyToy(contentEl, lang);
    }
  }
  // 1. Interactive Mortar & Pestle Alchemy Toy
  renderAlchemyToy(container, lang) {
    let html = `
      <div class="glass-panel" style="padding:18px; border-radius:14px; border:2px solid rgba(245,158,11,0.5); background:radial-gradient(circle at top, rgba(30,41,59,0.95), rgba(15,23,42,0.98)); box-shadow:0 0 35px rgba(245,158,11,0.15);">
        
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px;">
          <div>
            <h3 style="color:#fbbf24; margin:0; font-size:1.15rem; font-weight:800; display:flex; align-items:center; gap:8px;">
              <span>⚗️</span>
              <span>${lang === 'hi' ? 'आयुर्वेदिक खरल निर्माण प्रयोगशाला (Mortar & Pestle Toy)' : 'Ayurvedic Kharal & Mortar-Pestle Compounding Toy'}</span>
            </h3>
            <div style="font-size:0.78rem; color:#94a3b8;">${lang === 'hi' ? 'जड़ी-बूटियों को चुनें, खरल में पीसें, भावना (Bhavana) द्रव्य मिलाएं और दिव्य योग तैयार करें!' : 'Pick herbs, grind in the stone Kharal mortar, add liquid Bhavana, and unlock sacred formulations!'}</div>
          </div>
          <button id="btn-reset-kharal" class="hud-btn" style="padding:6px 12px; font-size:0.75rem; background:rgba(239,68,68,0.2); border-color:#ef4444; color:#fca5a5;">🔄 Reset Mortar</button>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1.15fr; gap:16px;">
          <div>
            <div style="font-size:0.84rem; font-weight:800; color:#38bdf8; margin-bottom:8px;">1️⃣ Select Dried Herbs for Mortar:</div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:14px;">
              ${this.herbsData.map(h => `
                <button class="herb-pick-btn" data-id="${h.id}" style="padding:8px 10px; border-radius:10px; font-size:0.78rem; font-weight:700; cursor:pointer; background:rgba(15,23,42,0.8); border:1px solid ${h.color}44; color:#f8fafc; display:flex; align-items:center; gap:8px; text-align:left; transition:all 0.2s;">
                  <span style="font-size:1.4rem;">${h.icon}</span>
                  <div style="overflow:hidden;">
                    <div style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:${h.color}; font-weight:800;">${h.name[lang] ? h.name[lang].split("/")[0] : h.name.en.split("/")[0]}</div>
                    <div style="font-size:0.65rem; color:#94a3b8;">${h.potency.split(" ")[0]} ${h.potency.split(" ")[1] || ""}</div>
                  </div>
                </button>
              `).join("")}
            </div>

            <div style="font-size:0.84rem; font-weight:800; color:#34d399; margin-bottom:8px;">2️⃣ Add Liquid Potentiator (Anupana):</div>
            <div style="display:flex; gap:8px; margin-bottom:10px;">
              <button class="liquid-pick-btn" data-liquid="honey" style="flex:1; padding:8px 6px; border-radius:8px; font-size:0.78rem; font-weight:700; background:rgba(30,41,59,0.8); border:1px solid rgba(255,255,255,0.15); color:#fef08a; cursor:pointer; text-align:center;">🍯 Madhu<br><span style="font-size:0.65rem; color:#94a3b8;">(Honey)</span></button>
              <button class="liquid-pick-btn" data-liquid="ghee" style="flex:1; padding:8px 6px; border-radius:8px; font-size:0.78rem; font-weight:700; background:rgba(30,41,59,0.8); border:1px solid rgba(255,255,255,0.15); color:#fde047; cursor:pointer; text-align:center;">🧈 Ghrita<br><span style="font-size:0.65rem; color:#94a3b8;">(Desi Ghee)</span></button>
              <button class="liquid-pick-btn" data-liquid="aloe" style="flex:1; padding:8px 6px; border-radius:8px; font-size:0.78rem; font-weight:700; background:rgba(30,41,59,0.8); border:1px solid rgba(255,255,255,0.15); color:#86efac; cursor:pointer; text-align:center;">🌱 Kumari<br><span style="font-size:0.65rem; color:#94a3b8;">(Aloe Juice)</span></button>
            </div>
          </div>

          <div style="background:radial-gradient(circle at center, rgba(30,41,59,0.9), rgba(2,6,23,0.95)); border:2px solid rgba(245,158,11,0.4); border-radius:14px; padding:16px; text-align:center; display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; min-height:280px;">
            <div id="mortar-bowl" style="width:145px; height:110px; background:radial-gradient(circle at center, #582506 0%, #1c0a00 100%); border:4px solid #f59e0b; border-radius:10px 10px 75px 75px; position:relative; box-shadow:0 10px 30px rgba(0,0,0,0.8); cursor:pointer; display:flex; align-items:center; justify-content:center; margin-bottom:14px; transition:transform 0.15s;">
              <div id="pestle-rod" style="width:20px; height:85px; background:linear-gradient(to right, #92400e, #d97706, #fbbf24); border-radius:10px; position:absolute; top:-30px; transform-origin:bottom center; transform:rotate(-15deg); transition:transform 0.1s; box-shadow:3px 6px 12px rgba(0,0,0,0.6);"></div>
              <div id="mortar-contents" style="font-size:1.8rem; transition:all 0.3s;">🥣</div>
            </div>

            <div style="width:100%; max-width:240px; margin-bottom:12px;">
              <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#cbd5e1; margin-bottom:4px; font-weight:700;">
                <span>Trituration (Bhavana):</span>
                <span id="grind-pct" style="color:#fbbf24; font-weight:900;">0%</span>
              </div>
              <div style="height:10px; background:rgba(255,255,255,0.1); border-radius:5px; overflow:hidden; border:1px solid rgba(255,255,255,0.2);">
                <div id="grind-fill" style="width:0%; height:100%; background:linear-gradient(90deg, #f59e0b, #10b981); transition:width 0.2s;"></div>
              </div>
            </div>

            <button id="btn-grind-pestle" class="btn-primary" style="padding:10px 24px; font-size:0.9rem; font-weight:800; background:linear-gradient(135deg, #f59e0b, #ea580c); box-shadow:0 0 20px rgba(245,158,11,0.4);">
              🔨 Grind Pestle (Tap / Click)
            </button>

            <div id="alchemy-result-box" style="margin-top:12px; font-size:0.82rem; color:#a7f3d0; min-height:55px; line-height:1.4; padding:8px 12px; background:rgba(6,78,59,0.4); border-radius:8px; border:1px solid rgba(16,185,129,0.4); width:100%;">
              Add botanical ingredients to the mortar and start grinding!
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const herbBtns = container.querySelectorAll(".herb-pick-btn");
    const contentsEl = container.querySelector("#mortar-contents");
    const grindFill = container.querySelector("#grind-fill");
    const grindPct = container.querySelector("#grind-pct");
    const resultBox = container.querySelector("#alchemy-result-box");
    const mortarBowl = container.querySelector("#mortar-bowl");
    const pestleRod = container.querySelector("#pestle-rod");

    herbBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        sound.playClick();
        const id = btn.dataset.id;
        if (!this.selectedHerbs.includes(id)) {
          this.selectedHerbs.push(id);
          btn.style.borderColor = "#f59e0b";
          btn.style.background = "rgba(245,158,11,0.3)";
        } else {
          this.selectedHerbs = this.selectedHerbs.filter(x => x !== id);
          btn.style.borderColor = "rgba(255,255,255,0.15)";
          btn.style.background = "rgba(15,23,42,0.8)";
        }

        const icons = this.selectedHerbs.map(hid => this.herbsData.find(h => h.id === hid)?.icon || "").join(" ");
        contentsEl.innerText = icons || "🥣";
        this.grindProgress = 0;
        grindFill.style.width = "0%";
        grindPct.innerText = "0%";
      });
    });

    const liquidBtns = container.querySelectorAll(".liquid-pick-btn");
    liquidBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        sound.playBubble();
        this.selectedLiquid = btn.dataset.liquid;
        liquidBtns.forEach(b => {
          b.style.borderColor = (b.dataset.liquid === this.selectedLiquid) ? "#10b981" : "rgba(255,255,255,0.15)";
          b.style.background = (b.dataset.liquid === this.selectedLiquid) ? "rgba(16,185,129,0.35)" : "rgba(30,41,59,0.8)";
        });
      });
    });

    container.querySelector("#btn-reset-kharal").addEventListener("click", () => {
      sound.playClick();
      this.selectedHerbs = [];
      this.selectedLiquid = null;
      this.grindProgress = 0;
      contentsEl.innerText = "🥣";
      grindFill.style.width = "0%";
      grindPct.innerText = "0%";
      herbBtns.forEach(b => {
        b.style.borderColor = "rgba(255,255,255,0.15)";
        b.style.background = "rgba(15,23,42,0.8)";
      });
      liquidBtns.forEach(b => {
        b.style.borderColor = "rgba(255,255,255,0.15)";
        b.style.background = "rgba(30,41,59,0.8)";
      });
      resultBox.innerText = 'Mortar cleaned. Ready for a new compound!';
    });

    const performGrind = () => {
      if (this.selectedHerbs.length === 0) {
        sound.playClick();
        resultBox.innerHTML = `<span style="color:#ef4444; font-weight:700;">⚠️ Please pick herbs from the shelf first!</span>`;
        return;
      }

      sound.playGrind();
      this.grindProgress = Math.min(100, this.grindProgress + 25);
      grindFill.style.width = `${this.grindProgress}%`;
      grindPct.innerText = `${this.grindProgress}%`;

      pestleRod.style.transform = `rotate(${(Math.random() - 0.5) * 60}deg)`;
      mortarBowl.style.transform = `scale(0.96) translateY(3px)`;
      setTimeout(() => { mortarBowl.style.transform = `scale(1) translateY(0)`; }, 100);

      if (this.grindProgress >= 100) {
        sound.playSuccess();
        let creationName = "Classical Ayur-Compound";
        let ipLesson = "";

        if (this.selectedHerbs.includes("haridra") && this.selectedHerbs.includes("maricha")) {
          creationName = "🟡 Golden Haridra-Maricha Synergy Elixir";
          ipLesson = "💡 <b>Section 3(e) Synergistic Hero:</b> Adding Piperine enhances Curcumin bioavailability by 2000%! This non-obvious synergy is exactly how modern herbal patents are won.";
        } else if (this.selectedHerbs.includes("amalaki") && this.selectedHerbs.includes("tulsi")) {
          creationName = "🍈 Sacred Rasayana Immunity Awaleha";
          ipLesson = "💡 <b>Section 3(p) TKDL Heritage:</b> Ancient rejuvenation recipe protected in public domain from biopiracy monopolies.";
        } else if (this.selectedHerbs.includes("kutki")) {
          creationName = "❄️ Himalayan Yakrit Detox Vati";
          ipLesson = "💡 <b>Biodiversity Act ABS:</b> Sourcing alpine Kutki requires NBA Form 1 approval and 4% royalties for local mountain tribes.";
        } else {
          creationName = "✨ Custom Herbal Synergistic Churna";
          ipLesson = "💡 <b>Ayurvedic Principle:</b> Balanced combination of Pancha-Rasa (tastes) and Tridosha harmonizers.";
        }

        resultBox.innerHTML = `
          <div style="color:#fef08a; font-weight:900; font-size:0.92rem; margin-bottom:3px;">${creationName} (Successfully Formulated)!</div>
          <div style="color:#a7f3d0; font-size:0.78rem; line-height:1.4;">${ipLesson}</div>
        `;
      }
    };

    container.querySelector("#btn-grind-pestle").addEventListener("click", performGrind);
    mortarBowl.addEventListener("click", performGrind);
  }

  // 2. Divya Herbarium Plant Explorer
  renderHerbarium(container, lang) {
    let selectedHerb = this.herbsData[0];

    let html = `
      <div style="display:grid; grid-template-columns:1.2fr 1.8fr; gap:16px;">
        <div style="display:flex; flex-direction:column; gap:8px; max-height:440px; overflow-y:auto; padding-right:4px;">
          ${this.herbsData.map((h, i) => `
            <div class="glass-panel herb-card-btn ${i === 0 ? 'selected-herb' : ''}" data-id="${h.id}" style="padding:10px 12px; border-radius:10px; cursor:pointer; display:flex; align-items:center; gap:12px; border:2px solid ${i === 0 ? h.color : 'rgba(255,255,255,0.1)'}; background:${i === 0 ? h.bgGradient : 'rgba(15,23,42,0.8)'}; transition:all 0.25s;">
              <div style="font-size:2rem;">${h.icon}</div>
              <div style="flex-grow:1;">
                <div style="font-size:0.85rem; font-weight:800; color:#f8fafc;">${h.name[lang] || h.name.en}</div>
                <div style="font-size:0.72rem; color:${h.color}; font-weight:700;">${h.simpleTitle}</div>
                <div style="font-size:0.68rem; color:#94a3b8;">${h.partIcon}</div>
              </div>
            </div>
          `).join("")}
        </div>

        <div id="herb-dossier" class="glass-panel" style="padding:18px; border-radius:14px; border:2px solid ${selectedHerb.color}; background:rgba(15,23,42,0.95); box-shadow:0 0 30px rgba(0,0,0,0.8);">
          ${this.getHerbDossierHTML(selectedHerb, lang)}
        </div>
      </div>
    `;

    container.innerHTML = html;

    const cards = container.querySelectorAll(".herb-card-btn");
    const dossier = container.querySelector("#herb-dossier");

    cards.forEach(c => {
      c.addEventListener("click", () => {
        sound.playClick();
        const id = c.dataset.id;
        selectedHerb = this.herbsData.find(h => h.id === id) || this.herbsData[0];
        cards.forEach(card => {
          const isSelected = (card.dataset.id === id);
          const herbObj = this.herbsData.find(h => h.id === card.dataset.id);
          card.style.borderColor = isSelected ? herbObj.color : "rgba(255,255,255,0.1)";
          card.style.background = isSelected ? herbObj.bgGradient : "rgba(15,23,42,0.8)";
        });
        dossier.style.borderColor = selectedHerb.color;
        dossier.innerHTML = this.getHerbDossierHTML(selectedHerb, lang);
      });
    });
  }

  getHerbDossierHTML(h, lang) {
    return `
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:2.6rem;">${h.icon}</span>
          <div>
            <h3 style="color:${h.color}; font-size:1.2rem; font-weight:900; margin:0;">${h.name[lang] || h.name.en}</h3>
            <div style="font-size:0.78rem; color:#fef08a; font-weight:700;">${h.simpleTitle}</div>
          </div>
        </div>
        <span class="rag-stat-pill" style="background:${h.color}22; color:${h.color}; border-color:${h.color}; font-size:0.72rem; font-weight:800;">${h.partIcon}</span>
      </div>

      <div style="font-size:0.84rem; color:#34d399; font-family:serif; font-style:italic; margin-bottom:10px; padding:8px 12px; background:rgba(6,78,59,0.35); border-radius:8px; border-left:4px solid #10b981;">
        📜 "${h.sanskrit}"
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:0.78rem; margin-bottom:12px;">
        <div style="background:rgba(2,6,23,0.7); padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);"><b style="color:#38bdf8;">Potency (Virya):</b> ${h.potency}</div>
        <div style="background:rgba(2,6,23,0.7); padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);"><b style="color:#c084fc;">Bioactive Compound:</b> ${h.actives.split(",")[0]}</div>
        <div style="background:rgba(2,6,23,0.7); padding:8px; border-radius:8px; grid-column:1/-1; border:1px solid rgba(255,255,255,0.08);"><b style="color:#a7f3d0;">Simple Meaning:</b> ${h.simpleAnalogy}</div>
      </div>

      <div style="background:rgba(239,68,68,0.15); border:1px solid #ef4444; border-radius:10px; padding:10px; margin-bottom:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
          <b style="color:#fca5a5; font-size:0.82rem;">🛡️ Landmark IP & Sovereignty Story:</b>
          <span style="font-size:0.68rem; font-weight:800; background:#ef4444; color:#fff; padding:2px 8px; border-radius:10px;">${h.ipBadge}</span>
        </div>
        <div style="font-size:0.76rem; color:#e2e8f0; line-height:1.4;">${h.ipStory}</div>
      </div>

      <div style="font-size:0.75rem; color:#94a3b8; line-height:1.35;">
        <b>Classical Action:</b> ${h.medicinalUse}
      </div>
    `;
  }
  // 3. Oshadhi Vatika: Sacred Plant Farming & Growth Minigame
  renderFarmingToy(container, lang) {
    let html = `
      <div class="glass-panel" style="padding:18px; border-radius:14px; border:2px solid rgba(16,185,129,0.5); background:radial-gradient(circle at top, rgba(30,41,59,0.95), rgba(15,23,42,0.98));">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px;">
          <div>
            <h3 style="color:#34d399; margin:0; font-size:1.15rem; font-weight:800; display:flex; align-items:center; gap:8px;">
              <span>🌱</span>
              <span>${lang === 'hi' ? 'ओषधि वाटिका: पवित्र पौधा कृषि एवं संवर्धन' : 'Oshadhi Vatika: Sacred Botanical Farming & Growth Toy'}</span>
            </h3>
            <div style="font-size:0.78rem; color:#cbd5e1;">Plant sacred seeds, water them with prana, watch them sprout, and harvest bioactive compounds!</div>
          </div>
          <button id="btn-reset-farm" class="hud-btn" style="padding:6px 12px; font-size:0.75rem;">🔄 Reset Garden</button>
        </div>

        <!-- 4 Plant Pots Grid -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:14px; margin-bottom:14px;">
          ${this.pots.map(p => {
            const herbData = this.herbsData.find(h => h.id === p.herb) || this.herbsData[0];
            let stageIcon = "🟫"; // Soil
            let stageText = "1. Empty Soil (Click Plant)";
            if (p.stage === 1) { stageIcon = "🌰"; stageText = "2. Seed Planted"; }
            else if (p.stage === 2) { stageIcon = "🌱"; stageText = "3. Sprouted Sprout"; }
            else if (p.stage === 3) { stageIcon = "🌿"; stageText = "4. Growing Shrub"; }
            else if (p.stage === 4) { stageIcon = herbData.icon; stageText = "5. Mature Botanical!"; }

            return `
              <div class="glass-panel plant-pot-card" data-pot="${p.id}" style="padding:14px; border-radius:12px; text-align:center; border:2px solid ${p.stage === 4 ? '#34d399' : 'rgba(255,255,255,0.15)'}; background:rgba(15,23,42,0.85); display:flex; flex-direction:column; align-items:center; justify-content:space-between; min-height:220px;">
                <div style="font-size:0.78rem; font-weight:800; color:${herbData.color};">${p.name}</div>
                <div class="pot-visual-icon" style="font-size:3.2rem; margin:10px 0; transition:transform 0.3s; cursor:pointer;" title="Tap to nurture">${stageIcon}</div>
                <div style="font-size:0.72rem; color:#94a3b8; margin-bottom:8px;">${stageText}</div>
                
                <div style="display:flex; gap:6px; width:100%;">
                  ${p.stage === 0 ? `
                    <button class="btn-primary btn-pot-plant" data-pot="${p.id}" style="flex:1; padding:6px; font-size:0.72rem; font-weight:800;">🌰 Plant Seed</button>
                  ` : p.stage < 4 ? `
                    <button class="hud-btn btn-pot-water emerald-glow" data-pot="${p.id}" style="flex:1; padding:6px; font-size:0.72rem; font-weight:800; background:rgba(6,182,212,0.3); border-color:#06b6d4; color:#67e8f9;">💧 Water (${p.stage}/4)</button>
                  ` : `
                    <button class="btn-primary btn-pot-harvest" data-pot="${p.id}" style="flex:1; padding:6px; font-size:0.72rem; font-weight:800; background:linear-gradient(135deg, #10b981, #059669);">🌸 Harvest (+50 XP)</button>
                  `}
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <div id="farm-status-bar" style="background:rgba(6,78,59,0.35); border:1px solid #10b981; border-radius:10px; padding:10px 14px; font-size:0.8rem; color:#a7f3d0; display:flex; justify-content:space-between; align-items:center;">
          <span>💡 <b>Farming Law Tip:</b> Biological Diversity Act 2002 requires conservation of cultivated vs wild endangered species!</span>
          <span style="font-weight:800; color:#fef08a;">Active Pots: 4/4</span>
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Plant handlers
    container.querySelectorAll(".btn-pot-plant").forEach(b => {
      b.addEventListener("click", () => {
        sound.playClick();
        const potId = parseInt(b.dataset.pot);
        const pot = this.pots.find(p => p.id === potId);
        if (pot) {
          pot.stage = 1;
          this.renderFarmingToy(container, lang);
        }
      });
    });

    // Water handlers
    container.querySelectorAll(".btn-pot-water").forEach(b => {
      b.addEventListener("click", () => {
        sound.playBubble();
        const potId = parseInt(b.dataset.pot);
        const pot = this.pots.find(p => p.id === potId);
        if (pot) {
          pot.stage = Math.min(4, pot.stage + 1);
          if (pot.stage === 4) sound.playSuccess();
          this.renderFarmingToy(container, lang);
        }
      });
    });

    // Harvest handlers
    container.querySelectorAll(".btn-pot-harvest").forEach(b => {
      b.addEventListener("click", () => {
        sound.playSparkle();
        const potId = parseInt(b.dataset.pot);
        const pot = this.pots.find(p => p.id === potId);
        if (pot) {
          const herbData = this.herbsData.find(h => h.id === pot.herb);
          const bar = container.querySelector("#farm-status-bar");
          if (bar) {
            bar.innerHTML = `✨ <b>Harvested:</b> Pure ${herbData.name.en} Bioactives! Earned +50 Herbal Farming XP!`;
          }
          pot.stage = 0;
          setTimeout(() => this.renderFarmingToy(container, lang), 800);
        }
      });
    });

    container.querySelector("#btn-reset-farm").addEventListener("click", () => {
      sound.playClick();
      this.pots.forEach(p => p.stage = 0);
      this.renderFarmingToy(container, lang);
    });
  }

  // 4. Ayur-Chakravyuh: Grand IP Trivia Arena Game Show
  renderTriviaArena(container, lang) {
    const q = this.triviaQuestions[this.triviaIndex % this.triviaQuestions.length];

    let html = `
      <div class="glass-panel" style="padding:18px; border-radius:14px; border:2px solid rgba(168,85,247,0.5); background:radial-gradient(circle at top, rgba(30,41,59,0.95), rgba(15,23,42,0.98));">
        
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px;">
          <div>
            <h3 style="color:#c084fc; margin:0; font-size:1.15rem; font-weight:800; display:flex; align-items:center; gap:8px;">
              <span>⚔️</span>
              <span>${lang === 'hi' ? 'ज्ञान चक्रव्यूह: आयुर्वेदिक पेटेंट प्रश्नोत्तरी' : 'Ayur-Chakravyuh: Grand IP Trivia Arena'}</span>
            </h3>
            <div style="font-size:0.78rem; color:#cbd5e1;">Test your Ayurvedic IP & regulatory knowledge with lifelines and streak multipliers!</div>
          </div>

          <div style="display:flex; gap:10px; align-items:center;">
            <div style="font-size:0.85rem; font-weight:800; color:#fbbf24; background:rgba(245,158,11,0.2); padding:4px 12px; border-radius:10px; border:1px solid #f59e0b;">
              Score: <span id="trivia-score-disp">${this.triviaScore}</span>
            </div>
            <div style="font-size:0.85rem; font-weight:800; color:#34d399; background:rgba(16,185,129,0.2); padding:4px 12px; border-radius:10px; border:1px solid #10b981;">
              Streak: <span id="trivia-streak-disp">${this.triviaStreak}x</span>
            </div>
          </div>
        </div>

        <!-- Lifelines Bar -->
        <div style="display:flex; gap:8px; margin-bottom:14px; justify-content:center;">
          <button id="btn-life-eris" class="hud-btn emerald-glow" style="font-size:0.75rem; font-weight:700; ${!this.triviaLifelines.eris ? 'opacity:0.4; pointer-events:none;' : ''}">
            🪷 Ask Eris (Hint)
          </button>
          <button id="btn-life-fifty" class="hud-btn gold-glow" style="font-size:0.75rem; font-weight:700; ${!this.triviaLifelines.fifty ? 'opacity:0.4; pointer-events:none;' : ''}">
            ⚖️ Sakti 50:50
          </button>
          <button id="btn-life-freeze" class="hud-btn" style="font-size:0.75rem; font-weight:700; ${!this.triviaLifelines.freeze ? 'opacity:0.4; pointer-events:none;' : ''}">
            ⏱️ Freeze Timer
          </button>
        </div>

        <!-- Question Card -->
        <div style="background:rgba(2,6,23,0.85); border:2px solid rgba(168,85,247,0.4); border-radius:12px; padding:16px; margin-bottom:14px;">
          <div style="font-size:0.72rem; color:#c084fc; font-weight:800; margin-bottom:4px;">QUESTION ${(this.triviaIndex % this.triviaQuestions.length) + 1} OF ${this.triviaQuestions.length}</div>
          <div style="font-size:0.95rem; font-weight:800; color:#f8fafc; line-height:1.4;">${q.q}</div>
        </div>

        <!-- 4 Options Grid -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px;" id="trivia-options-grid">
          ${q.options.map((opt, idx) => `
            <button class="trivia-opt-btn" data-idx="${idx}" style="padding:12px 14px; border-radius:10px; font-size:0.82rem; font-weight:700; cursor:pointer; background:rgba(30,41,59,0.85); border:1px solid rgba(255,255,255,0.15); color:#f8fafc; text-align:left; transition:all 0.2s;">
              <span style="color:#c084fc; font-weight:900; margin-right:6px;">${['A', 'B', 'C', 'D'][idx]}.</span> ${opt}
            </button>
          `).join("")}
        </div>

        <!-- Feedback & Hint Box -->
        <div id="trivia-feedback-box" style="padding:10px 14px; background:rgba(15,23,42,0.8); border:1px solid rgba(255,255,255,0.1); border-radius:8px; font-size:0.8rem; color:#cbd5e1; min-height:45px; display:flex; align-items:center;">
          Choose an option above or use a lifeline!
        </div>

        <div style="margin-top:12px; display:flex; justify-content:flex-end;">
          <button id="btn-next-trivia" class="btn-primary" style="padding:8px 20px; font-size:0.82rem; font-weight:800; display:none;">
            Next Question ▶
          </button>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const optBtns = container.querySelectorAll(".trivia-opt-btn");
    const feedbackBox = container.querySelector("#trivia-feedback-box");
    const nextBtn = container.querySelector("#btn-next-trivia");

    // Option click
    optBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const chosen = parseInt(btn.dataset.idx);
        optBtns.forEach(b => b.style.pointerEvents = "none");

        if (chosen === q.correct) {
          sound.playSuccess();
          this.triviaStreak++;
          const pts = 100 * Math.min(5, this.triviaStreak);
          this.triviaScore += pts;
          btn.style.background = "rgba(16,185,129,0.6)";
          btn.style.borderColor = "#10b981";
          feedbackBox.innerHTML = `✅ <b style="color:#a7f3d0;">Correct!</b> +${pts} Points! (Streak: ${this.triviaStreak}x)`;
        } else {
          sound.playClick();
          this.triviaStreak = 0;
          btn.style.background = "rgba(239,68,68,0.6)";
          btn.style.borderColor = "#ef4444";
          optBtns[q.correct].style.background = "rgba(16,185,129,0.6)";
          optBtns[q.correct].style.borderColor = "#10b981";
          feedbackBox.innerHTML = `❌ <b style="color:#fca5a5;">Incorrect!</b> The correct answer was option ${['A', 'B', 'C', 'D'][q.correct]}.`;
        }

        container.querySelector("#trivia-score-disp").innerText = this.triviaScore;
        container.querySelector("#trivia-streak-disp").innerText = `${this.triviaStreak}x`;
        nextBtn.style.display = "inline-flex";
      });
    });

    nextBtn.addEventListener("click", () => {
      sound.playClick();
      this.triviaIndex++;
      this.renderTriviaArena(container, lang);
    });

    // Lifeline: Eris Hint
    container.querySelector("#btn-life-eris").addEventListener("click", () => {
      sound.playSparkle();
      this.triviaLifelines.eris = false;
      feedbackBox.innerHTML = `<span style="color:#fef08a;">${q.hint}</span>`;
      container.querySelector("#btn-life-eris").style.opacity = "0.4";
      container.querySelector("#btn-life-eris").style.pointerEvents = "none";
    });

    // Lifeline: 50:50
    container.querySelector("#btn-life-fifty").addEventListener("click", () => {
      sound.playHologram();
      this.triviaLifelines.fifty = false;
      let eliminated = 0;
      optBtns.forEach((b, idx) => {
        if (idx !== q.correct && eliminated < 2) {
          b.style.opacity = "0.2";
          b.style.pointerEvents = "none";
          eliminated++;
        }
      });
      feedbackBox.innerHTML = `⚖️ <b>Sakti RAG 50:50:</b> Eliminated 2 incorrect options!`;
      container.querySelector("#btn-life-fifty").style.opacity = "0.4";
      container.querySelector("#btn-life-fifty").style.pointerEvents = "none";
    });

    // Lifeline: Freeze
    container.querySelector("#btn-life-freeze").addEventListener("click", () => {
      sound.playSparkle();
      this.triviaLifelines.freeze = false;
      feedbackBox.innerHTML = `⏱️ <b>Timer Frozen:</b> Take your time to answer!`;
      container.querySelector("#btn-life-freeze").style.opacity = "0.4";
      container.querySelector("#btn-life-freeze").style.pointerEvents = "none";
    });
  }
  // 5. Prakriti Scanner & Tridosha Wheel Toy
  renderDoshaScanner(container, lang) {
    let html = `
      <div class="glass-panel" style="padding:18px; border-radius:14px; border:2px solid rgba(6,182,212,0.5); background:radial-gradient(circle at top, rgba(30,41,59,0.95), rgba(15,23,42,0.98));">
        
        <div style="margin-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px;">
          <h3 style="color:#67e8f9; font-size:1.15rem; font-weight:800; margin:0 0 4px 0; display:flex; align-items:center; gap:8px;">
            <span>☸️</span>
            <span>${lang === 'hi' ? 'त्रिदोष प्रकृति विश्लेषक एवं संतुलन चक्र' : 'Tridosha Diagnostic Wheel & Prakriti Scanner'}</span>
          </h3>
          <div style="font-size:0.8rem; color:#cbd5e1;">Explore your constitution (Vata, Pitta, Kapha) and discover balancing Ayurvedic botanicals:</div>
        </div>

        <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:18px;">
          
          <div style="display:flex; flex-direction:column; gap:12px; font-size:0.82rem;">
            <div>
              <div style="font-weight:800; color:#f8fafc; margin-bottom:4px;">1️⃣ Weather & Temperature Preference:</div>
              <select id="sel-dosha-weather" class="rag-input" style="font-size:0.8rem; padding:8px 10px;">
                <option value="vata">Dislike cold weather, prefer warmth (Vata)</option>
                <option value="pitta">Dislike hot weather, easily overheat (Pitta)</option>
                <option value="kapha">Dislike damp cold, tolerate all seasons well (Kapha)</option>
              </select>
            </div>

            <div>
              <div style="font-weight:800; color:#f8fafc; margin-bottom:4px;">2️⃣ Digestive Fire & Appetite (Agni):</div>
              <select id="sel-dosha-agni" class="rag-input" style="font-size:0.8rem; padding:8px 10px;">
                <option value="vata">Irregular, variable appetite (Vata)</option>
                <option value="pitta">Intense hunger, irritable if delayed (Pitta)</option>
                <option value="kapha">Slow, steady appetite, can skip meals easily (Kapha)</option>
              </select>
            </div>

            <div>
              <div style="font-weight:800; color:#f8fafc; margin-bottom:4px;">3️⃣ Mental Nature & Thinking Pattern:</div>
              <select id="sel-dosha-mind" class="rag-input" style="font-size:0.8rem; padding:8px 10px;">
                <option value="vata">Creative, fast thinker, quick to learn & forget (Vata)</option>
                <option value="pitta">Goal-oriented, sharp intellect, articulate leader (Pitta)</option>
                <option value="kapha">Calm, patient, loyal, excellent long-term memory (Kapha)</option>
              </select>
            </div>

            <button id="btn-calc-dosha" class="btn-primary" style="background:linear-gradient(135deg, #06b6d4, #0284c7); padding:10px; font-weight:800; box-shadow:0 0 20px rgba(6,182,212,0.4);">
              📊 Calculate Dosha Balance Wheel
            </button>
          </div>

          <div style="background:rgba(2,6,23,0.85); border:2px solid rgba(6,182,212,0.3); border-radius:12px; padding:16px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">
            <div id="dosha-wheel" style="width:120px; height:120px; border-radius:50%; background:conic-gradient(#38bdf8 0% 33%, #f87171 33% 66%, #34d399 66% 100%); border:4px solid rgba(255,255,255,0.3); box-shadow:0 0 25px rgba(6,182,212,0.4); margin-bottom:12px; transition:transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);"></div>

            <div id="dosha-breakdown" style="font-size:0.8rem; color:#cbd5e1; width:100%;">
              <div style="display:flex; justify-content:space-around; margin-bottom:8px; font-weight:700;">
                <span style="color:#38bdf8;">💨 Vata: <b id="d-vata">33%</b></span>
                <span style="color:#f87171;">🔥 Pitta: <b id="d-pitta">33%</b></span>
                <span style="color:#34d399;">🌊 Kapha: <b id="d-kapha">34%</b></span>
              </div>
              <div id="dosha-rec-box" style="padding:8px 12px; background:rgba(6,78,59,0.4); border-radius:8px; border:1px solid rgba(52,211,153,0.4); color:#a7f3d0; font-size:0.75rem; line-height:1.4;">
                🌿 <b>Balancing Herbs:</b> Ashwagandha (Vata), Haridra (Pitta), Tulsi & Maricha (Kapha).
              </div>
            </div>
          </div>

        </div>
      </div>
    `;

    container.innerHTML = html;

    const btnCalc = container.querySelector("#btn-calc-dosha");
    const dWheel = container.querySelector("#dosha-wheel");
    const dVata = container.querySelector("#d-vata");
    const dPitta = container.querySelector("#d-pitta");
    const dKapha = container.querySelector("#d-kapha");
    const dRec = container.querySelector("#dosha-rec-box");

    btnCalc.addEventListener("click", () => {
      sound.playSparkle();
      const w = container.querySelector("#sel-dosha-weather").value;
      const a = container.querySelector("#sel-dosha-agni").value;
      const m = container.querySelector("#sel-dosha-mind").value;

      let v = 20, p = 20, k = 20;
      [w, a, m].forEach(ans => {
        if (ans === "vata") v += 25;
        if (ans === "pitta") p += 25;
        if (ans === "kapha") k += 25;
      });

      const total = v + p + k;
      const vPct = Math.round((v / total) * 100);
      const pPct = Math.round((p / total) * 100);
      const kPct = 100 - vPct - pPct;

      dVata.innerText = `${vPct}%`;
      dPitta.innerText = `${pPct}%`;
      dKapha.innerText = `${kPct}%`;

      dWheel.style.background = `conic-gradient(#38bdf8 0% ${vPct}%, #f87171 ${vPct}% ${vPct + pPct}%, #34d399 ${vPct + pPct}% 100%)`;
      dWheel.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;

      let dominant = "Balanced Tridosha";
      let herbAdvice = "Triphala Churna & Amalaki for universal harmony.";
      if (vPct >= pPct && vPct >= kPct) {
        dominant = "💨 Vata Dominant (Air & Space)";
        herbAdvice = "Nourish with Ashwagandha, Brahmi & warm Sesame oil compounding.";
      } else if (pPct >= vPct && pPct >= kPct) {
        dominant = "🔥 Pitta Dominant (Fire & Water)";
        herbAdvice = "Cooling herbs: Haridra, Kutki, Saffron & Ghee (Ghrita) Anupana.";
      } else {
        dominant = "🌊 Kapha Dominant (Earth & Water)";
        herbAdvice = "Stimulating herbs: Tulsi, Maricha (Black pepper) & Honey (Madhu).";
      }

      dRec.innerHTML = `🌿 <b>${dominant}:</b> ${herbAdvice}`;
    });
  }

  // 6. Biopiracy Shield Defender Arcade Toy
  renderBiopiracyArcade(container, lang) {
    this.arcadeScore = 0;
    this.arcadeRunning = true;

    let html = `
      <div class="glass-panel" style="padding:18px; border-radius:14px; border:2px solid rgba(239,68,68,0.5); background:radial-gradient(circle at top, rgba(30,41,59,0.95), rgba(15,23,42,0.98));">
        
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px;">
          <div>
            <h3 style="color:#f87171; margin:0; font-size:1.15rem; font-weight:800; display:flex; align-items:center; gap:8px;">
              <span>⚡</span>
              <span>TKDL Biopiracy Shield Defender Toy</span>
            </h3>
            <div style="font-size:0.78rem; color:#cbd5e1;">Zap incoming foreign biopiracy claims using the TKDL Ancient Knowledge Shield!</div>
          </div>
          <div style="font-size:1.3rem; font-weight:900; color:#fbbf24; background:rgba(245,158,11,0.2); padding:4px 14px; border-radius:12px; border:1px solid #f59e0b;" id="arcade-score-disp">Score: 0</div>
        </div>

        <div id="arcade-arena" style="height:240px; background:radial-gradient(circle at center, #1e1b4b 0%, #030712 100%); border:2px solid rgba(239,68,68,0.4); border-radius:10px; position:relative; overflow:hidden; cursor:crosshair; box-shadow:0 0 25px rgba(239,68,68,0.2);">
          <div style="position:absolute; bottom:8px; left:50%; transform:translateX(-50%); font-size:2.4rem; opacity:0.9;">🏛️</div>
          <div style="position:absolute; bottom:2px; left:50%; transform:translateX(-50%); font-size:0.7rem; color:#fef08a; font-weight:800; white-space:nowrap; letter-spacing:1px;">TKDL HERITAGE VAULT</div>
        </div>

        <div style="margin-top:12px; display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; color:#94a3b8;">
          <span>💡 Tap or click floating foreign patent claims to revoke them with ancient prior art!</span>
          <button id="btn-restart-arcade" class="hud-btn" style="padding:6px 14px; font-weight:700;">🔄 Restart Game</button>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const arena = container.querySelector("#arcade-arena");
    const scoreDisp = container.querySelector("#arcade-score-disp");

    const targets = [
      { text: "US Turmeric Patent 5,401,504", icon: "🟡" },
      { text: "EPO Neem Patent EP0436257", icon: "🍃" },
      { text: "Basmati Rice Monopoly", icon: "🌾" },
      { text: "Cow Urine Patent US 6,410,059", icon: "🥛" },
      { text: "Ayurvedic Ashwagandha Monopoly", icon: "🌿" }
    ];

    const spawnTarget = () => {
      if (!this.arcadeRunning || !arena) return;
      const t = targets[Math.floor(Math.random() * targets.length)];
      const targetDiv = document.createElement("div");
      targetDiv.className = "biopiracy-bubble";
      targetDiv.style.position = "absolute";
      targetDiv.style.top = "0px";
      targetDiv.style.left = `${Math.random() * 75 + 5}%`;
      targetDiv.style.padding = "6px 10px";
      targetDiv.style.background = "rgba(239,68,68,0.35)";
      targetDiv.style.border = "2px solid #ef4444";
      targetDiv.style.borderRadius = "20px";
      targetDiv.style.fontSize = "0.75rem";
      targetDiv.style.color = "#fca5a5";
      targetDiv.style.fontWeight = "800";
      targetDiv.style.cursor = "pointer";
      targetDiv.style.boxShadow = "0 0 15px rgba(239,68,68,0.6)";
      targetDiv.style.transition = "transform 0.1s";
      targetDiv.innerHTML = `<span>${t.icon}</span> <b>${t.text.split(" ")[0]} Claim</b>`;

      let posY = 0;
      const fallSpeed = 1.2 + Math.random() * 0.8;
      const interval = setInterval(() => {
        posY += fallSpeed;
        targetDiv.style.top = `${posY}px`;

        if (posY >= 180) {
          clearInterval(interval);
          if (arena.contains(targetDiv)) {
            arena.removeChild(targetDiv);
          }
        }
      }, 30);

      targetDiv.addEventListener("click", () => {
        sound.playShieldZap();
        clearInterval(interval);
        this.arcadeScore += 100;
        if (scoreDisp) scoreDisp.innerText = `Score: ${this.arcadeScore}`;

        targetDiv.style.background = "rgba(16,185,129,0.6)";
        targetDiv.style.borderColor = "#10b981";
        targetDiv.style.color = "#a7f3d0";
        targetDiv.innerHTML = `⚡ <b>REVOKED BY TKDL!</b>`;
        setTimeout(() => {
          if (arena.contains(targetDiv)) arena.removeChild(targetDiv);
        }, 350);
      });

      arena.appendChild(targetDiv);
    };

    this.arcadeInterval = setInterval(spawnTarget, 1600);

    container.querySelector("#btn-restart-arcade").addEventListener("click", () => {
      sound.playClick();
      this.arcadeScore = 0;
      if (scoreDisp) scoreDisp.innerText = `Score: 0`;
      arena.innerHTML = `
        <div style="position:absolute; bottom:8px; left:50%; transform:translateX(-50%); font-size:2.4rem; opacity:0.9;">🏛️</div>
        <div style="position:absolute; bottom:2px; left:50%; transform:translateX(-50%); font-size:0.7rem; color:#fef08a; font-weight:800; white-space:nowrap; letter-spacing:1px;">TKDL HERITAGE VAULT</div>
      `;
    });
  }

  // 7. SIH 1-Minute Visual Presentation Deck
  renderPitchDeck(container, lang) {
    const slides = [
      {
        title: "1. The Big Problem: Biopiracy & Lost Heritage",
        icon: "🚨",
        badge: "Why We Built This",
        color: "#ef4444",
        summary: "Foreign companies have repeatedly tried to steal and patent traditional Indian knowledge (like Turmeric wound healing and Neem pesticides).",
        points: [
          "📜 India has 5,000+ years of classical Ayurvedic healing wisdom written in ancient palm-leaf scriptures.",
          "🏴‍☠️ Foreign corporations file patents claiming traditional home remedies as their 'new invention'.",
          "⚖️ Young researchers, doctors, and startup founders don't understand complex patent laws (like Section 3p and Section 3e)."
        ],
        visual: `<div style="display:flex; justify-content:space-around; align-items:center; background:rgba(239,68,68,0.15); border:1px solid #ef4444; border-radius:10px; padding:12px; margin:10px 0;">
          <div style="text-align:center;"><div style="font-size:2.2rem;">🌿</div><div style="font-size:0.75rem; font-weight:700; color:#cbd5e1;">Ancient Turmeric / Neem</div></div>
          <div style="font-size:1.6rem; color:#f87171;">➡️ 🏴‍☠️ ➡️</div>
          <div style="text-align:center;"><div style="font-size:2.2rem;">🚫</div><div style="font-size:0.75rem; font-weight:700; color:#f87171;">Foreign Patent Theft!</div></div>
        </div>`
      },
      {
        title: "2. The Solution: IP Sakti Path (The Game)",
        icon: "🎮",
        badge: "Gamified Education & Awareness",
        color: "#f59e0b",
        summary: "Instead of boring 500-page legal books, we teach Ayurvedic Intellectual Property through a fun, interactive web game & toy simulator!",
        points: [
          "🕹️ 7 Action-Packed Levels: From compounding raw herbs in a clinic to winning international patent tribunals.",
          "⚗️ Hands-on Toy Simulator: Mortar & pestle grinding, herbal alchemy, dosha balance scanner, and biopiracy arcade.",
          "🏆 Official Competence Certificate: Downloadable high-res certificate with QR verification."
        ],
        visual: `<div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:6px; margin:10px 0; text-align:center;">
          <div style="background:rgba(245,158,11,0.2); border:1px solid #f59e0b; border-radius:8px; padding:8px;"><div style="font-size:1.6rem;">🩺</div><div style="font-size:0.68rem; font-weight:700;">5 Roles</div></div>
          <div style="background:rgba(16,185,129,0.2); border:1px solid #10b981; border-radius:8px; padding:8px;"><div style="font-size:1.6rem;">🗺️</div><div style="font-size:0.68rem; font-weight:700;">7 Levels</div></div>
          <div style="background:rgba(6,182,212,0.2); border:1px solid #06b6d4; border-radius:8px; padding:8px;"><div style="font-size:1.6rem;">⚗️</div><div style="font-size:0.68rem; font-weight:700;">Toy Lab</div></div>
          <div style="background:rgba(168,85,247,0.2); border:1px solid #a855f7; border-radius:8px; padding:8px;"><div style="font-size:1.6rem;">🎓</div><div style="font-size:0.68rem; font-weight:700;">Certificate</div></div>
        </div>`
      },
      {
        title: "3. Dual AI Companion System",
        icon: "🤖",
        badge: "AI Pair Programming & Mentorship",
        color: "#34d399",
        summary: "Two AI characters mentor the player with completely distinct personalities and purposes:",
        points: [
          "⚖️ Sakti Sahayak (Legal Oracle): Strict RAG-based legal expert. Retrieves real statutory sections (Patents Act, Biodiversity Act, Rule 158B) with zero hallucinations.",
          "🪷 Eris (Wisdom Spirit): 3D glowing companion spirit with palm-leaf manuscript. Gives emotional reactions, cultural Sanskrit shlokas, and builds a 0–100% friendship bond."
        ],
        visual: `<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:10px 0;">
          <div style="background:rgba(6,182,212,0.18); border:1px solid #06b6d4; border-radius:8px; padding:10px; text-align:center;">
            <div style="font-size:1.8rem;">⚖️</div>
            <div style="font-weight:800; color:#67e8f9; font-size:0.8rem;">Sakti Sahayak</div>
            <div style="font-size:0.68rem; color:#cbd5e1;">Strict Legal Law & Exact Citations</div>
          </div>
          <div style="background:rgba(16,185,129,0.18); border:1px solid #10b981; border-radius:8px; padding:10px; text-align:center;">
            <div style="font-size:1.8rem;">🪷</div>
            <div style="font-weight:800; color:#34d399; font-size:0.8rem;">Eris (Spirit)</div>
            <div style="font-size:0.68rem; color:#cbd5e1;">Wisdom, Sanskrit Lore & Friendship Bond</div>
          </div>
        </div>`
      },
      {
        title: "4. The 4 Toy-Like Minigames in Action",
        icon: "⚗️",
        badge: "Interactive Awareness Toys",
        color: "#a855f7",
        summary: "Hands-on visual toys that make learning Ayurveda fun for children, students, and practitioners:",
        points: [
          "1. Stone Kharal Mortar & Pestle: Grind real herbs with sound effects and discover Ayurvedic Bhavana potentiation.",
          "2. Divya Herbarium: Interactive 3D plant cards with Sanskrit verses and landmark biopiracy cases.",
          "3. Tridosha Wheel Scanner: Visual diagnostic wheel for Vata, Pitta, and Kapha constitution.",
          "4. Biopiracy Shield Defender: Arcade game to zap foreign patent monopolies with TKDL prior art!"
        ],
        visual: `<div style="display:flex; justify-content:space-between; background:rgba(168,85,247,0.15); border:1px solid #a855f7; border-radius:8px; padding:10px; font-size:0.75rem; text-align:center;">
          <div><div style="font-size:1.4rem;">🥣</div><b>Kharal Toy</b></div>
          <div><div style="font-size:1.4rem;">🌿</div><b>Herbarium</b></div>
          <div><div style="font-size:1.4rem;">☸️</div><b>Dosha Wheel</b></div>
          <div><div style="font-size:1.4rem;">⚡</div><b>Arcade Zap</b></div>
        </div>`
      },
      {
        title: "5. Real World Impact & SIH Mission",
        icon: "🇮🇳",
        badge: "National Relevance & Sovereignty",
        color: "#fbbf24",
        summary: "Empowering India's AYUSH ecosystem, farmers, researchers, and startups with digital legal literacy.",
        points: [
          "👨‍🌾 Herbal Farmers: Understand NBA Form 1 & get 4% fair royalties under Access and Benefit Sharing (ABS).",
          "🔬 Startups & Formulators: Learn Section 3(e) synergy thresholds so patents don't get rejected.",
          "🌍 Exporters: Clear USFDA DSHEA 21 CFR §101.93 and European Union THMPD 30-year regulations.",
          "🇮🇳 Defend India's Sovereignty: Ensure traditional Ayurvedic knowledge remains protected in the public domain!"
        ],
        visual: `<div style="background:linear-gradient(135deg, rgba(245,158,11,0.25), rgba(16,185,129,0.25)); border:1px solid #fbbf24; border-radius:10px; padding:12px; text-align:center;">
          <div style="font-size:1.2rem; font-weight:800; color:#fef08a;">✨ Protecting Ancient Wisdom, Empowering Modern Innovation ✨</div>
          <div style="font-size:0.72rem; color:#cbd5e1; margin-top:4px;">Built with 🪷 for Smart India Hackathon 2026</div>
        </div>`
      }
    ];

    let currentSlide = 0;

    const renderSlide = () => {
      const s = slides[currentSlide];
      let html = `
        <div class="glass-panel" style="padding:18px; border-radius:14px; border:2px solid ${s.color}; background:rgba(15,23,42,0.98); box-shadow:0 0 35px rgba(0,0,0,0.8);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span class="rag-stat-pill" style="background:${s.color}22; color:${s.color}; border-color:${s.color}; font-weight:900;">${s.badge} (Slide ${currentSlide + 1}/5)</span>
            <div style="display:flex; gap:8px;">
              <button id="btn-prev-slide" class="hud-btn" style="padding:6px 12px; font-weight:700;" ${currentSlide === 0 ? 'disabled style="opacity:0.4;"' : ''}>◀ Prev</button>
              <button id="btn-next-slide" class="hud-btn" style="padding:6px 14px; font-weight:800; background:${s.color}44; border-color:${s.color}; color:#fff;" ${currentSlide === slides.length - 1 ? 'disabled style="opacity:0.4;"' : ''}>Next ▶</button>
            </div>
          </div>

          <h3 style="color:${s.color}; font-size:1.25rem; font-weight:900; margin:0 0 8px 0; display:flex; align-items:center; gap:10px;">
            <span style="font-size:1.8rem;">${s.icon}</span>
            <span>${s.title}</span>
          </h3>

          <p style="font-size:0.88rem; color:#cbd5e1; margin-bottom:12px; font-weight:600; line-height:1.45;">
            ${s.summary}
          </p>

          ${s.visual}

          <div style="display:flex; flex-direction:column; gap:8px; margin-top:12px;">
            ${s.points.map(p => `
              <div style="background:rgba(2,6,23,0.75); border-radius:8px; padding:10px 12px; font-size:0.82rem; color:#e2e8f0; line-height:1.4; border-left:3px solid ${s.color};">
                ${p}
              </div>
            `).join("")}
          </div>
        </div>
      `;

      container.innerHTML = html;

      container.querySelector("#btn-prev-slide")?.addEventListener("click", () => {
        sound.playClick();
        if (currentSlide > 0) {
          currentSlide--;
          renderSlide();
        }
      });

      container.querySelector("#btn-next-slide")?.addEventListener("click", () => {
        sound.playClick();
        if (currentSlide < slides.length - 1) {
          currentSlide++;
          renderSlide();
        }
      });
    };

    renderSlide();
  }

  // 8. Interactive Ayurvedic IPR & Regulatory Knowledge Graph
  renderKnowledgeGraph(container, lang) {
    const nodes = [
      // Column 1: Botanicals
      {
        id: "herb_turmeric",
        label: "🌿 Haridra (Turmeric)",
        col: 0,
        type: "botanical",
        color: "#fbbf24",
        connectedIds: ["comp_charaka", "comp_afi", "reg_sec3p", "reg_sec3e", "int_gratk", "int_dshea"],
        citations: "US Pat 5,401,504 Revocation; TKDL CSIR Dossier; Section 3(p) Patents Act.",
        rationale: "Classical wound healing use codified in Charaka Samhita. Barred from generic patents under Sec 3(p). When combined with Piperine, exhibits 2000% synergy under Sec 3(e).",
        portal: { name: "TKDL Prior Art Vault", url: "https://www.tkdl.res.in" }
      },
      {
        id: "herb_neem",
        label: "🍃 Nimba (Neem)",
        col: 0,
        type: "botanical",
        color: "#34d399",
        connectedIds: ["comp_sushruta", "comp_afi", "reg_sec3p", "int_gratk", "int_thmpd"],
        citations: "EPO Patent EP0436257 Revocation; Section 3(p) Patents Act; EU THMPD.",
        rationale: "Ancient antimicrobial & insecticidal usage. Revoked multinational EPO patent after proving traditional Indian usage.",
        portal: { name: "Indian Patent Office", url: "https://ipindia.gov.in" }
      },
      {
        id: "herb_ashwa",
        label: "🌾 Ashwagandha",
        col: 0,
        type: "botanical",
        color: "#a78bfa",
        connectedIds: ["comp_charaka", "comp_sharang", "reg_sec3d", "reg_rule158b", "int_dshea"],
        citations: "Rule 158B Drugs & Cosmetics Rules; USFDA DSHEA 21 CFR §101.93; Sec 3(d) Patents Act.",
        rationale: "Premier Balya & Rasayana adaptogen. Standardized withanolide extract nano-carriers require therapeutic efficacy proof under Sec 3(d).",
        portal: { name: "Ministry of AYUSH", url: "https://ayush.gov.in" }
      },
      {
        id: "herb_kutki",
        label: "🏔️ Kutki (Picrorhiza)",
        col: 0,
        type: "botanical",
        color: "#f87171",
        connectedIds: ["comp_charaka", "reg_bda_abs", "int_nagoya", "int_gratk"],
        citations: "Biological Diversity Act 2002/2023 Form 1 & Form 3; Nagoya Protocol on ABS.",
        rationale: "Endangered Himalayan hepatoprotective herb. Commercial procurement mandates NBA Form 1 filing and 4% fair ABS royalties to local tribes.",
        portal: { name: "National Biodiversity Authority", url: "http://nbaindia.org" }
      },
      {
        id: "herb_pepper",
        label: "🌶️ Maricha (Black Pepper)",
        col: 0,
        type: "botanical",
        color: "#fb7185",
        connectedIds: ["comp_sharang", "reg_sec3e", "reg_rule158b", "int_dshea"],
        citations: "Section 3(e) Patents Act 1970; Sharangdhara Samhita Trikatu Yogavahi.",
        rationale: "Contains 98% pure Piperine. Acts as non-obvious bio-availability amplifier overcoming Section 3(e) mere admixture bar.",
        portal: { name: "IPO Patent Filing Portal", url: "https://ipindia.gov.in" }
      },
      {
        id: "herb_saffron",
        label: "🌸 Kashmiri Saffron",
        col: 0,
        type: "botanical",
        color: "#f43f5e",
        connectedIds: ["comp_charaka", "reg_gi_act", "int_madrid"],
        citations: "Geographical Indications of Goods Act 1999 (GI Application No. 635); Madrid System.",
        rationale: "Protected Geographical Indication (GI) terroir in Kashmir Valley. Private commercial trademark monopolies prohibited.",
        portal: { name: "GI Registry of India", url: "https://ipindia.gov.in" }
      },

      // Column 2: Classical Compendia
      {
        id: "comp_charaka",
        label: "📜 Charaka Samhita",
        col: 1,
        type: "compendia",
        color: "#38bdf8",
        connectedIds: ["herb_turmeric", "herb_ashwa", "herb_kutki", "herb_saffron", "reg_sec3p", "reg_rule158b", "int_gratk"],
        citations: "First Schedule, Drugs and Cosmetics Act 1940 (Text #1); CSIR TKDL Concordance.",
        rationale: "Foundational Ayurvedic treatise on internal medicine (Kaya Chikitsa) and Rasayana compounding. Prior art proof against foreign biopiracy.",
        portal: { name: "TKDL Classical Texts", url: "https://www.tkdl.res.in" }
      },
      {
        id: "comp_sushruta",
        label: "📜 Sushruta Samhita",
        col: 1,
        type: "compendia",
        color: "#06b6d4",
        connectedIds: ["herb_neem", "reg_sec3p", "int_gratk"],
        citations: "First Schedule, Drugs and Cosmetics Act 1940 (Text #2); Vrana-Ropana Chapters.",
        rationale: "Ancient surgical & wound healing compendium. Codifies wound debridement and botanical antimicrobial formulas.",
        portal: { name: "TKDL Portal", url: "https://www.tkdl.res.in" }
      },
      {
        id: "comp_sharang",
        label: "📜 Sharangdhara Samhita",
        col: 1,
        type: "compendia",
        color: "#0284c7",
        connectedIds: ["herb_pepper", "herb_ashwa", "reg_sec3e", "int_budapest"],
        citations: "First Schedule, Drugs and Cosmetics Act 1940; Asava-Arishta Fermentation Rules.",
        rationale: "Codifies pharmaceutical compounding, Bhavana potentiation, and natural microbial self-generated alcohol fermentation.",
        portal: { name: "Ministry of AYUSH Pharmacopoeia", url: "https://ayush.gov.in" }
      },
      {
        id: "comp_afi",
        label: "📖 Ayurvedic Formulary (AFI)",
        col: 1,
        type: "compendia",
        color: "#0369a1",
        connectedIds: ["herb_turmeric", "herb_neem", "reg_sec3p", "reg_rule158b", "reg_fssai"],
        citations: "AFI Part I, II & III; Drugs and Cosmetics Act 1940 Section 3(a).",
        rationale: "Statutory national formulary listing standardized classical generic ASU recipes recognized by State Licensing Authorities.",
        portal: { name: "AYUSH Pharmacopoeia Commission", url: "https://pcim.gov.in" }
      },

      // Column 3: Indian Statutory Regimes
      {
        id: "reg_sec3p",
        label: "⚖️ Section 3(p) TKDL Bar",
        col: 2,
        type: "national",
        color: "#eab308",
        connectedIds: ["herb_turmeric", "herb_neem", "comp_charaka", "comp_sushruta", "comp_afi", "int_gratk"],
        citations: "Section 3(p), Indian Patents Act 1970; Patent Rules 2024.",
        rationale: "Prohibits patenting of traditional knowledge or duplicate aggregation of known botanical properties.",
        portal: { name: "IPO Portal", url: "https://ipindia.gov.in" }
      },
      {
        id: "reg_sec3e",
        label: "⚡ Section 3(e) Synergy",
        col: 2,
        type: "national",
        color: "#f59e0b",
        connectedIds: ["herb_turmeric", "herb_pepper", "comp_sharang", "int_dshea"],
        citations: "Section 3(e), Patents Act 1970; Pharmaceutical Patent Guidelines 2014.",
        rationale: "Requires quantitative experimental data proving synergistic bio-enhancement exceeding the sum of components.",
        portal: { name: "IPO InPASS Search", url: "https://ipindia.gov.in" }
      },
      {
        id: "reg_sec3d",
        label: "🧬 Section 3(d) Efficacy",
        col: 2,
        type: "national",
        color: "#d97706",
        connectedIds: ["herb_ashwa", "comp_charaka", "int_dshea"],
        citations: "Section 3(d), Patents Act 1970; Novartis AG v. Union of India (2013).",
        rationale: "Mandates enhanced therapeutic efficacy for new derivatives, nano-formulations, or extract delivery systems.",
        portal: { name: "IPO Case Law Precedents", url: "https://ipindia.gov.in" }
      },
      {
        id: "reg_bda_abs",
        label: "🌿 BDA 2024 & ABS (Form 1/3)",
        col: 2,
        type: "national",
        color: "#10b981",
        connectedIds: ["herb_kutki", "int_nagoya", "int_gratk"],
        citations: "Biological Diversity Act 2002 (as amended 2023); Biodiversity Rules 2024; Form 1 & Form 3.",
        rationale: "Mandates prior NBA approval for IPR filings and 3-5% Access and Benefit Sharing royalties to indigenous communities.",
        portal: { name: "NBA ABS e-Portal", url: "http://nbaindia.org" }
      },
      {
        id: "reg_rule158b",
        label: "🏥 D&C Rule 158B & Sched T",
        col: 2,
        type: "national",
        color: "#059669",
        connectedIds: ["herb_ashwa", "comp_charaka", "comp_afi", "int_thmpd"],
        citations: "Drugs and Cosmetics Rules 1945, Rule 158B & Schedule T GMP.",
        rationale: "Requires pilot safety/efficacy data for Patent/Proprietary drugs and statutory heavy metal safety limits.",
        portal: { name: "AYUSH e-Aushadhi", url: "https://ayush.gov.in" }
      },
      {
        id: "reg_fssai",
        label: "🥗 FSSAI Ayurveda-Aahar",
        col: 2,
        type: "national",
        color: "#16a34a",
        connectedIds: ["comp_afi", "int_dshea"],
        citations: "FSSAI (Ayurveda Aahar) Regulations 2022; Gazette F. No. Std/SP-05/Aahar.",
        rationale: "Governs foods prepared per Schedule A compendia. Excludes synthetic isolates and prohibits disease claims.",
        portal: { name: "FSSAI FoSCoS", url: "https://foscos.fssai.gov.in" }
      },
      {
        id: "reg_gi_act",
        label: "🏷️ GI of Goods Act 1999",
        col: 2,
        type: "national",
        color: "#65a30d",
        connectedIds: ["herb_saffron", "int_madrid"],
        citations: "Geographical Indications of Goods (Registration & Protection) Act, 1999.",
        rationale: "Community-held intellectual property protecting regional agricultural and herbal heritage from commercial dilution.",
        portal: { name: "GI Registry India", url: "https://ipindia.gov.in" }
      },

      // Column 4: International Treaties & Regimes
      {
        id: "int_gratk",
        label: "🌐 WIPO GRATK Treaty 2024",
        col: 3,
        type: "international",
        color: "#8b5cf6",
        connectedIds: ["herb_turmeric", "herb_neem", "herb_kutki", "comp_charaka", "reg_sec3p", "reg_bda_abs"],
        citations: "WIPO Treaty on Intellectual Property, Genetic Resources and Associated Traditional Knowledge (May 2024).",
        rationale: "Mandates global patent applicants to disclose the country of origin and indigenous source of genetic resources/TK.",
        portal: { name: "WIPO GRATK Treaty Portal", url: "https://www.wipo.int/treaties/en/ip/gratk/" }
      },
      {
        id: "int_nagoya",
        label: "🌍 Nagoya Protocol & CBD",
        col: 3,
        type: "international",
        color: "#a855f7",
        connectedIds: ["herb_kutki", "reg_bda_abs"],
        citations: "Nagoya Protocol on Access to Genetic Resources and the Fair and Equitable Sharing of Benefits (2010).",
        rationale: "International legal framework for fair and equitable benefit sharing arising from the utilization of biological resources.",
        portal: { name: "CBD Access and Benefit-Sharing Clearing-House", url: "https://absch.cbd.int" }
      },
      {
        id: "int_budapest",
        label: "🦠 Budapest Treaty (Microbial)",
        col: 3,
        type: "international",
        color: "#c084fc",
        connectedIds: ["comp_sharang"],
        citations: "Budapest Treaty on the Deposit of Microorganisms (1977); MTCC Chandigarh.",
        rationale: "Requires mandatory deposit of novel fermentation micro-organisms at recognized International Depositary Authorities.",
        portal: { name: "WIPO Budapest Guide", url: "https://www.wipo.int" }
      },
      {
        id: "int_dshea",
        label: "🇺🇸 USFDA DSHEA §101.93",
        col: 3,
        type: "international",
        color: "#38bdf8",
        connectedIds: ["herb_turmeric", "herb_ashwa", "herb_pepper", "reg_sec3e", "reg_fssai"],
        citations: "US Dietary Supplement Health & Education Act 1994; 21 CFR §101.93.",
        rationale: "Allows structure/function claims in the US market with mandatory 30-day FDA notification and prominent disclaimer box.",
        portal: { name: "US FDA Dietary Supplements", url: "https://www.fda.gov" }
      },
      {
        id: "int_thmpd",
        label: "🇪🇺 EU THMPD (30-Year Rule)",
        col: 3,
        type: "international",
        color: "#60a5fa",
        connectedIds: ["herb_neem", "reg_rule158b"],
        citations: "Directive 2004/24/EC; EMA Committee on Herbal Medicinal Products (HMPC).",
        rationale: "Simplified European registration requiring 30 years of traditional medicinal evidence, including 15 years within the EU.",
        portal: { name: "European Medicines Agency (EMA)", url: "https://www.ema.europa.eu" }
      },
      {
        id: "int_madrid",
        label: "🌍 Madrid System (Trademarks)",
        col: 3,
        type: "international",
        color: "#3b82f6",
        connectedIds: ["herb_saffron", "reg_gi_act"],
        citations: "Madrid Protocol (Nice Classification Classes 5 & 30); WIPO Geneva.",
        rationale: "Centralized international trademark protection across 130+ contracting countries through single filing.",
        portal: { name: "WIPO Madrid Filing", url: "https://www.wipo.int/madrid/en/" }
      }
    ];

    let selectedNode = nodes[0];

    const renderGraphUI = () => {
      const colLabels = [
        "🌿 Sacred Botanicals",
        "📜 Classical Compendia",
        "⚖️ Indian Regimes (2024)",
        "🌐 International Treaties"
      ];

      let html = `
        <div class="glass-panel" style="padding:16px; border-radius:14px; border:2px solid rgba(168,85,247,0.5); background:radial-gradient(circle at top, rgba(30,41,59,0.95), rgba(15,23,42,0.98));">
          
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px;">
            <div>
              <h3 style="color:#c084fc; font-size:1.15rem; font-weight:900; margin:0; display:flex; align-items:center; gap:8px;">
                <span>🕸️</span>
                <span>Interactive Ayurvedic IPR & Regulatory Knowledge Graph</span>
              </h3>
              <div style="font-size:0.75rem; color:#cbd5e1; margin-top:2px;">
                Click any node to trace statutory pathways linking <b>Botanicals $\leftrightarrow$ Ancient Compendia $\leftrightarrow$ Patents/ABS Acts $\leftrightarrow$ Global Treaties</b>:
              </div>
            </div>
            <span class="rag-stat-pill" style="font-size:0.72rem; color:#c084fc; border-color:#a855f7;">${nodes.length} Grounded Nodes</span>
          </div>

          <!-- 4 Columns Graph Layout -->
          <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:14px;">
            ${[0, 1, 2, 3].map(colIdx => `
              <div style="background:rgba(2,6,23,0.7); border-radius:8px; padding:10px; border:1px solid rgba(255,255,255,0.08); display:flex; flex-direction:column; gap:6px;">
                <div style="font-size:0.72rem; font-weight:800; color:#cbd5e1; margin-bottom:4px; text-transform:uppercase; letter-spacing:0.5px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:4px;">
                  ${colLabels[colIdx]}
                </div>
                ${nodes.filter(n => n.col === colIdx).map(n => {
                  const isSel = (n.id === selectedNode.id);
                  const isConn = selectedNode.connectedIds.includes(n.id);
                  let borderStyle = isSel ? `2px solid ${n.color}` : (isConn ? `1px dashed ${n.color}` : '1px solid rgba(255,255,255,0.1)');
                  let bgStyle = isSel ? `${n.color}33` : (isConn ? `${n.color}15` : 'rgba(30,41,59,0.7)');
                  let glowStyle = (isSel || isConn) ? `box-shadow:0 0 12px ${n.color}55;` : '';
                  return `
                    <button class="kg-node-btn" data-id="${n.id}" style="padding:6px 8px; border-radius:6px; font-size:0.72rem; font-weight:700; cursor:pointer; text-align:left; color:#f8fafc; border:${borderStyle}; background:${bgStyle}; ${glowStyle} transition:all 0.15s; display:flex; justify-content:space-between; align-items:center;">
                      <span>${n.label}</span>
                      ${isConn ? `<span style="font-size:0.65rem; color:${n.color};">🔗</span>` : ''}
                    </button>
                  `;
                }).join("")}
              </div>
            `).join("")}
          </div>

          <!-- Inspector Details Card -->
          <div id="kg-inspector-card" style="background:rgba(15,23,42,0.98); border:2px solid ${selectedNode.color}; border-radius:10px; padding:14px; box-shadow:0 0 25px ${selectedNode.color}33;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:6px;">
              <div style="font-size:1.1rem; font-weight:900; color:${selectedNode.color}; display:flex; align-items:center; gap:8px;">
                <span>${selectedNode.label}</span>
              </div>
              <a href="${selectedNode.portal.url}" target="_blank" class="hud-btn" style="padding:4px 10px; font-size:0.72rem; font-weight:800; border-color:${selectedNode.color}; color:#fff; text-decoration:none;">
                🏛️ ${selectedNode.portal.name} ↗
              </a>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1.2fr; gap:12px; font-size:0.78rem;">
              <div style="background:rgba(2,6,23,0.7); padding:8px 10px; border-radius:6px;">
                <b style="color:#67e8f9;">📜 Exact Statutes & Precedents:</b>
                <div style="font-size:0.75rem; color:#cbd5e1; margin-top:3px; line-height:1.4;">${selectedNode.citations}</div>
              </div>
              <div style="background:rgba(2,6,23,0.7); padding:8px 10px; border-radius:6px;">
                <b style="color:#fef08a;">⚖️ Legal & Technical Rationale:</b>
                <div style="font-size:0.75rem; color:#cbd5e1; margin-top:3px; line-height:1.4;">${selectedNode.rationale}</div>
              </div>
            </div>

            <div style="margin-top:8px; display:flex; gap:6px; align-items:center; flex-wrap:wrap; font-size:0.7rem; color:#94a3b8;">
              <span>🔗 <b>Connected Statutory Pathways:</b></span>
              ${selectedNode.connectedIds.map(cid => {
                const connNode = nodes.find(n => n.id === cid);
                return connNode ? `<span style="background:${connNode.color}22; color:${connNode.color}; border:1px solid ${connNode.color}55; padding:2px 8px; border-radius:12px; font-weight:700;">${connNode.label}</span>` : '';
              }).join(" ")}
            </div>
          </div>

        </div>
      `;

      container.innerHTML = html;

      container.querySelectorAll(".kg-node-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          sound.playClick();
          const targetNode = nodes.find(n => n.id === btn.dataset.id);
          if (targetNode) {
            selectedNode = targetNode;
            renderGraphUI();
          }
        });
      });
    };

    renderGraphUI();
  }
}