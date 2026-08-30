// Complete Interactive Mini-Simulation Engines for all 7 Levels + Final Boss
import { sound } from "../audio/SoundSynth.js";
import { saktiRAG } from "../ai/SaktiSahayakRAG.js";

export class MiniSimulations {
  constructor(levelEngine) {
    this.levelEngine = levelEngine;
    this.warTimer = null;
    this.inspectorTimer = null;
    this.timeLeft = 180;
  }

  renderSim(simType, container, lang = "en") {
    container.innerHTML = "";
    if (this.warTimer) { clearInterval(this.warTimer); this.warTimer = null; }
    if (this.inspectorTimer) { clearInterval(this.inspectorTimer); this.inspectorTimer = null; }

    switch (simType) {
      case "classification":
        this.renderClassification(container, lang);
        break;
      case "synergy":
        this.renderSynergy(container, lang);
        break;
      case "biodiversity":
        this.renderBiodiversity(container, lang);
        break;
      case "regulatory":
        this.renderRegulatory(container, lang);
        break;
      case "export":
        this.renderExport(container, lang);
        break;
      case "licensing":
        this.renderLicensing(container, lang);
        break;
      case "biopiracy_war":
        this.renderBiopiracyWar(container, lang);
        break;
      case "final_boss":
        this.renderFinalBoss(container, lang);
        break;
      default:
        container.innerHTML = `<p>Simulation active.</p>`;
    }
  }

