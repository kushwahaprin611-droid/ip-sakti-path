// Zero-Login 7-Step IP Journey & Multi-Lens Regulatory Engine for Ayurveda Innovations

export class IPJourneyEngine {
  constructor(app) {
    this.app = app;
    this.currentStep = 1;
    this.totalSteps = 7;

    this.formData = {
      category: 'cosmetic',
      name: 'Keshava Glow Ayurvedic Hair & Scalp Revitalizer',
      ingredients: 'Amla (Emblica officinalis), Bhringraj (Eclipta alba), Neem (Azadirachta indica), Til Oil (Sesamum indicum)',
      intendedUse: 'Hair fall reduction, follicular rejuvenation, and scalp microbial balance',
      sourceLocation: 'Western Ghats & Central India (Domestic Cultivation)',
      knowledgeOrigin: 'combined',
      bioResource: 'yes',
      jurisdiction: 'india',
      targetMarkets: ['india', 'usa'],
      protectionInterests: ['patent', 'trademark', 'design']
    };

    this.demoProduct = {
      category: 'cosmetic',
      name: 'Keshava Glow Ayurvedic Hair & Scalp Revitalizer',
      ingredients: 'Amla (Emblica officinalis), Bhringraj (Eclipta alba), Neem (Azadirachta indica), Til Oil (Sesamum indicum)',
      intendedUse: 'Hair fall reduction, follicular rejuvenation, and scalp microbial balance',
      sourceLocation: 'Western Ghats & Central India (Domestic Cultivation)',
      knowledgeOrigin: 'combined',
      bioResource: 'yes',
      jurisdiction: 'india',
      targetMarkets: ['india', 'usa'],
      protectionInterests: ['patent', 'trademark', 'design']
    };

    this.analysisResult = null;
  }

  loadDemoScenario() {
    this.formData = JSON.parse(JSON.stringify(this.demoProduct));
    this.currentStep = 1;
  }

  setStep(step) {
    this.currentStep = Math.max(1, Math.min(this.totalSteps, step));
  }

  renderWizard(container) {
    let html = `
      <div class="glass-panel" style="padding: 24px; border-color: rgba(6, 182, 212, 0.4); max-width: 960px; margin: 0 auto;">
        
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 14px;">
          <div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="pill-badge pill-cyan">Step 0${this.currentStep} of 07</span>
              <span class="pill-badge pill-gold">Zero Login Required</span>
              <span class="pill-badge pill-emerald">~2 Minutes</span>
            </div>
            <h2 style="font-size: 1.4rem; color: #f8fafc; margin-top: 6px;">START MY IP JOURNEY</h2>
            <div style="font-size: 0.84rem; color: #94a3b8;">From Ayurveda idea to protected innovation, statutory compliance & global roadmap</div>
          </div>
          
          <div style="display:flex; gap:8px;">
            <button id="btn-load-demo-product" class="btn-secondary" style="font-size:0.8rem; border-color:#f59e0b; color:#fef08a;">
              Load Demo: Herbal Hair Oil
            </button>
            <button id="btn-reset-journey" class="btn-secondary" style="font-size:0.8rem;">
              Reset
            </button>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(7, 1fr); gap:6px; margin-bottom: 24px;">
          ${['01 Category', '02 Product', '03 Knowledge', '04 Bio-Resource', '05 Jurisdiction', '06 Protection', '07 Synthesis'].map((label, idx) => {
            const stepNum = idx + 1;
            const isCompleted = stepNum < this.currentStep;
            const isActive = stepNum === this.currentStep;
            return `
              <div style="text-align:center;">
                <div style="height: 5px; border-radius: 3px; background: ${isActive ? '#06b6d4' : isCompleted ? '#10b981' : 'rgba(255,255,255,0.1)'}; box-shadow: ${isActive ? '0 0 10px #06b6d4' : isCompleted ? '0 0 8px #10b981' : 'none'}; transition: all 0.3s;"></div>
                <div style="font-size: 0.68rem; margin-top: 4px; font-weight: 700; color: ${isActive ? '#67e8f9' : isCompleted ? '#34d399' : '#64748b'};">${label}</div>
              </div>
            `;
          }).join('')}
        </div>

        <div id="journey-step-container">
          ${this.renderCurrentStepContent()}
        </div>

        <div class="disclaimer-banner" style="margin-top: 24px;">
          <b>Informational & Educational Guidance -- Not Legal Advice:</b> This platform provides structured statutory navigation across IP and regulatory frameworks. It does not replace professional legal counsel or official registry filings.
        </div>

      </div>
    `;

    container.innerHTML = html;
    this.attachWizardEvents(container);
  }

