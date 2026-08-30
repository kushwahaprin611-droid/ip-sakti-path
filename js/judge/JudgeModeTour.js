// Executive System Tour: 11-Step 3-Minute Presentation Walkthrough (Clean ASCII)

export class ExecutiveSystemTour {
  constructor(app) {
    this.app = app;
    this.currentStepIndex = 0;
    this.isActive = false;

    this.steps = [
      {
        stepNum: "01 / 11",
        tab: "home",
        title: "Product Vision and AI Knowledge Core",
        badge: "01. Architecture",
        speech: "Welcome to IP SAKTI PATH -- the AI-powered statutory navigation system for Ayurvedic innovation. We bridge traditional knowledge, modern science, and future AI governance.",
        takeaway: "Core Principle: Authoritative guidance grounded in codified statutes -- not speculative legal advice.",
        action: function(app) { app.switchTab('home'); }
      },
      {
        stepNum: "02 / 11",
        tab: "journey",
        title: "Zero-Login 7-Step Formulation Wizard",
        badge: "02. Fast Assessment",
        speech: "Innovators enter botanical parameters in under 2 minutes without forced login. We load the demo: Herbal Hair and Scalp Oil with Amla, Bhringraj, and Neem.",
        takeaway: "Captures product type, knowledge origin, biological sourcing, and target jurisdictions seamlessly.",
        action: function(app) {
          app.switchTab('journey');
          if (app.ipJourneyEngine) {
            app.ipJourneyEngine.loadDemoScenario();
            app.ipJourneyEngine.setStep(2);
            app.renderCurrentTab();
          }
        }
      },
      {
        stepNum: "03 / 11",
        tab: "classifier",
        title: "6-Category Statutory Classification",
        badge: "03. Legal Classification",
        speech: "Our engine maps formulations into the 6 statutory Indian pathways: Classical ASU Drug, Proprietary ASU Drug (Rule 158B), Ayurveda-Aahar (FSSAI), Phytopharmaceutical, or Cosmetic.",
        takeaway: "Prevents fatal regulatory misclassification before manufacturing or commercialization.",
        action: function(app) { app.switchTab('classifier'); }
      },
      {
        stepNum: "04 / 11",
        tab: "journey",
        title: "AI Research Room Multi-Agent Synthesis",
        badge: "04. Multi-Agent Pipeline",
        speech: "Specialized AI agents verify Section 3(p) prior art, BDA Access and Benefit Sharing (ABS), and international treaties across codified legal corpora.",
        takeaway: "Simulates complete statutory multi-lens analysis in seconds with verifiable audit logs.",
        action: function(app) {
          app.switchTab('journey');
          if (app.ipJourneyEngine) {
            app.ipJourneyEngine.setStep(7);
            app.renderCurrentTab();
            app.ipJourneyEngine.runAIResearchSimulation(document.getElementById('main-tab-content'));
          }
        }
      },
      {
        stepNum: "05 / 11",
        tab: "constellation",
        title: "The IP Constellation Map",
        badge: "05. Interactive Visualizer",
        speech: "The signature visual experience: The IP Constellation. The innovation orbits with Patent, Trademark, GI, Copyright, Design, Trade Secret, TK, ABS, and Regulation nodes.",
        takeaway: "Color-coded status indicators (Green = Relevant, Yellow = Review, White = Not Relevant, Red = Specialist Review) with inspector drawers.",
        action: function(app) { app.switchTab('constellation'); }
      },
      {
        stepNum: "06 / 11",
        tab: "constellation",
        title: "Traditional Knowledge Lens (Section 3p)",
        badge: "06. TKDL Defense",
        speech: "Classical formulations belong to the public domain. Our system checks concordance with India's 4.4 Lakh TKDL dossiers to prevent wrongful biopiracy patents.",
        takeaway: "Guides innovators toward patentable synergistic modifications rather than non-patentable classical recipes.",
        action: function(app) {
          app.switchTab('constellation');
          if (app.ipConstellation) {
            app.ipConstellation.selectedNodeKey = 'tk';
            app.renderCurrentTab();
          }
        }
      },
      {
        stepNum: "07 / 11",
        tab: "constellation",
        title: "Biological Resources and ABS Lens (BDA 2024)",
        badge: "07. Biodiversity Ethics",
        speech: "Under the Biological Diversity Act, commercial use of Indian bio-resources mandates NBA Form 3 approval and sharing 3 to 5 percent benefits with local tribal communities.",
        takeaway: "Ensures legal compliance with State Biodiversity Boards and sovereign biodiversity treaties.",
        action: function(app) {
          app.switchTab('constellation');
          if (app.ipConstellation) {
            app.ipConstellation.selectedNodeKey = 'abs';
            app.renderCurrentTab();
          }
        }
      },
      {
        stepNum: "08 / 11",
        tab: "market",
        title: "Global Market Map and Strict Jurisdictional Split",
        badge: "08. Global Export",
        speech: "Never confusing Indian and foreign legal systems. In the US, it is a Dietary Supplement (DSHEA 1994); in Europe, a Traditional Herbal (THMPD); in Geneva, WIPO GRATK mandatory disclosure.",
        takeaway: "Market-by-market regulatory matrix for seamless international export strategies.",
        action: function(app) { app.switchTab('market'); }
      },
      {
        stepNum: "09 / 11",
        tab: "evidence",
        title: "5-Hop Statutory Evidence Chain",
        badge: "09. Responsible AI",
        speech: "Zero hallucination guarantee: Every AI guidance claim is traceable through a 5-point chain: AI Claim, Official Source, Section Provision, Plain Explanation, Action.",
        takeaway: "Includes Responsible AI Safe Abstention when statutory evidence is insufficient.",
        action: function(app) { app.switchTab('evidence'); }
      },
      {
        stepNum: "10 / 11",
        tab: "passport",
        title: "Official IP Sakti Passport and Printable Blueprint",
        badge: "10. Deliverable Roadmap",
        speech: "The user receives an official IP Sakti Passport with Source Coverage Score (88.5%), AI Confidence Index (91.4%), uncertainty checklist, and 1-click printable PDF report.",
        takeaway: "Tangible, actionable roadmap with step-by-step milestones for immediate execution.",
        action: function(app) { app.switchTab('passport'); }
      },
      {
        stepNum: "11 / 11",
        tab: "escalate",
        title: "Institutional Referral and DPDP Compliance",
        badge: "11. Real-World Impact",
        speech: "Innovators can generate DPDP-encrypted consultation tickets routed directly to CIPAM, Ministry of AYUSH IPR Cells, and registered Patent Agents.",
        takeaway: "Complete ecosystem loop from initial idea to protected global innovation.",
        action: function(app) { app.switchTab('escalate'); }
      }
    ];
  }

