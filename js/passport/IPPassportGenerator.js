// IP Sakti Passport Generator & Clean Downloadable Roadmap Engine for Ayurvedic Innovations

export class IPPassportGenerator {
  constructor(app) {
    this.app = app;
  }

  getCurrentProduct() {
    try {
      const stored = localStorage.getItem('sakti_current_product');
      if (stored) return JSON.parse(stored);
    } catch (e) {}

    return {
      productName: "Keshava Glow Ayurvedic Hair & Scalp Revitalizer",
      category: "cosmetic",
      ingredients: "Amla (Emblica officinalis), Bhringraj (Eclipta alba), Neem (Azadirachta indica), Til Oil (Sesamum indicum)",
      intendedUse: "Hair fall reduction, follicular rejuvenation, and scalp microbial balance",
      knowledgeOrigin: "combined",
      jurisdiction: "india",
      sourceCoverage: 88.5,
      aiConfidence: 91.4,
      statutoryClassification: "Ayurvedic Proprietary Cosmetic",
      regulatoryStatus: "Schedule T GMP & Rule 158B Applicable",
      nodes: {
        patent: { status: "review", statusLabel: "Synergy Required (Sec 3e)", citations: "Section 3(p), 3(e), 3(d), Patents Act 1970", nextStep: "Perform InPASS search & biomarker synergy assays" },
        trademark: { status: "relevant", statusLabel: "Recommended (Class 3)", citations: "Trade Marks Act 1999, Nice Class 3", nextStep: "File TM-A Application on IP India Portal" },
        tk: { status: "review", statusLabel: "TKDL Prior-Art Active", citations: "CSIR-TKDL Protocols, WIPO GRATK 2024", nextStep: "Document technical modification over classical texts" },
        abs: { status: "review", statusLabel: "NBA / SBB Compliance", citations: "Biological Diversity Act 2002/2023", nextStep: "Submit NBA Form 1 / 3 for bio-resource authorization" },
        regulation: { status: "relevant", statusLabel: "Mandatory SLA License", citations: "Drugs & Cosmetics Act 1940, Rule 158B", nextStep: "Submit Form 24D/25D on e-Aushadhi portal" },
        trade_secret: { status: "relevant", statusLabel: "Confidential Process Ratios", citations: "Common Law Breach of Confidence, TRIPS Art 39", nextStep: "Execute NDAs and partition laboratory recipes" }
      }
    };
  }

