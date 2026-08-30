// IP Constellation Interactive Orbital Visualizer & Multi-Node Inspector Panel for Ayurvedic Innovations

export class IPConstellation {
  constructor(app) {
    this.app = app;
    this.canvas = null;
    this.ctx = null;
    this.animationFrame = null;
    this.angle = 0;
    this.selectedNodeKey = 'patent';
    this.hoveredNodeKey = null;

    this.defaultProduct = {
      productName: "Keshava Glow Ayurvedic Hair & Scalp Revitalizer",
      category: "cosmetic",
      ingredients: "Amla, Bhringraj, Neem, Til Oil",
      knowledgeOrigin: "combined",
      sourceCoverage: 88.5,
      aiConfidence: 91.4,
      statutoryClassification: "Ayurvedic Proprietary Cosmetic",
      nodes: {
        patent: {
          key: "patent",
          icon: "",
          label: "PATENT",
          status: "review", // relevant, review, not_relevant, human_review
          statusLabel: "Synergy & Extraction Review",
          title: "Patent Protection Pathway",
          meaning: "Covers non-obvious synergistic formulations (Sec 3e), novel botanical extraction processes, and nanocarrier drug delivery.",
          why: "Classical text recipes are public domain prior art under Section 3(p). For proprietary blends, applicant must prove statistically significant synergy (E_combo > E_A + E_B).",
          verify: "Conduct complete InPASS patent landscape search and generate quantitative synergistic biomarker assay data.",
          citations: "Section 3(p), 3(e), 3(d), Patents Act 1970; Patent (Amendment) Rules 2024.",
          nextStep: "Draft provisional specification (Form 1 & Form 2) or protect critical extraction parameters as trade secrets."
        },
        trademark: {
          key: "trademark",
          icon: "(TM)",
          label: "TRADEMARK",
          status: "relevant",
          statusLabel: "Highly Recommended",
          title: "Trademark & Brand Sovereignty",
          meaning: "Protects distinctive brand name, product logo, and Sanskrit word marks in Class 3 (Cosmetics) or Class 5 (Pharmaceuticals).",
          why: "Prevents competitors from misleading consumers with deceptively similar Ayurvedic brand names.",
          verify: "Verify non-descriptiveness under Trade Marks Act Section 9 and search TM Class 3 / 5 registry.",
          citations: "Trade Marks Act 1999; Nice Classification (Class 3 & Class 5); Madrid System for global filing.",
          nextStep: "File TM-A Application on IP India Portal before public commercial release."
        },
        gi: {
          key: "gi",
          icon: "",
          label: "GI",
          status: "not_relevant",
          statusLabel: "Optional Regional Association",
          title: "Geographical Indications (GI)",
          meaning: "Recognizes products whose reputation is attributable to specific geographical origin.",
          why: "Protects regional farmer collectives (e.g., Alleppey Cardamom, Nilgiri Tea, Kashmir Saffron).",
          verify: "Verify if botanical raw ingredients are sourced from authorized GI producer cooperatives.",
          citations: "Geographical Indications of Goods (Registration & Protection) Act 1999.",
          nextStep: "Obtain Authorized User certification if sourcing registered GI raw materials."
        },
        copyright: {
          key: "copyright",
          icon: "",
          label: "COPYRIGHT",
          status: "relevant",
          statusLabel: "Packaging & Artwork Protection",
          title: "Copyright & Artistic Trade Dress",
          meaning: "Protects original label artwork, packaging graphic compositions, and informational user brochures.",
          why: "Automatic protection arises upon creation, establishing legal recourse against counterfeit packaging clones.",
          verify: "Ensure all artwork and packaging copy are original work and obtain designer NOC / assignment deeds.",
          citations: "Copyright Act 1957; Berne Convention for the Protection of Literary and Artistic Works.",
          nextStep: "File Form XIV with the Copyright Office for statutory certificate of registration."
        },
        design: {
          key: "design",
          icon: "",
          label: "DESIGN",
          status: "relevant",
          statusLabel: "Applicator / Bottle Shape",
          title: "Industrial Design Rights",
          meaning: "Protects the unique aesthetic shape, 3D contours, and surface ornamentation of containers or herbal applicators.",
          why: "Grants 10-15 years exclusivity on novel bottle ergonomics without disclosing chemical formulation.",
          verify: "Ensure container shape is novel and has not been published anywhere globally prior to filing.",
          citations: "Designs Act 2000; Locarno Classification (Class 09 - Packages and Containers).",
          nextStep: "File Design Application on Form 1 with 6-angle isometric photographic representations."
        },
        trade_secret: {
          key: "trade_secret",
          icon: "",
          label: "TRADE SECRET",
          status: "relevant",
          statusLabel: "Confidential Process Ratios",
          title: "Trade Secret & Formulation Confidentiality",
          meaning: "Protecting proprietary multi-herb extraction temperature curves, solvent ratios, and fermentation timing.",
          why: "Unlike patents, trade secrets never expire and do not require public disclosure in searchable patent gazettes.",
          verify: "Implement strict NDAs, restricted laboratory clean-room access, and segmented recipe batch records.",
          citations: "Indian Common Law of Breach of Confidence; TRIPS Article 39 (Undisclosed Information).",
          nextStep: "Execute NDAs with co-packers and partition manufacturing process steps."
        },
        tk: {
          key: "tk",
          icon: "",
          label: "TRADITIONAL KNOWLEDGE",
          status: "review",
          statusLabel: "TKDL Prior-Art Active",
          title: "Traditional Knowledge Lens & Samhita Concordance",
          meaning: "Concordance with 4.4 Lakh TKDL formulation dossiers and First Schedule Samhitas.",
          why: "Indian and international patent examiners cross-check TKDL dossiers to prevent wrongful biopiracy patents.",
          verify: "Verify if ancient text specifies identical ratio, therapeutic indication, and vehicle (Anupana).",
          citations: "CSIR-TKDL Access Protocols; WIPO GRATK Treaty (Adopted May 2024); Section 3(p) Patents Act.",
          nextStep: "Document technical modifications, novel extraction methods, or additive clinical efficacy."
        },
        abs: {
          key: "abs",
          icon: "",
          label: "ABS / BIO-RESOURCE",
          status: "review",
          statusLabel: "NBA / SBB Compliance",
          title: "Biological Diversity & Access and Benefit Sharing",
          meaning: "Access and Benefit Sharing under Biological Diversity Act 2002 & Amendment Act 2023.",
          why: "Commercial utilization of Indian bio-resources mandates sharing 3.0% to 5.0% benefit sharing with local biodiversity committees.",
          verify: "Verify whether registered AYUSH practitioners or cultivated bio-resources qualify for exemption under 2023 Amendment.",
          citations: "Biological Diversity Act 2002 (as amended 2023); Biological Diversity Rules 2024; Nagoya Protocol.",
          nextStep: "File NBA Form 1 (Commercial Utilization) or NBA Form 3 prior to applying for IPR."
        },
        regulation: {
          key: "regulation",
          icon: "",
          label: "REGULATION",
          status: "relevant",
          statusLabel: "Mandatory Quality & Licensing",
          title: "Ayurvedic Regulatory Framework & GMP",
          meaning: "State Licensing Authority (SLA) ASU drug license, Schedule T GMP, or FSSAI Ayurveda-Aahar approval.",
          why: "Ensures heavy metal safety limits (Pb < 10ppm, As < 3ppm, Cd < 0.3ppm, Hg < 1ppm) and prevents misleading claims under DMR 1954.",
          verify: "Perform batch analytical testing and prepare Rule 158B safety/efficacy dossier.",
          citations: "Drugs & Cosmetics Act 1940; Rule 158B; Schedule T GMP; DMR (Objectionable Advertisements) Act 1954.",
          nextStep: "Submit Form 24D / 25D to State AYUSH Licensing Authority (e-Aushadhi)."
        },
        international: {
          key: "international",
          icon: "",
          label: "INTERNATIONAL",
          status: "review",
          statusLabel: "Global Treaties & Export",
          title: "Global IP & Export Market Lens",
          meaning: "PCT international patent filings, WIPO GRATK Treaty mandatory disclosure, USFDA DSHEA, EU THMPD.",
          why: "Exporting Ayurvedic formulations requires distinct labelling compliance (Dietary Supplement in US, Traditional Herbal Medicine in EU).",
          verify: "Ensure absence of prohibited animal/mineral ingredients and disclose biological resource country of origin.",
          citations: "WIPO GRATK Treaty (May 2024); US Dietary Supplement Health & Education Act (DSHEA 1994); EU Directive 2004/24/EC.",
          nextStep: "File PCT application within 12-month Paris Convention priority window."
        }
      }
    };
  }