  start() {
    this.isActive = true;
    this.currentStepIndex = 0;
    this.executeCurrentStep();
  }

  stop() {
    this.isActive = false;
    var bar = document.getElementById('presentation-tour-hud');
    if (bar) bar.remove();
  }

  next() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.executeCurrentStep();
    } else {
      this.stop();
    }
  }

  prev() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.executeCurrentStep();
    }
  }

  executeCurrentStep() {
    if (!this.isActive) return;
    var step = this.steps[this.currentStepIndex];
    if (step && step.action) {
      step.action(this.app);
    }
    this.renderHUD();
  }

  renderHUD() {
    if (!this.isActive) return;
    var self = this;
    var hud = document.getElementById('presentation-tour-hud');
    if (!hud) {
      hud = document.createElement('div');
      hud.id = 'presentation-tour-hud';
      hud.style.position = 'sticky';
      hud.style.top = '10px';
      hud.style.zIndex = '9999';
      hud.style.marginBottom = '16px';
      var mainContainer = document.querySelector('header');
      if (mainContainer && mainContainer.parentNode) {
        mainContainer.parentNode.insertBefore(hud, mainContainer.nextSibling);
      } else {
        document.body.prepend(hud);
      }
    }

    var step = this.steps[this.currentStepIndex];
    var progressPercent = ((this.currentStepIndex + 1) / this.steps.length) * 100;

    var html = '';
    html += '<div style="background: linear-gradient(135deg, rgba(15,23,42,0.98), rgba(6,78,59,0.95)); border: 2px solid #f59e0b; border-radius: 14px; padding: 16px 20px; box-shadow: 0 0 35px rgba(245,158,11,0.35); position:relative; overflow:hidden;">';

    // Progress bar
    html += '<div style="position:absolute; top:0; left:0; right:0; height:4px; background:rgba(255,255,255,0.1);">';
    html += '<div style="height:100%; width:' + progressPercent + '%; background:linear-gradient(90deg, #10b981, #f59e0b, #06b6d4); box-shadow:0 0 10px #f59e0b; transition:width 0.3s cubic-bezier(0.16,1,0.3,1);"></div></div>';

    html += '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-top:2px;">';

    // Left: content
    html += '<div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap; max-width:75%;">';
    html += '<div style="display:flex; align-items:center; gap:8px;">';
    html += '<span class="pill-badge pill-gold">EXECUTIVE TOUR</span>';
    html += '<span class="pill-badge pill-cyan">STAGE ' + step.stepNum + '</span>';
    html += '</div>';
    html += '<div>';
    html += '<b style="color:#fef08a; font-size:1.05rem;">' + step.title + '</b>';
    html += '<div style="font-size:0.8rem; color:#f8fafc; margin-top:3px; line-height:1.4;"><i>"' + step.speech + '"</i></div>';
    html += '<div style="font-size:0.74rem; color:#67e8f9; margin-top:3px; font-weight:600;"><b>Key Takeaway:</b> ' + step.takeaway + '</div>';
    html += '</div></div>';

    // Right: buttons
    html += '<div style="display:flex; align-items:center; gap:8px;">';
    html += '<button id="btn-tour-prev" class="btn-secondary" style="padding:7px 14px; font-size:0.8rem;"' + (this.currentStepIndex === 0 ? ' disabled' : '') + '>Prev</button>';
    html += '<button id="btn-tour-next" class="btn-primary" style="padding:7px 16px; font-size:0.84rem; background: linear-gradient(135deg, #f59e0b, #d97706); box-shadow:0 0 15px rgba(245,158,11,0.4);">';
    html += (this.currentStepIndex === this.steps.length - 1 ? 'Finish' : 'Next Stage') + '</button>';
    html += '<button id="btn-tour-restart" class="btn-secondary" style="padding:7px 10px; font-size:0.8rem;" title="Restart">Restart</button>';
    html += '<button id="btn-tour-exit" class="btn-secondary" style="padding:7px 12px; font-size:0.8rem; border-color:#ef4444; color:#fca5a5;" title="Close">Close</button>';
    html += '</div>';

    html += '</div></div>';

    hud.innerHTML = html;

    // Attach events
    var btnNext = hud.querySelector('#btn-tour-next');
    if (btnNext) btnNext.addEventListener('click', function() { self.next(); });

    var btnPrev = hud.querySelector('#btn-tour-prev');
    if (btnPrev) btnPrev.addEventListener('click', function() { self.prev(); });

    var btnRestart = hud.querySelector('#btn-tour-restart');
    if (btnRestart) btnRestart.addEventListener('click', function() { self.start(); });

    var btnExit = hud.querySelector('#btn-tour-exit');
    if (btnExit) btnExit.addEventListener('click', function() { self.stop(); });
  }
}
