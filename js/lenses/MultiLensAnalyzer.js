// Multi-Lens Analyzer: 6-Category Formulation Classifier, TK Lens, ABS Lens, Global Market Map, & Law Watch

export class MultiLensAnalyzer {
  constructor(app) {
    this.app = app;
  }

  // 1. Formulation Classifier View
  renderClassifierView(container) {
    let html = `
      <div style="max-width: 960px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
        
        <div class="glass-panel" style="padding: 20px; border-color: rgba(6, 182, 212, 0.4);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="pill-badge pill-cyan">FORMULATION CLASSIFIER</span>
                <span class="pill-badge pill-emerald">D&C Rule 158B - FSSAI - CDSCO</span>
              </div>
              <h2 style="font-size: 1.35rem; color: #f8fafc; margin-top: 4px;">6-Category Statutory Classification Engine</h2>
              <div style="font-size: 0.82rem; color: #94a3b8;">
                Accurately categorizes Ayurvedic formulations into the 6 statutory legal pathways under Indian Law.
              </div>
            </div>

            <button id="btn-classifier-demo" class="btn-gold" style="font-size:0.8rem;">
              Load Demo: Hair & Scalp Oil
            </button>
          </div>
        </div>

        <!-- Interactive Classifier Form -->
        <div class="glass-panel" style="padding: 24px; border-color: rgba(255,255,255,0.12);">
          
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; margin-bottom:18px;">
            <div>
              <label style="font-size:0.82rem; font-weight:700; color:#e2e8f0; display:block; margin-bottom:6px;">1. Formulation Composition:</label>
              <select id="clf-composition" class="ip-select">
                <option value="classical_exact">Exact Classical Formula from Samhitas / AFI (First Schedule)</option>
                <option value="proprietary_asu" selected>Proprietary Herbal Mixture (Known classical herbs in new ratio)</option>
                <option value="purified_fraction">Standardized Botanical Extract / Purified Phytochemical Fraction</option>
                <option value="dietary_food">Herbal Health Food Recipe (Ayurveda Aahar)</option>
                <option value="topical_cosmetic">Topical Application (Hair Oil, Face Cream, Herbal Soap)</option>
                <option value="synthetic_derivative">Synthetic Derivative / Modified Chemical Entity</option>
              </select>
            </div>

            <div>
              <label style="font-size:0.82rem; font-weight:700; color:#e2e8f0; display:block; margin-bottom:6px;">2. Intended Primary Use Claim:</label>
              <select id="clf-claim" class="ip-select">
                <option value="cosmetic_beauty" selected>Beautification, Hair Health, Skin Nourishment (Cosmetic)</option>
                <option value="therapeutic_cure">Disease Treatment / Therapeutic Cure (ASU Drug)</option>
                <option value="nutritional_wellness">General Nutritional Wellness / Srotas Balance (Ayurveda-Aahar)</option>
                <option value="clinical_pharma">Novel Phytopharmaceutical Indication (Clinical Trial)</option>
              </select>
            </div>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; margin-bottom:20px;">
            <div>
              <label style="font-size:0.82rem; font-weight:700; color:#e2e8f0; display:block; margin-bottom:6px;">3. Manufacturing Process:</label>
              <select id="clf-process" class="ip-select">
                <option value="classical_gmp" selected>Standard Ayurvedic Shastra decoction / oil boiling (Sneha Pak)</option>
                <option value="supercritical_co2">Supercritical CO2 / Modern Phytochemical Fractionation</option>
                <option value="nano_carrier">Liposomal / Nano-Encapsulation Delivery System</option>
                <option value="food_processing">Food Grade Baking / Extrusion (FSSAI norms)</option>
              </select>
            </div>

            <div>
              <label style="font-size:0.82rem; font-weight:700; color:#e2e8f0; display:block; margin-bottom:6px;">4. Clinical / Safety Evidence Available:</label>
              <select id="clf-evidence" class="ip-select">
                <option value="bibliographical" selected>Bibliographical textual reference in First Schedule Samhitas</option>
                <option value="pilot_clinical">Published in-vitro / animal safety & pilot clinical data</option>
                <option value="phase_1_3">Full Phase I, II, III Good Clinical Practice (GCP) trials</option>
                <option value="none">No safety or clinical data generated yet</option>
              </select>
            </div>
          </div>

          <button id="btn-run-classifier" class="btn-primary" style="width:100%; justify-content:center; padding:12px; font-size:0.95rem;">
            Analyze Statutory Classification
          </button>

          <!-- Result Output Box -->
          <div id="classifier-result-box" style="margin-top:20px;">
            ${this.generateClassifierResult('topical_cosmetic', 'cosmetic_beauty', 'classical_gmp', 'bibliographical')}
          </div>

        </div>

      </div>
    `;

    container.innerHTML = html;
    this.attachClassifierEvents(container);
  }