  getCurrentProduct() {
    try {
      const stored = localStorage.getItem('sakti_current_product');
      if (stored) {
        const parsed = JSON.parse(stored);
        return { ...this.defaultProduct, ...parsed };
      }
    } catch (e) {}
    return this.defaultProduct;
  }

  renderView(container) {
    const product = this.getCurrentProduct();
    const activeNode = product.nodes[this.selectedNodeKey] || product.nodes.patent;

    let html = `
      <div style="display:flex; flex-direction:column; gap:16px;">
        
        <!-- Header Controls -->
        <div class="glass-panel" style="padding: 16px 20px; border-color: rgba(6, 182, 212, 0.4); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="pill-badge pill-cyan">IP CONSTELLATION MAP</span>
              <span class="pill-badge pill-emerald">Coverage: ${product.sourceCoverage || 88.5}%</span>
              <span class="pill-badge pill-gold">AI Confidence: ${product.aiConfidence || 91.4}%</span>
            </div>
            <h2 style="font-size: 1.3rem; color: #f8fafc; margin-top: 4px;">${this.escapeHtml(product.productName)}</h2>
            <div style="font-size: 0.82rem; color: #94a3b8;">
              Category: <b style="color:#67e8f9;">${this.escapeHtml(product.statutoryClassification)}</b> | Actives: <i>${this.escapeHtml(product.ingredients)}</i>
            </div>
          </div>

          <div style="display:flex; gap:8px;">
            <button id="btn-relaunch-journey" class="btn-secondary" style="font-size:0.8rem;">
              Edit Inputs
            </button>
            <button id="btn-open-passport-direct" class="btn-gold" style="font-size:0.8rem;">
              View IP Passport ->
            </button>
          </div>
        </div>

        <!-- Main Interactive Constellation Layout -->
        <div style="display:grid; grid-template-columns: 1fr 380px; gap:16px; align-items:start;" id="constellation-grid-layout">
          
          <!-- Left: Orbiting Canvas Visualizer -->
          <div class="constellation-container" id="constellation-canvas-box">
            <canvas id="constellation-canvas" style="width:100%; height:520px; display:block;"></canvas>
            
            <div style="position:absolute; bottom:12px; left:12px; right:12px; display:flex; justify-content:space-between; align-items:center; background:rgba(3,7,18,0.85); padding:8px 14px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); font-size:0.75rem; color:#94a3b8; pointer-events:none;">
              <div style="display:flex; gap:12px;">
                <span>[GREEN] Relevant</span>
                <span>[YELLOW] Review Needed</span>
                <span>[WHITE] Not Relevant</span>
                <span>[RED] Human Review</span>
              </div>
              <div>Click any node to inspect</div>
            </div>
          </div>

          <!-- Right: Glass Node Inspector Drawer -->
          <div class="glass-panel" style="padding: 20px; border-color: rgba(6, 182, 212, 0.4); min-height: 520px;" id="node-inspector-panel">
            ${this.renderNodeInspectorContent(activeNode)}
          </div>

        </div>

      </div>
    `;

    container.innerHTML = html;
    this.initCanvas();
    this.attachEvents(container);
  }

