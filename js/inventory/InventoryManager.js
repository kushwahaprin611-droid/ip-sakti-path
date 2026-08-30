// Inventory and Badge Ledger Manager for IP Sakti Path
export class InventoryManager {
  constructor() {
    this.badges = [
      {
        id: "badge_alchemist",
        name: { en: "Formulation Classifier", hi: "सूत्रीकरण वर्गीकरणकर्ता" },
        icon: "🧪",
        desc: { en: "Mastered classical compendia AFI concordance and Section 3(p) TKDL exclusions.", hi: "शास्त्रीय एएफआई ग्रंथों एवं धारा 3(p) टीकेडीएल अपवर्जनों में महारत हासिल की।" },
        unlocked: false
      },
      {
        id: "badge_strategist",
        name: { en: "Patent Pathfinder", hi: "पेटेंट रणनीतिकार" },
        icon: "⚔️",
        desc: { en: "Calibrated synergistic bio-enhancement exceeding the Section 3(e) mere admixture threshold.", hi: "धारा 3(e) मिश्रण बाधा को पार कर तालमेल युक्त पेटेंट रणनीति बनाई।" },
        unlocked: false
      },
      {
        id: "badge_custodian",
        name: { en: "Biodiversity Custodian", hi: "जैव विविधता संरक्षक" },
        icon: "🌿",
        desc: { en: "Protected Himalayan wild bio-resources through NBA Form 1 and equitable 4% ABS royalties.", hi: "एनबीए फॉर्म 1 और 4% उचित एबीएस रॉयल्टी द्वारा हिमालयी औषधियों की रक्षा की।" },
        unlocked: false
      },
      {
        id: "badge_guardian",
        name: { en: "Regulatory Guardian", hi: "नियामक रक्षक" },
        icon: "🛡️",
        desc: { en: "Enforced Schedule T GMP hygiene, heavy metal limits, and redacted illegal Magic Remedies claims.", hi: "अनुसूची T जीएमपी, भारी धातु सीमाओं और आपत्तिजनक विज्ञापन प्रतिबंध का पालन कराया।" },
        unlocked: false
      },
      {
        id: "badge_voyager",
        name: { en: "Global Voyager", hi: "वैश्विक निर्यातक" },
        icon: "🌍",
        desc: { en: "Navigated USFDA DSHEA 21 CFR §101.93 disclaimers and EU THMPD 30-year traditional use dossiers.", hi: "यूएसएफडीए डीएसएचईए अस्वीकरण और यूरोपीय संघ टीएचएमपीडी 30-वर्षीय नियमों को सिद्ध किया।" },
        unlocked: false
      },
      {
        id: "badge_architect",
        name: { en: "Contract Architect", hi: "अनुबंध वास्तुकार" },
        icon: "📜",
        desc: { en: "Crafted non-exclusive technology transfers with genetic origin safeguards and community escrow.", hi: "आनुवंशिक मूल सुरक्षा और समुदाय एस्क्रो के साथ गैर-अनन्य प्रौद्योगिकी हस्तांतरण तैयार किया।" },
        unlocked: false
      },
      {
        id: "badge_shield",
        name: { en: "Biopiracy Shield", hi: "जैव-चोरी रोधी ढाल" },
        icon: "⚡",
        desc: { en: "Defeated foreign biopiracy patent claims using Section 25 opposition and TKDL Sanskrit citations.", hi: "धारा 25 विरोध और टीकेडीएल संस्कृत उद्धरणों का उपयोग करके विदेशी पेटेंट रद्द कराए।" },
        unlocked: false
      },
      {
        id: "badge_grandmaster",
        name: { en: "IP Sakti Grand Master", hi: "आईपी शक्ति महागुरु" },
        icon: "👑",
        desc: { en: "Conquered the Grand Capstone Tribunal across Patent, Biodiversity, AYUSH, and Global panels.", hi: "पेटेंट, जैव विविधता, आयुष एवं वैश्विक न्यायाधिकरण में सर्वोच्च ज्ञान सिद्ध किया।" },
        unlocked: false
      }
    ];

    this.items = [];
    this.allPossibleItems = [
      {
        id: "item_palm_leaf",
        name: { en: "Charaka Samhita Palm Leaf Citation", hi: "चरक संहिता ताड़पत्र उद्धरण" },
        icon: "📜",
        type: "Citation Scroll",
        statute: "Patents Act 1970 Sec 3(p) & D&C First Schedule",
        desc: {
          en: "Ancient palm leaf manuscript extract verifying public domain classical prior art, establishing undeniable evidence of traditional usage.",
          hi: "सार्वजनिक कार्यक्षेत्र की शास्त्रीय पूर्व-कला को प्रमाणित करने वाला प्राचीन ताड़पत्र उद्धरण, जो पारंपरिक उपयोग का अकाट्य प्रमाण है।"
        }
      },
      {
        id: "item_hplc_chart",
        name: { en: "HPLC Bioavailability & Synergy Certificate", hi: "एचपीएलसी जैव-उपलब्धता एवं तालमेल प्रमाण पत्र" },
        icon: "📊",
        type: "Scientific Assay",
        statute: "Patents Act 1970 Sec 3(e) & 3(d)",
        desc: {
          en: "Chromatographic evidence demonstrating a 2000% bioavailability increase, mathematically satisfying the non-obvious synergy threshold.",
          hi: "2000% बढ़ी हुई जैव-उपलब्धता को दर्शाने वाला वैज्ञानिक प्रमाण, जो गणितीय रूप से धारा 3(e) तालमेल की शर्त पूरी करता है।"
        }
      },
      {
        id: "item_nba_seal",
        name: { en: "NBA Form 1 & ABS Community Covenant", hi: "एनबीए फॉर्म 1 एवं एबीएस समुदाय अनुबंध" },
        icon: "🏛️",
        type: "Statutory Approval",
        statute: "Biological Diversity Act 2002/2023 Sec 6 & 19",
        desc: {
          en: "Official National Biodiversity Authority seal approving sustainable wild Kutki harvesting with a 4.0% community royalty trust agreement.",
          hi: "4.0% समुदाय रॉयल्टी ट्रस्ट समझौते के साथ टिकाऊ कुटकी दोहन को मंजूरी देने वाला आधिकारिक राष्ट्रीय जैव विविधता प्राधिकरण का सील।"
        }
      },
      {
        id: "item_schedule_t",
        name: { en: "Schedule T GMP Audit & Heavy Metals Assay", hi: "अनुसूची T जीएमपी ऑडिट एवं धातु परीक्षण रिपोर्ट" },
        icon: "🛡️",
        type: "Regulatory Clearance",
        statute: "D&C Rules 1945 Rule 158B & Schedule T",
        desc: {
          en: "Certified laboratory report proving heavy metals compliance (Pb < 10ppm, As < 3ppm, Cd < 0.3ppm, Hg < 1ppm) and spotless clean-room audit.",
          hi: "भारी धातुओं की सुरक्षित सीमाओं (Pb < 10ppm, As < 3ppm) और स्वच्छ निर्माण कक्ष की पुष्टि करने वाली प्रमाणित प्रयोगशाला रिपोर्ट।"
        }
      },
      {
        id: "item_dshea_dossier",
        name: { en: "USFDA DSHEA & EU THMPD Export Dossier", hi: "यूएसएफडीए एवं यूरोपीय संघ निर्यात अनुपालन डॉसियर" },
        icon: "🌍",
        type: "Global Compliance File",
        statute: "21 CFR §101.93 & EU Directive 2004/24/EC",
        desc: {
          en: "Validated export package featuring mandatory 21 CFR §101.93 disclaimer boxes and a 30-year European traditional herbal use bibliographic dossier.",
          hi: "अनिवार्य 21 CFR §101.93 अस्वीकरण और 30-वर्षीय पारंपरिक औषधीय उपयोग के यूरोपीय डॉसियर से युक्त सत्यापित निर्यात फाइल।"
        }
      },
      {
        id: "item_mta_contract",
        name: { en: "Bioprospecting MTA & Tech Transfer Deed", hi: "जैव-पूर्वेक्षण एमटीए एवं प्रौद्योगिकी हस्तांतरण विलेख" },
        icon: "📑",
        type: "Legal Agreement",
        statute: "Indian Contract Act 1872 & BDA Access Rules",
        desc: {
          en: "Legally binding non-exclusive licensing deed containing strict genetic resource origin disclosures and a 2.0% perpetual community escrow clause.",
          hi: "आनुवंशिक मूल प्रकटीकरण और 2.0% स्थायी समुदाय एस्क्रो खंड से युक्त कानूनी रूप से बाध्यकारी गैर-अनन्य लाइसेंसिंग अनुबंध।"
        }
      },
      {
        id: "item_tkdl_opposition",
        name: { en: "TKDL Prior-Art Opposition Petition", hi: "टीकेडीएल पूर्व-कला विरोध याचिका" },
        icon: "⚡",
        type: "Litigation Weapon",
        statute: "Patents Act 1970 Sec 25(1) & Sec 64",
        desc: {
          en: "Comprehensive Section 25(1) pre-grant opposition petition citing verbatim Sanskrit verses that successfully invalidated foreign biopiracy claims.",
          hi: "संस्कृत श्लोकों के प्रमाण से युक्त धारा 25(1) पूर्व-अनुदान विरोध याचिका जिसने विदेशी पेटेंट दावों को सफलतापूर्वक निष्प्रभावी कर दिया।"
        }
      },
      {
        id: "item_grand_seal",
        name: { en: "Sovereign IP Sakti Grandmaster Crest", hi: "संप्रभु आईपी शक्ति महागुरु राजमुद्रा" },
        icon: "👑",
        type: "Capstone Crown",
        statute: "AYUSH & Patent Sovereignty Charter",
        desc: {
          en: "The ultimate emblem of Ayurvedic Intellectual Property Mastery, representing absolute harmony between ancient heritage and modern patent law.",
          hi: "आयुर्वेदिक बौद्धिक संपदा में महारत का सर्वोच्च प्रतीक, जो प्राचीन धरोहर और आधुनिक कानून के पूर्ण सामंजस्य का प्रतिनिधित्व करता है।"
        }
      }
    ];
  }

