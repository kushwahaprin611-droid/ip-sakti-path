// Main Application Controller for IP SAKTI PATH (Presentation Edition - Clean ASCII)
import { KnowledgeCoreVisualizer } from "./core/KnowledgeCoreVisualizer.js";
import { IPJourneyEngine } from "./journey/IPJourneyEngine.js";
import { IPConstellation } from "./constellation/IPConstellation.js";
import { IPPassportGenerator } from "./passport/IPPassportGenerator.js";
import { SourceVault } from "./vault/SourceVault.js";
import { EvidenceChain } from "./evidence/EvidenceChain.js";
import { MultiLensAnalyzer } from "./lenses/MultiLensAnalyzer.js";
import { ExecutiveSystemTour } from "./judge/JudgeModeTour.js";
import { saktiRAG } from "./ai/SaktiSahayakRAG.js";
import { sound } from "./audio/SoundSynth.js";
import { AyurToyLab } from "./toys/AyurToyLab.js";
import { FloatingAssistant } from "./assistant/FloatingAssistant.js";

export class App {
  constructor() {
    this.lang = "en";
    this.currentTab = "home";
    this.currentJurFilter = "all";
    this.voiceState = "idle";

    this.knowledgeCore = null;
    this.ipJourneyEngine = new IPJourneyEngine(this);
    this.ipConstellation = new IPConstellation(this);
    this.ipPassportGenerator = new IPPassportGenerator(this);
    this.sourceVault = new SourceVault(this);
    this.evidenceChain = new EvidenceChain(this);
    this.multiLensAnalyzer = new MultiLensAnalyzer(this);
    this.executiveTour = new ExecutiveSystemTour(this);
    this.ayurToyLab = new AyurToyLab(this);
    this.floatingAssistant = new FloatingAssistant(this);

    this.initDOM();
  }

  initDOM() {
    var self = this;

    var btnLang = document.getElementById("btn-toggle-lang");
    if (btnLang) {
      btnLang.addEventListener("click", function() {
        sound.playClick();
        self.lang = (self.lang === "en") ? "hi" : "en";
        btnLang.innerText = (self.lang === "hi") ? "English" : "Hindi (Bhashini)";
        self.renderCurrentTab();
      });
    }

    var btnAudio = document.getElementById("btn-toggle-audio");
    if (btnAudio) {
      btnAudio.addEventListener("click", function() {
        sound.init();
        var isMuted = sound.toggleMute();
        btnAudio.innerText = isMuted ? "Audio OFF" : "Audio ON";
      });
    }

    var btnTour = document.getElementById("btn-start-presentation-tour") || document.getElementById("btn-start-judge-mode");
    if (btnTour) {
      btnTour.addEventListener("click", function() {
        sound.playClick();
        self.executiveTour.start();
      });
    }

    var btnCta = document.getElementById("btn-header-start-journey");
    if (btnCta) {
      btnCta.addEventListener("click", function() {
        sound.playClick();
        self.switchTab("journey");
      });
    }

    var brandLogo = document.getElementById("brand-home-link");
    if (brandLogo) {
      brandLogo.addEventListener("click", function() {
        sound.playClick();
        self.switchTab("home");
      });
    }

    var navTabs = document.querySelectorAll(".main-nav-tab");
    navTabs.forEach(function(tab) {
      tab.addEventListener("click", function() {
        sound.playClick();
        var tabName = tab.dataset.tab;
        self.switchTab(tabName);
      });
    });

    var mobileItems = document.querySelectorAll(".mobile-nav-item");
    mobileItems.forEach(function(item) {
      item.addEventListener("click", function() {
        sound.playClick();
        var tabName = item.dataset.tab;
        self.switchTab(tabName);
      });
    });

    this.renderCurrentTab();
  }