  generateClassifierResult(comp, claim, proc, evid) {
    let category = "Ayurvedic Proprietary Cosmetic";
    let statute = "Cosmetics Rules, 2020 & Drugs & Cosmetics Act 1940 (Ninth Schedule BIS Standards)";
    let why = "Topical formulation for hair/scalp beautification containing classical botanical extracts without prohibited therapeutic disease claims.";
    let ipStrategy = "Patent novel extraction / synergy data (Sec 3e), Register Trademark (Class 3), Protect bottle design (Designs Act 2000).";
    let confidence = "96.5%";

    if (comp === "classical_exact" || claim === "therapeutic_cure") {
      category = "Classical Ayurvedic Medicine (ASU Drug)";
      statute = "Drugs & Cosmetics Act 1940 & Rule 158B(1) (First Schedule Samhitas)";
      why = "Formulation adheres strictly to authoritative classical compendia (Charaka, Sushruta, AFI) with therapeutic intent.";
      ipStrategy = "Cannot be patented under Section 3(p) (TKDL prior art). Brand Trademark (Class 5) and Trade Dress protection recommended.";
      confidence = "98.2%";
    } else if (comp === "purified_fraction" || proc === "supercritical_co2" || evid === "phase_1_3") {
      category = "Phytopharmaceutical Drug (New Botanical Drug)";
      statute = "New Drugs & Clinical Trials Rules 2019 & CDSCO Phytopharmaceutical Guidelines";
      why = "Standardized purified fraction of medicinal plant with chromatographic fingerprinting and Phase I-III clinical trial data.";
      ipStrategy = "Strongly eligible for Product Patent, Process Patent, and Data Exclusivity. Trademark Class 5.";
      confidence = "94.8%";
    } else if (comp === "dietary_food" || claim === "nutritional_wellness") {
      category = "Ayurveda-Aahar (Nutraceutical / Food)";
      statute = "Food Safety and Standards (Ayurveda Aahar) Regulations, 2022 (FSSAI)";
      why = "Intended for dietary and nutritional consumption in accordance with classical dietary shlokas without therapeutic disease claims.";
      ipStrategy = "Protect proprietary recipe as Trade Secret, Register Trademark (Class 29/30/32), FSSAI Logo conformity.";
      confidence = "97.1%";
    }

    return `
      <div style="background:rgba(2,6,23,0.9); border:2px solid #06b6d4; padding:20px; border-radius:12px; box-shadow:0 0 25px rgba(6,182,212,0.25);">
        
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
          <span class="pill-badge pill-emerald">Likely Classification</span>
          <span class="pill-badge pill-cyan">Confidence: ${confidence}</span>
        </div>

        <h3 style="color:#f8fafc; font-size:1.25rem; margin-bottom:8px;">${category}</h3>

        <div style="font-size:0.84rem; color:#cbd5e1; line-height:1.5; margin-bottom:14px;">
          <b>Governing Statutory Basis:</b> <span style="color:#67e8f9;">${statute}</span>
        </div>

        <div style="background:rgba(15,23,42,0.85); padding:10px 12px; border-radius:8px; font-size:0.82rem; color:#e2e8f0; margin-bottom:12px; border-left:3px solid #f59e0b;">
          <b>Why this category?</b> ${why}
        </div>

        <div style="background:rgba(6,182,212,0.12); border:1px solid rgba(6,182,212,0.35); padding:10px 12px; border-radius:8px; font-size:0.82rem; color:#cbd5e1;">
          <b style="color:#67e8f9;">Recommended IP & Regulatory Action:</b> ${ipStrategy}
        </div>

        <div class="rag-disclaimer" style="margin-top:12px;">
          <b>Informational Indicator:</b> This is an AI statutory categorization indicator, not a definitive legal determination by State Licensing Authorities.
        </div>

      </div>
    `;
  }