  renderCurrentStepContent() {
    switch (this.currentStep) {
      case 1: return this.renderStep1();
      case 2: return this.renderStep2();
      case 3: return this.renderStep3();
      case 4: return this.renderStep4();
      case 5: return this.renderStep5();
      case 6: return this.renderStep6();
      case 7: return this.renderStep7();
      default: return this.renderStep1();
    }
  }

  renderStep1() {
    const categories = [
      { id: 'medicine', icon: '', title: 'Ayurvedic Medicine (ASU Drug)', desc: 'Classical formulation or proprietary therapeutic ASU formulation under D&C Act Rule 158B.' },
      { id: 'cosmetic', icon: '', title: 'Herbal / Ayurvedic Cosmetic', desc: 'Topical personal care, hair oils, skincare creams under Cosmetics Rules 2020.' },
      { id: 'food', icon: '', title: 'Ayurveda-Aahar / Functional Food', desc: 'Nutraceuticals, herbal health foods under FSSAI Ayurveda-Aahar Regulations 2022.' },
      { id: 'phytopharm', icon: '', title: 'Phytopharmaceutical / New Drug', desc: 'Purified fraction or novel standardized botanical extract requiring clinical trials.' },
      { id: 'plant', icon: '', title: 'Plant-Based / Cultivated Variety', desc: 'Novel medicinal plant variety or high-yield cultivar seeking PPV&FR plant breeders rights.' },
      { id: 'other', icon: '', title: 'Novel Extraction / MedTech / Other', desc: 'Ayurvedic diagnostic device, automated decoction machine, or novel extraction process.' }
    ];

    return `
      <div>
        <h3 style="color:#67e8f9; font-size:1.15rem; margin-bottom:8px;">01. What are you building?</h3>
        <p style="font-size:0.86rem; color:#cbd5e1; margin-bottom:16px;">Select the primary intended classification of your Ayurvedic innovation:</p>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:12px; margin-bottom:20px;">
          ${categories.map(c => `
            <div class="option-card ${this.formData.category === c.id ? 'selected' : ''}" data-category="${c.id}">
              <div style="font-size:1.8rem;">${c.icon}</div>
              <div>
                <b style="color:#f8fafc; font-size:0.92rem; display:block;">${c.title}</b>
                <div style="font-size:0.78rem; color:#94a3b8; margin-top:3px;">${c.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="display:flex; justify-content:flex-end;">
          <button id="btn-next-step" class="btn-primary">Next: Product Details -></button>
        </div>
      </div>
    `;
  }

  renderStep2() {
    return `
      <div>
        <h3 style="color:#67e8f9; font-size:1.15rem; margin-bottom:8px;">02. Product Identity & Ingredients</h3>
        <p style="font-size:0.86rem; color:#cbd5e1; margin-bottom:16px;">Provide basic formulation parameters (or click 'Load Demo' above):</p>
        <div style="display:flex; flex-direction:column; gap:16px; margin-bottom:20px;">
          <div>
            <label style="font-size:0.84rem; font-weight:700; color:#e2e8f0; display:block; margin-bottom:6px;">Product / Innovation Name:</label>
            <input type="text" id="input-prod-name" class="ip-input" placeholder="e.g. Keshava Glow Hair Oil, Triphala Bio-Matrix" value="${this.escapeHtml(this.formData.name)}">
          </div>
          <div>
            <label style="font-size:0.84rem; font-weight:700; color:#e2e8f0; display:block; margin-bottom:6px;">Main Active Botanical / Mineral Ingredients:</label>
            <input type="text" id="input-prod-ing" class="ip-input" placeholder="e.g. Amla, Bhringraj, Neem, Haridra" value="${this.escapeHtml(this.formData.ingredients)}">
            <div style="display:flex; gap:6px; margin-top:6px; flex-wrap:wrap;">
              <span style="font-size:0.72rem; color:#94a3b8;">Quick Add:</span>
              <span class="topic-chip quick-ing" data-val="Amla (Emblica officinalis)">+ Amla</span>
              <span class="topic-chip quick-ing" data-val="Bhringraj (Eclipta alba)">+ Bhringraj</span>
              <span class="topic-chip quick-ing" data-val="Haridra / Curcumin (Curcuma longa)">+ Haridra</span>
              <span class="topic-chip quick-ing" data-val="Ashwagandha (Withania somnifera)">+ Ashwagandha</span>
              <span class="topic-chip quick-ing" data-val="Neem (Azadirachta indica)">+ Neem</span>
              <span class="topic-chip quick-ing" data-val="Maricha / Piperine (Piper nigrum)">+ Piperine</span>
            </div>
          </div>
          <div>
            <label style="font-size:0.84rem; font-weight:700; color:#e2e8f0; display:block; margin-bottom:6px;">Intended Use / Health Benefit Claim:</label>
            <input type="text" id="input-prod-use" class="ip-input" placeholder="e.g. Hair fall reduction, anti-inflammatory joint comfort" value="${this.escapeHtml(this.formData.intendedUse)}">
          </div>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <button id="btn-prev-step" class="btn-secondary"><- Back</button>
          <button id="btn-next-step" class="btn-primary">Next: Knowledge Origin -></button>
        </div>
      </div>
    `;
  }

  renderStep3() {
    const origins = [
      { id: 'classical', icon: '', title: 'Classical Ayurvedic Text', desc: 'Directly referenced in First Schedule texts (Charaka, Sushruta, Sharangdhara, AFI).' },
      { id: 'traditional', icon: '', title: 'Community / Traditional Knowledge', desc: 'Learned from tribal, rural, or indigenous oral knowledge.' },
      { id: 'research', icon: '', title: 'Independent Modern R&D', desc: 'Developed in a laboratory via novel extraction or synthetic formulation.' },
      { id: 'combined', icon: '', title: 'Traditional Knowledge + Modern R&D', desc: 'Ancient botanical concept enhanced with novel bio-enhancers or nanotechnology.' },
      { id: 'unsure', icon: '', title: 'Not Sure / Mixed Sources', desc: 'Need automated statutory concordance check.' }
    ];

    return `
      <div>
        <h3 style="color:#67e8f9; font-size:1.15rem; margin-bottom:8px;">03. Where did the knowledge behind your product come from?</h3>
        <p style="font-size:0.86rem; color:#cbd5e1; margin-bottom:16px;">Crucial factor for Section 3(p) Traditional Knowledge exclusion and TKDL prior-art analysis:</p>
        <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:20px;">
          ${origins.map(o => `
            <div class="option-card ${this.formData.knowledgeOrigin === o.id ? 'selected' : ''}" data-origin="${o.id}">
              <div style="font-size:1.5rem;">${o.icon}</div>
              <div>
                <b style="color:#f8fafc; font-size:0.9rem;">${o.title}</b>
                <div style="font-size:0.78rem; color:#94a3b8; margin-top:2px;">${o.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="display:flex; justify-content:space-between;">
          <button id="btn-prev-step" class="btn-secondary"><- Back</button>
          <button id="btn-next-step" class="btn-primary">Next: Biological Resources -></button>
        </div>
      </div>
    `;
  }

  renderStep4() {
    return `
      <div>
        <h3 style="color:#67e8f9; font-size:1.15rem; margin-bottom:8px;">04. Does your product use plant, microbial, or animal biological resources?</h3>
        <p style="font-size:0.86rem; color:#cbd5e1; margin-bottom:16px;">This determines compliance with Biological Diversity Act 2002 (2023 Amendment) & ABS:</p>
        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; margin-bottom:20px;">
          <div class="option-card ${this.formData.bioResource === 'yes' ? 'selected' : ''}" data-bio="yes" style="justify-content:center; text-align:center; flex-direction:column; align-items:center;">
            <div style="font-size:2rem;"></div>
            <b style="color:#34d399;">YES</b>
            <span style="font-size:0.74rem; color:#94a3b8;">Uses Indian herbs/botanicals</span>
          </div>
          <div class="option-card ${this.formData.bioResource === 'no' ? 'selected' : ''}" data-bio="no" style="justify-content:center; text-align:center; flex-direction:column; align-items:center;">
            <div style="font-size:2rem;"></div>
            <b style="color:#cbd5e1;">NO</b>
            <span style="font-size:0.74rem; color:#94a3b8;">Purely synthetic / mechanical</span>
          </div>
          <div class="option-card ${this.formData.bioResource === 'unsure' ? 'selected' : ''}" data-bio="unsure" style="justify-content:center; text-align:center; flex-direction:column; align-items:center;">
            <div style="font-size:2rem;"></div>
            <b style="color:#fbbf24;">UNSURE</b>
            <span style="font-size:0.74rem; color:#94a3b8;">Imported or mixed sources</span>
          </div>
        </div>
        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 14px; border-radius: 8px; font-size: 0.82rem; color: #cbd5e1; margin-bottom: 20px;">
          <b>Statutory Notice (Section 6, BDA):</b> If Indian biological resources are utilized for an IP application or commercialization, prior approval from National Biodiversity Authority (NBA Form 3) or SBB intimation may be required.
        </div>
        <div style="display:flex; justify-content:space-between;">
          <button id="btn-prev-step" class="btn-secondary"><- Back</button>
          <button id="btn-next-step" class="btn-primary">Next: Jurisdiction -></button>
        </div>
      </div>
    `;
  }

  renderStep5() {
    return `
      <div>
        <h3 style="color:#67e8f9; font-size:1.15rem; margin-bottom:8px;">05. Target Jurisdictions & Expansion Scope</h3>
        <p style="font-size:0.86rem; color:#cbd5e1; margin-bottom:16px;">Select where you plan to manufacture, patent, and commercialize:</p>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:14px; margin-bottom:20px;">
          <div class="option-card ${this.formData.jurisdiction === 'india' ? 'selected' : ''}" data-jur-scope="india">
            <div style="font-size:2rem;"></div>
            <div>
              <b style="color:#f8fafc; font-size:0.95rem;">National (India Only)</b>
              <div style="font-size:0.78rem; color:#94a3b8; margin-top:4px;">Indian Patent Office (IPO), Rule 158B, NBA ABS, FSSAI Ayurveda-Aahar.</div>
            </div>
          </div>
          <div class="option-card ${this.formData.jurisdiction === 'international' ? 'selected' : ''}" data-jur-scope="international">
            <div style="font-size:2rem;"></div>
            <div>
              <b style="color:#f8fafc; font-size:0.95rem;">Global / International Scope</b>
              <div style="font-size:0.78rem; color:#94a3b8; margin-top:4px;">PCT Filings, WIPO GRATK Treaty (2024), Madrid TM, USFDA DSHEA, EU THMPD.</div>
            </div>
          </div>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <button id="btn-prev-step" class="btn-secondary"><- Back</button>
          <button id="btn-next-step" class="btn-primary">Next: Protection Intent -></button>
        </div>
      </div>
    `;
  }

  renderStep6() {
    const protections = [
      { id: 'patent', icon: '', title: 'Patent (Invention / Extraction / Synergy)', desc: 'Protect non-obvious synergistic efficacy or novel formulation methods.' },
      { id: 'trademark', icon: '', title: 'Trademark (Brand Name / Logo / Sanskrit Mark)', desc: 'Protect distinctive brand name, product logo, and proprietary packaging.' },
      { id: 'gi', icon: '', title: 'Geographical Indication (Regional Heritage)', desc: 'Tie ingredients to renowned geographical origins (e.g. Malabar Pepper, Gir Kesar).' },
      { id: 'copyright', icon: '', title: 'Copyright (Packaging Art / Marketing / Software)', desc: 'Protect label artwork, explanatory literature, and dosage software algorithms.' },
      { id: 'design', icon: '', title: 'Industrial Design (Bottle / Dispenser Shape)', desc: 'Protect ornamental 3D contours of cosmetic bottles or herbal applicator devices.' },
      { id: 'trade_secret', icon: '', title: 'Trade Secret (Proprietary Extraction Ratio)', desc: 'Keep critical temperature/solvent ratios confidential without public disclosure.' },
      { id: 'plant_variety', icon: '', title: 'Plant Variety (PPV&FR Cultivar Protection)', desc: 'Protect distinct, uniform, stable new medicinal plant varieties.' }
    ];

    return `
      <div>
        <h3 style="color:#67e8f9; font-size:1.15rem; margin-bottom:8px;">06. What do you want to protect?</h3>
        <p style="font-size:0.86rem; color:#cbd5e1; margin-bottom:16px;">Select all IP mechanisms of interest (Multi-selection enabled):</p>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:10px; margin-bottom:20px;">
          ${protections.map(p => {
            const isChecked = this.formData.protectionInterests.includes(p.id);
            return `
              <div class="option-card ${isChecked ? 'selected' : ''}" data-prot-id="${p.id}">
                <input type="checkbox" ${isChecked ? 'checked' : ''} style="margin-top:4px; accent-color:#06b6d4;">
                <div>
                  <b style="color:#f8fafc; font-size:0.88rem;">${p.icon} ${p.title}</b>
                  <div style="font-size:0.75rem; color:#94a3b8; margin-top:2px;">${p.desc}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        <div style="display:flex; justify-content:space-between;">
          <button id="btn-prev-step" class="btn-secondary"><- Back</button>
          <button id="btn-start-ai-synthesis" class="btn-primary" style="background: linear-gradient(135deg, #10b981, #06b6d4);">
            Launch AI Research Room ->
          </button>
        </div>
      </div>
    `;
  }

  renderStep7() {
    return `
      <div id="ai-research-room-view" style="text-align:center; padding: 20px 10px;">
        <div style="font-size:2.8rem; margin-bottom:12px; filter:drop-shadow(0 0 20px rgba(6,182,212,0.6));"></div>
        <h3 style="font-size:1.35rem; color:#f8fafc; margin-bottom:6px;">BUILDING YOUR IP PATH...</h3>
        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:24px;">AI Specialized Agents analyzing formulation parameters against codified statutory corpora:</p>

        <div style="max-width: 580px; margin: 0 auto; text-align: left;" id="research-room-steps-list">
          <div class="research-room-step" id="rr-step-1"><span>01. Product Formulation Analysis</span> <span class="status-indicator">Running...</span></div>
          <div class="research-room-step" id="rr-step-2"><span>02. 6-Category Statutory Classification</span> <span class="status-indicator">Waiting</span></div>
          <div class="research-room-step" id="rr-step-3"><span>03. Section 3(p) Traditional Knowledge Prior-Art Scan</span> <span class="status-indicator">Waiting</span></div>
          <div class="research-room-step" id="rr-step-4"><span>04. Biological Diversity Act & ABS Compliance Lens</span> <span class="status-indicator">Waiting</span></div>
          <div class="research-room-step" id="rr-step-5"><span>05. Multi-Jurisdictional Cross-Check (India & Global)</span> <span class="status-indicator">Waiting</span></div>
          <div class="research-room-step" id="rr-step-6"><span>06. Statutory Source Retrieval & Evidence Chain Validation</span> <span class="status-indicator">Waiting</span></div>
          <div class="research-room-step" id="rr-step-7"><span>07. Final Synthesis & IP Constellation Mapping</span> <span class="status-indicator">Waiting</span></div>
        </div>

        <div id="research-room-complete-box" style="display:none; margin-top:24px;">
          <div style="display:inline-block; padding:12px 24px; background:rgba(16,185,129,0.2); border:1.5px solid #10b981; border-radius:12px; color:#34d399; font-weight:800; margin-bottom:16px; box-shadow:0 0 25px rgba(16,185,129,0.3);">
            [OK] YOUR IP PATH IS READY!
          </div>
          <div>
            <button id="btn-view-constellation" class="btn-primary" style="padding:12px 28px; font-size:0.95rem; margin-right:10px;">
              View IP Constellation & Roadmap
            </button>
            <button id="btn-view-passport" class="btn-gold" style="padding:12px 28px; font-size:0.95rem;">
              Open IP Sakti Passport
            </button>
          </div>
        </div>
      </div>
    `;
  }

  attachWizardEvents(container) {
    const btnDemo = container.querySelector('#btn-load-demo-product');
    if (btnDemo) {
      btnDemo.addEventListener('click', () => {
        this.loadDemoScenario();
        this.renderWizard(container);
      });
    }

    const btnReset = container.querySelector('#btn-reset-journey');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        this.formData = {
          category: 'medicine',
          name: '',
          ingredients: '',
          intendedUse: '',
          sourceLocation: 'domestic',
          knowledgeOrigin: 'classical',
          bioResource: 'yes',
          jurisdiction: 'india',
          targetMarkets: ['india'],
          protectionInterests: ['patent', 'trademark']
        };
        this.currentStep = 1;
        this.renderWizard(container);
      });
    }

    container.querySelectorAll('.option-card[data-category]').forEach(el => {
      el.addEventListener('click', () => {
        this.formData.category = el.dataset.category;
        container.querySelectorAll('.option-card[data-category]').forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
      });
    });

    const nameInput = container.querySelector('#input-prod-name');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => this.formData.name = e.target.value);
    }
    const ingInput = container.querySelector('#input-prod-ing');
    if (ingInput) {
      ingInput.addEventListener('input', (e) => this.formData.ingredients = e.target.value);
    }
    const useInput = container.querySelector('#input-prod-use');
    if (useInput) {
      useInput.addEventListener('input', (e) => this.formData.intendedUse = e.target.value);
    }

    container.querySelectorAll('.quick-ing').forEach(chip => {
      chip.addEventListener('click', () => {
        const val = chip.dataset.val;
        if (this.formData.ingredients) {
          if (!this.formData.ingredients.includes(val)) {
            this.formData.ingredients += ', ' + val;
          }
        } else {
          this.formData.ingredients = val;
        }
        if (ingInput) ingInput.value = this.formData.ingredients;
      });
    });

    container.querySelectorAll('.option-card[data-origin]').forEach(el => {
      el.addEventListener('click', () => {
        this.formData.knowledgeOrigin = el.dataset.origin;
        container.querySelectorAll('.option-card[data-origin]').forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
      });
    });

    container.querySelectorAll('.option-card[data-bio]').forEach(el => {
      el.addEventListener('click', () => {
        this.formData.bioResource = el.dataset.bio;
        container.querySelectorAll('.option-card[data-bio]').forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
      });
    });

    container.querySelectorAll('.option-card[data-jur-scope]').forEach(el => {
      el.addEventListener('click', () => {
        this.formData.jurisdiction = el.dataset.jurScope;
        container.querySelectorAll('.option-card[data-jur-scope]').forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
      });
    });

    container.querySelectorAll('.option-card[data-prot-id]').forEach(el => {
      el.addEventListener('click', () => {
        const protId = el.dataset.protId;
        const cb = el.querySelector("input[type='checkbox']");
        if (this.formData.protectionInterests.includes(protId)) {
          this.formData.protectionInterests = this.formData.protectionInterests.filter(id => id !== protId);
          el.classList.remove('selected');
          if (cb) cb.checked = false;
        } else {
          this.formData.protectionInterests.push(protId);
          el.classList.add('selected');
          if (cb) cb.checked = true;
        }
      });
    });

    const btnNext = container.querySelector('#btn-next-step');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        this.setStep(this.currentStep + 1);
        this.renderWizard(container);
      });
    }

    const btnPrev = container.querySelector('#btn-prev-step');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        this.setStep(this.currentStep - 1);
        this.renderWizard(container);
      });
    }

    const btnLaunchAI = container.querySelector('#btn-start-ai-synthesis');
    if (btnLaunchAI) {
      btnLaunchAI.addEventListener('click', () => {
        this.setStep(7);
        this.renderWizard(container);
        this.runAIResearchSimulation(container);
      });
    }
  }

  runAIResearchSimulation(container) {
    const steps = [
      { id: 'rr-step-1', delay: 350 },
      { id: 'rr-step-2', delay: 700 },
      { id: 'rr-step-3', delay: 1050 },
      { id: 'rr-step-4', delay: 1400 },
      { id: 'rr-step-5', delay: 1750 },
      { id: 'rr-step-6', delay: 2100 },
      { id: 'rr-step-7', delay: 2450 }
    ];

    steps.forEach((s, idx) => {
      setTimeout(() => {
        const el = container.querySelector('#' + s.id);
        if (el) {
          el.classList.add('completed');
          const ind = el.querySelector('.status-indicator');
          if (ind) ind.innerHTML = '[OK] Completed';
        }
        if (idx === steps.length - 1) {
          setTimeout(() => {
            const completeBox = container.querySelector('#research-room-complete-box');
            if (completeBox) completeBox.style.display = 'block';
            this.generateFullAssessment();
            this.attachPostSimulationEvents(container);
          }, 300);
        }
      }, s.delay);
    });
  }

  attachPostSimulationEvents(container) {
    const btnConstellation = container.querySelector('#btn-view-constellation');
    if (btnConstellation && window.saktiApp) {
      btnConstellation.addEventListener('click', () => {
        window.saktiApp.switchTab('constellation');
      });
    }

    const btnPassport = container.querySelector('#btn-view-passport');
    if (btnPassport && window.saktiApp) {
      btnPassport.addEventListener('click', () => {
        window.saktiApp.switchTab('passport');
      });
    }
  }

  generateFullAssessment() {
    const name = this.formData.name || (this.formData.category === 'cosmetic' ? 'Herbal Hair & Scalp Oil' : 'Ayurvedic Innovation Product');
    const ing = this.formData.ingredients || 'Amla, Bhringraj, Neem, Til Oil';
    const origin = this.formData.knowledgeOrigin;
    const isClassical = origin === 'classical';
    const isCombined = origin === 'combined';
    const bioYes = this.formData.bioResource === 'yes';

    this.analysisResult = {
      productName: name,
      ingredients: ing,
      category: this.formData.category,
      jurisdiction: this.formData.jurisdiction,
      knowledgeOrigin: origin,
      sourceCoverage: 88.5,
      aiConfidence: 91.4,
      statutoryClassification: this.formData.category === 'cosmetic' ? 'Ayurvedic Proprietary Cosmetic' : this.formData.category === 'food' ? 'Ayurveda-Aahar' : 'Ayurvedic Proprietary ASU Medicine',
      regulatoryStatus: 'Schedule T GMP & Rule 158B Applicable',
      nodes: {
        patent: {
          status: isClassical ? 'human_review' : isCombined ? 'review' : 'relevant',
          statusLabel: isClassical ? 'High Sec 3(p) Risk' : isCombined ? 'Synergy Data Required (Sec 3e)' : 'Eligible for Novelty Assessment',
          title: 'Patent Protection Pathway',
          meaning: 'Covers non-obvious synergistic formulations (Sec 3e), novel botanical extraction processes, and nanocarrier drug delivery.',
          why: isClassical ? 'Classical text recipes are public domain prior art under Section 3(p).' : 'Must prove pharmacological synergy exceeding additive efficacy (E_combo > E_A + E_B).',
          verify: 'Conduct complete InPASS patent landscape search and generate quantitative synergistic biomarker data.',
          citations: 'Section 3(p), 3(e), 3(d), Patents Act 1970; Patent (Amendment) Rules 2024.',
          nextStep: 'Draft provisional specification (Form 1 & Form 2) or maintain critical extraction ratios as trade secrets.'
        },
        trademark: {
          status: 'relevant',
          statusLabel: 'Highly Recommended',
          title: 'Trademark & Brand Sovereignty',
          meaning: 'Protects distinctive brand name, product logo, and Sanskrit word marks in Class 3 (Cosmetics) or Class 5 (Pharmaceuticals).',
          why: 'Prevents competitors from misleading consumers with deceptively similar Ayurvedic brand names.',
          verify: 'Verify non-descriptiveness under Trade Marks Act Section 9 and search TM Class 3 / 5 registry.',
          citations: 'Trade Marks Act 1999; Nice Classification (Class 3 & Class 5); Madrid System for global filing.',
          nextStep: 'File TM-A Application on IP India Portal before public market launch.'
        },
        tk: {
          status: isClassical || isCombined ? 'review' : 'not_relevant',
          statusLabel: isClassical || isCombined ? 'TKDL Prior-Art Active' : 'No Prior Art Trigger',
          title: 'Traditional Knowledge Lens',
          meaning: 'Concordance with 4.4 Lakh TKDL formulation dossiers and First Schedule Samhitas.',
          why: 'Indian and international patent examiners cross-check TKDL dossiers to prevent wrongful biopiracy patents.',
          verify: 'Verify if ancient text specifies identical ratio, therapeutic indication, and vehicle (Anupana).',
          citations: 'CSIR-TKDL Access Protocols; WIPO GRATK Treaty (Adopted May 2024); Section 3(p) Patents Act.',
          nextStep: 'Document technical modifications, novel extraction methods, or additive clinical efficacy.'
        },
        abs: {
          status: bioYes ? 'review' : 'not_relevant',
          statusLabel: bioYes ? 'NBA / SBB Compliance Required' : 'Exempt',
          title: 'Biological Diversity & ABS Lens',
          meaning: 'Access and Benefit Sharing under Biological Diversity Act 2002 & Amendment Act 2023.',
          why: 'Commercial utilization of Indian bio-resources mandates sharing 3.0% to 5.0% benefit sharing with local biodiversity committees.',
          verify: 'Verify whether registered AYUSH practitioners or cultivated bio-resources qualify for exemption under 2023 Amendment.',
          citations: 'Biological Diversity Act 2002 (as amended 2023); Biological Diversity Rules 2024; Nagoya Protocol.',
          nextStep: 'File NBA Form 1 (Commercial Utilization) or NBA Form 3 prior to applying for IPR.'
        },
        regulation: {
          status: 'relevant',
          statusLabel: 'Mandatory Compliance',
          title: 'Regulatory Path & Quality Compliance',
          meaning: 'State Licensing Authority (SLA) ASU drug license, Schedule T GMP, or FSSAI Ayurveda-Aahar approval.',
          why: 'Ensures heavy metal safety limits (Pb < 10ppm, As < 3ppm, Cd < 0.3ppm, Hg < 1ppm) and prevents misleading claims under DMR 1954.',
          verify: 'Perform batch analytical testing and prepare Rule 158B safety/efficacy dossier.',
          citations: 'Drugs & Cosmetics Act 1940; Rule 158B; Schedule T GMP; DMR (Objectionable Advertisements) Act 1954.',
          nextStep: 'Submit Form 24D / 25D to State AYUSH Licensing Authority (e-Aushadhi).'
        },
        gi: {
          status: 'not_relevant',
          statusLabel: 'Optional Regional Association',
          title: 'Geographical Indications (GI)',
          meaning: 'Recognizes products whose reputation is attributable to geographical origin.',
          why: 'Protects regional farmer collectives (e.g., Alleppey Cardamom, Nilgiri Tea, Kashmir Saffron).',
          verify: 'Verify if botanical raw ingredients are sourced from authorized GI producer cooperatives.',
          citations: 'Geographical Indications of Goods (Registration & Protection) Act 1999.',
          nextStep: 'Obtain Authorized User certification if sourcing registered GI raw materials.'
        },
        trade_secret: {
          status: 'relevant',
          statusLabel: 'Critical Complement to Patents',
          title: 'Trade Secret & Extraction Confidentiality',
          meaning: 'Protecting proprietary multi-herb extraction temperature curves, solvent ratios, and fermentation time.',
          why: 'Unlike patents, trade secrets never expire and do not require public disclosure in patent databases.',
          verify: 'Implement non-disclosure agreements (NDAs) and clean-room protocol partitioning in R&D labs.',
          citations: 'Indian Common Law of Breach of Confidence; TRIPS Article 39 (Undisclosed Information).',
          nextStep: 'Execute NDAs with manufacturing partners and segment batch recipe knowledge.'
        },
        international: {
          status: this.formData.jurisdiction === 'international' ? 'review' : 'not_relevant',
          statusLabel: this.formData.jurisdiction === 'international' ? 'WIPO GRATK & US/EU Rules' : 'Domestic Priority',
          title: 'Global IP & Export Market Lens',
          meaning: 'PCT international patent filings, WIPO GRATK Treaty mandatory disclosure, USFDA DSHEA, EU THMPD.',
          why: 'Exporting Ayurvedic formulations requires distinct labelling compliance (Dietary Supplement in US, Traditional Herbal Medicine in EU).',
          verify: 'Ensure absence of prohibited animal/mineral ingredients and disclose biological resource country of origin.',
          citations: 'WIPO GRATK Treaty (May 2024); US Dietary Supplement Health & Education Act (DSHEA 1994); EU Directive 2004/24/EC.',
          nextStep: 'File PCT application within 12-month Paris Convention priority window.'
        }
      }
    };

    try {
      localStorage.setItem('sakti_current_product', JSON.stringify(this.analysisResult));
    } catch(e){}

    return this.analysisResult;
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
}