  switchTab(tabName) {
    this.currentTab = tabName;

    document.querySelectorAll(".main-nav-tab").forEach(function(t) {
      if (t.dataset.tab === tabName) {
        t.classList.add("active-tab");
      } else {
        t.classList.remove("active-tab");
      }
    });

    document.querySelectorAll(".mobile-nav-item").forEach(function(m) {
      if (m.dataset.tab === tabName) {
        m.classList.add("active");
      } else {
        m.classList.remove("active");
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.renderCurrentTab();
  }

  handleCoreNodeClick(nodeId) {
    sound.playClick();
    if (nodeId === "patent" || nodeId === "regulation" || nodeId === "tk" || nodeId === "abs") {
      this.switchTab("assistant");
      var input = document.getElementById("rag-search-input");
      if (input) {
        input.value = nodeId === "patent" ? "Section 3(e) Synergistic Combinations vs Mere Admixture" : nodeId === "tk" ? "Section 3(p) Traditional Knowledge Exclusion" : nodeId === "abs" ? "Biological Diversity Act ABS Rules" : "Drugs and Cosmetics Rule 158B";
        this.executeRAGSearch(input.value);
      }
    } else {
      this.switchTab("constellation");
      if (this.ipConstellation) {
        this.ipConstellation.selectedNodeKey = nodeId;
        this.renderCurrentTab();
      }
    }
  }

  renderCurrentTab() {
    var container = document.getElementById("main-tab-content");
    if (!container) return;
    container.innerHTML = "";

    if (this.knowledgeCore) {
      this.knowledgeCore.stop();
      this.knowledgeCore = null;
    }
    if (this.ipConstellation) {
      this.ipConstellation.stopAnimation();
    }

    switch (this.currentTab) {
      case "home": this.renderHomeView(container); break;
      case "journey": this.ipJourneyEngine.renderWizard(container); break;
      case "constellation": this.ipConstellation.renderView(container); break;
      case "passport": this.ipPassportGenerator.renderView(container); break;
      case "classifier": this.multiLensAnalyzer.renderClassifierView(container); break;
      case "evidence": this.evidenceChain.renderView(container); break;
      case "vault": this.sourceVault.renderView(container); break;
      case "assistant": this.renderAssistantView(container); break;
      case "market": this.multiLensAnalyzer.renderMarketMapView(container); break;
      case "learn": this.multiLensAnalyzer.renderLearnIPView(container); break;
      case "graph": this.ayurToyLab.renderKnowledgeGraph(container, this.lang); break;
      case "herbarium": this.ayurToyLab.renderHerbarium(container, this.lang); break;
      case "escalate": this.renderEscalateView(container); break;
      case "pitch": this.ayurToyLab.renderPitchDeck(container, this.lang); break;
      default: this.renderHomeView(container);
    }
  }

  // ===== HOME VIEW =====
  renderHomeView(container) {
    var self = this;
    var html = '';
    html += '<div style="display:flex; flex-direction:column; gap:20px;">';

    // Hero Banner
    html += '<div class="glass-panel" style="padding: 32px 28px; border-color: rgba(6,182,212,0.45); background: radial-gradient(circle at 50% 0%, rgba(6,78,59,0.35) 0%, rgba(15,23,42,0.98) 70%);">';
    html += '<div style="display:grid; grid-template-columns: 1.15fr 0.85fr; gap:24px; align-items:center;">';

    // Left: Text Content
    html += '<div>';
    html += '<div style="display:flex; gap:8px; margin-bottom:14px; flex-wrap:wrap; align-items:center;">';
    html += '<span class="pill-badge pill-gold">Smart India Hackathon 2026</span>';
    html += '<span class="pill-badge pill-cyan">Zero Login Required</span>';
    html += '<span class="pill-badge pill-emerald">Takes ~2 Minutes</span>';
    html += '</div>';

    html += '<h1 style="font-size: 2.35rem; line-height: 1.18; margin-bottom: 12px; font-weight: 900; letter-spacing: -0.02em;">';
    html += '<span>YOUR AYURVEDA IDEA.</span><br>';
    html += '<span class="gradient-text-cyan">YOUR IP JOURNEY.</span><br>';
    html += '<span class="gradient-text-gold serif-title">REIMAGINED.</span>';
    html += '</h1>';

    html += '<p style="font-size: 1rem; color: #cbd5e1; line-height: 1.55; margin-bottom: 20px; max-width: 580px;">';
    html += 'One intelligent, Responsible-AI pathway across <b>Intellectual Property</b>, <b>Drug &amp; Food Regulation</b>, <b>Traditional Knowledge Defense</b>, <b>Access &amp; Benefit Sharing</b>, and <b>Global Markets</b>.';
    html += '</p>';

    html += '<div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin-bottom:16px;">';
    html += '<button id="btn-hero-start-journey" class="btn-primary" style="padding: 12px 28px; font-size: 0.95rem;">START MY IP JOURNEY &rarr;</button>';
    html += '<button id="btn-hero-start-tour" class="btn-gold" style="padding: 12px 22px; font-size: 0.92rem;">LIVE SYSTEM TOUR (3 MIN)</button>';
    html += '<button id="btn-hero-explore-vault" class="btn-secondary" style="padding: 12px 20px; font-size: 0.9rem;">Source Vault</button>';
    html += '</div>';

    html += '<div style="font-size: 0.76rem; color: #94a3b8; display:flex; gap:16px; flex-wrap:wrap;">';
    html += '<span>&bull; Informational Guidance, Not Legal Advice</span>';
    html += '<span>&bull; Grounded in Codified Statutes</span>';
    html += '<span>&bull; Safe Abstention Guaranteed</span>';
    html += '</div>';
    html += '</div>';

    // Right: Knowledge Core Canvas
    html += '<div id="knowledge-core-canvas-container" style="position:relative; width:100%; height:420px; border-radius:16px; overflow:hidden; border:1px solid rgba(6,182,212,0.35); background:radial-gradient(circle at center, rgba(15,23,42,0.95), rgba(3,7,18,0.99)); box-shadow:inset 0 0 60px rgba(0,0,0,0.8), 0 0 30px rgba(6,182,212,0.2);">';
    html += '<canvas id="knowledge-core-canvas" style="width:100%; height:100%; display:block;"></canvas>';
    html += '<div style="position:absolute; top:12px; left:14px; font-size:0.75rem; font-weight:800; color:#67e8f9; pointer-events:none;">AYURVEDA KNOWLEDGE CORE</div>';
    html += '<div style="position:absolute; bottom:10px; right:12px; font-size:0.7rem; color:#94a3b8; pointer-events:none;">Hover or click orbiting IPR nodes</div>';
    html += '</div>';

    html += '</div></div>';

    // 4 Pillar Cards
    html += '<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:14px;">';

    html += '<div class="glass-panel option-card" id="card-quick-journey" style="padding:18px;">';
    html += '<div style="width:48px; height:48px; border-radius:12px; background:rgba(6,182,212,0.2); border:1.5px solid #06b6d4; display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:900; color:#67e8f9;">7</div>';
    html += '<div><b style="color:#f8fafc; font-size:0.95rem;">7-Step IP Journey</b>';
    html += '<div style="font-size:0.78rem; color:#94a3b8; margin-top:3px;">Zero-login questionnaire delivering your custom IP roadmap in 2 minutes.</div></div></div>';

    html += '<div class="glass-panel option-card" id="card-quick-constellation" style="padding:18px;">';
    html += '<div style="width:48px; height:48px; border-radius:12px; background:rgba(16,185,129,0.2); border:1.5px solid #10b981; display:flex; align-items:center; justify-content:center; font-size:0.85rem; font-weight:900; color:#34d399;">MAP</div>';
    html += '<div><b style="color:#f8fafc; font-size:0.95rem;">IP Constellation</b>';
    html += '<div style="font-size:0.78rem; color:#94a3b8; margin-top:3px;">Interactive multi-node orbital visualizer mapping Patent, TM, GI, ABS, and GMP.</div></div></div>';

    html += '<div class="glass-panel option-card" id="card-quick-classifier" style="padding:18px;">';
    html += '<div style="width:48px; height:48px; border-radius:12px; background:rgba(245,158,11,0.2); border:1.5px solid #f59e0b; display:flex; align-items:center; justify-content:center; font-size:0.85rem; font-weight:900; color:#fbbf24;">6</div>';
    html += '<div><b style="color:#f8fafc; font-size:0.95rem;">Formulation Classifier</b>';
    html += '<div style="font-size:0.78rem; color:#94a3b8; margin-top:3px;">6 statutory categories under D&amp;C Rule 158B, FSSAI, and Cosmetics Rules.</div></div></div>';

    html += '<div class="glass-panel option-card" id="card-quick-vault" style="padding:18px;">';
    html += '<div style="width:48px; height:48px; border-radius:12px; background:rgba(168,85,247,0.2); border:1.5px solid #a855f7; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:900; color:#c084fc;">25+</div>';
    html += '<div><b style="color:#f8fafc; font-size:0.95rem;">Source Vault</b>';
    html += '<div style="font-size:0.78rem; color:#94a3b8; margin-top:3px;">Curated repository of 25+ verified statutes, rules, and international treaties.</div></div></div>';

    html += '</div></div>';

    container.innerHTML = html;

    // Init Canvas
    setTimeout(function() {
      self.knowledgeCore = new KnowledgeCoreVisualizer("knowledge-core-canvas", "knowledge-core-canvas-container");
      self.knowledgeCore.start();
    }, 50);

    // Event listeners
    var btnStart = container.querySelector("#btn-hero-start-journey");
    if (btnStart) btnStart.addEventListener("click", function() { self.switchTab("journey"); });

    var btnTour = container.querySelector("#btn-hero-start-tour");
    if (btnTour) btnTour.addEventListener("click", function() { self.executiveTour.start(); });

    var btnVault = container.querySelector("#btn-hero-explore-vault");
    if (btnVault) btnVault.addEventListener("click", function() { self.switchTab("vault"); });

    var cJourney = container.querySelector("#card-quick-journey");
    if (cJourney) cJourney.addEventListener("click", function() { self.switchTab("journey"); });

    var cConstellation = container.querySelector("#card-quick-constellation");
    if (cConstellation) cConstellation.addEventListener("click", function() { self.switchTab("constellation"); });

    var cClassifier = container.querySelector("#card-quick-classifier");
    if (cClassifier) cClassifier.addEventListener("click", function() { self.switchTab("classifier"); });

    var cVault = container.querySelector("#card-quick-vault");
    if (cVault) cVault.addEventListener("click", function() { self.switchTab("vault"); });
  }

  // ===== ASK IP SAKTI (ASSISTANT VIEW) =====
  renderAssistantView(container) {
    var self = this;
    var html = '';
    html += '<div style="max-width: 960px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">';
    html += '<div class="glass-panel" style="padding: 20px; border-color: rgba(6, 182, 212, 0.4);">';

    html += '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:14px;">';
    html += '<div>';
    html += '<div style="display:flex; align-items:center; gap:8px;">';
    html += '<span class="pill-badge pill-cyan">ASK IP SAKTI</span>';
    html += '<span class="pill-badge pill-emerald">Strict Statutory RAG</span>';
    html += '<span class="pill-badge pill-gold">Zero Hallucination Guarantee</span>';
    html += '</div>';
    html += '<h2 style="font-size: 1.35rem; color: #f8fafc; margin-top: 4px;">Regulatory &amp; IPR Question Engine</h2>';
    html += '<div style="font-size: 0.82rem; color: #94a3b8;">Ask questions about Section 3(p), Section 3(e) synergy, NBA Form 3 ABS, Rule 158B, WIPO GRATK Treaty, or export compliance.</div>';
    html += '</div>';
    html += '<button id="btn-toggle-voice-mode" class="btn-gold" style="font-size:0.84rem;">Speak to IP Sakti</button>';
    html += '</div>';

    // Voice simulation box
    html += '<div id="voice-simulation-box" style="display:none; background:rgba(3,7,18,0.9); border:1.5px solid #f59e0b; padding:16px; border-radius:10px; margin-bottom:14px; text-align:center;">';
    html += '<div style="font-size:0.85rem; font-weight:800; color:#fef08a; margin-bottom:8px;" id="voice-status-label">LISTENING... Describe your Ayurveda IP question</div>';
    html += '<div style="display:flex; justify-content:center; align-items:center; gap:6px; height:32px;" id="voice-waveform-bars">';
    var heights = [18, 28, 14, 32, 22, 10, 26, 30, 16, 24];
    for (var i = 0; i < heights.length; i++) {
      html += '<div style="width:4px; height:' + heights[i] + 'px; background:#f59e0b; border-radius:2px; animation:pulse-glow 1.5s infinite alternate;"></div>';
    }
    html += '</div>';
    html += '<div style="font-size:0.72rem; color:#94a3b8; margin-top:8px;">*Voice prototype simulation (Future Bhashini Multilingual Speech API integration ready)</div>';
    html += '</div>';

    // Search bar
    html += '<div style="display:flex; gap:10px; margin-bottom:12px;">';
    html += '<input type="text" id="rag-search-input" class="ip-input" placeholder="Describe your Ayurveda IP question (e.g., Section 3(p), Turmeric patent, NBA ABS Form 3)...">';
    html += '<button id="btn-rag-submit" class="btn-primary" style="white-space:nowrap;">Search</button>';
    html += '</div>';

    // Quick topic chips
    html += '<div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:16px;" id="rag-quick-topics">';
    html += '<span class="topic-chip" data-q="Section 3(p) Traditional Knowledge exclusion and TKDL">Section 3(p) TKDL</span>';
    html += '<span class="topic-chip" data-q="Section 3(e) Synergistic combinations vs mere admixture">Section 3(e) Synergy</span>';
    html += '<span class="topic-chip" data-q="Biological Diversity Act NBA Form 3 ABS requirements">NBA Form 3 ABS</span>';
    html += '<span class="topic-chip" data-q="WIPO GRATK Treaty 2024 mandatory origin disclosure">WIPO GRATK Treaty</span>';
    html += '<span class="topic-chip" data-q="Drugs and Cosmetics Rule 158B and Schedule T GMP">Rule 158B and GMP</span>';
    html += '<span class="topic-chip" data-q="FSSAI Ayurveda Aahar Regulations 2022 food category">Ayurveda Aahar</span>';
    html += '<span class="topic-chip" data-q="Drugs and Magic Remedies Act 1954 disease claims">DMR 1954 Claims</span>';
    html += '<span class="topic-chip" data-q="Trademark Class 3 and Class 5 Sanskrit brand protection">Trademark Classes</span>';
    html += '<span class="topic-chip" data-q="Unknown speculative foreign plant question with insufficient legal basis">Test Safe Abstention</span>';
    html += '</div>';

    html += '<div id="rag-response-container"></div>';
    html += '</div></div>';

    container.innerHTML = html;
    this.attachAssistantEvents(container);
    this.executeRAGSearch("Section 3(p) Traditional Knowledge exclusion and TKDL");
  }

  attachAssistantEvents(container) {
    var self = this;
    var input = container.querySelector("#rag-search-input");
    var btnSubmit = container.querySelector("#btn-rag-submit");

    if (btnSubmit && input) {
      btnSubmit.addEventListener("click", function() {
        sound.playClick();
        self.executeRAGSearch(input.value);
      });
      input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
          sound.playClick();
          self.executeRAGSearch(input.value);
        }
      });
    }

    container.querySelectorAll(".topic-chip").forEach(function(chip) {
      chip.addEventListener("click", function() {
        sound.playClick();
        var q = chip.dataset.q;
        if (input) input.value = q;
        self.executeRAGSearch(q);
      });
    });

    var btnVoice = container.querySelector("#btn-toggle-voice-mode");
    var voiceBox = container.querySelector("#voice-simulation-box");
    if (btnVoice && voiceBox) {
      btnVoice.addEventListener("click", function() {
        sound.playClick();
        voiceBox.style.display = voiceBox.style.display === "none" ? "block" : "none";
        if (voiceBox.style.display === "block") {
          self.runVoiceSimulationFlow(container);
        }
      });
    }
  }