  unlockBadge(badgeId) {
    const badge = this.badges.find(b => b.id === badgeId);
    if (badge && !badge.unlocked) {
      badge.unlocked = true;
      return badge;
    }
    return null;
  }

  addItem(itemId) {
    if (!this.items.find(i => i.id === itemId)) {
      const proto = this.allPossibleItems.find(i => i.id === itemId);
      if (proto) {
        this.items.push(proto);
        return proto;
      }
    }
    return null;
  }

  hasItem(itemId) {
    return this.items.some(i => i.id === itemId);
  }

  getUnlockedBadgesCount() {
    return this.badges.filter(b => b.unlocked).length;
  }

  renderInventoryHTML(lang = "en") {
    let html = `
      <div style="margin-bottom:20px;">
        <h3 style="color:#fbbf24; font-size:1.1rem; margin-bottom:10px; display:flex; align-items:center; gap:8px;">
          <span>🎖️</span>
          <span>${lang === "hi" ? "अर्जित पदक (Badges)" : "Earned Badges"} (${this.getUnlockedBadgesCount()}/${this.badges.length})</span>
        </h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:10px;">
    `;

    this.badges.forEach(b => {
      const isUnlocked = b.unlocked;
      html += `
        <div class="glass-panel" style="padding:10px; border-radius:8px; display:flex; align-items:center; gap:10px; border:1px solid ${isUnlocked ? 'rgba(251,191,36,0.5)' : 'rgba(255,255,255,0.05)'}; background:${isUnlocked ? 'rgba(245,158,11,0.12)' : 'rgba(15,23,42,0.5)'}; opacity:${isUnlocked ? '1' : '0.45'};">
          <div style="font-size:1.8rem; filter:${isUnlocked ? 'none' : 'grayscale(100%)'};">${b.icon}</div>
          <div>
            <div style="font-size:0.85rem; font-weight:700; color:${isUnlocked ? '#fef08a' : '#94a3b8'};">${b.name[lang] || b.name.en}</div>
            <div style="font-size:0.72rem; color:#64748b; line-height:1.3;">${b.desc[lang] || b.desc.en}</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>

      <div>
        <h3 style="color:#38bdf8; font-size:1.1rem; margin-bottom:10px; display:flex; align-items:center; gap:8px;">
          <span>📑</span>
          <span>${lang === "hi" ? "एकत्रित साक्ष्य एवं दस्तावेज (Inventory Ledger)" : "Evidence & Statutory Ledger"} (${this.items.length}/${this.allPossibleItems.length})</span>
        </h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:12px;">
    `;

    if (this.items.length === 0) {
      html += `
        <div style="grid-column:1/-1; padding:24px; text-align:center; color:#64748b; font-style:italic;">
          ${lang === "hi" ? "अभी कोई दस्तावेज एकत्रित नहीं हुआ है। स्तर 1 पूरा करके प्रथम साक्ष्य प्राप्त करें!" : "No evidence documents collected yet. Complete missions to unlock legal scrolls!"}
        </div>
      `;
    } else {
      this.items.forEach(item => {
        html += `
          <div class="glass-panel" style="padding:14px; border-radius:8px; border:1px solid rgba(56,189,248,0.4); background:rgba(15,23,42,0.85); box-shadow:0 4px 15px rgba(0,0,0,0.3);">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
              <span style="font-size:1.6rem;">${item.icon}</span>
              <span class="rag-stat-pill" style="font-size:0.65rem; background:rgba(6,182,212,0.15); color:#67e8f9; border-color:#06b6d4;">${item.type}</span>
            </div>
            <div style="font-weight:700; color:#f8fafc; font-size:0.88rem; margin-bottom:4px;">${item.name[lang] || item.name.en}</div>
            <div style="font-size:0.72rem; color:#f59e0b; font-family:monospace; margin-bottom:6px;">⚖️ ${item.statute}</div>
            <p style="font-size:0.75rem; color:#cbd5e1; line-height:1.4; margin:0;">${item.desc[lang] || item.desc.en}</p>
          </div>
        `;
      });
    }

    html += `
        </div>
      </div>
    `;

    return html;
  }
}