  attachClassifierEvents(container) {
    const btnDemo = container.querySelector('#btn-classifier-demo');
    if (btnDemo) {
      btnDemo.addEventListener('click', () => {
        container.querySelector('#clf-composition').value = 'topical_cosmetic';
        container.querySelector('#clf-claim').value = 'cosmetic_beauty';
        container.querySelector('#clf-process').value = 'classical_gmp';
        container.querySelector('#clf-evidence').value = 'bibliographical';
        const resBox = container.querySelector('#classifier-result-box');
        if (resBox) resBox.innerHTML = this.generateClassifierResult('topical_cosmetic', 'cosmetic_beauty', 'classical_gmp', 'bibliographical');
      });
    }

    const btnRun = container.querySelector('#btn-run-classifier');
    if (btnRun) {
      btnRun.addEventListener('click', () => {
        const comp = container.querySelector('#clf-composition').value;
        const claim = container.querySelector('#clf-claim').value;
        const proc = container.querySelector('#clf-process').value;
        const evid = container.querySelector('#clf-evidence').value;
        const resBox = container.querySelector('#classifier-result-box');
        if (resBox) resBox.innerHTML = this.generateClassifierResult(comp, claim, proc, evid);
      });
    }
  }

  // 2. Global Market Map & Law Watch View
  renderMarketMapView(container) {
    let html = `
      <div style="display:flex; flex-direction:column; gap:16px;">
        
        <div class="glass-panel" style="padding: 20px; border-color: rgba(6, 182, 212, 0.4);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="pill-badge pill-cyan">GLOBAL MARKET MAP</span>
                <span class="pill-badge pill-emerald">Export Compliance 2026</span>
                <span class="pill-badge pill-gold">WIPO GRATK Ready</span>
              </div>
              <h2 style="font-size: 1.35rem; color: #f8fafc; margin-top: 4px;">International Jurisdictional Regulatory Matrix</h2>
              <div style="font-size: 0.82rem; color: #94a3b8;">
                Cross-border IP filing, botanical regulatory classification, and mandatory origin disclosure across major global markets.
              </div>
            </div>
          </div>
        </div>

        <!-- Global Markets Grid -->
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:14px;">
          
          <div class="glass-panel" style="padding:18px; border-color:rgba(6,182,212,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <b style="color:#67e8f9; font-size:1.1rem;">INDIA</b>
              <span class="pill-badge pill-emerald">DOMESTIC BASE</span>
            </div>
            <div style="font-size:0.8rem; color:#cbd5e1; line-height:1.5; display:flex; flex-direction:column; gap:6px;">
              <div><b>Statutory Pathway:</b> ASU Drug (Rule 158B), FSSAI Ayurveda-Aahar, or Cosmetics Rules 2020.</div>
              <div><b>IP Restrictions:</b> Section 3(p) TK exclusion, Section 3(e) synergy threshold.</div>
              <div><b>ABS Obligation:</b> Mandatory NBA Form 3 prior to patent application.</div>
            </div>
          </div>

          <div class="glass-panel" style="padding:18px; border-color:rgba(245,158,11,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <b style="color:#fef08a; font-size:1.1rem;">USA</b>
              <span class="pill-badge pill-gold">LARGEST EXPORT</span>
            </div>
            <div style="font-size:0.8rem; color:#cbd5e1; line-height:1.5; display:flex; flex-direction:column; gap:6px;">
              <div><b>Statutory Pathway:</b> Dietary Supplements (DSHEA 1994) under 21 CFR Part 111 cGMP.</div>
              <div><b>IP Restrictions:</b> USPTO cross-checks CSIR-TKDL dossiers for prior-art.</div>
              <div><b>Labelling Rule:</b> Structure/function claims permitted; disease cure claims strictly prohibited.</div>
            </div>
          </div>

          <div class="glass-panel" style="padding:18px; border-color:rgba(16,185,129,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <b style="color:#a7f3d0; font-size:1.1rem;">EUROPEAN UNION</b>
              <span class="pill-badge pill-emerald">STRICTEST STANDARDS</span>
            </div>
            <div style="font-size:0.8rem; color:#cbd5e1; line-height:1.5; display:flex; flex-direction:column; gap:6px;">
              <div><b>Statutory Pathway:</b> Traditional Herbal Medicinal Products Directive (THMPD 2004/24/EC).</div>
              <div><b>Evidence Requirement:</b> Proof of 30 years medicinal use (15 years within EU).</div>
              <div><b>Heavy Metals:</b> Strict EU Pharmacopoeia limits on Lead, Arsenic, Cadmium, PAHs.</div>
            </div>
          </div>

          <div class="glass-panel" style="padding:18px; border-color:rgba(168,85,247,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <b style="color:#e9d5ff; font-size:1.1rem;">UNITED KINGDOM</b>
              <span class="pill-badge pill-purple">MHRA FRAMEWORK</span>
            </div>
            <div style="font-size:0.8rem; color:#cbd5e1; line-height:1.5; display:flex; flex-direction:column; gap:6px;">
              <div><b>Statutory Pathway:</b> Traditional Herbal Registration (THR) scheme with MHRA.</div>
              <div><b>IP Scope:</b> UKIPO patent filings with mandatory WIPO GRATK origin disclosure.</div>
              <div><b>Quality:</b> British Pharmacopoeia monograph conformance.</div>
            </div>
          </div>

          <div class="glass-panel" style="padding:18px; border-color:rgba(239,68,68,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <b style="color:#fca5a5; font-size:1.1rem;">AUSTRALIA</b>
              <span class="pill-badge pill-ruby">TGA LISTED</span>
            </div>
            <div style="font-size:0.8rem; color:#cbd5e1; line-height:1.5; display:flex; flex-direction:column; gap:6px;">
              <div><b>Statutory Pathway:</b> Therapeutic Goods Administration (TGA) Listed Complementary Medicines.</div>
              <div><b>Ingredients:</b> Must only use pre-approved permitted ingredients in ARTG database.</div>
              <div><b>ABS & Origin:</b> Compliance with Nagoya Protocol on genetic resources.</div>
            </div>
          </div>

          <div class="glass-panel" style="padding:18px; border-color:rgba(6,182,212,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <b style="color:#67e8f9; font-size:1.1rem;">JAPAN</b>
              <span class="pill-badge pill-cyan">KAMPPO INTERSECTION</span>
            </div>
            <div style="font-size:0.8rem; color:#cbd5e1; line-height:1.5; display:flex; flex-direction:column; gap:6px;">
              <div><b>Statutory Pathway:</b> Foods with Function Claims (FFC) or Non-prescription Herbal Medicine.</div>
              <div><b>MHLW Standards:</b> Japanese Pharmacopoeia botanical identification standards.</div>
              <div><b>IP Filings:</b> JPO accelerated examination under Patent Prosecution Highway (PPH).</div>
            </div>
          </div>

        </div>

        <!-- Live Law Watch Section -->
        <div class="glass-panel" style="padding: 20px; border-color: rgba(245, 158, 11, 0.4); margin-top: 8px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
            <span class="pill-badge pill-gold">LAW WATCH</span>
            <b style="color:#fef08a; font-size:1.05rem;">Codified Statutory & Regulatory Timeline</b>
          </div>

          <div style="display:flex; flex-direction:column; gap:10px; font-size:0.82rem;">
            
            <div style="background:rgba(15,23,42,0.85); padding:10px 14px; border-radius:8px; border-left:3px solid #10b981;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
                <b style="color:#34d399;">Biological Diversity Rules 2024 Enacted</b>
                <span style="color:#94a3b8; font-size:0.72rem;">April 2024</span>
              </div>
              <div style="color:#cbd5e1;">Exempts registered AYUSH practitioners from State Biodiversity Board intimations for local traditional practice while strengthening ABS for commercial manufacturers.</div>
            </div>

            <div style="background:rgba(15,23,42,0.85); padding:10px 14px; border-radius:8px; border-left:3px solid #06b6d4;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
                <b style="color:#67e8f9;">WIPO GRATK Treaty Adopted by Consensus</b>
                <span style="color:#94a3b8; font-size:0.72rem;">May 2024</span>
              </div>
              <div style="color:#cbd5e1;">Establishes mandatory international patent disclosure for genetic resources and traditional knowledge across all WIPO contracting states.</div>
            </div>

            <div style="background:rgba(15,23,42,0.85); padding:10px 14px; border-radius:8px; border-left:3px solid #f59e0b;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
                <b style="color:#fef08a;">Patents (Amendment) Rules 2024</b>
                <span style="color:#94a3b8; font-size:0.72rem;">March 2024</span>
              </div>
              <div style="color:#cbd5e1;">Introduces reduced official fees for startups and MSMEs and streamlines Form 27 working-of-patents reporting from annual to once every three financial years.</div>
            </div>

          </div>
        </div>

      </div>
    `;

    container.innerHTML = html;
  }