  renderNodeInspectorContent(node) {
    const statusColor = node.status === 'relevant' ? '#10b981' : node.status === 'review' ? '#f59e0b' : node.status === 'human_review' ? '#ef4444' : '#64748b';
    const statusClass = node.status === 'relevant' ? 'status-relevant' : node.status === 'review' ? 'status-review' : node.status === 'human_review' ? 'status-human-review' : 'status-not-relevant';

    return `
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:2rem;">${node.icon}</span>
          <span class="status-tag ${statusClass}">${node.statusLabel}</span>
        </div>

        <h3 style="color:#f8fafc; font-size:1.15rem; margin-bottom:6px;">${node.title}</h3>
        <div style="font-size:0.78rem; color:#67e8f9; font-weight:700; margin-bottom:14px; text-transform:uppercase; letter-spacing:0.04em;">
          Domain: ${node.label}
        </div>

        <div style="display:flex; flex-direction:column; gap:12px; font-size:0.82rem; line-height:1.5;">
          
          <div style="background:rgba(15,23,42,0.85); padding:10px 12px; border-radius:8px; border-left:3px solid #06b6d4;">
            <b style="color:#67e8f9; display:block; margin-bottom:2px;">WHAT IT MEANS:</b>
            <span style="color:#cbd5e1;">${node.meaning}</span>
          </div>

          <div style="background:rgba(15,23,42,0.85); padding:10px 12px; border-radius:8px; border-left:3px solid #f59e0b;">
            <b style="color:#fef08a; display:block; margin-bottom:2px;">WHY IT MATTERS:</b>
            <span style="color:#cbd5e1;">${node.why}</span>
          </div>

          <div style="background:rgba(15,23,42,0.85); padding:10px 12px; border-radius:8px; border-left:3px solid #10b981;">
            <b style="color:#a7f3d0; display:block; margin-bottom:2px;">WHAT TO VERIFY:</b>
            <span style="color:#cbd5e1;">${node.verify}</span>
          </div>

          <div style="background:rgba(3,7,18,0.9); padding:10px 12px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
            <b style="color:#94a3b8; font-size:0.74rem; display:block; margin-bottom:2px;">STATUTORY SOURCES & CITATIONS:</b>
            <span style="color:#e2e8f0; font-size:0.78rem;">${node.citations}</span>
          </div>

          <div style="background:rgba(6,182,212,0.15); border:1px solid rgba(6,182,212,0.4); padding:10px 12px; border-radius:8px;">
            <b style="color:#67e8f9; display:block; margin-bottom:2px;">RECOMMENDED NEXT STEP:</b>
            <span style="color:#f8fafc; font-weight:600;">${node.nextStep}</span>
          </div>

        </div>

        <div style="margin-top:16px; display:flex; gap:8px;">
          <button id="btn-node-open-vault" class="btn-secondary" style="flex:1; justify-content:center; font-size:0.78rem;">
            Search in Source Vault
          </button>
          <button id="btn-node-open-assistant" class="btn-primary" style="flex:1; justify-content:center; font-size:0.78rem;">
            Ask AI About This
          </button>
        </div>
      </div>
    `;
  }

