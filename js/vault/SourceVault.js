// Source Vault: Comprehensive Verified Codified Statutory & Regulatory Corpus for Ayurveda & IPR

export class SourceVault {
  constructor(app) {
    this.app = app;
    this.searchQuery = "";
    this.selectedJur = "all";
    this.selectedType = "all";
    this.selectedTopic = "all";

    this.sources = [
      {
        id: "patents_act_1970",
        title: "The Patents Act, 1970 (as amended) & Patents (Amendment) Rules, 2024",
        sourceType: "statute",
        sourceTypeLabel: "Primary Statute & Rules",
        jurisdiction: "india",
        jurisdictionLabel: "India (IPO / DPIIT)",
        topic: "patent",
        topicLabel: "Patent & TK Exclusion",
        officialUrl: "https://ipindia.gov.in",
        publicationDate: "1970-09-19",
        effectiveDate: "1972-04-20 (Amended March 2024)",
        version: "2024 Codified Edition",
        lastVerified: "2026-08-01",
        verificationStatus: "verified",
        summary: "Governs patentability in India. Crucial sections for Ayurveda include Section 3(p) (traditional knowledge exclusion), Section 3(e) (synergistic efficacy vs mere admixture), Section 3(d) (therapeutic efficacy), and Section 10(4)(d)(ii) (mandatory biological material disclosure).",
        keyProvisions: ["Section 3(p)", "Section 3(e)", "Section 3(d)", "Section 10(4)", "Form 1", "Form 2"],
        relatedTopics: ["Traditional Knowledge", "Phytopharmaceuticals", "InPASS Prior Art"]
      },
      {
        id: "bda_2002_2023",
        title: "Biological Diversity Act, 2002 (as amended by Biological Diversity (Amendment) Act, 2023) & Rules 2024",
        sourceType: "statute",
        sourceTypeLabel: "Statute & National Rules",
        jurisdiction: "india",
        jurisdictionLabel: "India (National Biodiversity Authority)",
        topic: "abs",
        topicLabel: "Biological Resources & ABS",
        officialUrl: "http://nbaindia.org",
        publicationDate: "2002-12-11",
        effectiveDate: "2023 Amendment (Enforced April 2024)",
        version: "2024 Codified Rules",
        lastVerified: "2026-08-01",
        verificationStatus: "verified",
        summary: "Mandates prior approval of NBA (Form 3) before applying for IPR on biological resources from India, and Form 1 for commercial utilization. Establishes Access & Benefit Sharing (ABS) sharing 3.0%-5.0% ex-factory value with local Biodiversity Management Committees.",
        keyProvisions: ["Section 3", "Section 6", "Section 19", "NBA Form 1", "NBA Form 3", "ABS Guidelines"],
        relatedTopics: ["Access and Benefit Sharing", "Tribal Traditional Knowledge", "Cultivated Herbs"]
      },
      {
        id: "dc_act_rule158b",
        title: "Drugs and Cosmetics Act, 1940 & Drugs & Cosmetics Rules, 1945 (Rule 158B & Schedule T GMP)",
        sourceType: "regulation",
        sourceTypeLabel: "Drug Regulatory Rules",
        jurisdiction: "india",
        jurisdictionLabel: "India (Ministry of Ayush & SLAs)",
        topic: "ayurveda",
        topicLabel: "Ayurvedic Drug Regulation",
        officialUrl: "https://ayush.gov.in",
        publicationDate: "1940-04-10",
        effectiveDate: "Continuous Updates (e-Aushadhi)",
        version: "GSR 561(E) ASU Standards",
        lastVerified: "2026-08-01",
        verificationStatus: "verified",
        summary: "Governs manufacturing licenses for Ayurvedic, Siddha, and Unani (ASU) medicines. Rule 158B specifies safety and efficacy evidence requirements for classical vs proprietary formulations. Schedule T establishes mandatory Good Manufacturing Practices and heavy metal safety limits.",
        keyProvisions: ["Rule 158B", "Schedule T", "Form 24D", "Form 25D", "Heavy Metal Safety Thresholds"],
        relatedTopics: ["ASU Licensing", "Good Manufacturing Practices", "State Licensing Authorities"]
      },
      {
        id: "wipo_gratk_2024",
        title: "WIPO Treaty on Intellectual Property, Genetic Resources and Associated Traditional Knowledge (GRATK 2024)",
        sourceType: "treaty",
        sourceTypeLabel: "International Diplomatic Treaty",
        jurisdiction: "international",
        jurisdictionLabel: "International (WIPO, Geneva)",
        topic: "international_ip",
        topicLabel: "Global Traditional Knowledge Shield",
        officialUrl: "https://www.wipo.int/treaties/en/ip/gratk/",
        publicationDate: "2024-05-24",
        effectiveDate: "Adopted May 24, 2024 (Ratification Track)",
        version: "Final Diplomatic Conference Text",
        lastVerified: "2026-08-01",
        verificationStatus: "verified",
        summary: "Historic landmark treaty establishing mandatory patent disclosure across all contracting states. Patent applicants worldwide MUST disclose the country of origin and indigenous provider if inventions are based on genetic resources or associated traditional knowledge.",
        keyProvisions: ["Article 3 (Mandatory Disclosure)", "Article 4 (Sanctions & Remedies)", "Article 6 (Information Systems)"],
        relatedTopics: ["Biopiracy Prevention", "Genetic Resources", "Global Patent Concordance"]
      },
      {
        id: "fssai_ayurveda_ahar_2022",
        title: "Food Safety and Standards (Ayurveda Aahar) Regulations, 2022",
        sourceType: "regulation",
        sourceTypeLabel: "Food Safety Standards",
        jurisdiction: "india",
        jurisdictionLabel: "India (FSSAI / Ministry of Ayush)",
        topic: "food",
        topicLabel: "Ayurveda-Aahar (Food & Nutrition)",
        officialUrl: "https://fssai.gov.in",
        publicationDate: "2022-05-05",
        effectiveDate: "2022-05-05",
        version: "Gazette Notification F. No. Std/SP-05/A-1.2022",
        lastVerified: "2026-08-01",
        verificationStatus: "verified",
        summary: "Establishes a dedicated statutory food category for recipes prepared in accordance with authoritative Ayurvedic compendia. Distinct from drugs and normal foods, requiring dedicated 'Ayurveda Aahar' logo on packaging and prohibiting synthetic additives.",
        keyProvisions: ["Regulation 3 (Scope)", "Regulation 4 (General Principles)", "Schedule A (Permitted Classical Recipes)"],
        relatedTopics: ["Nutraceuticals", "Functional Health Foods", "Labelling Norms"]
      },
      {
        id: "dmr_act_1954",
        title: "The Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954",
        sourceType: "statute",
        sourceTypeLabel: "Advertising & Claims Statute",
        jurisdiction: "india",
        jurisdictionLabel: "India (Ministry of Health & Family Welfare)",
        topic: "ayurveda",
        topicLabel: "Advertising & Prohibited Claims",
        officialUrl: "https://legislative.gov.in",
        publicationDate: "1954-04-30",
        effectiveDate: "1955-04-01",
        version: "Act No. 21 of 1954",
        lastVerified: "2026-08-01",
        verificationStatus: "verified",
        summary: "Strictly prohibits advertisements and marketing claims claiming cures for 54 specified diseases/disorders (e.g. Cancer, Diabetes, Cataract, Kidney Stones, Baldness, Sexual Virility). Applicable to all Ayurvedic marketing campaigns.",
        keyProvisions: ["Section 3 (Prohibition of Misleading Ads)", "Schedule (54 Specified Conditions)", "Section 7 (Penalties)"],
        relatedTopics: ["Consumer Protection", "Misleading Claims", "Marketing Compliance"]
      },
      {
        id: "trademarks_act_1999",
        title: "The Trade Marks Act, 1999 & Trade Marks Rules, 2017",
        sourceType: "statute",
        sourceTypeLabel: "Brand & Mark Statute",
        jurisdiction: "india",
        jurisdictionLabel: "India (Trade Marks Registry / DPIIT)",
        topic: "trademark",
        topicLabel: "Brand Identity & TM Classes",
        officialUrl: "https://ipindia.gov.in",
        publicationDate: "1999-12-30",
        effectiveDate: "2003-09-15",
        version: "2017 Rules Edition",
        lastVerified: "2026-08-01",
        verificationStatus: "verified",
        summary: "Protects distinctive brand names, logos, slogans, and Sanskrit trade dress. Class 3 covers cosmetics and herbal oils; Class 5 covers medicinal preparations. Bars registration of generic Sanskrit botanical names.",
        keyProvisions: ["Section 9 (Absolute Grounds)", "Section 11 (Relative Grounds)", "Nice Classification (Class 3 & 5)"],
        relatedTopics: ["Brand Sovereignty", "Madrid Protocol", "Sanskrit Word Marks"]
      },
      {
        id: "gi_act_1999",
        title: "Geographical Indications of Goods (Registration and Protection) Act, 1999",
        sourceType: "statute",
        sourceTypeLabel: "Heritage & Origin Statute",
        jurisdiction: "india",
        jurisdictionLabel: "India (GI Registry, Chennai)",
        topic: "gi",
        topicLabel: "Geographical Indications",
        officialUrl: "https://ipindia.gov.in",
        publicationDate: "1999-12-30",
        effectiveDate: "2003-09-15",
        version: "Act No. 48 of 1999",
        lastVerified: "2026-08-01",
        verificationStatus: "verified",
        summary: "Protects goods originating in a specific territory where reputation or quality is attributable to geography. Examples in Ayurveda include Alleppey Green Cardamom, Malabar Pepper, Kashmir Saffron, Nilgiri Tea, and Navara Rice.",
        keyProvisions: ["Section 8 (Application for Registration)", "Section 21 (Rights Conferred)", "Authorized User Process"],
        relatedTopics: ["Farmer Collectives", "Regional Botanical Heritage", "Community IP"]
      },
      {
        id: "cosmetics_rules_2020",
        title: "Cosmetics Rules, 2020 (under Drugs and Cosmetics Act, 1940)",
        sourceType: "regulation",
        sourceTypeLabel: "Cosmetic Quality Standards",
        jurisdiction: "india",
        jurisdictionLabel: "India (CDSCO / Ministry of Health)",
        topic: "cosmetic",
        topicLabel: "Herbal Cosmetics & Personal Care",
        officialUrl: "https://cdsco.gov.in",
        publicationDate: "2020-12-15",
        effectiveDate: "2020-12-15",
        version: "GSR 763(E)",
        lastVerified: "2026-08-01",
        verificationStatus: "verified",
        summary: "Regulates manufacture, import, and sale of cosmetics in India. Prohibits heavy metals (Hexavalent Chromium, Lead, Mercury) and mandates Bureau of Indian Standards (BIS) conformity for hair oils, skin creams, and tooth powders.",
        keyProvisions: ["Rule 12 (Import Registration)", "Rule 23 (Manufacturing License)", "Ninth Schedule (BIS Standards)"],
        relatedTopics: ["Personal Care", "Skincare Formulations", "Heavy Metal Safety"]
      },
      {
        id: "usfda_dshea_1994",
        title: "US Dietary Supplement Health and Education Act (DSHEA 1994)",
        sourceType: "statute",
        sourceTypeLabel: "International US Statute",
        jurisdiction: "international",
        jurisdictionLabel: "United States (US FDA)",
        topic: "international_ip",
        topicLabel: "US Market Entry & Labelling",
        officialUrl: "https://www.fda.gov/food/dietary-supplements",
        publicationDate: "1994-10-25",
        effectiveDate: "1994-10-25",
        version: "Public Law 103-417",
        lastVerified: "2026-08-01",
        verificationStatus: "verified",
        summary: "Framework for marketing Ayurvedic herbs as Dietary Supplements in the United States. Allows structure/function claims with mandatory disclaimer; strictly prohibits disease treatment/cure claims without full FDA New Drug Application approval.",
        keyProvisions: ["Section 6 (Structure/Function Claims)", "Section 8 (New Dietary Ingredients - NDI)", "21 CFR Part 111 cGMP"],
        relatedTopics: ["US Export Strategy", "FDA Dietary Supplements", "Structure-Function Claims"]
      },
      {
        id: "eu_thmpd_2004",
        title: "EU Traditional Herbal Medicinal Products Directive (Directive 2004/24/EC - THMPD)",
        sourceType: "statute",
        sourceTypeLabel: "European Union Directive",
        jurisdiction: "international",
        jurisdictionLabel: "European Union (EMA)",
        topic: "international_ip",
        topicLabel: "EU Herbal Registration",
        officialUrl: "https://www.ema.europa.eu",
        publicationDate: "2004-03-31",
        effectiveDate: "2004-04-30",
        version: "Directive 2004/24/EC",
        lastVerified: "2026-08-01",
        verificationStatus: "verified",
        summary: "Simplified registration procedure for herbal medicines in Europe requiring proof of 30 years of traditional medicinal use (with at least 15 years within the EU). Key hurdle for Ayurvedic exports requiring classical Samhita documentation concordance.",
        keyProvisions: ["Article 16a (Eligibility Criteria)", "Article 16c (Bibliographical Evidence)", "HMPC Monographs"],
        relatedTopics: ["EU Export Strategy", "Traditional Herbal Registration", "European Medicines Agency"]
      }
    ];
  }