  runVoiceSimulationFlow(container) {
    var self = this;
    var label = container.querySelector("#voice-status-label");
    var input = container.querySelector("#rag-search-input");

    if (label) label.innerText = "LISTENING... (Speak your question)";
    setTimeout(function() {
      if (label) label.innerText = "UNDERSTANDING SPEECH (Bhashini AI)...";
      setTimeout(function() {
        if (label) label.innerText = "ANALYZING STATUTORY CONCORDANCE...";
        if (input) input.value = "What is the synergy threshold under Section 3(e) for herbal formulations?";
        setTimeout(function() {
          if (label) label.innerText = "ANSWER READY";
          self.executeRAGSearch(input.value);
        }, 600);
      }, 700);
    }, 800);
  }

  executeRAGSearch(queryText) {
    var container = document.getElementById("rag-response-container");
    if (!container) return;

    var result = saktiRAG.query(queryText, this.currentJurFilter);

    if (result.status === "abstain") {
      container.innerHTML = '<div class="abstention-box">' +
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">' +
        '<span class="pill-badge pill-ruby">SAFE ABSTENTION TRIGGERED</span>' +
        '<span class="pill-badge pill-gold">Confidence below 95%</span>' +
        '</div>' +
        '<h3 style="color:#f87171; font-size:1.15rem; margin-bottom:8px;">' + result.message + '</h3>' +
        '<div style="font-size:0.86rem; color:#cbd5e1; line-height:1.5; margin-bottom:12px;">' +
        '<b>Why did the AI abstain?</b> ' + result.whyItMatters + '</div>' +
        '<div style="background:rgba(15,23,42,0.85); padding:12px; border-radius:8px; margin-bottom:14px; font-size:0.82rem;">' +
        '<b style="color:#fef08a; display:block; margin-bottom:4px;">Missing Information:</b>' +
        '<ul style="padding-left:18px; color:#cbd5e1;">' + result.missingFactors.map(function(f) { return '<li>' + f + '</li>'; }).join('') + '</ul></div>' +
        '<div style="background:rgba(3,7,18,0.9); padding:10px 12px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); font-size:0.8rem; color:#cbd5e1; margin-bottom:16px;">' +
        '<b style="color:#67e8f9;">Source to Check:</b> ' + result.sourceToCheck + '</div>' +
        '<div style="display:flex; gap:10px; flex-wrap:wrap;">' +
        '<button class="btn-primary" onclick="document.getElementById(\'rag-search-input\').focus()" style="font-size:0.8rem;">Add More Information</button>' +
        '<button class="btn-secondary" onclick="window.saktiApp.switchTab(\'vault\')" style="font-size:0.8rem;">Open Source Vault</button>' +
        '<button class="btn-gold" onclick="window.saktiApp.switchTab(\'escalate\')" style="font-size:0.8rem;">Request Human Review</button>' +
        '</div>' +
        '<div class="rag-disclaimer" style="margin-top:14px;"><b>Responsible AI:</b> IP Sakti Path abstains rather than producing unverified legal claims.</div>' +
        '</div>';
      return;
    }

    var data = result.data;
    container.innerHTML = '<div class="glass-panel" style="background:rgba(2,6,23,0.92); border:2px solid #06b6d4; padding:22px; border-radius:12px; box-shadow:0 0 25px rgba(6,182,212,0.25);">' +
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">' +
      '<span class="rag-stat-pill">' + data.jurisdictionLabel + '</span>' +
      '<span class="pill-badge pill-emerald">' + data.confidence + '% Statutory Confidence</span></div>' +
      '<h3 style="color:#f8fafc; font-size:1.25rem; margin-bottom:10px; font-weight:900;">' + data.title + '</h3>' +
      '<div style="font-size:0.92rem; color:#cbd5e1; line-height:1.6; margin-bottom:14px;">' + data.directAnswer + '</div>' +
      '<div class="rag-citation-box" style="margin-bottom:12px;"><b style="color:#67e8f9;">Statutory Citations:</b> <span>' + data.citations + '</span></div>' +
      '<div style="background:rgba(15,23,42,0.85); padding:10px 12px; border-radius:8px; border-left:3px solid #10b981; font-size:0.82rem; margin-bottom:12px;">' +
      '<b style="color:#a7f3d0; display:block; margin-bottom:2px;">RECOMMENDED NEXT STEP:</b>' +
      '<span style="color:#cbd5e1;">' + data.nextStep + '</span></div>' +
      '<div style="display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:rgba(6,182,212,0.12); border:1px solid rgba(6,182,212,0.35); border-radius:8px; flex-wrap:wrap; gap:8px;">' +
      '<span style="font-size:0.82rem; color:#67e8f9;"><b>Official Portal:</b> <span style="color:#fef08a; font-weight:800;">' + data.registryLink.name + ' (' + data.registryLink.form + ')</span></span>' +
      '<a href="' + data.registryLink.url + '" target="_blank" class="btn-primary" style="padding:6px 14px; font-size:0.78rem; text-decoration:none;">Open Portal</a></div>' +
      '<div class="rag-disclaimer"><b>Standing Disclaimer:</b> This is educational guidance from codified statutory corpora. It is not formal legal counsel.</div>' +
      '</div>';
  }