  renderClassification(container, lang) {
    const items = [
      { id: "triphala", name: "Classical Triphala Churna (Haritaki, Bibhitaki, Amalaki)", correct: "classical", desc: "Textbook classical compounding per Sharangdhara Samhita & AFI Part I." },
      { id: "curc_nano", name: "Curcumin-Phospholipid Nano-Liposome Complex", correct: "proprietary", desc: "Novel proprietary delivery system with enhanced cellular bioavailability." },
      { id: "picroside_pure", name: "Standardized Picroside-II Pure Bioactive Fraction", correct: "phytopharm", desc: "Purified fraction (>90%) requiring Phase I-III clinical phytopharmaceutical clearance." },
      { id: "sleep_tea", name: "Ashwagandha-Brahmi Herbal Infusion Tea", correct: "aahar", desc: "Dietary wellness food preparation under Ayurveda Aahar Regulations 2022." },
      { id: "kumkumadi_oil", name: "Kumkumadi Saffron Glow Cleanser & Facial Serum", correct: "cosmetic", desc: "Topical application for cleansing and beautification without disease cure claims." },
      { id: "raw_neem", name: "Crushed Neem Leaf Powder for Blood Cleansing", correct: "sec3p", desc: "Direct traditional knowledge without non-obvious technical modification (Section 3(p))." }
    ];

    const buckets = [
      { id: "classical", name: lang === "hi" ? "शास्त्रीय औषधि (Classical AFI)" : "Classical Ayurvedic Medicine (AFI)" },
      { id: "proprietary", name: lang === "hi" ? "पेटेंट / प्रोप्राइटरी औषधि" : "Patent or Proprietary ASU Medicine" },
      { id: "phytopharm", name: lang === "hi" ? "फाइटोफार्मास्युटिकल" : "Phytopharmaceutical Drug" },
      { id: "aahar", name: lang === "hi" ? "आयुर्वेद आहार (Food)" : "Ayurveda-Aahar (Food Supplement)" },
      { id: "cosmetic", name: lang === "hi" ? "आयुर्वेदिक प्रसाधन (Cosmetic)" : "Ayurvedic Cosmetic" },
      { id: "sec3p", name: lang === "hi" ? "धारा 3(p) पारंपरिक ज्ञान (गैर-पेटेंट)" : "Non-Patentable TK under Sec 3(p)" }
    ];

    let selections = {};

    let html = `
      <div style="margin-bottom:16px;">
        <h3 style="color:#f59e0b; margin-bottom:6px;">${lang === "hi" ? "सूत्रीकरण वर्गीकरण एवं विश्लेषण स्टेशन" : "Spectral Formulation Classification & AI Analyzer"}</h3>
        <p style="font-size:0.85rem; color:#94a3b8;">${lang === "hi" ? "नवाचार की जांच करें अथवा नीचे दिए गए 6 योगों को सही कानूनी व नियामक श्रेणी में वर्गीकृत करें:" : "Analyze custom formulation concepts or classify the 6 botanical samples below:"}</p>
      </div>

      <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(245,158,11,0.3); margin-bottom:18px; background:rgba(15,23,42,0.85);">
        <div style="font-size:0.88rem; font-weight:700; color:#fef08a; margin-bottom:6px; display:flex; align-items:center; gap:8px;">
          <span>🤖</span>
          <span>${lang === "hi" ? "मुक्त-पाठ फॉर्मूलेशन अवधारणा विश्लेषक (AI Classifier)" : "Free-Text Formulation Concept Analyzer"}</span>
        </div>
        <div style="display:flex; gap:8px; margin-bottom:8px;">
          <input type="text" id="ft-concept-input" class="rag-input" placeholder="e.g. 'Nano-liposomal Curcumin with Piperine for joint flexibility'" value="Nano-liposomal Curcumin with Piperine extract for arthritis">
          <button id="btn-analyze-concept" class="btn-primary" style="white-space:nowrap; padding:8px 16px;">${lang === "hi" ? "विश्लेषण करें" : "Analyze"}</button>
        </div>
        <div id="ft-concept-result" style="font-size:0.82rem; color:#cbd5e1; line-height:1.4; padding:8px; background:rgba(2,6,23,0.7); border-radius:6px;">
          💡 ${lang === "hi" ? "अपनी फॉर्मूलेशन अवधारणा दर्ज करें और शक्ति सहायक से तत्काल कानूनी वर्गीकरण प्राप्त करें।" : "Enter your formulation concept above to receive instantaneous statutory classification from Sakti Sahayak."}
        </div>
      </div>

      <div style="margin-bottom:12px; font-size:0.88rem; font-weight:700; color:#38bdf8;">
        📋 ${lang === "hi" ? "6 अनिवार्य नमूनों का वर्गीकरण बोर्ड:" : "Mandatory Classification Board (6 Samples):"}
      </div>
      <div style="display:flex; flex-direction:column; gap:10px;">
    `;

    items.forEach((item, idx) => {
      html += `
        <div class="glass-panel" style="padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(15,23,42,0.8);">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:4px;">
            <div style="font-weight:700; color:#f8fafc; font-size:0.88rem;">${idx + 1}. ${item.name}</div>
            <span id="badge-status-${item.id}" style="font-size:0.7rem; padding:2px 8px; border-radius:12px; background:rgba(100,116,139,0.3); color:#94a3b8;">${lang === "hi" ? "अवर्गीकृत" : "Unassigned"}</span>
          </div>
          <div style="font-size:0.75rem; color:#64748b; margin-bottom:8px;">${item.desc}</div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(170px, 1fr)); gap:6px;">
            ${buckets.map(b => `
              <button class="sim-bucket-btn" data-item="${item.id}" data-bucket="${b.id}" style="padding:6px 10px; border-radius:6px; font-size:0.73rem; font-weight:600; cursor:pointer; background:rgba(30,41,59,0.7); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1; text-align:left; transition:all 0.2s;">
                ${b.name}
              </button>
            `).join("")}
          </div>
        </div>
      `;
    });

    html += `
      </div>
      <div style="margin-top:20px; display:flex; justify-content:space-between; align-items:center;">
        <div id="class-score-hint" style="font-size:0.82rem; color:#94a3b8;">
          ${lang === "hi" ? "सभी 6 नमूनों को वर्गीकृत करें।" : "Classify all 6 formulations to proceed."}
        </div>
        <button id="btn-submit-class" class="btn-primary">${lang === "hi" ? "सत्यापित करें एवं जमा करें" : "Verify & Submit Classification"}</button>
      </div>
    `;

    container.innerHTML = html;

    const btnAnalyze = container.querySelector("#btn-analyze-concept");
    const inputConcept = container.querySelector("#ft-concept-input");
    const resultConcept = container.querySelector("#ft-concept-result");

    const runConceptAnalysis = () => {
      sound.playClick();
      const val = inputConcept.value.trim();
      const analysis = saktiRAG.classifyFormulation(val);
      resultConcept.innerHTML = `
        <div style="color:#34d399; font-weight:700; margin-bottom:4px;">✓ ${lang === "hi" ? "अनुशंसित श्रेणी" : "Recommended Category"}: ${analysis.category}</div>
        <div style="color:#cbd5e1; margin-bottom:4px;"><b>${lang === "hi" ? "कानूनी आधार" : "Legal Basis"}:</b> ${analysis.explanation}</div>
        <div style="font-size:0.75rem; color:#f59e0b;"><b>${lang === "hi" ? "उद्धरण" : "Citations"}:</b> ${analysis.citations} | <b>${lang === "hi" ? "धारा 3(p) जोखिम" : "Section 3(p) Risk"}:</b> ${analysis.sec3pRisk}</div>
      `;
    };

    btnAnalyze.addEventListener("click", runConceptAnalysis);
    inputConcept.addEventListener("keydown", (e) => { if (e.key === "Enter") runConceptAnalysis(); });

    const btns = container.querySelectorAll(".sim-bucket-btn");
    btns.forEach(b => {
      b.addEventListener("click", () => {
        sound.playClick();
        const item = b.dataset.item;
        const bucket = b.dataset.bucket;
        selections[item] = bucket;

        const statusTag = container.querySelector(`#badge-status-${item}`);
        if (statusTag) {
          statusTag.innerText = lang === "hi" ? "चयनित" : "Selected";
          statusTag.style.background = "rgba(56,189,248,0.2)";
          statusTag.style.color = "#38bdf8";
        }

        btns.forEach(other => {
          if (other.dataset.item === item) {
            const isMatch = (other.dataset.bucket === bucket);
            other.style.borderColor = isMatch ? "#f59e0b" : "rgba(255,255,255,0.15)";
            other.style.background = isMatch ? "rgba(245,158,11,0.25)" : "rgba(30,41,59,0.7)";
            other.style.color = isMatch ? "#fef08a" : "#cbd5e1";
          }
        });
      });
    });

    const submitBtn = container.querySelector("#btn-submit-class");
    submitBtn.addEventListener("click", () => {
      let correctCount = 0;
      items.forEach(it => {
        if (selections[it.id] === it.correct) correctCount++;
      });

      if (correctCount === items.length) {
        sound.playSuccess();
        this.levelEngine.onSimCompleted(true, lang === "hi" 
          ? "उत्कृष्ट! सभी 6 योगों का सही कानूनी व नियामक वर्गीकरण किया गया। धारा 3(p) और नियम 158B के मानदंड पूर्ण हुए!" 
          : "Flawless! All 6 formulations correctly classified under AYUSH, Patents Act Section 3(p), and Rule 158B!");
      } else {
        sound.playError();
        alert(lang === "hi" 
          ? `आपने ${correctCount}/${items.length} सही वर्गीकृत किए। स्मरण रहे: शास्त्रीय योग धारा 3(p) के तहत गैर-पेटेंट हैं जबकि नैनो-योग प्रोप्राइटरी श्रेणी में आते हैं। पुनः प्रयास करें!` 
          : `You got ${correctCount}/${items.length} correct. Remember: classical recipes are barred under Section 3(p), whereas nano-complexes fall under proprietary ASU. Please review and try again!`);
      }
    });
  }
  // ==========================================
  // LEVEL 2: PROTECT WHAT YOU CREATE
  // ==========================================
  renderSynergy(container, lang) {
    let tkdlSearched = false;

    let html = `
      <div>
        <h3 style="color:#38bdf8; margin-bottom:6px;">${lang === "hi" ? "टीकेडीएल पूर्व-कला खोज एवं धारा 3(e) तालमेल प्रयोगशाला" : "TKDL Prior-Art Search & Section 3(e) Synergy Workbench"}</h3>
        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:14px;">
          ${lang === "hi" ? "4.4 लाख योगों वाले टीकेडीएल डेटाबेस में शास्त्रीय पूर्व-कला खोजें, तालमेल सूचकांक (>1.25x) की गणना करें, और नैतिक आईपी पोर्टफोलियो चुनें:" : "Query 4.4 lakh TKDL formulations for ancient prior art, calibrate synergy (>1.25x), and select an ethical IP portfolio:"}
        </p>

        <!-- 1. Simulated TKDL Search Terminal -->
        <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(6,182,212,0.4); margin-bottom:16px; background:rgba(15,23,42,0.85);">
          <div style="font-size:0.88rem; font-weight:700; color:#67e8f9; margin-bottom:6px; display:flex; align-items:center; justify-content:space-between;">
            <span>🔍 ${lang === "hi" ? "टीकेडीएल पूर्व-कला खोज टर्मिनल (4.4 लाख योग)" : "Simulated TKDL Prior-Art Search Terminal (4.4 Lakh Formulations)"}</span>
            <span class="rag-stat-pill" style="font-size:0.65rem;">CSIR / AYUSH Portal</span>
          </div>
          <div style="display:flex; gap:8px; margin-bottom:8px;">
            <input type="text" id="tkdl-search-input" class="rag-input" placeholder="e.g. 'Haridra Piperine synergy'" value="Haridra Piperine synergy">
            <button id="btn-tkdl-search" class="btn-primary" style="background:linear-gradient(135deg, #06b6d4, #0284c7); padding:8px 16px;">${lang === "hi" ? "खोजें" : "Search TKDL"}</button>
          </div>
          <div id="tkdl-search-output" style="font-size:0.8rem; color:#cbd5e1; line-height:1.45; padding:8px; background:rgba(2,6,23,0.7); border-radius:6px;">
            ${lang === "hi" ? "टीकेडीएल टर्मिनल सक्रिय। पूर्व-कला खोजने हेतु 'Search TKDL' दबाएं।" : "TKDL terminal active. Click 'Search TKDL' to cross-reference classical compendia."}
          </div>
        </div>

        <!-- 2. Section 3(e) Synergy Ratio Slider -->
        <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(56,189,248,0.3); margin-bottom:16px; background:rgba(15,23,42,0.85);">
          <div style="font-size:0.88rem; font-weight:700; color:#38bdf8; margin-bottom:6px;">
            ⚗️ ${lang === "hi" ? "धारा 3(e) तालमेल अनुपात अंशांकन (Curcumin + Piperine)" : "Section 3(e) Synergy Ratio Calibration (Curcumin + Piperine)"}
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.85rem;">
            <span>${lang === "hi" ? "करक्यूमिन अनुपात" : "Curcumin Extract Ratio"}: <b id="val-curc" style="color:#f59e0b;">95%</b></span>
            <span>${lang === "hi" ? "पिपेरिन बायो-एनहांसर" : "Piperine Bio-enhancer"}: <b id="val-pip" style="color:#38bdf8;">5%</b></span>
          </div>
          <input type="range" id="slider-ratio" min="1" max="25" value="5" style="width:100%; cursor:pointer;">

          <div style="margin-top:12px; padding:10px; background:rgba(2,6,23,0.7); border-radius:6px; display:flex; justify-content:space-around; text-align:center;">
            <div>
              <div style="font-size:0.72rem; color:#64748b;">${lang === "hi" ? "एकल प्रभाव (E_A + E_B)" : "Additive Baseline"}</div>
              <div style="font-size:1.0rem; font-weight:700; color:#94a3b8;">100 units</div>
            </div>
            <div>
              <div style="font-size:0.72rem; color:#64748b;">${lang === "hi" ? "संयुक्‍त जैव-उपलब्धता" : "Combination Assay"}</div>
              <div id="val-combo" style="font-size:1.0rem; font-weight:700; color:#38bdf8;">2100 units</div>
            </div>
            <div>
              <div style="font-size:0.72rem; color:#64748b;">${lang === "hi" ? "तालमेल सूचकांक" : "Synergy Quotient (S)"}</div>
              <div id="val-index" style="font-size:1.0rem; font-weight:700; color:#34d399;">2.10x (Passes Sec 3(e))</div>
            </div>
          </div>
        </div>

        <!-- 3. Decision Tree & Moral Choice -->
        <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); margin-bottom:16px; background:rgba(15,23,42,0.85);">
          <div style="font-size:0.88rem; font-weight:700; color:#f8fafc; margin-bottom:8px;">
            🛡️ ${lang === "hi" ? "इष्टतम आईपी रणनीति एवं नैतिक दृष्टिकोण चुनें:" : "Select Optimal IP Portfolio & Ethical Strategy:"}
          </div>
          <div style="display:flex; flex-direction:column; gap:6px;">
            <label style="display:flex; gap:8px; align-items:center; font-size:0.82rem; color:#cbd5e1; cursor:pointer;">
              <input type="checkbox" id="chk-patent" checked> ${lang === "hi" ? "विशिष्ट नैनो-निष्कर्षण प्रक्रिया हेतु प्रक्रिया पेटेंट (Process Patent)" : "Process Patent for novel nano-extraction bio-delivery method"}
            </label>
            <label style="display:flex; gap:8px; align-items:center; font-size:0.82rem; color:#cbd5e1; cursor:pointer;">
              <input type="checkbox" id="chk-tm" checked> ${lang === "hi" ? "ब्रांड नाम हेतु वर्ग 5 ट्रेडमार्क पंजीकरण (Nice Class 5 Trademark)" : "Trademark Registration under Nice Class 5 for commercial brand"}
            </label>
            <label style="display:flex; gap:8px; align-items:center; font-size:0.82rem; color:#cbd5e1; cursor:pointer;">
              <input type="checkbox" id="chk-secret" checked> ${lang === "hi" ? "वाहक तापमान व अनुपात हेतु ट्रेड सीक्रेट (Trade Secret Protection)" : "Trade Secret for precise carrier temperature & stabilizer formulation"}
            </label>
            <label style="display:flex; gap:8px; align-items:center; font-size:0.82rem; color:#cbd5e1; cursor:pointer;">
              <input type="checkbox" id="chk-ethical" checked> ${lang === "hi" ? "सार्वजनिक पारंपरिक ज्ञान का सम्मान (डिफेंसिव टीकेडीएल प्रकटीकरण)" : "Respect Public TK (Defensive TKDL Disclosure & No Private Monopoly on Herb)"}
            </label>
          </div>
        </div>

        <div style="text-align:right;">
          <button id="btn-submit-synergy" class="btn-primary">${lang === "hi" ? "पेटेंट रणनीति दाखिल करें" : "File Patent Synergy Claim"}</button>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const btnTkdl = container.querySelector("#btn-tkdl-search");
    const inputTkdl = container.querySelector("#tkdl-search-input");
    const outTkdl = container.querySelector("#tkdl-search-output");

    const runTkdl = () => {
      sound.playHologram();
      tkdlSearched = true;
      outTkdl.innerHTML = `
        <div style="color:#34d399; font-weight:700; margin-bottom:4px;">✓ TKDL Match Found: IPC A61K 36/9066 (Curcuma longa) & IPC A61K 36/67 (Piper nigrum)</div>
        <div style="color:#cbd5e1; margin-bottom:4px;"><b>Ancient Citations:</b> <i>Charaka Samhita, Chikitsasthana 16/54</i> (Haridra-Maricha Anupana) & <i>Sharangdhara Samhita, Madhyamakhanda 2/12</i>.</div>
        <div style="font-size:0.75rem; color:#f59e0b;"><b>Legal Impact:</b> Basic herbal mixture is disclosed in classical texts. You MUST establish quantified synergistic bio-enhancement to pass Patents Act Section 3(e)!</div>
      `;
    };
    btnTkdl.addEventListener("click", runTkdl);
    inputTkdl.addEventListener("keydown", (e) => { if (e.key === "Enter") runTkdl(); });

    const slider = container.querySelector("#slider-ratio");
    const valCurc = container.querySelector("#val-curc");
    const valPip = container.querySelector("#val-pip");
    const valCombo = container.querySelector("#val-combo");
    const valIndex = container.querySelector("#val-index");

    slider.addEventListener("input", (e) => {
      const pip = parseInt(e.target.value);
      const curc = 100 - pip;
      valPip.innerText = pip + "%";
      valCurc.innerText = curc + "%";

      let multiplier = 1 + (pip * 0.22);
      if (pip > 15) multiplier = 3.5 - (pip - 15) * 0.15;
      const combo = Math.round(multiplier * 1000);
      const index = (multiplier).toFixed(2);

      valCombo.innerText = `${combo} units`;
      if (index >= 1.25) {
        valIndex.innerText = `${index}x (${lang === "hi" ? "धारा 3(e) पारित" : "Passes Sec 3(e)"})`;
        valIndex.style.color = "#34d399";
      } else {
        valIndex.innerText = `${index}x (${lang === "hi" ? "अविष्कारिक नहीं" : "Fails Mere Admixture"})`;
        valIndex.style.color = "#ef4444";
      }
    });

    container.querySelector("#btn-submit-synergy").addEventListener("click", () => {
      const pip = parseInt(slider.value);
      const p = container.querySelector("#chk-patent").checked;
      const t = container.querySelector("#chk-tm").checked;
      const s = container.querySelector("#chk-secret").checked;
      const e = container.querySelector("#chk-ethical").checked;

      if (!tkdlSearched) {
        sound.playError();
        alert(lang === "hi" ? "कृपया पहले टीकेडीएल पूर्व-कला खोज टर्मिनल चलाएं!" : "Please run the TKDL Prior-Art Search terminal first!");
        return;
      }

      if (pip >= 3 && pip <= 18 && p && t && s && e) {
        sound.playSuccess();
        this.levelEngine.onSimCompleted(true, lang === "hi"
          ? "उत्कृष्ट! वैज्ञानिक तालमेल सूचकांक (2.10x) ने धारा 3(e) की बाधा पार की और 3-स्तंभीय नैतिक आईपी रणनीति स्वीकृत हुई!"
          : "Superb! Quantified synergy (2.10x) overcame Section 3(e) mere admixture bar. 3-pillar ethical IP strategy successfully filed!");
      } else {
        sound.playError();
        alert(lang === "hi"
          ? "सुनिश्चित करें कि तालमेल सूचकांक 1.25x से अधिक हो और सभी 4 आईपी व नैतिक विकल्पों का चयन किया गया हो।"
          : "Ensure synergy index is above 1.25x and all 4 IP protection & ethical stewardship checkboxes are selected.");
      }
    });
  }

  // ==========================================
  // LEVEL 3: GUARDIANS OF TRADITION
  // ==========================================
  renderBiodiversity(container, lang) {
    const giLocations = [
      { id: "saffron", name: "Kashmiri Saffron (Kong Posh)", state: "Jammu & Kashmir", cert: "GI Application No. 635", desc: "High crocin content, grown in Karewa highlands." },
      { id: "pepper", name: "Malabar Pepper", state: "Kerala", cert: "GI Application No. 49", desc: "King of Spices, indigenous piperine-rich black pepper." },
      { id: "cardamom", name: "Alleppey Green Cardamom", state: "Kerala", cert: "GI Application No. 85", desc: "Distinct aroma, high essential oil cineole fraction." },
      { id: "mircha", name: "Naga Mircha", state: "Nagaland", cert: "GI Application No. 109", desc: "One of the world's most pungent medicinal chillies." },
      { id: "tea", name: "Darjeeling Tea", state: "West Bengal", cert: "GI Application No. 1 & 2", desc: "India's first registered GI, protected worldwide." },
      { id: "rice", name: "Navara Rice", state: "Kerala", cert: "GI Application No. 145", desc: "Sacred medicinal rice used extensively in Ayurvedic Panchakarma." }
    ];

    let selectedGI = giLocations[0];

    let html = `
      <div>
        <h3 style="color:#10b981; margin-bottom:6px;">${lang === "hi" ? "भारत जीआई मानचित्र एवं जैव विविधता एबीएस कार्यशाला" : "Interactive GI India Map & NBA ABS Contract Forge"}</h3>
        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:14px;">
          ${lang === "hi" ? "मानचित्र पर पंजीकृत जीआई औषधियों का अन्वेषण करें तथा हिमालयी कुटकी (Picrorhiza kurroa) दोहन हेतु 4% एबीएस अनुबंध तैयार करें:" : "Explore registered Ayurvedic Geographical Indications and execute a 4.0% ABS covenant for Himalayan Kutki:"}
        </p>

        <!-- 1. Interactive India GI Explorer -->
        <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(16,185,129,0.4); margin-bottom:16px; background:rgba(15,23,42,0.85);">
          <div style="font-size:0.88rem; font-weight:700; color:#34d399; margin-bottom:8px; display:flex; justify-content:space-between;">
            <span>🗺️ ${lang === "hi" ? "भारत के पंजीकृत भौगोलिक उपदर्शन (GI Explorer)" : "India's Registered Ayurvedic Geographical Indications (GI)"}</span>
            <span class="rag-stat-pill" style="font-size:0.65rem;">GI Act 1999</span>
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:6px; margin-bottom:10px;">
            ${giLocations.map(g => `
              <button class="gi-pin-btn" data-id="${g.id}" style="padding:6px 8px; border-radius:6px; font-size:0.73rem; font-weight:600; cursor:pointer; background:rgba(30,41,59,0.7); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1; text-align:center;">
                📍 ${g.name.split(" ")[0]}
              </button>
            `).join("")}
          </div>

          <div id="gi-detail-box" style="padding:10px; background:rgba(2,6,23,0.75); border-radius:6px; font-size:0.8rem; color:#cbd5e1; line-height:1.4;">
            <div style="color:#fef08a; font-weight:700;">${selectedGI.name} (${selectedGI.state})</div>
            <div style="color:#38bdf8; font-size:0.75rem;">📜 ${selectedGI.cert}</div>
            <div style="color:#94a3b8; font-size:0.75rem; margin-top:2px;">${selectedGI.desc}</div>
          </div>
        </div>

        <!-- 2. NBA Form 1 & ABS Covenant Forge -->
        <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(16,185,129,0.3); margin-bottom:16px; background:rgba(15,23,42,0.85);">
          <div style="font-size:0.88rem; font-weight:700; color:#a7f3d0; margin-bottom:10px;">
            📜 ${lang === "hi" ? "राष्ट्रीय जैव विविधता प्राधिकरण (NBA) फॉर्म 1 अनुबंध शर्तें" : "National Biodiversity Authority (NBA) Form 1 Terms"}
          </div>

          <div style="margin-bottom:12px;">
            <div style="font-size:0.85rem; font-weight:700; color:#f8fafc; margin-bottom:2px;">1. ${lang === "hi" ? "जन जैव विविधता रजिस्टर (PBR) सत्यापन" : "People's Biodiversity Register (PBR) Verification"}</div>
            <div style="font-size:0.78rem; color:#34d399;">✓ ${lang === "hi" ? "ग्राम पंचायत जैव विविधता प्रबंधन समिति (BMC) पंजीकृत" : "Local Village Biodiversity Management Committee (BMC) Authenticated"}</div>
          </div>

          <div style="margin-bottom:12px;">
            <div style="font-size:0.85rem; font-weight:700; color:#f8fafc; margin-bottom:2px;">2. ${lang === "hi" ? "समुदाय लाभ साझाकरण दर (ABS Royalty %)" : "Community ABS Royalty Percentage"}</div>
            <div style="display:flex; justify-content:space-between; font-size:0.82rem; color:#a7f3d0; margin-bottom:6px;">
              <span>${lang === "hi" ? "प्रस्तावित रॉयल्टी" : "Proposed ABS Royalty"}: <b id="val-abs">4.0%</b></span>
              <span id="abs-status" style="color:#34d399;">${lang === "hi" ? "उचित एवं वैध (3.0% - 5.0%)" : "Ethical & Compliant (3.0% - 5.0%)"}</span>
            </div>
            <input type="range" id="slider-abs" min="0.5" max="10.0" step="0.5" value="4.0" style="width:100%; cursor:pointer;">
          </div>

          <div>
            <div style="font-size:0.85rem; font-weight:700; color:#f8fafc; margin-bottom:4px;">3. ${lang === "hi" ? "पूर्व सूचित सहमति एवं सतत दोहन" : "Prior Informed Consent (PIC) Protocol"}</div>
            <label style="display:flex; gap:8px; align-items:center; font-size:0.8rem; color:#cbd5e1; cursor:pointer;">
              <input type="checkbox" id="chk-pic" checked> ${lang === "hi" ? "स्थानीय हिमालयी वन ग्राम सभा से पूर्व सूचित सहमति (PIC) प्राप्त" : "Prior Informed Consent (PIC) secured from Alpine Himalayan Gram Sabha"}
            </label>
          </div>
        </div>

        <div style="text-align:right;">
          <button id="btn-submit-abs" class="btn-primary" style="background:linear-gradient(135deg, #10b981, #059669);">${lang === "hi" ? "एनबीए फॉर्म 1 अनुबंध निष्पादित करें" : "Execute NBA Form 1 Covenant"}</button>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const giBtns = container.querySelectorAll(".gi-pin-btn");
    const detailBox = container.querySelector("#gi-detail-box");

    giBtns.forEach(b => {
      b.addEventListener("click", () => {
        sound.playClick();
        const id = b.dataset.id;
        selectedGI = giLocations.find(g => g.id === id) || giLocations[0];
        detailBox.innerHTML = `
          <div style="color:#fef08a; font-weight:700;">${selectedGI.name} (${selectedGI.state})</div>
          <div style="color:#38bdf8; font-size:0.75rem;">📜 ${selectedGI.cert}</div>
          <div style="color:#94a3b8; font-size:0.75rem; margin-top:2px;">${selectedGI.desc}</div>
        `;
        giBtns.forEach(other => {
          other.style.borderColor = (other.dataset.id === id) ? "#10b981" : "rgba(255,255,255,0.15)";
          other.style.background = (other.dataset.id === id) ? "rgba(16,185,129,0.25)" : "rgba(30,41,59,0.7)";
        });
      });
    });

    const sliderAbs = container.querySelector("#slider-abs");
    const valAbs = container.querySelector("#val-abs");
    const absStatus = container.querySelector("#abs-status");

    sliderAbs.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      valAbs.innerText = val.toFixed(1) + "%";

      if (val < 3.0) {
        absStatus.innerText = lang === "hi" ? "अनुचित रूप से कम (अस्वीकार्य)" : "Unethically Low (NBA Rejection)";
        absStatus.style.color = "#ef4444";
      } else if (val > 5.0) {
        absStatus.innerText = lang === "hi" ? "व्यावसायिक रूप से अत्यधिक" : "Commercial Overburden (>5.0%)";
        absStatus.style.color = "#f59e0b";
      } else {
        absStatus.innerText = lang === "hi" ? "उचित एवं वैध (3.0% - 5.0%)" : "Ethical & Compliant (3.0% - 5.0%)";
        absStatus.style.color = "#34d399";
      }
    });

    container.querySelector("#btn-submit-abs").addEventListener("click", () => {
      const val = parseFloat(sliderAbs.value);
      const pic = container.querySelector("#chk-pic").checked;

      if (val >= 3.0 && val <= 5.0 && pic) {
        sound.playSuccess();
        this.levelEngine.onSimCompleted(true, lang === "hi"
          ? "शानदार! एनबीए फॉर्म 1 और 4.0% एबीएस अनुबंध सफलतापूर्वक स्वीकृत हुआ। हिमालयी जैव विविधता और समुदाय दोनों सुरक्षित हुए।"
          : "Exceptional! NBA Form 1 and 4.0% ABS Community Covenant successfully approved. Himalayan biodiversity protected!");
      } else {
        sound.playError();
        alert(lang === "hi"
          ? "कृपया एबीएस रॉयल्टी को 3.0% से 5.0% के बीच रखें और पूर्व सूचित सहमति (PIC) की पुष्टि करें।"
          : "Set ABS royalty between 3.0% and 5.0% and ensure Prior Informed Consent (PIC) is verified.");
      }
    });
  }
  // ==========================================
  // LEVEL 4: THE INDIAN REGULATORY MAZE
  // ==========================================
  renderRegulatory(container, lang) {
    let timeLeft = 45;
    let inspectionPassed = false;

    let html = `
      <div>
        <h3 style="color:#f59e0b; margin-bottom:6px;">${lang === "hi" ? "अनुसूची T जीएमपी निरीक्षण, लेबल निर्माता एवं विज्ञापन जांच" : "Schedule T GMP Audit, Label Builder & Magic Remedies Filter"}</h3>
        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:14px;">
          ${lang === "hi" ? "औचक निरीक्षण में 45 सेकंड में जीएमपी अनुपालन की पुष्टि करें और आपत्तिजनक दावों को हटाएं:" : "Verify Schedule T GMP compliance, build an airtight label, and redact illegal disease cure claims in 45s:"}
        </p>

        <!-- 1. Timed Inspector Banner -->
        <div class="glass-panel" style="padding:12px; border-radius:8px; border:1px solid #f59e0b; margin-bottom:14px; background:rgba(245,158,11,0.12); display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.88rem; font-weight:700; color:#fef08a;">🚨 ${lang === "hi" ? "औचक आयुष औषधि निरीक्षण सक्रिय" : "Surprise AYUSH Drug Inspector Audit"}</div>
            <div style="font-size:0.75rem; color:#cbd5e1;">${lang === "hi" ? "एरिस की फुसफुसाहट: 'लेबलों पर मधुमेह या कैंसर के झूठे दावे न रखें!'" : "Eris Whisper: 'Make sure no illegal diabetes or cancer cure claims are on the box!'"}</div>
          </div>
          <div style="font-size:1.4rem; font-weight:800; color:#f59e0b; font-family:monospace;" id="inspector-timer">45s</div>
        </div>

        <!-- 2. Schedule T Checklist & Heavy Metals -->
        <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); margin-bottom:14px; background:rgba(15,23,42,0.85);">
          <div style="font-size:0.88rem; font-weight:700; color:#38bdf8; margin-bottom:8px;">
            🔬 1. ${lang === "hi" ? "अनुसूची T स्वच्छता एवं भारी धातु सीमा सत्यापन" : "Schedule T GMP & Heavy Metal Limits Assay"}
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.8rem; color:#cbd5e1; margin-bottom:10px;">
            <label style="display:flex; gap:6px; align-items:center; cursor:pointer;"><input type="checkbox" id="chk-gmp-lead" checked> Lead (Pb) < 10.0 ppm</label>
            <label style="display:flex; gap:6px; align-items:center; cursor:pointer;"><input type="checkbox" id="chk-gmp-ars" checked> Arsenic (As) < 3.0 ppm</label>
            <label style="display:flex; gap:6px; align-items:center; cursor:pointer;"><input type="checkbox" id="chk-gmp-cad" checked> Cadmium (Cd) < 0.3 ppm</label>
            <label style="display:flex; gap:6px; align-items:center; cursor:pointer;"><input type="checkbox" id="chk-gmp-merc" checked> Mercury (Hg) < 1.0 ppm</label>
          </div>
        </div>

        <!-- 3. Spot the Illegal Claim (Magic Remedies Act 1954) -->
        <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(239,68,68,0.4); margin-bottom:16px; background:rgba(15,23,42,0.85);">
          <div style="font-size:0.88rem; font-weight:700; color:#f87171; margin-bottom:6px;">
            🚫 2. ${lang === "hi" ? "आपत्तिजनक विज्ञापन अधिनियम 1954: अवैध दावों को संशोधित करें" : "Magic Remedies Act 1954: Redact Illegal Cure Claims"}
          </div>
          <div style="font-size:0.75rem; color:#94a3b8; margin-bottom:8px;">
            ${lang === "hi" ? "धारा 3 के तहत 54 निर्दिष्ट रोगों (मधुमेह, कैंसर, उच्च रक्तचाप) के '100% इलाज' का दावा दंडनीय अपराध है।" : "Under Section 3 & Schedule, claiming 100% cure for 54 conditions (Diabetes, Cancer, Hypertension) is prohibited."}
          </div>

          <div style="display:flex; flex-direction:column; gap:8px;">
            <div style="background:rgba(2,6,23,0.7); padding:8px; border-radius:6px;">
              <div style="font-size:0.78rem; color:#fca5a5; margin-bottom:4px;">❌ <i>'100% Permanent Cure for Type-2 Diabetes and Blood Pressure within 14 Days!'</i></div>
              <select id="sel-redact-claim" class="rag-input" style="font-size:0.8rem;">
                <option value="keep">${lang === "hi" ? "अपरिवर्तित रखें (अवैध)" : "Keep original claim (Illegal violation)"}</option>
                <option value="redact" selected>${lang === "hi" ? "संशोधित करें: 'Supports healthy carbohydrate metabolism & cardiovascular vitality'" : "Redact to: 'Supports healthy carbohydrate metabolism & cardiovascular vitality'"}</option>
              </select>
            </div>
          </div>
        </div>

        <div style="text-align:right;">
          <button id="btn-submit-regulatory" class="btn-primary">${lang === "hi" ? "निरीक्षण रिपोर्ट प्रस्तुत करें" : "Submit GMP Audit Dossier"}</button>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const timerEl = container.querySelector("#inspector-timer");
    this.inspectorTimer = setInterval(() => {
      timeLeft--;
      if (timerEl) timerEl.innerText = timeLeft + "s";
      if (timeLeft <= 0) {
        clearInterval(this.inspectorTimer);
        this.inspectorTimer = null;
        if (!inspectionPassed) {
          sound.playError();
          alert(lang === "hi" ? "निरीक्षण समय समाप्त! पुनः प्रयास करें।" : "Inspection time expired! Please retry.");
        }
      }
    }, 1000);

    container.querySelector("#btn-submit-regulatory").addEventListener("click", () => {
      const pb = container.querySelector("#chk-gmp-lead").checked;
      const as = container.querySelector("#chk-gmp-ars").checked;
      const cd = container.querySelector("#chk-gmp-cad").checked;
      const hg = container.querySelector("#chk-gmp-merc").checked;
      const redact = container.querySelector("#sel-redact-claim").value;

      if (pb && as && cd && hg && redact === "redact") {
        inspectionPassed = true;
        if (this.inspectorTimer) clearInterval(this.inspectorTimer);
        sound.playSuccess();
        this.levelEngine.onSimCompleted(true, lang === "hi"
          ? "उत्कृष्ट! अनुसूची T जीएमपी निरीक्षण शत-प्रतिशत खरा उतरा। औषधि लेबलों से सभी भ्रामक दावों को हटाकर अनुपालन सुनिश्चित किया गया!"
          : "Passed! Schedule T GMP clean-room & heavy metals certified. Illegal disease claims successfully redacted per Magic Remedies Act!");
      } else {
        sound.playError();
        alert(lang === "hi"
          ? "सभी 4 भारी धातु सीमाओं की पुष्टि करें और अवैध मधुमेह दावे को संशोधित करें!"
          : "Ensure all 4 heavy metal limits are verified and illegal disease claims are redacted!");
      }
    });
  }

  // ==========================================
  // LEVEL 5: CROSSING BORDERS
  // ==========================================
  renderExport(container, lang) {
    let html = `
      <div>
        <h3 style="color:#06b6d4; margin-bottom:6px;">${lang === "hi" ? "वैश्विक व्यापार गलियारा एवं यूएसएफडीए/टीएचएमपीडी कार्यशाला" : "Interactive World Trade Map & USFDA DSHEA / EU THMPD Workbench"}</h3>
        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:14px;">
          ${lang === "hi" ? "अंतरराष्ट्रीय व्यापार गलियारों का अन्वेषण करें तथा यूएसएफडीए अस्वीकरण बॉक्स एवं यूरोपीय संघ के 30-वर्षीय डॉसियर को सिद्ध करें:" : "Explore global trade corridors and align USFDA DSHEA 21 CFR §101.93 disclaimers with EU THMPD traditional dossiers:"}
        </p>

        <!-- 1. Interactive World Trade Corridors -->
        <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(6,182,212,0.4); margin-bottom:16px; background:rgba(15,23,42,0.85);">
          <div style="font-size:0.88rem; font-weight:700; color:#67e8f9; margin-bottom:8px;">
            🌐 1. ${lang === "hi" ? "अंतरराष्ट्रीय निर्यात गलियारे (World Trade Routes)" : "International Export Corridors"}
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:6px; margin-bottom:10px;">
            <button class="trade-btn active-glow" data-corridor="us" style="padding:6px; border-radius:6px; font-size:0.75rem; font-weight:600; cursor:pointer; background:rgba(6,182,212,0.2); border:1px solid #06b6d4; color:#67e8f9;">🇺🇸 United States (DSHEA)</button>
            <button class="trade-btn" data-corridor="eu" style="padding:6px; border-radius:6px; font-size:0.75rem; font-weight:600; cursor:pointer; background:rgba(30,41,59,0.7); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1;">🇪🇺 European Union (THMPD)</button>
            <button class="trade-btn" data-corridor="uk" style="padding:6px; border-radius:6px; font-size:0.75rem; font-weight:600; cursor:pointer; background:rgba(30,41,59,0.7); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1;">🇬🇧 United Kingdom (MHRA)</button>
            <button class="trade-btn" data-corridor="gcc" style="padding:6px; border-radius:6px; font-size:0.75rem; font-weight:600; cursor:pointer; background:rgba(30,41,59,0.7); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1;">🇦🇪 GCC / Gulf Standards</button>
          </div>

          <div id="corridor-info" style="padding:10px; background:rgba(2,6,23,0.75); border-radius:6px; font-size:0.8rem; color:#cbd5e1; line-height:1.45;">
            <div style="color:#67e8f9; font-weight:700;">USFDA DSHEA 1994 (21 CFR Part 101/111)</div>
            <div>Ayurvedic products are exported as Dietary Supplements. Permissible claims are limited to Structure/Function claims and MUST bear the statutory 21 CFR §101.93 disclaimer box.</div>
          </div>
        </div>

        <!-- 2. Dual Jurisdiction Workbench (US vs EU) -->
        <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); margin-bottom:16px; background:rgba(15,23,42,0.85);">
          <div style="font-size:0.88rem; font-weight:700; color:#f8fafc; margin-bottom:10px;">
            ⚖️ 2. ${lang === "hi" ? "दोहरी क्षेत्राधिकार अनुपालन चेकलिस्ट (USFDA & EU THMPD)" : "Dual Jurisdiction Compliance Checklist"}
          </div>

          <div style="display:flex; flex-direction:column; gap:8px;">
            <label style="display:flex; gap:8px; align-items:flex-start; font-size:0.82rem; color:#cbd5e1; cursor:pointer;">
              <input type="checkbox" id="chk-us-box" checked>
              <span><b>US FDA 21 CFR §101.93 Disclaimer:</b> <i>"These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."</i></span>
            </label>

            <label style="display:flex; gap:8px; align-items:flex-start; font-size:0.82rem; color:#cbd5e1; cursor:pointer;">
              <input type="checkbox" id="chk-eu-30y" checked>
              <span><b>EU Directive 2004/24/EC THMPD:</b> Bibliographic dossier proving documented traditional medicinal use for 30 years (with at least 15 years within the EU).</span>
            </label>

            <label style="display:flex; gap:8px; align-items:flex-start; font-size:0.82rem; color:#cbd5e1; cursor:pointer;">
              <input type="checkbox" id="chk-madrid-tm" checked>
              <span><b>Madrid Protocol:</b> Centralized Class 5 & Class 30 international trademark registration at Indian Trade Marks Registry.</span>
            </label>
          </div>
        </div>

        <div style="text-align:right;">
          <button id="btn-submit-export" class="btn-primary">${lang === "hi" ? "वैश्विक निर्यात फाइल स्वीकृत करें" : "Authorize Global Export Dossier"}</button>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const tBtns = container.querySelectorAll(".trade-btn");
    const cInfo = container.querySelector("#corridor-info");

    const corridorData = {
      us: { title: "USFDA DSHEA 1994 (21 CFR Part 101/111)", desc: "Dietary Supplement classification. Must avoid disease cure claims and embed mandatory 21 CFR §101.93 disclaimer box." },
      eu: { title: "EU Directive 2004/24/EC (THMPD)", desc: "Simplified traditional herbal registration requiring documented 30-year traditional medicinal use (with at least 15 years in EU)." },
      uk: { title: "UK MHRA Traditional Herbal Registration (THR)", desc: "Requires THR certification mark and heavy metal / pesticide residue batch clearance certificates." },
      gcc: { title: "GCC Standardization Organization (GSO)", desc: "Registration as complementary health product with bilingual Arabic/English labelling and halal assurance." }
    };

    tBtns.forEach(b => {
      b.addEventListener("click", () => {
        sound.playClick();
        const c = b.dataset.corridor;
        const d = corridorData[c];
        cInfo.innerHTML = `<div style="color:#67e8f9; font-weight:700;">${d.title}</div><div>${d.desc}</div>`;
        tBtns.forEach(other => {
          const isSelected = (other.dataset.corridor === c);
          other.style.borderColor = isSelected ? "#06b6d4" : "rgba(255,255,255,0.15)";
          other.style.background = isSelected ? "rgba(6,182,212,0.25)" : "rgba(30,41,59,0.7)";
          other.style.color = isSelected ? "#67e8f9" : "#cbd5e1";
        });
      });
    });

    container.querySelector("#btn-submit-export").addEventListener("click", () => {
      const us = container.querySelector("#chk-us-box").checked;
      const eu = container.querySelector("#chk-eu-30y").checked;
      const tm = container.querySelector("#chk-madrid-tm").checked;

      if (us && eu && tm) {
        sound.playSuccess();
        this.levelEngine.onSimCompleted(true, lang === "hi"
          ? "शानदार! यूएसएफडीए अस्वीकरण बॉक्स एवं यूरोपीय संघ के 30-वर्षीय डॉसियर को पूर्ण रूप से मंजूरी मिल गई।"
          : "Superb! Global export package fully certified across USFDA DSHEA, EU THMPD, and Madrid Protocol trademark filings!");
      } else {
        sound.playError();
        alert(lang === "hi" ? "कृपया सभी 3 अंतरराष्ट्रीय अनुपालन बक्सों का चयन करें!" : "Please confirm all 3 international regulatory compliance requirements!");
      }
    });
  }
  // ==========================================
  // LEVEL 6: LICENSING, MANUFACTURING & SCALE
  // ==========================================
  renderLicensing(container, lang) {
    let html = `
      <div>
        <h3 style="color:#a855f7; margin-bottom:6px;">${lang === "hi" ? "प्रौद्योगिकी हस्तांतरण समयरेखा एवं लागत कैलकुलेटर" : "Process Timeline Builder, MTA Verification & Cost Estimator"}</h3>
        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:14px;">
          ${lang === "hi" ? "आयुर्वेदिक उत्पाद विकास के 7 चरणों को सही क्रम में व्यवस्थित करें एवं 2% समुदाय एस्क्रो के साथ अनुबंध निष्पादित करें:" : "Sequence the 7 product lifecycle stages in exact order and execute tech transfer with 2% community escrow:"}
        </p>

        <!-- 1. 7-Stage Process Timeline -->
        <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(168,85,247,0.4); margin-bottom:16px; background:rgba(15,23,42,0.85);">
          <div style="font-size:0.88rem; font-weight:700; color:#c084fc; margin-bottom:8px;">
            ⏱️ 1. ${lang === "hi" ? "उत्पाद जीवन चक्र समयरेखा (Product Lifecycle Sequence)" : "7-Stage Lifecycle Sequence"}
          </div>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:0.8rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(2,6,23,0.7); padding:6px 10px; border-radius:6px;">
              <span>1. Botanical Phytochemical Fingerprinting & HPTLC Assay</span>
              <span style="color:#34d399; font-weight:700;">✓ Step 1</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(2,6,23,0.7); padding:6px 10px; border-radius:6px;">
              <span>2. Pre-clinical Safety, Acute Toxicity & Synergistic Bio-Assays</span>
              <span style="color:#34d399; font-weight:700;">✓ Step 2</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(2,6,23,0.7); padding:6px 10px; border-radius:6px;">
              <span>3. NBA Form 1 Prior Approval & Community Benefit Sharing</span>
              <span style="color:#34d399; font-weight:700;">✓ Step 3</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(2,6,23,0.7); padding:6px 10px; border-radius:6px;">
              <span>4. State AYUSH Licensing Authority (Rule 158B Clearance)</span>
              <span style="color:#34d399; font-weight:700;">✓ Step 4</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(2,6,23,0.7); padding:6px 10px; border-radius:6px;">
              <span>5. Schedule T GMP Pilot Scale-up & Stability Testing</span>
              <span style="color:#34d399; font-weight:700;">✓ Step 5</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(2,6,23,0.7); padding:6px 10px; border-radius:6px;">
              <span>6. Material Transfer Agreement (MTA) & Tech Transfer Deed</span>
              <span style="color:#34d399; font-weight:700;">✓ Step 6</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(2,6,23,0.7); padding:6px 10px; border-radius:6px;">
              <span>7. Commercial Launch & Export Corridor Distribution</span>
              <span style="color:#34d399; font-weight:700;">✓ Step 7</span>
            </div>
          </div>
        </div>

        <!-- 2. Cost & Timeline Estimator -->
        <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); margin-bottom:16px; background:rgba(15,23,42,0.85);">
          <div style="font-size:0.88rem; font-weight:700; color:#f8fafc; margin-bottom:10px;">
            💰 2. ${lang === "hi" ? "लागत, रॉयल्टी एवं समुदाय एस्क्रो मॉडल" : "Licensing Terms & Community Escrow"}
          </div>

          <div style="display:flex; flex-direction:column; gap:8px;">
            <label style="display:flex; gap:8px; align-items:center; font-size:0.82rem; color:#cbd5e1; cursor:pointer;">
              <input type="checkbox" id="chk-non-exclusive" checked>
              <span>${lang === "hi" ? "गैर-अनन्य लाइसेंस (Non-Exclusive Licensing) - एकाधिकार रोक" : "Non-Exclusive Licensing (Prevents monopolization of indigenous knowledge)"}</span>
            </label>

            <label style="display:flex; gap:8px; align-items:center; font-size:0.82rem; color:#cbd5e1; cursor:pointer;">
              <input type="checkbox" id="chk-origin-disc" checked>
              <span>${lang === "hi" ? "अनिवार्य आनुवंशिक स्रोत प्रकटीकरण (Genetic Resource Origin Clause)" : "Mandatory Disclosure of Biological Source in all patent filings"}</span>
            </label>

            <label style="display:flex; gap:8px; align-items:center; font-size:0.82rem; color:#cbd5e1; cursor:pointer;">
              <input type="checkbox" id="chk-escrow" checked>
              <span>${lang === "hi" ? "स्थानीय कृषक सहकारी समिति हेतु 2.0% स्थायी रॉयल्टी एस्क्रो" : "2.0% Perpetual Community Royalty Escrow for Herbal Farmer Cooperatives"}</span>
            </label>
          </div>
        </div>

        <div style="text-align:right;">
          <button id="btn-submit-licensing" class="btn-primary" style="background:linear-gradient(135deg, #a855f7, #7e22ce);">${lang === "hi" ? "प्रौद्योगिकी हस्तांतरण अनुबंध निष्पादित करें" : "Execute Technology Transfer Deed"}</button>
        </div>
      </div>
    `;

    container.innerHTML = html;

    container.querySelector("#btn-submit-licensing").addEventListener("click", () => {
      const nonEx = container.querySelector("#chk-non-exclusive").checked;
      const origin = container.querySelector("#chk-origin-disc").checked;
      const escrow = container.querySelector("#chk-escrow").checked;

      if (nonEx && origin && escrow) {
        sound.playSuccess();
        this.levelEngine.onSimCompleted(true, lang === "hi"
          ? "शानदार! 7-चरणीय समयरेखा एवं 2% समुदाय एस्क्रो सहित प्रौद्योगिकी हस्तांतरण विलेख निष्पादित हुआ!"
          : "Flawless! 7-stage lifecycle validated and non-exclusive tech transfer deed executed with 2% community escrow!");
      } else {
        sound.playError();
        alert(lang === "hi" ? "कृपया सभी 3 अनुबंध सुरक्षा शर्तों का चयन करें!" : "Please accept all 3 licensing covenants!");
      }
    });
  }

  // ==========================================
  // LEVEL 7: CRISIS & DEFENCE (WAR ROOM)
  // ==========================================
  renderBiopiracyWar(container, lang) {
    this.timeLeft = 180;

    let html = `
      <div>
        <!-- War Room Alert Banner -->
        <div style="background:rgba(239,68,68,0.2); border:1px solid #ef4444; border-radius:8px; padding:12px; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <h4 style="color:#f87171; margin:0 0 2px 0;">🚨 ${lang === "hi" ? "वार रूम: अंतरराष्ट्रीय जैव-चोरी संकट अलर्ट" : "WAR ROOM: INTERNATIONAL BIOPIRACY RED ALERT"}</h4>
            <div style="font-size:0.75rem; color:#fca5a5;">
              ${lang === "hi" ? "विदेशी पेटेंट आवेदन: हल्दी व नीम के रोगाणुरोधी उपयोग पर एकाधिकार का प्रयास (EPO/USPTO)" : "Foreign Patent Claim: Monopolizing Turmeric & Neem wound healing (EPO / USPTO)"}
            </div>
          </div>
          <div style="font-size:1.6rem; font-weight:800; color:#ef4444; font-family:monospace;" id="war-timer">03:00</div>
        </div>

        <!-- 1. Evidence Selection Under Pressure -->
        <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); margin-bottom:14px; background:rgba(15,23,42,0.85);">
          <div style="font-size:0.88rem; font-weight:700; color:#f8fafc; margin-bottom:8px;">
            📜 1. ${lang === "hi" ? "टीकेडीएल संस्कृत पूर्व-कला साक्ष्य चयन" : "Select TKDL Sanskrit Prior-Art Evidence"}
          </div>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:0.8rem; color:#cbd5e1;">
            <label style="display:flex; gap:8px; align-items:flex-start; cursor:pointer;">
              <input type="checkbox" id="chk-tkdl-charaka" checked>
              <span><b>Charaka Samhita, Chikitsasthana 25/84:</b> <i>'Haridra (Curcuma longa) & Nimba (Azadirachta indica) in Vrana-shodhana (wound debridement & microbial cleansing).'</i></span>
            </label>
            <label style="display:flex; gap:8px; align-items:flex-start; cursor:pointer;">
              <input type="checkbox" id="chk-tkdl-sushruta" checked>
              <span><b>Sushruta Samhita, Sutrasthana 37/12:</b> <i>Classical topical Haridra paste formulation for infectious dermal lacerations.</i></span>
            </label>
            <label style="display:flex; gap:8px; align-items:flex-start; cursor:pointer;">
              <input type="checkbox" id="chk-tkdl-nba" checked>
              <span><b>Section 10(4)(d) Disclosure Violation:</b> Applicant failed to disclose the Indian biological origin of Turmeric and Neem.</span>
            </label>
          </div>
        </div>

        <!-- 2. Argument Builder & Tone Selector -->
        <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(245,158,11,0.3); margin-bottom:16px; background:rgba(15,23,42,0.85);">
          <div style="font-size:0.88rem; font-weight:700; color:#fbbf24; margin-bottom:8px;">
            ⚖️ 2. ${lang === "hi" ? "धारा 25(1) पूर्व-अनुदान विरोध याचिका एवं स्वर (Tone) चयन" : "Section 25(1) Pre-Grant Opposition Writ & Tone Selector"}
          </div>

          <div style="margin-bottom:10px;">
            <label style="font-size:0.8rem; color:#94a3b8; display:block; margin-bottom:4px;">${lang === "hi" ? "कूटनीतिक एवं कानूनी स्वर चुनें (एरिस प्रतिक्रिया देगी):" : "Select Diplomatic & Legal Tone (Eris will react):"}</label>
            <select id="sel-war-tone" class="rag-input" style="font-size:0.82rem;">
              <option value="balanced" selected>${lang === "hi" ? "संतुलित एवं संप्रभु (Balanced Sovereign Authority - Recommended)" : "Balanced Sovereign Authority (Recommended)"}</option>
              <option value="diplomatic">${lang === "hi" ? "अत्यधिक कूटनीतिक एवं विनम्र (Overly Diplomatic)" : "Overly Diplomatic / Soft"}</option>
              <option value="aggressive">${lang === "hi" ? "आक्रामक एवं तीखा (Overly Aggressive)" : "Overly Aggressive / Hostile"}</option>
            </select>
          </div>

          <div id="tone-feedback" style="padding:8px; background:rgba(2,6,23,0.7); border-radius:6px; font-size:0.78rem; color:#34d399;">
            🌿 <b>Eris:</b> "A balanced and dignified tone grounded in our sacred shlokas will command the respect of the world tribunal without unnecessary rage."
          </div>
        </div>

        <div style="text-align:right;">
          <button id="btn-submit-war" class="btn-primary" style="background:linear-gradient(135deg, #ef4444, #b91c1c);">${lang === "hi" ? "धारा 25(1) विरोध याचिका दायर करें" : "File Emergency Section 25(1) Writ"}</button>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const timerEl = container.querySelector("#war-timer");
    this.warTimer = setInterval(() => {
      this.timeLeft--;
      const m = Math.floor(this.timeLeft / 60).toString().padStart(2, '0');
      const s = (this.timeLeft % 60).toString().padStart(2, '0');
      if (timerEl) timerEl.innerText = `${m}:${s}`;

      if (this.timeLeft <= 0) {
        clearInterval(this.warTimer);
        this.warTimer = null;
        sound.playError();
        alert(lang === "hi" ? "समय समाप्त! विदेशी पेटेंट विरोध की समय सीमा समाप्त हो गई।" : "Time Expired! The foreign opposition filing deadline passed.");
      }
    }, 1000);

    const selTone = container.querySelector("#sel-war-tone");
    const toneFeedback = container.querySelector("#tone-feedback");

    selTone.addEventListener("change", () => {
      sound.playClick();
      const val = selTone.value;
      if (val === "balanced") {
        toneFeedback.innerHTML = `🌿 <b>Eris:</b> "A balanced and dignified tone grounded in our sacred shlokas will command the respect of the world tribunal without unnecessary rage."`;
        toneFeedback.style.color = "#34d399";
      } else if (val === "diplomatic") {
        toneFeedback.innerHTML = `🌿 <b>Eris:</b> "Do not bow too low, my friend! When defending our sacred ancestors' wisdom, we must stand firm with unwavering truth."`;
        toneFeedback.style.color = "#f59e0b";
      } else {
        toneFeedback.innerHTML = `🌿 <b>Eris:</b> "Anger can blind the sharpest mind. Let our statutory evidence and ancient verses strike with precision, not bitter words."`;
        toneFeedback.style.color = "#f87171";
      }
    });

    container.querySelector("#btn-submit-war").addEventListener("click", () => {
      const c = container.querySelector("#chk-tkdl-charaka").checked;
      const s = container.querySelector("#chk-tkdl-sushruta").checked;
      const n = container.querySelector("#chk-tkdl-nba").checked;
      const tone = selTone.value;

      if (c && s && n && tone === "balanced") {
        if (this.warTimer) clearInterval(this.warTimer);
        sound.playSuccess();
        this.levelEngine.onSimCompleted(true, lang === "hi"
          ? "विजय! टीकेडीएल संस्कृत पूर्व-कला साक्ष्यों के आधार पर विदेशी पेटेंट दावा खारिज हुआ। भारत की हर्बल संप्रभुता सुरक्षित रही!"
          : "Victory! Foreign biopiracy claim comprehensively revoked at EPO/USPTO using Sanskrit TKDL prior art. Herbal sovereignty defended!");
      } else {
        sound.playError();
        alert(lang === "hi"
          ? "सभी 3 टीकेडीएल साक्ष्यों का चयन करें और संतुलित संप्रभु स्वर (Balanced Sovereign) चुनें!"
          : "Please select all 3 TKDL citations and adopt a Balanced Sovereign tone!");
      }
    });
  }

  // ==========================================
  // LEVEL 8: FINAL BOSS (CAPSTONE TRIBUNAL)
  // ==========================================
  renderFinalBoss(container, lang) {
    let html = `
      <div>
        <div style="background:rgba(245,158,11,0.15); border:1px solid #f59e0b; border-radius:8px; padding:12px; margin-bottom:14px; text-align:center;">
          <h3 style="color:#fbbf24; margin:0 0 4px 0;">👑 ${lang === "hi" ? "महा-न्यायाधिकरण: सर्वोच्च ज्ञान एवं शक्ति परीक्षा" : "THE GRAND CAPSTONE TRIBUNAL"}</h3>
          <div style="font-size:0.8rem; color:#cbd5e1;">
            ${lang === "hi" ? "अपने 7 एकत्रित साक्ष्यों को 4 न्यायाधिकरण पैनलों के समक्ष प्रस्तुत करें और अंतिम आईपी तत्परता स्कोर (0-100) प्राप्त करें:" : "Deploy all 7 collected inventory artifacts across 4 sovereign tribunal panels to calculate your final IP Readiness Score:"}
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:10px; margin-bottom:16px;">
          <!-- Panel 1 -->
          <div class="glass-panel" style="padding:12px; border-radius:8px; border:1px solid rgba(56,189,248,0.4); background:rgba(15,23,42,0.85);">
            <div style="font-size:0.85rem; font-weight:700; color:#38bdf8; margin-bottom:4px;">1. Patent Controller Bench</div>
            <div style="font-size:0.72rem; color:#94a3b8; margin-bottom:6px;">Section 3(p) TKDL & Section 3(e) Synergy Proof</div>
            <label style="display:flex; gap:6px; align-items:center; font-size:0.75rem; color:#cbd5e1; cursor:pointer;"><input type="checkbox" id="chk-boss-p1" checked> Deploy HPLC Bioavailability Certificate</label>
            <label style="display:flex; gap:6px; align-items:center; font-size:0.75rem; color:#cbd5e1; cursor:pointer;"><input type="checkbox" id="chk-boss-p2" checked> Deploy Charaka Palm Leaf Prior Art</label>
          </div>

          <!-- Panel 2 -->
          <div class="glass-panel" style="padding:12px; border-radius:8px; border:1px solid rgba(16,185,129,0.4); background:rgba(15,23,42,0.85);">
            <div style="font-size:0.85rem; font-weight:700; color:#34d399; margin-bottom:4px;">2. National Biodiversity Board</div>
            <div style="font-size:0.72rem; color:#94a3b8; margin-bottom:6px;">Section 6 IPR Approval & 4% ABS Royalties</div>
            <label style="display:flex; gap:6px; align-items:center; font-size:0.75rem; color:#cbd5e1; cursor:pointer;"><input type="checkbox" id="chk-boss-b1" checked> Deploy NBA Form 1 Covenant</label>
            <label style="display:flex; gap:6px; align-items:center; font-size:0.75rem; color:#cbd5e1; cursor:pointer;"><input type="checkbox" id="chk-boss-b2" checked> Deploy Community Escrow Deed</label>
          </div>

          <!-- Panel 3 -->
          <div class="glass-panel" style="padding:12px; border-radius:8px; border:1px solid rgba(245,158,11,0.4); background:rgba(15,23,42,0.85);">
            <div style="font-size:0.85rem; font-weight:700; color:#f59e0b; margin-bottom:4px;">3. AYUSH Licensing Panel</div>
            <div style="font-size:0.72rem; color:#94a3b8; margin-bottom:6px;">Schedule T GMP & Magic Remedies Filter</div>
            <label style="display:flex; gap:6px; align-items:center; font-size:0.75rem; color:#cbd5e1; cursor:pointer;"><input type="checkbox" id="chk-boss-a1" checked> Deploy Schedule T Metal Assay</label>
          </div>

          <!-- Panel 4 -->
          <div class="glass-panel" style="padding:12px; border-radius:8px; border:1px solid rgba(6,182,212,0.4); background:rgba(15,23,42,0.85);">
            <div style="font-size:0.85rem; font-weight:700; color:#67e8f9; margin-bottom:4px;">4. Global Compliance Panel</div>
            <div style="font-size:0.72rem; color:#94a3b8; margin-bottom:6px;">USFDA 21 CFR §101.93 & EU THMPD</div>
            <label style="display:flex; gap:6px; align-items:center; font-size:0.75rem; color:#cbd5e1; cursor:pointer;"><input type="checkbox" id="chk-boss-g1" checked> Deploy USFDA Export Dossier</label>
            <label style="display:flex; gap:6px; align-items:center; font-size:0.75rem; color:#cbd5e1; cursor:pointer;"><input type="checkbox" id="chk-boss-g2" checked> Deploy Section 25 Biopiracy Defense</label>
          </div>
        </div>

        <div style="text-align:center;">
          <button id="btn-submit-boss" class="btn-primary" style="font-size:1.1rem; padding:12px 36px; background:linear-gradient(135deg, #f59e0b, #d97706); box-shadow:0 0 25px rgba(245,158,11,0.5);">
            👑 ${lang === "hi" ? "अंतिम न्यायाधिकरण फैसला प्राप्त करें" : "Conclude Grand Tribunal Defense"}
          </button>
        </div>
      </div>
    `;

    container.innerHTML = html;

    container.querySelector("#btn-submit-boss").addEventListener("click", () => {
      const p1 = container.querySelector("#chk-boss-p1").checked;
      const p2 = container.querySelector("#chk-boss-p2").checked;
      const b1 = container.querySelector("#chk-boss-b1").checked;
      const b2 = container.querySelector("#chk-boss-b2").checked;
      const a1 = container.querySelector("#chk-boss-a1").checked;
      const g1 = container.querySelector("#chk-boss-g1").checked;
      const g2 = container.querySelector("#chk-boss-g2").checked;

      if (p1 && p2 && b1 && b2 && a1 && g1 && g2) {
        sound.playVictory();
        this.levelEngine.onSimCompleted(true, lang === "hi"
          ? "ऐतिहासिक विजय! महा-न्यायाधिकरण ने आपको शत-प्रतिशत आईपी तत्परता स्कोर (98/100) के साथ 'आयुर्वेदिक संप्रभु महागुरु' घोषित किया!"
          : "Historic Victory! The Grand Capstone Tribunal awards you a 98/100 IP Readiness Score and crowns you a Sovereign Grandmaster of Ayurveda!");
      } else {
        sound.playError();
        alert(lang === "hi" ? "कृपया सभी 7 साक्ष्यों को न्यायाधिकरण के समक्ष प्रस्तुत करें!" : "Please deploy all 7 evidence artifacts to complete the capstone defense!");
      }
    });
  }
}