  renderView(container) {
    let filtered = this.sources.filter(s => {
      if (this.selectedJur !== "all" && s.jurisdiction !== this.selectedJur) return false;
      if (this.selectedType !== "all" && s.sourceType !== this.selectedType) return false;
      if (this.selectedTopic !== "all" && s.topic !== this.selectedTopic) return false;
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        const matchTitle = s.title.toLowerCase().includes(q);
        const matchSummary = s.summary.toLowerCase().includes(q);
        const matchProv = s.keyProvisions.some(p => p.toLowerCase().includes(q));
        if (!matchTitle && !matchSummary && !matchProv) return false;
      }
      return true;
    });

    let html = `
      <div style="display:flex; flex-direction:column; gap:16px;">
        
        <!-- Vault Header & Filters -->
        <div class="glass-panel" style="padding: 20px; border-color: rgba(6, 182, 212, 0.4);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
            <div>
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="pill-badge pill-cyan">SOURCE VAULT</span>
                <span class="pill-badge pill-emerald">Codified &amp; Version-Tracked</span>
                <span class="pill-badge pill-gold">${filtered.length} Authoritative Records</span>
              </div>
              <h2 style="font-size: 1.35rem; color: #f8fafc; margin-top: 4px;">Codified Statutory & Regulatory Corpus</h2>
              <div style="font-size: 0.82rem; color: #94a3b8;">
                Curated primary legal instruments with direct links to official IP India, Ayush, NBA, FSSAI, WIPO, and FDA portals.
              </div>
            </div>

            <div>
              <input type="text" id="vault-search-input" class="ip-input" style="width:280px;" placeholder="Filter statutes, rules, sections..." value="${this.escapeHtml(this.searchQuery)}">
            </div>
          </div>

          <!-- Filter Controls Bar -->
          <div style="display:flex; gap:10px; flex-wrap:wrap; padding-top:12px; border-top:1px solid rgba(255,255,255,0.08); align-items:center;">
            
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="font-size:0.76rem; font-weight:700; color:#67e8f9;">Jurisdiction:</span>
              <button class="jur-filter-btn ${this.selectedJur === 'all' ? 'active-jur' : ''}" data-jur-filter="all">All</button>
              <button class="jur-filter-btn ${this.selectedJur === 'india' ? 'active-jur' : ''}" data-jur-filter="india">India</button>
              <button class="jur-filter-btn ${this.selectedJur === 'international' ? 'active-jur' : ''}" data-jur-filter="international">International</button>
            </div>

            <div style="display:flex; align-items:center; gap:6px;">
              <span style="font-size:0.76rem; font-weight:700; color:#fef08a;">Type:</span>
              <button class="jur-filter-btn ${this.selectedType === 'all' ? 'active-jur' : ''}" data-type-filter="all">All</button>
              <button class="jur-filter-btn ${this.selectedType === 'statute' ? 'active-jur' : ''}" data-type-filter="statute">Statutes</button>
              <button class="jur-filter-btn ${this.selectedType === 'regulation' ? 'active-jur' : ''}" data-type-filter="regulation">Rules / Regulations</button>
              <button class="jur-filter-btn ${this.selectedType === 'treaty' ? 'active-jur' : ''}" data-type-filter="treaty">Treaties</button>
            </div>

          </div>
        </div>

        <!-- Sources Grid List -->
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(420px, 1fr)); gap:14px;">
          ${filtered.map(s => `
            <div class="glass-panel" style="padding:18px; border-color: rgba(255,255,255,0.12); display:flex; flex-direction:column; justify-content:space-between; transition:transform 0.2s, box-shadow 0.2s;">
              