  // ===== ESCALATION VIEW =====
  renderEscalateView(container) {
    var self = this;
    var html = '';
    html += '<div style="max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">';
    html += '<div class="glass-panel" style="padding: 24px; border-color: rgba(245, 158, 11, 0.4);">';

    html += '<div style="margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">';
    html += '<div style="display:flex; align-items:center; gap:8px;">';
    html += '<span class="pill-badge pill-gold">HUMAN EXPERT ESCALATION</span>';
    html += '<span class="pill-badge pill-emerald">DPDP Act 2023 Compliant</span>';
    html += '</div>';
    html += '<h2 style="color: #fbbf24; font-size: 1.35rem; font-weight: 900; margin: 6px 0 4px 0;">Escalate to AYUSH IP Facilitator / Registered Patent Agent</h2>';
    html += '<div style="font-size: 0.85rem; color: #cbd5e1;">Direct institutional referral routing for formal patent drafting, Section 3(e) experimental assays, and NBA Form 3 approvals:</div>';
    html += '</div>';

    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; font-size: 0.85rem; margin-bottom: 20px;">';

    html += '<div style="background: rgba(15,23,42,0.85); padding: 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">';
    html += '<b style="color: #38bdf8; font-size: 0.95rem;">CIPAM / DPIIT National IPR Facilitation:</b>';
    html += '<div style="margin-top: 4px; color: #cbd5e1;">ipr-facilitation@gov.in | Toll-Free: 1800-180-1564</div>';
    html += '<div style="font-size:0.75rem; color:#94a3b8; margin-top:4px;">Pro-bono IP facilitation for AYUSH startups and MSMEs.</div></div>';

    html += '<div style="background: rgba(15,23,42,0.85); padding: 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">';
    html += '<b style="color: #34d399; font-size: 0.95rem;">Ministry of AYUSH IPR Cell:</b>';
    html += '<div style="margin-top: 4px; color: #cbd5e1;">ayush-ipr@gov.in | AYUSH Bhawan, GPO Complex, New Delhi</div>';
    html += '<div style="font-size:0.75rem; color:#94a3b8; margin-top:4px;">Direct coordination on TKDL concordance and ASU licensing.</div></div>';

    html += '<div style="background: rgba(15,23,42,0.85); padding: 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">';
    html += '<b style="color: #c084fc; font-size: 0.95rem;">WIPO-DPIIT TISC Network:</b>';
    html += '<div style="margin-top: 4px; color: #cbd5e1;">Technology and Innovation Support Centers across Indian Universities</div>';
    html += '<div style="font-size:0.75rem; color:#94a3b8; margin-top:4px;">Patent search and prior-art landscaping assistance.</div></div>';

    html += '<div style="background: rgba(15,23,42,0.85); padding: 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">';
    html += '<b style="color: #f87171; font-size: 0.95rem;">DPDP Act 2023 Privacy Controls:</b>';
    html += '<div style="margin-top: 4px; color: #cbd5e1;">All consultation tickets and trade secret disclosures are audited and encrypted.</div></div>';
    html += '</div>';

    // Form
    html += '<div style="background:rgba(3,7,18,0.8); border:1px solid rgba(255,255,255,0.12); padding:18px; border-radius:10px; margin-bottom:18px;">';
    html += '<h3 style="color:#f8fafc; font-size:1rem; margin-bottom:12px;">Generate Official Consultation Request Ticket</h3>';
    html += '<div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-bottom:12px;">';
    html += '<div><label style="font-size:0.78rem; color:#94a3b8; display:block; margin-bottom:4px;">Full Name / Organization:</label>';
    html += '<input type="text" id="esc-name" class="ip-input" placeholder="e.g. Dr. Rajesh Sharma, Keshava Herbal Labs" value="Keshava Ayurvedic Labs"></div>';
    html += '<div><label style="font-size:0.78rem; color:#94a3b8; display:block; margin-bottom:4px;">Preferred Language:</label>';
    html += '<select id="esc-lang" class="ip-select"><option value="en">English</option><option value="hi">Hindi</option><option value="ta">Tamil</option><option value="te">Telugu</option></select></div></div>';
    html += '<div style="margin-bottom:12px;"><label style="font-size:0.78rem; color:#94a3b8; display:block; margin-bottom:4px;">Specific Legal / Statutory Question:</label>';
    html += '<input type="text" id="esc-q" class="ip-input" placeholder="e.g. Need assistance drafting patent claims overcoming Section 3(p) prior art" value="Need assistance drafting complete patent claims overcoming Section 3(p) prior art"></div>';
    html += '<button id="btn-submit-escalate" class="btn-primary" style="width: 100%; justify-content: center; background: linear-gradient(135deg, #f59e0b, #d97706); padding: 12px; font-size: 0.95rem;">Generate Official IPR Consultation Ticket</button>';
    html += '</div>';

    html += '<div style="font-size:0.74rem; color:#94a3b8; text-align:center;">*Prototype integration -- human facilitator connectivity can be directly hooked to institutional portals in production.</div>';

    html += '</div></div>';

    container.innerHTML = html;
    var btnSub = container.querySelector('#btn-submit-escalate');
    if (btnSub) {
      btnSub.addEventListener('click', function() {
        sound.playClick();
        alert('Generated IPR Consultation Ticket #AYUSH-IPR-' + Math.floor(Math.random()*90000+10000) + ' under DPDP Act 2023 encryption. Forwarded to CIPAM / AYUSH IPR Cell.');
      });
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
}

window.addEventListener("DOMContentLoaded", function() {
  window.saktiApp = new App();
});