  initCanvas() {
    this.canvas = document.getElementById('constellation-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
    this.startAnimation();
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const box = document.getElementById('constellation-canvas-box');
    if (box) {
      const rect = box.getBoundingClientRect();
      this.canvas.width = rect.width || 600;
      this.canvas.height = 520;
    }
  }

  startAnimation() {
    if (!this.ctx) return;
    const animate = () => {
      this.renderCanvas();
      this.animationFrame = requestAnimationFrame(animate);
    };
    animate();
  }

  stopAnimation() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  renderCanvas() {
    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;
    const cx = width / 2;
    const cy = height / 2;

    ctx.clearRect(0, 0, width, height);
    this.angle += 0.0025;

    ctx.save();
    ctx.translate(cx, cy);

    // Orbit rings
    const orbitRadii = [130, 180, 220];
    orbitRadii.forEach(r => {
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.1, r * 0.75, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    const product = this.getCurrentProduct();
    const nodeKeys = Object.keys(product.nodes);
    const total = nodeKeys.length;

    // Orbiting Nodes
    nodeKeys.forEach((key, idx) => {
      const node = product.nodes[key];
      const baseAngle = (idx / total) * Math.PI * 2 + this.angle;
      const dist = 140 + (idx % 3) * 35;
      const nx = Math.cos(baseAngle) * (dist * 1.1);
      const ny = Math.sin(baseAngle) * (dist * 0.75);

      const isSelected = this.selectedNodeKey === key;
      const isHovered = this.hoveredNodeKey === key;

      const nodeColor = node.status === 'relevant' ? '#10b981' : node.status === 'review' ? '#f59e0b' : node.status === 'human_review' ? '#ef4444' : '#64748b';

      // Laser connection line to center
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(nx, ny);
      ctx.strokeStyle = isSelected ? nodeColor : 'rgba(148, 163, 184, 0.15)';
      ctx.lineWidth = isSelected ? 2.5 : 1;
      ctx.stroke();

      // Node Circle
      const r = isSelected ? 24 : isHovered ? 22 : 18;
      ctx.beginPath();
      ctx.arc(nx, ny, r, 0, Math.PI * 2);
      ctx.fillStyle = isSelected ? 'rgba(15, 23, 42, 0.98)' : 'rgba(7, 14, 26, 0.9)';
      ctx.fill();
      ctx.lineWidth = isSelected ? 3 : 1.5;
      ctx.strokeStyle = nodeColor;
      ctx.shadowColor = nodeColor;
      ctx.shadowBlur = isSelected ? 25 : 8;
      ctx.stroke();

      // Node Icon
      ctx.font = isSelected ? '15px system-ui' : '12px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.icon, nx, ny);

      // Node Label
      ctx.font = '700 9px Plus Jakarta Sans, sans-serif';
      ctx.fillStyle = isSelected ? '#ffffff' : '#cbd5e1';
      ctx.shadowBlur = isSelected ? 8 : 0;
      ctx.fillText(node.label, nx, ny + r + 10);
    });

    // Central Product Sphere
    const centerGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, 50);
    centerGrad.addColorStop(0, '#06b6d4');
    centerGrad.addColorStop(0.5, '#042f2e');
    centerGrad.addColorStop(1, '#030712');

    ctx.beginPath();
    ctx.arc(0, 0, 48, 0, Math.PI * 2);
    ctx.fillStyle = centerGrad;
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 30;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#67e8f9';
    ctx.stroke();

    ctx.font = '22px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('', 0, -6);

    ctx.font = '800 8px Plus Jakarta Sans, sans-serif';
    ctx.fillStyle = '#67e8f9';
    ctx.fillText('YOUR PRODUCT', 0, 16);

    ctx.restore();
  }

  attachEvents(container) {
    // Re-launch journey
    const btnJourney = container.querySelector('#btn-relaunch-journey');
    if (btnJourney && window.saktiApp) {
      btnJourney.addEventListener('click', () => {
        window.saktiApp.switchTab('journey');
      });
    }

    // Direct passport
    const btnPassport = container.querySelector('#btn-open-passport-direct');
    if (btnPassport && window.saktiApp) {
      btnPassport.addEventListener('click', () => {
        window.saktiApp.switchTab('passport');
      });
    }

    // Canvas click & hover
    if (this.canvas) {
      this.canvas.addEventListener('click', (e) => {
        const key = this.getNodeAtMouse(e);
        if (key) {
          this.selectedNodeKey = key;
          const product = this.getCurrentProduct();
          const inspector = container.querySelector('#node-inspector-panel');
          if (inspector) {
            inspector.innerHTML = this.renderNodeInspectorContent(product.nodes[key]);
            this.attachInspectorEvents(inspector);
          }
        }
      });

      this.canvas.addEventListener('mousemove', (e) => {
        const key = this.getNodeAtMouse(e);
        this.hoveredNodeKey = key;
        this.canvas.style.cursor = key ? 'pointer' : 'default';
      });
    }

    const inspector = container.querySelector('#node-inspector-panel');
    if (inspector) this.attachInspectorEvents(inspector);
  }

  attachInspectorEvents(inspector) {
    const btnVault = inspector.querySelector('#btn-node-open-vault');
    if (btnVault && window.saktiApp) {
      btnVault.addEventListener('click', () => {
        window.saktiApp.switchTab('vault');
      });
    }

    const btnAsk = inspector.querySelector('#btn-node-open-assistant');
    if (btnAsk && window.saktiApp) {
      btnAsk.addEventListener('click', () => {
        window.saktiApp.switchTab('assistant');
      });
    }
  }

  getNodeAtMouse(e) {
    if (!this.canvas) return null;
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - this.canvas.width / 2;
    const mouseY = e.clientY - rect.top - this.canvas.height / 2;

    const product = this.getCurrentProduct();
    const nodeKeys = Object.keys(product.nodes);
    const total = nodeKeys.length;

    for (let idx = 0; idx < total; idx++) {
      const key = nodeKeys[idx];
      const baseAngle = (idx / total) * Math.PI * 2 + this.angle;
      const dist = 140 + (idx % 3) * 35;
      const nx = Math.cos(baseAngle) * (dist * 1.1);
      const ny = Math.sin(baseAngle) * (dist * 0.75);

      const d = Math.hypot(mouseX - nx, mouseY - ny);
      if (d < 28) {
        return key;
      }
    }
    return null;
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
}