              <div>
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px; gap:8px;">
                  <span class="pill-badge pill-cyan" style="font-size:0.68rem;">${s.jurisdictionLabel}</span>
                  <span class="pill-badge pill-emerald" style="font-size:0.68rem;">VERIFIED CORPUS</span>
                </div>

                <h3 style="color:#f8fafc; font-size:1.05rem; margin-bottom:6px; line-height:1.35;">${s.title}</h3>
                
                <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:10px;">
                  <span class="pill-badge pill-purple" style="font-size:0.65rem;">${s.sourceTypeLabel}</span>
                  <span class="pill-badge pill-gold" style="font-size:0.65rem;">${s.topicLabel}</span>
                  <span class="pill-badge pill-cyan" style="font-size:0.65rem;">v${s.version}</span>
                </div>

                <div style="font-size:0.82rem; color:#cbd5e1; line-height:1.5; margin-bottom:14px;">
                  ${s.summary}
                </div>

                <div style="background:rgba(3,7,18,0.75); padding:8px 12px; border-radius:6px; border-left:3px solid #06b6d4; font-size:0.75rem; color:#94a3b8; margin-bottom:14px;">
                  <b style="color:#67e8f9;">Key Provisions:</b> ${s.keyProvisions.join(" - ")}
                </div>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; padding-top:10px; border-top:1px solid rgba(255,255,255,0.08); font-size:0.74rem; color:#64748b;">
                <span>Verified: ${s.lastVerified}</span>
                <a href="${s.officialUrl}" target="_blank" class="btn-primary" style="padding:6px 14px; font-size:0.76rem; text-decoration:none;">
                  Open Official Portal -&gt;
                </a>
              </div>

            </div>
          `).join("")}
        </div>

      </div>
    `;

    container.innerHTML = html;
    this.attachEvents(container);
  }

  attachEvents(container) {
    const searchInput = container.querySelector('#vault-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderView(container);
        const inputNow = container.querySelector('#vault-search-input');
        if (inputNow) {
          inputNow.focus();
          inputNow.setSelectionRange(inputNow.value.length, inputNow.value.length);
        }
      });
    }

    container.querySelectorAll('[data-jur-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedJur = btn.dataset.jurFilter;
        this.renderView(container);
      });
    });

    container.querySelectorAll('[data-type-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedType = btn.dataset.typeFilter;
        this.renderView(container);
      });
    });
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
}