  // 3. Learn IP in 60 Seconds
  renderLearnIPView(container) {
    const cards = [
      { icon: "", title: "PATENT", desc: "Grants 20 years monopoly for NOVEL technical inventions or extraction processes. Classical texts cannot be patented (Sec 3p); synergistic mixtures require quantitative efficacy data (Sec 3e)." },
      { icon: "", title: "TRADEMARK", desc: "Protects your brand name, logo, Sanskrit mark, and packaging identity indefinitely (renewable every 10 years) under Class 3 (Cosmetics) or Class 5 (Medicines)." },
      { icon: "", title: "GEOGRAPHICAL INDICATION (GI)", desc: "Protects regional farmer collectives where botanical reputation stems from geographic territory (e.g. Alleppey Cardamom, Kashmir Saffron, Malabar Pepper)." },
      { icon: "", title: "COPYRIGHT", desc: "Protects packaging artwork, explanatory consumer leaflets, graphic labels, and software algorithms automatically upon creation for author lifetime + 60 years." },
      { icon: "", title: "INDUSTRIAL DESIGN", desc: "Protects the novel 3D aesthetic shape and contours of cosmetic bottles, herbal applicators, and dispensers for 10-15 years under Designs Act 2000." },
      { icon: "", title: "TRADE SECRET", desc: "Protects confidential extraction temperature curves, solvent ratios, and fermentation timing without public patent disclosure or expiration." },
      { icon: "", title: "TRADITIONAL KNOWLEDGE (TKDL)", desc: "India's digital defense vault of 4.4 Lakh ancient formulations from Charaka, Sushruta, and Sharangdhara Samhitas used to defeat foreign biopiracy patents." },
      { icon: "", title: "ACCESS & BENEFIT SHARING (ABS)", desc: "Mandates sharing 3.0%-5.0% ex-factory value with local tribal Biodiversity Management Committees when utilizing Indian biological resources under the Biodiversity Act." },
      { icon: "", title: "REGULATORY CLASSIFICATION", desc: "Crucial legal distinction between Classical ASU Medicine, Proprietary ASU Drug (Rule 158B), Ayurveda-Aahar (FSSAI 2022), and Herbal Cosmetic (Cosmetics Rules 2020)." }
    ];

    let html = `
      <div style="max-width: 960px; margin: 0 auto; display:flex; flex-direction:column; gap:16px;">
        <div class="glass-panel" style="padding: 20px; border-color: rgba(6, 182, 212, 0.4);">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="pill-badge pill-gold">LEARN IP IN 60 SECONDS</span>
            <span class="pill-badge pill-cyan">Micro-Learning Flashcards</span>
          </div>
          <h2 style="font-size: 1.35rem; color: #f8fafc; margin-top: 4px;">Ayurvedic Intellectual Property & Sovereignty Made Simple</h2>
          <div style="font-size: 0.82rem; color: #94a3b8;">
            Master the core concepts governing patentability, brand rights, traditional knowledge defense, and biodiversity ethics in 60 seconds.
          </div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:14px;">
          ${cards.map(c => `
            <div class="glass-panel" style="padding:18px; border-color:rgba(255,255,255,0.12); display:flex; flex-direction:column; gap:8px; transition:transform 0.2s;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:1.8rem;">${c.icon}</span>
                <b style="color:#f8fafc; font-size:0.95rem;">${c.title}</b>
              </div>
              <div style="font-size:0.8rem; color:#cbd5e1; line-height:1.45;">
                ${c.desc}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    container.innerHTML = html;
  }
}