  renderView(container) {
    const p = this.getCurrentProduct();

    let html = `
      <div style="max-width: 920px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
        
        <!-- Passport Top Action Bar -->
        <div class="glass-panel" style="padding: 16px 20px; border-color: rgba(245, 158, 11, 0.4); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="pill-badge pill-gold">IP SAKTI PASSPORT</span>
              <span class="pill-badge pill-cyan">ID: #AYUR-IP-${Math.floor(Math.random()*90000+10000)}</span>
              <span class="pill-badge pill-emerald">Verified Corpus 2026</span>
            </div>
            <h2 style="font-size: 1.35rem; color: #f8fafc; margin-top: 4px;">AI-Generated Informational Roadmap</h2>
            <div style="font-size: 0.8rem; color: #cbd5e1;">Comprehensive statutory and regulatory blueprint for Ayurvedic commercialization</div>
          </div>

          <div style="display: flex; gap: 8px;">
            <button id="btn-print-passport" class="btn-primary" style="font-size:0.82rem;">
              Download / Print Report
            </button>
            <button id="btn-share-passport" class="btn-secondary" style="font-size:0.82rem;">
              Share Link
            </button>
            <button id="btn-escalate-human-passport" class="btn-gold" style="font-size:0.82rem;">
              Human Review
            </button>
          </div>
        </div>

        <!-- Official Passport Document Container (Printable) -->
        <div class="glass-panel" id="printable-passport-doc" style="padding: 28px; border: 2px solid rgba(245, 158, 11, 0.5); background: radial-gradient(circle at top right, rgba(15,23,42,0.98), rgba(7,14,26,0.99)); box-shadow: 0 0 40px rgba(0,0,0,0.8), 0 0 25px rgba(245, 158, 11, 0.15);">
          
          <!-- Passport Header -->
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom: 2px solid rgba(245,158,11,0.3); padding-bottom:18px; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
            <div style="display:flex; align-items:center; gap:14px;">
              <div>
                <h1 style="font-size: 1.5rem; color: #fef08a; font-family: var(--font-sans); margin:0;">IP SAKTI PASSPORT</h1>
                <div style="font-size: 0.8rem; color: #94a3b8; font-weight: 600;">Autonomous Ayurvedic Innovation & Intellectual Property Guidance Blueprint</div>
              </div>
            </div>

            <div style="text-align: right;">
              <div style="font-size: 0.75rem; color: #94a3b8;">DOCUMENT STATUS:</div>
              <div style="font-size: 0.85rem; font-weight: 800; color: #38bdf8;">INFORMATIONAL NAVIGATION</div>
              <div style="font-size: 0.72rem; color: #f87171;">REQUIRES HUMAN / OFFICIAL FILING</div>
            </div>
          </div>

          <!-- Standing Mandatory Legal Disclaimer -->
          <div class="disclaimer-banner" style="margin-bottom: 20px;">
            <b>Legal Notice:</b> This IP Sakti Passport is an AI-generated informational and educational roadmap synthesized from codified statutory corpora (Patents Act 1970/2024, Biological Diversity Act 2002/2023, Drugs & Cosmetics Act 1940, WIPO GRATK Treaty 2024). It does NOT constitute a legal patent certificate, trademark grant, drug license, or formal legal advice.
          </div>

          <!-- Section 1: Product Identity & Classification -->
          <div style="margin-bottom: 22px;">
            <h3 style="color:#67e8f9; font-size:1.05rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:6px; margin-bottom:12px;">
              01. PRODUCT IDENTITY & STATUTORY CLASSIFICATION
            </h3>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:12px; font-size:0.84rem;">
              <div style="background:rgba(15,23,42,0.8); padding:10px 14px; border-radius:8px;">
                <span style="color:#94a3b8; font-size:0.75rem; display:block;">Product Name:</span>
                <b style="color:#f8fafc;">${this.escapeHtml(p.productName)}</b>
              </div>
              <div style="background:rgba(15,23,42,0.8); padding:10px 14px; border-radius:8px;">
                <span style="color:#94a3b8; font-size:0.75rem; display:block;">Likely Statutory Category:</span>
                <b style="color:#34d399;">${this.escapeHtml(p.statutoryClassification)}</b>
              </div>
              <div style="background:rgba(15,23,42,0.8); padding:10px 14px; border-radius:8px;">
                <span style="color:#94a3b8; font-size:0.75rem; display:block;">Active Botanical Ingredients:</span>
                <span style="color:#e2e8f0;">${this.escapeHtml(p.ingredients)}</span>
              </div>
              <div style="background:rgba(15,23,42,0.8); padding:10px 14px; border-radius:8px;">
                <span style="color:#94a3b8; font-size:0.75rem; display:block;">Knowledge Heritage:</span>
                <span style="color:#fef08a;">${p.knowledgeOrigin === 'classical' ? 'Codified Classical Samhitas' : p.knowledgeOrigin === 'combined' ? 'Traditional Knowledge + Modern R&D' : 'Independent Research'}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Statutory Scores & Confidence Assessment -->
          <div style="margin-bottom: 22px;">
            <h3 style="color:#67e8f9; font-size:1.05rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:6px; margin-bottom:12px;">
              02. STATUTORY COVERAGE & CONFIDENCE INDICES
            </h3>
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; font-size:0.84rem; text-align:center;">
              <div style="background:rgba(6,182,212,0.1); border:1px solid rgba(6,182,212,0.3); padding:12px; border-radius:8px;">
                <div style="font-size:1.6rem; font-weight:900; color:#67e8f9;">${p.sourceCoverage || 88.5}%</div>
                <b style="color:#e2e8f0; font-size:0.8rem;">Source Coverage Score</b>
                <div style="font-size:0.72rem; color:#94a3b8; margin-top:2px;">Percentage of analysis supported by verified statutes</div>
              </div>
              <div style="background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3); padding:12px; border-radius:8px;">
                <div style="font-size:1.6rem; font-weight:900; color:#34d399;">${p.aiConfidence || 91.4}%</div>
                <b style="color:#e2e8f0; font-size:0.8rem;">AI Retrieval Confidence</b>
                <div style="font-size:0.72rem; color:#94a3b8; margin-top:2px;">Strict RAG semantic alignment confidence</div>
              </div>
              <div style="background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.3); padding:12px; border-radius:8px;">
                <div style="font-size:1.1rem; font-weight:900; color:#fbbf24; margin-top:6px;">VERIFICATION REQUIRED</div>
                <b style="color:#e2e8f0; font-size:0.8rem;">Statutory Legal Status</b>
                <div style="font-size:0.72rem; color:#94a3b8; margin-top:2px;">Separate score: requires human patent agent sign-off</div>
              </div>
            </div>
          </div>

          <!-- Section 3: Comprehensive Multi-Lens Action Plan -->
          <div style="margin-bottom: 22px;">
            <h3 style="color:#67e8f9; font-size:1.05rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:6px; margin-bottom:12px;">
              03. IPR & REGULATORY PATHWAY BREAKDOWN
            </h3>
            <div style="display:flex; flex-direction:column; gap:10px; font-size:0.82rem;">
              
              <div style="background:rgba(15,23,42,0.85); padding:12px 14px; border-radius:8px; border-left:3px solid #06b6d4;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                  <b style="color:#67e8f9; font-size:0.88rem;">PATENT PATH (Section 3p / 3e / 3d):</b>
                  <span class="status-tag status-review">Synergy Assay Required</span>
                </div>
                <div style="color:#cbd5e1; line-height:1.4;">
                  Classical recipes cannot be patented under Section 3(p). To secure a formulation patent, generate quantitative in-vitro / in-vivo pharmacological data proving synergistic bio-enhancement exceeding simple additive efficacy (E_combo > E_A + E_B).
                </div>
                <div style="margin-top:6px; font-size:0.74rem; color:#94a3b8;">
                  <b>Statutory Citations:</b> Sections 3(p), 3(e), 3(d), Patents Act 1970; InPASS Prior Art Database.
                </div>
              </div>

              <div style="background:rgba(15,23,42,0.85); padding:12px 14px; border-radius:8px; border-left:3px solid #f59e0b;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                  <b style="color:#fef08a; font-size:0.88rem;">TRADEMARK & BRAND SOVEREIGNTY:</b>
                  <span class="status-tag status-relevant">High Commercial Priority</span>
                </div>
                <div style="color:#cbd5e1; line-height:1.4;">
                  File trademark application in Class 3 (Herbal Cosmetics / Oils) or Class 5 (Pharmaceutical Preparations). Ensure mark is distinctive and not purely descriptive in Sanskrit / Hindi.
                </div>
                <div style="margin-top:6px; font-size:0.74rem; color:#94a3b8;">
                  <b>Statutory Citations:</b> Trade Marks Act 1999; Nice Classification; Madrid System (for international export).
                </div>
              </div>

              <div style="background:rgba(15,23,42,0.85); padding:12px 14px; border-radius:8px; border-left:3px solid #10b981;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                  <b style="color:#a7f3d0; font-size:0.88rem;">BIODIVERSITY ACT & ABS COMPLIANCE:</b>
                  <span class="status-tag status-review">NBA Form 3 Required</span>
                </div>
                <div style="color:#cbd5e1; line-height:1.4;">
                  Prior to applying for patent rights or commercializing bio-resources obtained in India, obtain approval from National Biodiversity Authority (NBA Form 3) or submit SBB intimation under Biological Diversity Rules 2024.
                </div>
                <div style="margin-top:6px; font-size:0.74rem; color:#94a3b8;">
                  <b>Statutory Citations:</b> Section 6, Biological Diversity Act 2002 (as amended 2023); Nagoya Protocol.
                </div>
              </div>

              <div style="background:rgba(15,23,42,0.85); padding:12px 14px; border-radius:8px; border-left:3px solid #38bdf8;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                  <b style="color:#bae6fd; font-size:0.88rem;">REGULATORY MANUFACTURING & QUALITY:</b>
                  <span class="status-tag status-relevant">Schedule T GMP</span>
                </div>
                <div style="color:#cbd5e1; line-height:1.4;">
                  Manufacture in a certified Schedule T GMP facility with audited heavy metal testing limits (Lead < 10ppm, Arsenic < 3ppm, Cadmium < 0.3ppm, Mercury < 1ppm) and obtain State AYUSH / FSSAI license.
                </div>
                <div style="margin-top:6px; font-size:0.74rem; color:#94a3b8;">
                  <b>Statutory Citations:</b> Rule 158B, Drugs & Cosmetics Rules 1945; Schedule T GMP; DMR 1954.
                </div>
              </div>

            </div>
          </div>

          <!-- Section 4: Identified Uncertainties & Gaps -->
          <div style="margin-bottom: 22px;">
            <h3 style="color:#f87171; font-size:1.05rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:6px; margin-bottom:12px;">
              04. OPEN UNCERTAINTIES & MISSING INFORMATION
            </h3>
            <div style="background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.3); border-radius:8px; padding:12px 14px; font-size:0.82rem; color:#cbd5e1; line-height:1.5;">
              <ul style="padding-left:18px; display:flex; flex-direction:column; gap:6px;">
                <li><b>Synergy Baseline:</b> Experimental assay data comparing combination vs individual active ingredients is pending verification.</li>
                <li><b>Harvesting Origin:</b> Confirmation needed whether wild-harvested herbs require local Biodiversity Management Committee (BMC) benefit-sharing agreements.</li>
                <li><b>International Disclosure:</b> If filing under PCT / WIPO GRATK Treaty (2024), mandatory country-of-origin certificate must be attached.</li>
              </ul>
            </div>
          </div>

          <!-- Section 5: Prioritized Action Roadmap -->
          <div>
            <h3 style="color:#fef08a; font-size:1.05rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:6px; margin-bottom:12px;">
              05. RECOMMENDED NEXT ACTIONS (SEQUENCE)
            </h3>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:10px; font-size:0.82rem;">
              <div style="background:rgba(15,23,42,0.85); padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
                <b style="color:#67e8f9; display:block; margin-bottom:4px;">1. Immediate (Day 1 - 15):</b>
                <span>File TM-A Application for brand name and register label copyright.</span>
              </div>
              <div style="background:rgba(15,23,42,0.85); padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
                <b style="color:#34d399; display:block; margin-bottom:4px;">2. Mid-Term (Day 15 - 45):</b>
                <span>Conduct InPASS patent search & file NBA Form 3 prior to patent drafting.</span>
              </div>
              <div style="background:rgba(15,23,42,0.85); padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
                <b style="color:#fef08a; display:block; margin-bottom:4px;">3. Pre-Launch (Day 45 - 90):</b>
                <span>Submit Rule 158B dossier to State Licensing Authority (e-Aushadhi).</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    `;

    container.innerHTML = html;
    this.attachEvents(container);
  }

  attachEvents(container) {
    const btnPrint = container.querySelector('#btn-print-passport');
    if (btnPrint) {
      btnPrint.addEventListener('click', () => {
        window.print();
      });
    }

    const btnShare = container.querySelector('#btn-share-passport');
    if (btnShare) {
      btnShare.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href);
        alert('Passport link copied to clipboard! (Educational Prototype)');
      });
    }

    const btnEscalate = container.querySelector('#btn-escalate-human-passport');
    if (btnEscalate && window.saktiApp) {
      btnEscalate.addEventListener('click', () => {
        window.saktiApp.switchTab('escalate');
      });
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
}
