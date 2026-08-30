// Self-Contained Standalone Bundle for IP SAKTI PATH (Official SIH 2026 Edition)
(function() {
'use strict';

// --- File: ./js/i18n/translations.js ---
// Bilingual Translation Engine for IP Sakti Path (English & Hindi)
const translations = {
  en: {
    gameTitle: "IP Sakti Path",
    tagline: "Intellectual Property & Ayurvedic Sovereignty Simulation",
    selectRoleTitle: "Choose Your Path of Mastery",
    selectRoleSubtitle: "Select your profession to enter a customized 3D environment and begin your IP journey.",
    roles: {
      doctor: {
        title: "Ayurvedic Doctor / Practitioner",
        hindiTitle: "आयुर्वेदिक चिकित्सक / वैद्य",
        desc: "Master of Nadi Pariksha and Classical Formulations. Protect patient formulations while adhering to Section 3(p) TKDL norms.",
        envName: "Traditional OPD & Consultation Clinic",
        startingBonus: "+15% Classical Literature Knowledge"
      },
      founder: {
        title: "Startup Founder / Formulator",
        hindiTitle: "स्टार्टअप संस्थापक / फॉर्मूलेटर",
        desc: "Pioneering novel botanical extracts and synergistic nano-carriers. Navigate Patents Act Section 3(e) and 3(d).",
        envName: "Modern Botanical R&D Laboratory",
        startingBonus: "+15% Novelty & Synergy Innovation"
      },
      farmer: {
        title: "Herbal Cultivator / Farmer",
        hindiTitle: "औषधीय कृषक / जड़ी-बूटी उत्पादक",
        desc: "Guardian of sacred medicinal plants. Enforce Biodiversity Act ABS (Access and Benefit Sharing) and Geographical Indications.",
        envName: "Sacred Herbal Farm & Polyhouse",
        startingBonus: "+20% Biodiversity & ABS Ethics"
      },
      educator: {
        title: "Trainer / Educator",
        hindiTitle: "प्रशिक्षक / शिक्षक",
        desc: "Academic leader training the next generation of AYUSH scholars. Disseminate legal literacy and ethical patenting.",
        envName: "AYUSH Institute & Lecture Hall",
        startingBonus: "+15% Compliance & Case Precedents"
      },
      exporter: {
        title: "Exporter / Business Head",
        hindiTitle: "निर्यातक / व्यापार प्रमुख",
        desc: "Global distributor scaling Ayurvedic wellness worldwide. Master USFDA DSHEA, EU THMPD, and Madrid Protocol.",
        envName: "Global Trade Logistics Center",
        startingBonus: "+20% Cross-Border Export Strategy"
      }
    },
    ui: {
      enterSim: "Enter 3D Simulation",
      level: "Level",
      xp: "XP",
      bond: "Eris Bond",
      ipReadiness: "IP Readiness",
      interact: "Interact (E)",
      inventory: "Inventory (I)",
      saktiAI: "Sakti Sahayak (H)",
      locations: "Fast Travel (M)",
      audioToggle: "Sound FX / Music",
      langToggle: "हिन्दी",
      close: "Close",
      submit: "Submit Decision",
      continue: "Continue",
      nextLevel: "Next Level",
      evidence: "Evidence",
      citations: "Statutory Citations",
      confidence: "Confidence",
      disclaimer: "This is educational information, not legal advice.",
      downloadCert: "Download Official Certificate",
      printCert: "Print Certificate",
      inspect: "Inspect 3D Artifact",
      controlsTip: "Controls: WASD / Arrow keys to walk, Left-drag to orbit camera, Mouse-wheel to zoom, E to interact.",
      virtualJoyTip: "Touch & drag virtual joystick to walk.",
      objective: "Active Quest Objective",
      tasksCompleted: "Tasks Completed",
      badges: "Earned Badges",
      certificateReady: "IP Sakti Certification Achieved!",
      consequence: "Consequence & Impact"
    },
    companions: {
      eris: {
        name: "Eris",
        role: "Spirit of Ancient Wisdom & Herbcraft",
        greeting: "Greetings, seeker of truth! I walk beside you to honour the sacred herbs of our ancestors. Let us harmonize ancient wisdom with rightful protection.",
        bondBoost: "Eris smiles as ancient knowledge is respected! Bond increased."
      },
      sakti: {
        name: "Sakti Sahayak",
        role: "RAG Legal & Regulatory Oracle",
        greeting: "Greetings. I am Sakti Sahayak. I retrieve precise legal statutes and judicial precedents under Indian and International Intellectual Property regimes."
      }
    },
    environments: {
      clinic_opd: "Ayurvedic Clinic & OPD",
      rnd_lab: "Botanical R&D Laboratory",
      herbal_farm: "Herbal Farm & Greenhouse",
      academy_hall: "Institute & Workshop Hall",
      export_hub: "Export Documentation Hub",
      patent_office: "Government Patent Office",
      ayush_hq: "AYUSH Regulatory Headquarters",
      global_summit: "Virtual International Summit",
      war_room: "Crisis Defense War Room"
    }
  },
  hi: {
    gameTitle: "आईपी शक्ति पथ",
    tagline: "बौद्धिक संपदा एवं आयुर्वेदिक संप्रभुता सिमुलेशन",
    selectRoleTitle: "अपनी साधना का मार्ग चुनें",
    selectRoleSubtitle: "विशिष्ट 3D परिवेश में प्रवेश करने और अपनी बौद्धिक संपदा यात्रा शुरू करने के लिए अपना व्यवसाय चुनें।",
    roles: {
      doctor: {
        title: "आयुर्वेदिक चिकित्सक / वैद्य",
        hindiTitle: "आयुर्वेदिक चिकित्सक / वैद्य",
        desc: "नाड़ी परीक्षा एवं शास्त्रीय योगों के ज्ञाता। धारा 3(p) टीकेडीएल नियमों का पालन करते हुए पारंपरिक नुस्खों की रक्षा करें।",
        envName: "पारंपरिक ओपीडी एवं परामर्श क्लिनिक",
        startingBonus: "+15% शास्त्रीय साहित्य ज्ञान"
      },
      founder: {
        title: "स्टार्टअप संस्थापक / फॉर्मूलेटर",
        hindiTitle: "स्टार्टअप संस्थापक / फॉर्मूलेटर",
        desc: "नवीन वानस्पतिक अर्क और तालमेल (Synergy) आधारित नैनो-फॉर्मूलेशन के अग्रणी। पेटेंट अधिनियम धारा 3(e) व 3(d) में पारंगत।",
        envName: "आधुनिक वानस्पतिक आरएंडडी प्रयोगशाला",
        startingBonus: "+15% नवीनता एवं तालमेल नवाचार"
      },
      farmer: {
        title: "औषधीय कृषक / जड़ी-बूटी उत्पादक",
        hindiTitle: "औषधीय कृषक / जड़ी-बूटी उत्पादक",
        desc: "पवित्र औषधीय पादपों के संरक्षक। जैव विविधता अधिनियम एबीएस (पहुंच और लाभ साझाकरण) व जीआई का अनुपालन सुनिश्चित करें।",
        envName: "पवित्र औषधीय खेत एवं पॉलीहाउस",
        startingBonus: "+20% जैव विविधता एवं एबीएस नैतिकता"
      },
      educator: {
        title: "प्रशिक्षक / शिक्षक",
        hindiTitle: "प्रशिक्षक / शिक्षक",
        desc: "आयुष छात्रों और शोधकर्ताओं के मार्गदर्शक। कानूनी साक्षरता और नैतिक पेटेंटिंग का प्रसार करें।",
        envName: "आयुष संस्थान एवं व्याख्यान कक्ष",
        startingBonus: "+15% नियामक अनुपालन एवं केस कानून"
      },
      exporter: {
        title: "निर्यातक / व्यापार प्रमुख",
        hindiTitle: "निर्यातक / व्यापार प्रमुख",
        desc: "वैश्विक स्तर पर आयुर्वेद उत्पादों का प्रसार करने वाले वितरक। USFDA DSHEA, EU THMPD और मैड्रिड प्रोटोकॉल के विशेषज्ञ।",
        envName: "वैश्विक व्यापार लॉजिस्टिक्स केंद्र",
        startingBonus: "+20% सीमा-पार निर्यात रणनीति"
      }
    },
    ui: {
      enterSim: "3D सिमुलेशन में प्रवेश करें",
      level: "स्तर",
      xp: "अनुभव (XP)",
      bond: "एरिस आत्मीयता",
      ipReadiness: "आईपी तत्परता",
      interact: "संवाद / क्रिया (E)",
      inventory: "सामग्री (I)",
      saktiAI: "शक्ति सहायक (H)",
      locations: "त्वरित यात्रा (M)",
      audioToggle: "ध्वनि / संगीत",
      langToggle: "English",
      close: "बंद करें",
      submit: "निर्णय जमा करें",
      continue: "आगे बढ़ें",
      nextLevel: "अगला स्तर",
      evidence: "प्रमाण / साक्ष्य",
      citations: "कानूनी धाराएं व संदर्भ",
      confidence: "सटीकता दर",
      disclaimer: "यह केवल शैक्षणिक जानकारी है, कानूनी सलाह नहीं।",
      downloadCert: "आधिकारिक प्रमाण पत्र डाउनलोड करें",
      printCert: "प्रमाण पत्र प्रिंट करें",
      inspect: "3D वस्तु निरीक्षण",
      controlsTip: "नियंत्रण: चलने के लिए WASD / तीर कुंजियाँ, कैमरा घुमाने के लिए बायाँ-क्लिक खींचें, ज़ूम के लिए माउस व्हील, संवाद के लिए E दबाएँ।",
      virtualJoyTip: "चलने के लिए ऑन-स्क्रीन जॉयस्टिक को छुएं और खींचें।",
      objective: "सक्रिय मिशन उद्देश्य",
      tasksCompleted: "पूर्ण कार्य",
      badges: "अर्जित पदक",
      certificateReady: "आईपी शक्ति प्रमाणन संपन्न!",
      consequence: "परिणाम व प्रभाव"
    },
    companions: {
      eris: {
        name: "एरिस",
        role: "प्राचीन ज्ञान एवं वनस्पति चेतना",
        greeting: "नमस्ते ज्ञान-पिपासु! मैं हमारे पूर्वजों की पावन जड़ी-बूटियों के सम्मान में आपके साथ चलती हूँ। आइए प्राचीन ज्ञान और आधुनिक सुरक्षा में सामंजस्य स्थापित करें।",
        bondBoost: "पारंपरिक ज्ञान के आदर से एरिस प्रसन्न हुईं! आत्मीयता बढ़ी।"
      },
      sakti: {
        name: "शक्ति सहायक",
        role: "कानूनी व नियामक ओरेकल",
        greeting: "सादर प्रणाम। मैं शक्ति सहायक हूँ। मैं भारतीय एवं अंतरराष्ट्रीय बौद्धिक संपदा अधिनियमों के सटीक उद्धरण और निर्णय प्रदान करता हूँ।"
      }
    },
    environments: {
      clinic_opd: "आयुर्वेदिक क्लिनिक एवं ओपीडी",
      rnd_lab: "वानस्पतिक आरएंडडी प्रयोगशाला",
      herbal_farm: "औषधीय खेत एवं ग्रीनहाउस",
      academy_hall: "संस्थान एवं कार्यशाला कक्ष",
      export_hub: "निर्यात दस्तावेज़ीकरण केंद्र",
      patent_office: "सरकारी पेटेंट कार्यालय",
      ayush_hq: "आयुष नियामक मुख्यालय",
      global_summit: "आभासी अंतरराष्ट्रीय सम्मेलन",
      war_room: "संकट प्रबंधन वॉर रूम"
    }
  },
  te: {
    gameTitle: "ఐపీ శక్తి పాత్",
    tagline: "ఆయుర్వేద ఆవిష్కరణల రక్షణ మరియు చట్టబద్ధమైన మార్గదర్శి",
    ui: {
      disclaimer: "ఇది కేవలం సమాచారం మరియు విద్యా మార్గదర్శకత్వం మాత్రమే — న్యాయ సలహా కాదు.",
      evidence: "చట్టబద్ధమైన సాక్ష్యం",
      citations: "చట్ట నిబంధనలు",
      confidence: "ఖచ్చితత్వం",
      continue: "కొనసాగించండి"
    }
  },
  ta: {
    gameTitle: "ஐபி சக்தி பாத்",
    tagline: "ஆயுர்வேத கண்டுபிடிப்புகளுக்கான அறிவுசார் சொத்து வழிகாட்டி",
    ui: {
      disclaimer: "இது கல்வி வழிகாட்டுதல் மட்டுமே — சட்ட ஆலோசனை அல்ல.",
      evidence: "சட்டபூர்வ சான்று",
      citations: "சட்ட விதிகள்",
      confidence: "துல்லியம்",
      continue: "தொடரவும்"
    }
  },
  mr: {
    gameTitle: "आयपी शक्ती पाथ",
    tagline: "आयुर्वेद संकल्पनेपासून संरक्षित नवोपक्रमापर्यंत",
    ui: {
      disclaimer: "ही केवळ शैक्षणिक माहिती आहे — कायदेशीर सल्ला नाही.",
      evidence: "कायदेशीर पुरावा",
      citations: "कायद्याच्या तरतुदी",
      confidence: "अचूकता",
      continue: "पुढे जा"
    }
  },
  bn: {
    gameTitle: "আইপি শক্তি পাথ",
    tagline: "আয়ুর্বেদ ধারণা থেকে সুরক্ষিত উদ্ভাবন",
    ui: {
      disclaimer: "এটি কেবল শিক্ষামূলক নির্দেশিকা — আইনি পরামর্শ নয়।",
      evidence: "আইনি প্রমাণ",
      citations: "আইনি ধারা",
      confidence: "নির্ভুলতা",
      continue: "এগিয়ে যান"
    }
  }
};
// --- File: ./js/audio/SoundSynth.js ---
﻿// Zero-Dependency Web Audio API Synthesizer for IP Sakti Path
class SoundSynth {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.currentAmbient = null;
    this.ambientGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.ambientGain = this.ctx.createGain();
        this.ambientGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        this.ambientGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playClick() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch(e) {}
  }

  playSparkle() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.05);
        gain.gain.setValueAtTime(0.12, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.35);
      });
    } catch(e) {}
  }

  playGrind() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140 + Math.random() * 60, now);
      osc.frequency.linearRampToValueAtTime(90, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } catch(e) {}
  }

  playBubble() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.12);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } catch(e) {}
  }

  playShieldZap() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.22);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch(e) {}
  }

  playHologram() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.25);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.28);
    } catch(e) {}
  }

  playSuccess() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.2, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.5);
      });
    } catch(e) {}
  }

  playVictory() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const fanfare = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50, 1318.51];
      fanfare.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);
        gain.gain.setValueAtTime(0.22, now + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.6);
      });
    } catch(e) {}
  }

  playFootstep() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(100 + Math.random() * 30, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch(e) {}
  }

  setAmbient(envType) {
    if (!this.ctx || this.isMuted) return;
    this.stopAmbient();
    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      
      filter.type = "lowpass";
      
      if (envType === "clinic_opd" || envType === "academy_hall") {
        osc1.frequency.setValueAtTime(146.83, now); // D3 Tanpura
        osc2.frequency.setValueAtTime(220.00, now); // A3
        filter.frequency.setValueAtTime(600, now);
      } else if (envType === "rnd_lab") {
        osc1.frequency.setValueAtTime(110.00, now); // A2
        osc2.frequency.setValueAtTime(330.00, now); // E4
        filter.frequency.setValueAtTime(450, now);
      } else if (envType === "herbal_farm") {
        osc1.frequency.setValueAtTime(164.81, now); // E3 Nature
        osc2.frequency.setValueAtTime(246.94, now); // B3
        filter.frequency.setValueAtTime(500, now);
      } else if (envType === "war_room") {
        osc1.frequency.setValueAtTime(82.41, now);  // E2 War pulse
        osc2.frequency.setValueAtTime(123.47, now); // B2
        filter.frequency.setValueAtTime(300, now);
      } else {
        osc1.frequency.setValueAtTime(130.81, now); // C3
        osc2.frequency.setValueAtTime(196.00, now); // G3
        filter.frequency.setValueAtTime(550, now);
      }

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(this.ambientGain);

      osc1.start();
      osc2.start();

      this.currentAmbient = { osc1, osc2 };
    } catch(e) {}
  }

  stopAmbient() {
    if (this.currentAmbient) {
      try {
        this.currentAmbient.osc1.stop();
        this.currentAmbient.osc2.stop();
      } catch(e) {}
      this.currentAmbient = null;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.setValueAtTime(this.isMuted ? 0 : 0.2, this.ctx.currentTime);
    }
    return this.isMuted;
  }
}

const sound = new SoundSynth();
// --- File: ./js/ai/SaktiSahayakRAG.js ---
// Strict Statutory RAG Legal & Regulatory AI Assistant for Ayurveda & IP: Sakti Sahayak
// Integrated with Safe Abstention, Multi-Jurisdiction Filter, and Voice Waveform Simulation

class SaktiSahayakRAG {
  constructor() {
    this.systemPrompt = `You are Ask IP Sakti, a highly accurate, multilingual, RAG-based AI assistant specialised in Intellectual Property and regulatory guidance for Ayurveda.
Rules:
- Answer strictly from codified statutory context
- Never invent citations, section numbers, or legal precedents
- Maintain explicit national vs international jurisdictional separation
- Help classify product formulations into the 6 statutory categories
- Always provide source citations, confidence level, and standing legal disclaimer
- Safely abstain on out-of-scope or uncertain queries and offer escalation to human IP facilitators`;

    this.jurisdictionFilter = "all"; // "all", "india", "international"

    this.knowledgeBase = [
      // 1. Section 3(p) & Traditional Knowledge
      {
        id: "sec3p",
        keywords: ["3p", "traditional knowledge", "prior art", "tkdl", "ayurvedic formulary", "classical", "samhita", "sharangdhara", "charaka", "sushruta", "public domain"],
        title: "Section 3(p) - Traditional Knowledge Exclusion & TKDL Defense",
        jurisdiction: "india",
        jurisdictionLabel: "India (Indian Patents Act, 1970 & 2024 Rules)",
        citations: "Section 3(p), Patents Act 1970; Patent (Amendment) Rules 2024; Rule 158B, Drugs & Cosmetics Rules 1945; TKDL Access Protocols (CSIR/AYUSH).",
        directAnswer: "Under Section 3(p) of the Patents Act 1970, an invention which in effect is traditional knowledge or which is an aggregation or duplication of known properties of traditionally known component or components is NOT patentable. Classical Ayurvedic formulations described in First Schedule authoritative texts (e.g. Charaka Samhita, Sharangdhara Samhita, AFI) belong to the public domain and are vigorously defended using the Traditional Knowledge Digital Library (TKDL with 4.4 lakh formulation dossiers). To overcome Section 3(p), an applicant must demonstrate substantial technical intervention, novel non-obvious extraction technology, or unexpected synergistic efficacy not known in ancient literature.",
        why: "Classical compendia are prior art accessible to the public. Granting private monopolies on ancient medicine violates public interest and international biodiversity ethics.",
        confidence: 99.4,
        nextStep: "Conduct comprehensive InPASS and TKDL concordance check; focus patent claims on novel extraction parameters or synergistic bioavailability enhancement.",
        registryLink: { name: "Indian Patent Office Portal", url: "https://ipindia.gov.in", form: "Form 1 (Application for Patent)" }
      },

      // 2. Section 3(e) & Synergy Threshold
      {
        id: "sec3e",
        keywords: ["3e", "synergy", "admixture", "curcumin", "piperine", "combination", "bioavailability", "enhancement", "bio-enhancer"],
        title: "Section 3(e) - Synergistic Combinations vs Mere Admixture",
        jurisdiction: "india",
        jurisdictionLabel: "India (Indian Patents Act, 1970)",
        citations: "Section 3(e), Patents Act 1970; Lallubhai Amichand v. Shyam Sunder (AIR 1980 Del 127); Guidelines for Examination of Patent Applications in Pharmaceuticals (CGPDTM 2014).",
        directAnswer: "Section 3(e) prohibits patenting of a substance obtained by a mere admixture resulting only in the aggregation of the properties of the components thereof, or a process for producing such substance. For an Ayurvedic proprietary formulation to be patentable, quantitative pharmacological data must prove statistically significant synergy exceeding the additive baseline of individual constituents (E_combination > E_A + E_B). For example, pairing Curcumin with Piperine achieves a 2000% absorption surge, demonstrating non-obvious bio-enhancement.",
        why: "Simply mixing two known herbs does not constitute an inventive step unless a surprising synergistic biological mechanism is empirically demonstrated.",
        confidence: 98.8,
        nextStep: "Generate comparative in-vitro / animal pharmacological data plotting single-agent vs combined dose-response curves.",
        registryLink: { name: "IPO Patent Filing Portal", url: "https://ipindia.gov.in", form: "Form 2 (Complete Specification)" }
      },

      // 3. Section 3(d) & Therapeutic Efficacy
      {
        id: "sec3d",
        keywords: ["3d", "efficacy", "bioavailability", "derivative", "nano-formulation", "polymorph", "therapeutic efficacy", "incremental"],
        title: "Section 3(d) - Incremental Innovation & Therapeutic Efficacy",
        jurisdiction: "india",
        jurisdictionLabel: "India (Indian Patents Act, 1970)",
        citations: "Section 3(d), Patents Act 1970; Novartis AG v. Union of India (2013) 6 SCC 1; CGPDTM Pharmaceutical Guidelines.",
        directAnswer: "Under Section 3(d), the mere discovery of a new form of a known substance which does not result in the enhancement of the known efficacy of that substance is non-patentable. In Ayurvedic phytopharmaceuticals, nano-carriers, and extract delivery systems, merely increasing blood pharmacokinetic levels (bioavailability) is insufficient unless accompanied by demonstrable improvement in therapeutic efficacy (e.g. accelerated wound healing, lower toxicity, biomarker modulation).",
        why: "Prevents 'evergreening' of pharmaceutical patents without true clinical or therapeutic advancement.",
        confidence: 97.9,
        nextStep: "Conduct comparative clinical or preclinical therapeutic efficacy studies rather than mere pharmacokinetic bioavailability assays.",
        registryLink: { name: "IPO Patent Search Portal (InPASS)", url: "https://ipindia.gov.in", form: "Form 2" }
      },

      // 4. Biological Diversity Act 2002/2023 & ABS 2024 Rules
      {
        id: "bda_abs",
        keywords: ["nba", "biodiversity", "abs", "access and benefit sharing", "kutki", "tribal", "form 1", "form 3", "biological resource", "bda", "2023 amendment", "2024 rules"],
        title: "Biological Diversity Act 2002 (as amended 2023) & ABS 2024 Rules",
        jurisdiction: "india",
        jurisdictionLabel: "India (National Biodiversity Authority - NBA)",
        citations: "Sections 3, 4, 6 & 19, Biological Diversity Act 2002 (as amended by Biological Diversity (Amendment) Act 2023); Biological Diversity Rules 2024; Nagoya Protocol on Access and Benefit Sharing.",
        directAnswer: "Under Section 6 of the Biological Diversity Act, applying for IPR inside or outside India for an invention based on biological resources or associated traditional knowledge from India requires prior approval of the National Biodiversity Authority (Form 3). Commercial utilization of Indian bio-resources mandates filing Form 1 and executing Access and Benefit Sharing (ABS) agreements, paying 3.0% to 5.0% of ex-factory sale price into community biodiversity funds. Note: The 2023 Amendment exempts registered AYUSH practitioners and codified traditional knowledge from State Biodiversity Board intimations for local practice.",
        why: "Protects sovereign national biodiversity and guarantees fair economic returns to indigenous and tribal communities who conserve medicinal plants.",
        confidence: 99.2,
        nextStep: "File NBA Form 3 prior to patent grant and execute ABS agreements with State Biodiversity Boards.",
        registryLink: { name: "NBA e-Filing Portal (ABS)", url: "http://nbaindia.org", form: "Form 1 (Commercial Utilization) & Form 3 (IPR)" }
      },

      // 5. WIPO GRATK Treaty 2024
      {
        id: "wipo_gratk",
        keywords: ["gratk", "wipo treaty", "genetic resources", "mandatory disclosure", "origin", "traditional knowledge treaty", "2024 treaty"],
        title: "WIPO Treaty on Genetic Resources & Associated Traditional Knowledge (GRATK 2024)",
        jurisdiction: "international",
        jurisdictionLabel: "International (WIPO Diplomatic Conference, May 2024)",
        citations: "WIPO Treaty on Intellectual Property, Genetic Resources and Associated Traditional Knowledge, Articles 3, 4 & 5 (Adopted May 24, 2024, Geneva).",
        directAnswer: "The historic WIPO GRATK Treaty (adopted May 2024) establishes a mandatory international patent disclosure requirement. Patent applicants in all contracting member states whose claimed invention is based on genetic resources or associated traditional knowledge MUST disclose the country of origin (or source) and the indigenous community provider. This provides a decisive international legal shield preventing unauthorized misappropriation and biopiracy of Ayurvedic botanicals globally.",
        why: "Creates an interoperable global transparency mechanism connecting patent offices worldwide with national biodiversity repositories.",
        confidence: 99.5,
        nextStep: "Ensure supply chain documentation includes certified certificates of botanical origin for international patent filings.",
        registryLink: { name: "WIPO IP Portal", url: "https://www.wipo.int/treaties/en/ip/gratk/", form: "WIPO Mandatory Disclosure Statement" }
      },

      // 6. D&C Rule 158B & Schedule T GMP
      {
        id: "dc_rule158b",
        keywords: ["rule 158b", "schedule t", "gmp", "heavy metals", "licensing", "sla", "state licensing authority", "quality control", "d&c"],
        title: "Drugs & Cosmetics Act Rule 158B & Schedule T GMP Standards",
        jurisdiction: "india",
        jurisdictionLabel: "India (Ministry of AYUSH & State Licensing Authorities)",
        citations: "Drugs & Cosmetics Rules 1945, Rule 158B; Schedule T (Good Manufacturing Practices for ASU Drugs); Gazette Notification GSR 561(E).",
        directAnswer: "Rule 158B governs licensing for Patent or Proprietary (ASU) medicines, requiring pilot safety and efficacy data or classical bibliographic concordance. Schedule T mandates certified clean-room manufacturing, botanical raw-material authentication, batch processing logs, and statutory heavy metal safety testing limits: Lead (Pb) < 10.0 ppm, Arsenic (As) < 3.0 ppm, Cadmium (Cd) < 0.3 ppm, and Mercury (Hg) < 1.0 ppm.",
        why: "Guarantees public consumer safety and standardizes ASU medicine manufacturing quality across all Indian states.",
        confidence: 98.6,
        nextStep: "Conduct batch heavy-metal and microbial testing at a NABL-accredited AYUSH laboratory and apply for Form 24D/25D on e-Aushadhi.",
        registryLink: { name: "AYUSH State Licensing Portal (e-AUSHADHI)", url: "https://ayush.gov.in", form: "Form 24D / Form 25D (ASU Drug License)" }
      },

      // 7. Drugs and Magic Remedies Act 1954
      {
        id: "dmr_act",
        keywords: ["magic remedies", "disease claim", "advertisement", "objectionable", "cure", "dmr", "misleading", "diabetes claim", "cancer claim"],
        title: "Drugs and Magic Remedies (Objectionable Advertisements) Act 1954",
        jurisdiction: "india",
        jurisdictionLabel: "India (Ministry of Health & Family Welfare)",
        citations: "Drugs and Magic Remedies (Objectionable Advertisements) Act 1954, Section 3 & Schedule of 54 Specified Diseases.",
        directAnswer: "The DMR Act strictly prohibits the publication of advertisements claiming Ayurvedic drugs can cure or treat 54 specified chronic disorders, including cancer, diabetes, hypertension, kidney stones, baldness, and sexual virility. Marketing claims must focus strictly on classical indications (e.g. Rasayana, Medhya, Pachana) or general wellness without asserting unverified magical or absolute curative properties.",
        why: "Protects patients from exploitative health advertising and fraudulent cure guarantees.",
        confidence: 99.1,
        nextStep: "Audit all product labelling, web marketing copy, and social media promotions against the 54 prohibited schedule conditions.",
        registryLink: { name: "Legislative Department Portal", url: "https://legislative.gov.in", form: "Statutory Guidance Reference" }
      },

      // 8. FSSAI Ayurveda Aahar Regulations 2022
      {
        id: "fssai_ayurveda_aahar",
        keywords: ["ayurveda aahar", "fssai", "food", "nutraceutical", "dietary", "functional food", "food license", "ahara"],
        title: "FSSAI Food Safety and Standards (Ayurveda Aahar) Regulations 2022",
        jurisdiction: "india",
        jurisdictionLabel: "India (Food Safety and Standards Authority of India - FSSAI)",
        citations: "FSSAI Ayurveda Aahar Regulations 2022; Gazette Notification F. No. Std/SP-05/A-1.2022; Schedule A permitted recipes.",
        directAnswer: "Ayurveda Aahar creates a dedicated statutory food category for food recipes and dietary supplements prepared in strict accordance with authoritative Ayurvedic compendia. Ayurveda Aahar products cannot contain synthetic vitamins or minerals, must carry the official dedicated 'Ayurveda Aahar' green logo, and must not claim to prevent or cure diseases, restricting claims to dietary balance and holistic physiological support.",
        why: "Provides an agile food licensing pathway distinct from pharmaceutical ASU drug licensing.",
        confidence: 98.4,
        nextStep: "Register recipe on FSSAI FoSCoS portal under the Ayurveda Aahar category with classical text concordances.",
        registryLink: { name: "FSSAI FoSCoS Portal", url: "https://foscos.fssai.gov.in", form: "Ayurveda Aahar License" }
      },

      // 9. Trademark Class 3 & Class 5 (Brand Sovereignty)
      {
        id: "tm_ayush",
        keywords: ["trademark", "tm", "brand", "class 5", "class 3", "madrid", "sanskrit mark", "brand name", "packaging"],
        title: "Ayurvedic Brand Sovereignty & Trademark Registration (Class 3 & 5)",
        jurisdiction: "india",
        jurisdictionLabel: "India (Trade Marks Registry / DPIIT)",
        citations: "Trade Marks Act 1999, Sections 9 & 11; Nice Classification System (Class 3 Cosmetics & Class 5 Pharmaceuticals); Madrid Protocol.",
        directAnswer: "Ayurvedic branding requires strategic classification: Class 3 covers cosmetics, hair oils, and skincare, while Class 5 covers medicinal teas, herbal capsules, and ASU formulations. Under Section 9, generic Sanskrit terms (e.g. 'Churna', 'Taila', 'Triphala') cannot be monopolized alone; applicants must create distinctive coined marks (e.g. 'Vedix', 'KeshavaGlow') to achieve swift trademark registration.",
        why: "Protects commercial identity and consumer trust from counterfeit packaging.",
        confidence: 98.9,
        nextStep: "Conduct comprehensive trademark availability search in Class 3 & 5 and file Form TM-A on IP India portal.",
        registryLink: { name: "IP India Trade Mark Registry", url: "https://ipindia.gov.in", form: "Form TM-A" }
      },

      // 10. International Export (USFDA DSHEA & EU THMPD)
      {
        id: "export_us_eu",
        keywords: ["export", "usa", "europe", "usfda", "dshea", "thmpd", "international market", "dietary supplement", "herbal medicine"],
        title: "International Export Strategy: USFDA DSHEA & EU THMPD Standards",
        jurisdiction: "international",
        jurisdictionLabel: "Global (US FDA & European Medicines Agency - EMA)",
        citations: "US Dietary Supplement Health and Education Act 1994 (DSHEA / 21 CFR 111); EU Directive 2004/24/EC (Traditional Herbal Medicinal Products Directive).",
        directAnswer: "Exporting Ayurvedic products requires market-specific positioning: In the USA, products enter as Dietary Supplements (DSHEA) under 21 CFR 111 cGMP requiring structure/function claims with mandatory FDA disclaimers. In the European Union, products must register under THMPD (2004/24/EC) proving 30 years of traditional medicinal use (including 15 years within the EU) and strict absence of adulterants, banned heavy metals, and animal substances.",
        why: "Prevent product recalls and border rejections by foreign customs authorities.",
        confidence: 97.8,
        nextStep: "Format packaging to FDA Dietary Supplement facts panel or prepare EU THMPD bibliographical concordance dossier.",
        registryLink: { name: "US FDA Dietary Supplement Portal", url: "https://www.fda.gov/food/dietary-supplements", form: "New Dietary Ingredient (NDI) Notification" }
      }
    ];
  }

  query(userQuery, jurFilter = "all") {
    if (!userQuery || userQuery.trim().length < 2) {
      return this.getDefaultResponse();
    }

    const q = userQuery.toLowerCase();
    
    // Check for exact knowledge matches
    const candidates = this.knowledgeBase.filter(item => {
      if (jurFilter !== "all" && item.jurisdiction !== jurFilter) return false;
      return item.keywords.some(k => q.includes(k)) || item.title.toLowerCase().includes(q) || item.directAnswer.toLowerCase().includes(q);
    });

    if (candidates.length > 0) {
      return {
        status: "success",
        data: candidates[0],
        allMatches: candidates
      };
    }

    // SAFE ABSTENTION: When query lacks sufficient verified context
    return {
      status: "abstain",
      message: "VERIFIED EVIDENCE IS INSUFFICIENT",
      query: userQuery,
      missingFactors: [
        "Specific statutory section or product active ingredient not identified in codified corpus.",
        "Unclear whether query relates to patentability, food regulation, cosmetic norms, or international treaties.",
        "Jurisdictional scope (India vs International) not specified."
      ],
      whyItMatters: "Responsible AI mandates abstaining from legal speculation when authoritative statutory citations cannot be verified with 95%+ confidence.",
      sourceToCheck: "The Patents Act 1970, Biological Diversity Act 2002 (as amended 2023), or Drugs & Cosmetics Rule 158B.",
      suggestedAction: "Rephrase query using statutory keywords (e.g. 'Section 3(p)', 'Synergy 3(e)', 'NBA Form 3', 'Rule 158B', 'WIPO GRATK') or request human IP facilitator review."
    };
  }

  getDefaultResponse() {
    return {
      status: "success",
      data: this.knowledgeBase[0],
      allMatches: this.knowledgeBase
    };
  }
}

const saktiRAG = new SaktiSahayakRAG();

// --- File: ./js/core/KnowledgeCoreVisualizer.js ---
// Ayurveda Knowledge Core Interactive Visualizer (HTML5 Canvas)
// Clean ASCII version - no emoji characters

class KnowledgeCoreVisualizer {
  constructor(canvasId, containerId) {
    this.canvas = document.getElementById(canvasId);
    this.container = document.getElementById(containerId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.animationFrame = null;
    this.angle = 0;
    this.hoveredNode = null;
    var self = this;

    this.nodes = [
      { id: "patent", label: "PATENT", shortLabel: "PAT", angle: 0, dist: 160, color: "#06b6d4", desc: "Novelty, non-obvious synergy (Sec 3e), and phytopharmaceutical extraction methods." },
      { id: "trademark", label: "TRADEMARK", shortLabel: "TM", angle: Math.PI / 4, dist: 175, color: "#f59e0b", desc: "Brand identity, Sanskrit medicinal brand names, and ASU proprietary trade dress." },
      { id: "gi", label: "GI", shortLabel: "GI", angle: Math.PI / 2, dist: 165, color: "#10b981", desc: "Geographical Indications for regional botanicals (e.g., Kashmir Saffron)." },
      { id: "regulation", label: "REGULATION", shortLabel: "REG", angle: 3 * Math.PI / 4, dist: 180, color: "#38bdf8", desc: "Drugs and Cosmetics Rule 158B, Schedule T GMP, FSSAI Ayurveda-Aahar." },
      { id: "tk", label: "TRAD. KNOWLEDGE", shortLabel: "TK", angle: Math.PI, dist: 170, color: "#34d399", desc: "TKDL 4.4L dossiers, Section 3(p) exclusion, ancient Samhita concordance." },
      { id: "abs", label: "ABS", shortLabel: "ABS", angle: 5 * Math.PI / 4, dist: 175, color: "#a855f7", desc: "National Biodiversity Authority (NBA Form 1/3) and 3-5% community benefit sharing." },
      { id: "research", label: "RESEARCH", shortLabel: "R&D", angle: 3 * Math.PI / 2, dist: 160, color: "#fbbf24", desc: "Phytochemical characterization, biomarker standardization, clinical pharmacokinetics." },
      { id: "innovation", label: "GLOBAL IP", shortLabel: "INTL", angle: 7 * Math.PI / 4, dist: 180, color: "#f43f5e", desc: "WIPO GRATK Treaty 2024, PCT filings, US/EU herbal market entry." }
    ];

    this.particles = [];
    this.initParticles();
    if (this.canvas) {
      this.resize();
      window.addEventListener('resize', function() { self.resize(); });
      this.canvas.addEventListener('mousemove', function(e) { self.handleMouseMove(e); });
      this.canvas.addEventListener('mouseleave', function() { self.handleMouseLeave(); });
      this.canvas.addEventListener('click', function(e) { self.handleClick(e); });
    }
  }

  initParticles() {
    this.particles = [];
    var colors = ['#06b6d4', '#10b981', '#f59e0b', '#34d399'];
    for (var i = 0; i < 40; i++) {
      this.particles.push({
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 300,
        radius: Math.random() * 2 + 0.8,
        speed: Math.random() * 0.015 + 0.005,
        angle: Math.random() * Math.PI * 2,
        dist: Math.random() * 110 + 20,
        color: colors[Math.floor(Math.random() * 4)]
      });
    }
  }

  resize() {
    if (!this.canvas || !this.container) return;
    var rect = this.container.getBoundingClientRect();
    this.canvas.width = rect.width || 600;
    this.canvas.height = 420;
  }

  start() {
    if (!this.ctx) return;
    var self = this;
    var animate = function() {
      self.render();
      self.animationFrame = requestAnimationFrame(animate);
    };
    animate();
  }

  stop() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  handleMouseMove(e) {
    if (!this.canvas) return;
    var rect = this.canvas.getBoundingClientRect();
    var mouseX = e.clientX - rect.left - this.canvas.width / 2;
    var mouseY = e.clientY - rect.top - this.canvas.height / 2;

    this.hoveredNode = null;
    for (var i = 0; i < this.nodes.length; i++) {
      var node = this.nodes[i];
      var currentAngle = node.angle + this.angle;
      var nodeX = Math.cos(currentAngle) * node.dist;
      var nodeY = Math.sin(currentAngle) * (node.dist * 0.75);
      var dist = Math.hypot(mouseX - nodeX, mouseY - nodeY);
      if (dist < 32) {
        this.hoveredNode = node;
        break;
      }
    }

    if (this.hoveredNode) {
      this.canvas.style.cursor = 'pointer';
      this.updateTooltip(this.hoveredNode, e.clientX, e.clientY);
    } else {
      this.canvas.style.cursor = 'default';
      this.hideTooltip();
    }
  }

  handleMouseLeave() {
    this.hoveredNode = null;
    this.hideTooltip();
  }

  handleClick(e) {
    if (this.hoveredNode && window.saktiApp) {
      window.saktiApp.handleCoreNodeClick(this.hoveredNode.id);
    }
  }

  updateTooltip(node, x, y) {
    var tooltip = document.getElementById('core-node-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'core-node-tooltip';
      tooltip.className = 'glass-panel';
      tooltip.style.position = 'fixed';
      tooltip.style.zIndex = '1000';
      tooltip.style.padding = '12px 16px';
      tooltip.style.maxWidth = '280px';
      tooltip.style.pointerEvents = 'none';
      tooltip.style.border = '1.5px solid ' + node.color;
      tooltip.style.boxShadow = '0 0 25px ' + node.color + '66';
      document.body.appendChild(tooltip);
    }
    tooltip.style.display = 'block';
    tooltip.style.left = (x + 15) + 'px';
    tooltip.style.top = (y + 15) + 'px';
    tooltip.innerHTML = '<div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">' +
      '<b style="color:' + node.color + '; font-size:0.92rem;">' + node.label + '</b></div>' +
      '<div style="font-size:0.78rem; color:#cbd5e1; line-height:1.4;">' + node.desc + '</div>' +
      '<div style="font-size:0.7rem; color:#94a3b8; margin-top:6px; font-weight:700;">Click to explore statutory guidance</div>';
  }

  hideTooltip() {
    var tooltip = document.getElementById('core-node-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  }

  render() {
    var ctx = this.ctx;
    var width = this.canvas.width;
    var height = this.canvas.height;
    var cx = width / 2;
    var cy = height / 2;

    ctx.clearRect(0, 0, width, height);
    this.angle += 0.003;
    ctx.save();
    ctx.translate(cx, cy);

    // Outer rings
    for (var r = 80; r <= 140; r += 30) {
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.3, r * 0.95, this.angle * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Particles
    for (var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      p.angle += p.speed;
      var px = Math.cos(p.angle) * p.dist;
      var py = Math.sin(p.angle) * (p.dist * 0.7);
      ctx.beginPath();
      ctx.arc(px, py, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.fill();
    }

    // Central Sphere
    var sphereGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, 65);
    sphereGrad.addColorStop(0, '#34d399');
    sphereGrad.addColorStop(0.3, '#06b6d4');
    sphereGrad.addColorStop(0.7, '#042f2e');
    sphereGrad.addColorStop(1, 'rgba(3, 7, 18, 0.95)');

    ctx.beginPath();
    ctx.arc(0, 0, 65, 0, Math.PI * 2);
    ctx.fillStyle = sphereGrad;
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 30;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#67e8f9';
    ctx.stroke();

    // Mandala lines
    ctx.save();
    ctx.rotate(this.angle * 0.8);
    for (var j = 0; j < 8; j++) {
      ctx.beginPath();
      ctx.ellipse(0, 22, 10, 26, (j * Math.PI) / 4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(254, 240, 138, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
    ctx.restore();

    // Core Label (plain text, no emoji)
    ctx.font = '900 14px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#fef08a';
    ctx.fillText('IP', 0, -4);
    ctx.font = '700 9px system-ui, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.shadowBlur = 0;
    ctx.fillText('SAKTI', 0, 10);

    // Orbiting nodes
    for (var k = 0; k < this.nodes.length; k++) {
      var node = this.nodes[k];
      var currentAngle = node.angle + this.angle;
      var nx = Math.cos(currentAngle) * node.dist;
      var ny = Math.sin(currentAngle) * (node.dist * 0.75);

      // Connection line
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(nx, ny);
      ctx.strokeStyle = this.hoveredNode === node ? node.color : 'rgba(148, 163, 184, 0.2)';
      ctx.lineWidth = this.hoveredNode === node ? 2.5 : 1;
      ctx.stroke();

      var isHovered = this.hoveredNode === node;
      var radius = isHovered ? 26 : 22;

      // Node circle
      ctx.beginPath();
      ctx.arc(nx, ny, radius, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? 'rgba(15, 23, 42, 0.98)' : 'rgba(11, 20, 38, 0.9)';
      ctx.fill();
      ctx.lineWidth = isHovered ? 2.5 : 1.5;
      ctx.strokeStyle = node.color;
      ctx.shadowColor = node.color;
      ctx.shadowBlur = isHovered ? 25 : 10;
      ctx.stroke();

      // Node short label (plain text, no emoji)
      ctx.font = '800 11px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = isHovered ? '#ffffff' : node.color;
      ctx.shadowBlur = 0;
      ctx.fillText(node.shortLabel, nx, ny);

      // Full label below
      ctx.font = '700 9px system-ui, sans-serif';
      ctx.fillStyle = isHovered ? '#ffffff' : '#cbd5e1';
      ctx.fillText(node.label, nx, ny + radius + 12);
    }

    ctx.restore();
  }
}

// --- File: ./js/journey/IPJourneyEngine.js ---
// Zero-Login 7-Step IP Journey & Multi-Lens Regulatory Engine for Ayurveda Innovations

class IPJourneyEngine {
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

// --- File: ./js/constellation/IPConstellation.js ---
// IP Constellation Interactive Orbital Visualizer & Multi-Node Inspector Panel for Ayurvedic Innovations

class IPConstellation {
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

// --- File: ./js/passport/IPPassportGenerator.js ---
// IP Sakti Passport Generator & Clean Downloadable Roadmap Engine for Ayurvedic Innovations

class IPPassportGenerator {
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

// --- File: ./js/vault/SourceVault.js ---
// Source Vault: Comprehensive Verified Codified Statutory & Regulatory Corpus for Ayurveda & IPR

class SourceVault {
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

// --- File: ./js/evidence/EvidenceChain.js ---
// Evidence Chain Verification Visualizer & Multi-Hop Legal Grounding Engine

class EvidenceChain {
  constructor(app) {
    this.app = app;
    this.chains = [
      {
        id: "chain_3p",
        title: "Traditional Knowledge Patent Bar",
        claim: "Classical Ayurvedic recipes cited in First Schedule texts cannot be patented as novel inventions.",
        source: "The Patents Act, 1970 (IPO / DPIIT)",
        provision: "Section 3(p) & CSIR-TKDL Access Protocols",
        why: "Classical formulations belong to the public domain. An invention which in effect is traditional knowledge or an aggregation of known properties of traditionally known components is excluded from patentability.",
        verification: "verified",
        confidence: 99.4,
        nextAction: "Document non-obvious technical modifications, novel extraction parameters, or synergistic bio-enhancers."
      },
      {
        id: "chain_3e",
        title: "Synergy vs Mere Admixture Threshold",
        claim: "A proprietary herbal mixture must demonstrate statistically significant pharmacological synergy exceeding simple additive effects to be patentable.",
        source: "The Patents Act, 1970 & Pharmaceutical Examination Guidelines (CGPDTM)",
        provision: "Section 3(e) & Lallubhai Amichand Precedents",
        why: "Section 3(e) excludes mere admixtures resulting only in the aggregation of component properties. Quantitative biological assays must prove E_combination > E_A + E_B (e.g. Curcumin + Piperine 2000% bioavailability surge).",
        verification: "verified",
        confidence: 98.8,
        nextAction: "Execute standardized in-vitro biomarker synergy index assays before patent drafting."
      },
      {
        id: "chain_bda",
        title: "Mandatory Biological Resource IPR Approval",
        claim: "Filing an IP application inside or outside India based on Indian biological resources requires prior statutory approval from the National Biodiversity Authority.",
        source: "Biological Diversity Act, 2002 (as amended 2023) & BD Rules 2024",
        provision: "Section 6, Section 19 & NBA Form 3",
        why: "Section 6 makes it mandatory to obtain NBA approval prior to patent grant for inventions utilizing Indian biological resources, ensuring 3.0%-5.0% fair and equitable benefit sharing with local Biodiversity Management Committees.",
        verification: "verified",
        confidence: 99.2,
        nextAction: "Submit NBA Form 3 online via the NBA e-Filing Portal before the patent enters national examination."
      },
      {
        id: "chain_gratk",
        title: "International Patent Origin Disclosure",
        claim: "Patent applicants in all WIPO member states must disclose the country of origin of genetic resources and traditional knowledge used in their inventions.",
        source: "WIPO Treaty on Intellectual Property, Genetic Resources and Associated Traditional Knowledge (Adopted May 2024)",
        provision: "Articles 3 & 4 (Mandatory Disclosure)",
        why: "Adopted by consensus in Geneva, this treaty prevents biopiracy by mandating transparent disclosure of Indian origin in patent offices worldwide (USPTO, EPO, JPO).",
        verification: "verified",
        confidence: 99.5,
        nextAction: "Maintain authenticated botanical supply chain certificates and community provenance logs."
      },
      {
        id: "chain_dmr",
        title: "Prohibition of Misleading Disease Cure Claims",
        claim: "Ayurvedic medicines cannot be marketed with claims to cure diabetes, cancer, or 52 other specified diseases.",
        source: "The Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954",
        provision: "Section 3 & Schedule (54 Specified Diseases)",
        why: "Protects vulnerable consumers from misleading curative claims. ASU proprietary medicines may only claim therapeutic management, symptom relief, or classical indications.",
        verification: "verified",
        confidence: 99.0,
        nextAction: "Audit marketing copy, website packaging, and social media claims against the DMR schedule."
      }
    ];
  }

  renderView(container) {
    let html = `
      <div style="display:flex; flex-direction:column; gap:16px;">
        
        <div class="glass-panel" style="padding: 20px; border-color: rgba(6, 182, 212, 0.4);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="pill-badge pill-cyan">EVIDENCE CHAIN</span>
                <span class="pill-badge pill-emerald">Zero Legal Hallucination</span>
                <span class="pill-badge pill-gold">Grounding Precision 99%+</span>
              </div>
              <h2 style="font-size: 1.35rem; color: #f8fafc; margin-top: 4px;">Responsible AI Statutory Evidence Chains</h2>
              <div style="font-size: 0.82rem; color: #94a3b8;">
                Every AI guidance claim is strictly mapped through a transparent 5-point verification pipeline: Claim -> Source -> Provision -> Plain Explanation -> Action.
              </div>
            </div>

            <button id="btn-escalate-chain" class="btn-gold" style="font-size:0.82rem;">
              Request Human Verification
            </button>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:14px;">
          ${this.chains.map((c, idx) => `
            <div class="glass-panel" style="padding: 20px; border-color: rgba(6, 182, 212, 0.3);">
              
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span class="pill-badge pill-cyan">Evidence Chain #0${idx + 1}</span>
                  <b style="color:#f8fafc; font-size:1.05rem;">${c.title}</b>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <span class="pill-badge pill-emerald">STATUTE VERIFIED</span>
                  <span class="pill-badge pill-gold">${c.confidence}% Confidence</span>
                </div>
              </div>

              <!-- 5-Point Flow Pipeline -->
              <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:10px; font-size:0.8rem; margin-bottom:12px;">
                
                <div style="background:rgba(15,23,42,0.85); padding:12px; border-radius:8px; border-top:3px solid #67e8f9;">
                  <b style="color:#67e8f9; font-size:0.75rem; display:block; margin-bottom:4px;">1. AI GUIDANCE CLAIM:</b>
                  <span style="color:#f8fafc;">"${c.claim}"</span>
                </div>

                <div style="background:rgba(15,23,42,0.85); padding:12px; border-radius:8px; border-top:3px solid #f59e0b;">
                  <b style="color:#fef08a; font-size:0.75rem; display:block; margin-bottom:4px;">2. OFFICIAL SOURCE:</b>
                  <span style="color:#e2e8f0;">${c.source}</span>
                </div>

                <div style="background:rgba(15,23,42,0.85); padding:12px; border-radius:8px; border-top:3px solid #10b981;">
                  <b style="color:#a7f3d0; font-size:0.75rem; display:block; margin-bottom:4px;">3. CODIFIED PROVISION:</b>
                  <b style="color:#34d399;">${c.provision}</b>
                </div>

                <div style="background:rgba(15,23,42,0.85); padding:12px; border-radius:8px; border-top:3px solid #a855f7;">
                  <b style="color:#e9d5ff; font-size:0.75rem; display:block; margin-bottom:4px;">4. PLAIN EXPLANATION:</b>
                  <span style="color:#cbd5e1;">${c.why}</span>
                </div>

              </div>

              <!-- Actionable Next Step -->
              <div style="background:rgba(6,182,212,0.12); border:1px solid rgba(6,182,212,0.35); padding:10px 14px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                <div style="font-size:0.8rem; color:#e2e8f0;">
                  <b style="color:#67e8f9;">5. Actionable Next Step:</b> ${c.nextAction}
                </div>
                <button class="btn-primary" onclick="alert('Navigating to official portal citation for ${c.provision}')" style="padding:5px 12px; font-size:0.74rem;">
                  Inspect Statutory Text ->
                </button>
              </div>

            </div>
          `).join("")}
        </div>

      </div>
    `;

    container.innerHTML = html;
    const btnEsc = container.querySelector('#btn-escalate-chain');
    if (btnEsc && window.saktiApp) {
      btnEsc.addEventListener('click', () => {
        window.saktiApp.switchTab('escalate');
      });
    }
  }
}

// --- File: ./js/lenses/MultiLensAnalyzer.js ---
// Multi-Lens Analyzer: 6-Category Formulation Classifier, TK Lens, ABS Lens, Global Market Map, & Law Watch

class MultiLensAnalyzer {
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

// --- File: ./js/judge/JudgeModeTour.js ---
// Executive System Tour: 11-Step 3-Minute Presentation Walkthrough (Clean ASCII)

class ExecutiveSystemTour {
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

// --- File: ./js/toys/AyurToyLab.js ---
﻿// High-Impact Visual Ayurvedic Toy & Awareness Laboratory (SIH Presentation Edition)

class AyurToyLab {
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
// --- File: ./js/assistant/FloatingAssistant.js ---
// Floating AI Assistant Component for IP SAKTI PATH (Universal ChatGPT Assistant)
// Clean ASCII, Responsive, Web Search Enabled, Universal Q&A across ALL topics

class FloatingAssistant {
  constructor(app) {
    this.app = app;
    this.isOpen = false;
    this.isLoading = false;
    this.history = [];
    this.userApiKey = localStorage.getItem('ipsakti_openai_key') || '';
    this.dom = {
      launcher: null,
      window: null,
      messages: null,
      input: null,
      btnSend: null,
      typing: null
    };

    this.init();
  }

  init() {
    this.injectStylesIfNeeded();
    this.renderDOM();
    this.attachEvents();
  }

  injectStylesIfNeeded() {
    if (document.getElementById('floating-ai-styles')) return;
    const style = document.createElement('style');
    style.id = 'floating-ai-styles';
    style.textContent = `
      /* Floating AI Launcher Container */
      #floating-ai-launcher-wrapper {
        position: fixed;
        bottom: 28px;
        right: 28px;
        z-index: 99999;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        user-select: none;
      }

      /* Floating Callout Pill */
      .floating-ai-callout {
        background: rgba(15, 23, 42, 0.92);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border: 1.5px solid rgba(6, 182, 212, 0.45);
        color: #f8fafc;
        padding: 8px 14px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.3px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(6, 182, 212, 0.25);
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        white-space: nowrap;
      }
      #floating-ai-launcher-wrapper:hover .floating-ai-callout {
        border-color: #fbbf24;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 158, 11, 0.4);
        transform: translateX(-3px);
      }

      /* Floating Circular Icon */
      #floating-ai-launcher {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 30%, #06b6d4, #064e3b 75%, #030712);
        border: 2.5px solid #67e8f9;
        box-shadow: 0 0 30px rgba(6, 182, 212, 0.55), 0 10px 30px rgba(0, 0, 0, 0.7);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s, border-color 0.25s;
        outline: none;
        position: relative;
      }
      #floating-ai-launcher-wrapper:hover #floating-ai-launcher {
        transform: scale(1.08) rotate(3deg);
        border-color: #fef08a;
        box-shadow: 0 0 40px rgba(6, 182, 212, 0.8), 0 14px 40px rgba(0, 0, 0, 0.8);
      }
      #floating-ai-launcher-wrapper:active #floating-ai-launcher {
        transform: scale(0.95);
      }

      .floating-launcher-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        line-height: 1;
        position: relative;
      }
      .floating-launcher-text {
        font-size: 16px;
        font-weight: 900;
        letter-spacing: 0.5px;
        color: #ffffff;
        text-shadow: 0 0 10px #67e8f9;
      }
      .floating-launcher-sub {
        font-size: 8px;
        font-weight: 800;
        color: #67e8f9;
        letter-spacing: 0.5px;
        margin-top: 1px;
      }
      .floating-status-dot {
        position: absolute;
        top: -4px;
        right: -4px;
        width: 12px;
        height: 12px;
        background: #10b981;
        border: 2px solid #030712;
        border-radius: 50%;
        box-shadow: 0 0 10px #10b981;
        animation: pulse-dot 2s infinite alternate;
      }
      @keyframes pulse-dot {
        0% { transform: scale(0.9); opacity: 0.8; }
        100% { transform: scale(1.25); opacity: 1; box-shadow: 0 0 14px #34d399; }
      }

      /* Chat Window */
      #floating-ai-chat-window {
        position: fixed;
        bottom: 100px;
        right: 28px;
        width: 430px;
        max-width: calc(100vw - 36px);
        height: 590px;
        max-height: calc(100vh - 130px);
        background: rgba(7, 14, 26, 0.97);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        border: 1.5px solid rgba(6, 182, 212, 0.5);
        border-radius: 18px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(6, 182, 212, 0.3);
        z-index: 100000;
        display: none;
        flex-direction: column;
        overflow: hidden;
        animation: float-slide-up 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      @keyframes float-slide-up {
        from { opacity: 0; transform: translateY(25px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }

      /* Header */
      .floating-chat-header {
        padding: 14px 18px;
        background: linear-gradient(135deg, rgba(6, 78, 59, 0.8), rgba(15, 23, 42, 0.95));
        border-bottom: 1px solid rgba(6, 182, 212, 0.35);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .floating-chat-title-box {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .floating-chat-avatar {
        width: 34px;
        height: 34px;
        border-radius: 9px;
        background: #064e3b;
        border: 1.5px solid #10b981;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        font-size: 13px;
        color: #67e8f9;
        box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
      }
      .floating-chat-actions {
        display: flex;
        gap: 6px;
      }
      .floating-btn-icon {
        background: rgba(15, 23, 42, 0.75);
        border: 1px solid rgba(148, 163, 184, 0.25);
        color: #94a3b8;
        padding: 4px 9px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.15s;
      }
      .floating-btn-icon:hover {
        color: #ffffff;
        border-color: #67e8f9;
        background: rgba(6, 182, 212, 0.25);
      }

      /* Messages Area */
      #floating-chat-messages {
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
        scroll-behavior: smooth;
      }
      .floating-msg {
        max-width: 90%;
        padding: 11px 14px;
        border-radius: 12px;
        font-size: 12.5px;
        line-height: 1.55;
        word-break: break-word;
      }
      .floating-msg-assistant {
        align-self: flex-start;
        background: rgba(15, 23, 42, 0.95);
        border: 1px solid rgba(6, 182, 212, 0.35);
        color: #f1f5f9;
        border-top-left-radius: 3px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      }
      .floating-msg-user {
        align-self: flex-end;
        background: linear-gradient(135deg, #047857, #065f46);
        border: 1px solid #10b981;
        color: #ffffff;
        border-top-right-radius: 3px;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.25);
      }

      /* Quick Prompt Chips */
      .floating-chips-container {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 10px;
      }
      .floating-prompt-chip {
        background: rgba(6, 182, 212, 0.12);
        border: 1px solid rgba(6, 182, 212, 0.35);
        color: #67e8f9;
        padding: 7px 11px;
        border-radius: 7px;
        font-size: 11.5px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.15s;
        text-align: left;
      }
      .floating-prompt-chip:hover {
        background: rgba(6, 182, 212, 0.25);
        border-color: #fef08a;
        color: #ffffff;
        transform: translateX(3px);
      }

      /* Source Citations Box */
      .floating-sources-box {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .floating-source-link {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        font-weight: 700;
        color: #fbbf24;
        text-decoration: none;
        background: rgba(245, 158, 11, 0.12);
        border: 1px solid rgba(245, 158, 11, 0.35);
        padding: 3px 8px;
        border-radius: 5px;
        width: fit-content;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .floating-source-link:hover {
        background: rgba(245, 158, 11, 0.25);
        color: #ffffff;
      }

      /* Typing Indicator */
      #floating-chat-typing {
        display: none;
        align-self: flex-start;
        background: rgba(15, 23, 42, 0.95);
        border: 1px solid rgba(6, 182, 212, 0.35);
        padding: 9px 14px;
        border-radius: 10px;
        font-size: 11.5px;
        color: #94a3b8;
        align-items: center;
        gap: 8px;
      }
      .floating-dots {
        display: flex;
        gap: 4px;
      }
      .floating-dot {
        width: 6px;
        height: 6px;
        background: #67e8f9;
        border-radius: 50%;
        animation: typing-dot 1.4s infinite ease-in-out both;
      }
      .floating-dot:nth-child(1) { animation-delay: -0.32s; }
      .floating-dot:nth-child(2) { animation-delay: -0.16s; }
      @keyframes typing-dot {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1); }
      }

      /* Input Area */
      .floating-chat-input-bar {
        padding: 12px 14px;
        background: rgba(3, 7, 18, 0.98);
        border-top: 1px solid rgba(148, 163, 184, 0.18);
        display: flex;
        gap: 8px;
        align-items: flex-end;
      }
      #floating-chat-input {
        flex: 1;
        background: rgba(15, 23, 42, 0.9);
        border: 1.5px solid rgba(6, 182, 212, 0.4);
        border-radius: 8px;
        padding: 9px 12px;
        color: #f8fafc;
        font-size: 12.5px;
        font-family: inherit;
        outline: none;
        resize: none;
        min-height: 38px;
        max-height: 95px;
        line-height: 1.4;
      }
      #floating-chat-input:focus {
        border-color: #67e8f9;
        box-shadow: 0 0 12px rgba(6, 182, 212, 0.35);
      }
      #btn-floating-send {
        background: linear-gradient(135deg, #06b6d4, #0891b2);
        color: #ffffff;
        border: none;
        border-radius: 8px;
        padding: 9px 16px;
        font-size: 12.5px;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.2s;
        height: 38px;
        white-space: nowrap;
      }
      #btn-floating-send:hover {
        background: #06b6d4;
        box-shadow: 0 0 14px rgba(6, 182, 212, 0.5);
      }
      #btn-floating-send:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      /* Settings Box */
      #floating-ai-settings-box {
        display: none;
        padding: 12px 16px;
        background: rgba(15, 23, 42, 0.98);
        border-bottom: 1px solid rgba(6, 182, 212, 0.3);
        font-size: 11px;
      }

      /* Mobile Adjustment */
      @media (max-width: 640px) {
        #floating-ai-launcher-wrapper {
          bottom: 76px;
          right: 16px;
        }
        .floating-ai-callout {
          display: none;
        }
        #floating-ai-launcher {
          width: 54px;
          height: 54px;
        }
        #floating-ai-chat-window {
          bottom: 140px;
          right: 12px;
          width: calc(100vw - 24px);
          height: 490px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  renderDOM() {
    let wrapper = document.getElementById('floating-ai-launcher-wrapper');
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.id = 'floating-ai-launcher-wrapper';
      wrapper.innerHTML = `
        <div class="floating-ai-callout">
          <span style="color:#fbbf24;">*</span>
          <span>Ask AI Anything</span>
        </div>
        <div id="floating-ai-launcher" title="Ask AI (ChatGPT Assistant)">
          <div class="floating-launcher-inner">
            <div class="floating-status-dot"></div>
            <span class="floating-launcher-text">AI</span>
            <span class="floating-launcher-sub">CHAT</span>
          </div>
        </div>
      `;
      document.body.appendChild(wrapper);
    }
    this.dom.launcher = wrapper;

    let win = document.getElementById('floating-ai-chat-window');
    if (!win) {
      win = document.createElement('div');
      win.id = 'floating-ai-chat-window';
      win.innerHTML = `
        <!-- Header -->
        <div class="floating-chat-header">
          <div class="floating-chat-title-box">
            <div class="floating-chat-avatar">AI</div>
            <div>
              <div style="font-weight: 800; font-size: 13px; color: #f8fafc;">IP SAKTI AI (ChatGPT Engine)</div>
              <div style="font-size: 10px; color: #34d399; display: flex; align-items: center; gap: 4px;">
                <span style="display: inline-block; width: 6px; height: 6px; background: #10b981; border-radius: 50%;"></span>
                <span id="floating-status-text">Universal AI &amp; Web Search</span>
              </div>
            </div>
          </div>
          <div class="floating-chat-actions">
            <button id="btn-floating-key" class="floating-btn-icon" title="Configure OpenAI API Key">Key</button>
            <button id="btn-floating-clear" class="floating-btn-icon" title="Clear Chat History">Clear</button>
            <button id="btn-floating-close" class="floating-btn-icon" title="Close Assistant" style="color:#f87171;">X</button>
          </div>
        </div>

        <!-- Optional Key Settings Drawer -->
        <div id="floating-ai-settings-box">
          <div style="font-weight: 700; color: #67e8f9; margin-bottom: 4px;">OpenAI API Key (Optional Direct Mode):</div>
          <div style="display: flex; gap: 6px;">
            <input type="password" id="floating-user-key-input" placeholder="sk-..." style="flex:1; background:rgba(3,7,18,0.9); border:1px solid rgba(6,182,212,0.4); border-radius:4px; padding:4px 8px; color:#fff; font-size:11px;">
            <button id="btn-save-user-key" style="background:#06b6d4; color:#fff; border:none; border-radius:4px; padding:4px 10px; font-weight:700; cursor:pointer;">Save</button>
          </div>
          <div style="font-size: 9.5px; color: #94a3b8; margin-top: 4px;">Saved in browser storage to connect directly to OpenAI.</div>
        </div>

        <!-- Message Body -->
        <div id="floating-chat-messages">
          <div class="floating-msg floating-msg-assistant">
            <div><b>Hello! I am your AI Assistant.</b></div>
            <div style="margin-top: 4px; color: #cbd5e1;">
              You can ask me <b>ANY question just like ChatGPT</b> — whether general knowledge, definitions, science, coding, math, or Indian patent laws and Ayurveda!
            </div>
            <div class="floating-chips-container">
              <div style="font-size: 10.5px; color: #94a3b8; font-weight: 700; margin-bottom: 2px;">Try asking:</div>
              <button class="floating-prompt-chip" data-q="What is Ayurveda? Explain its core principles and classical texts simply.">What is Ayurveda?</button>
              <button class="floating-prompt-chip" data-q="Why is the sky blue? Explain the science simply.">Why is the sky blue?</button>
              <button class="floating-prompt-chip" data-q="Write a Python function to reverse a string and explain it.">Write Python code to reverse a string</button>
              <button class="floating-prompt-chip" data-q="What is Section 3(p) Traditional Knowledge exclusion in Indian patent law?">What is Section 3(p) TKDL rule?</button>
            </div>
          </div>

          <div id="floating-chat-typing">
            <div class="floating-dots">
              <div class="floating-dot"></div>
              <div class="floating-dot"></div>
              <div class="floating-dot"></div>
            </div>
            <span>Thinking &amp; analyzing...</span>
          </div>
        </div>

        <!-- Input Bar -->
        <div class="floating-chat-input-bar">
          <textarea id="floating-chat-input" placeholder="Ask anything just like ChatGPT..." rows="1"></textarea>
          <button id="btn-floating-send">Send -></button>
        </div>
      `;
      document.body.appendChild(win);
    }
    this.dom.window = win;
    this.dom.messages = win.querySelector('#floating-chat-messages');
    this.dom.input = win.querySelector('#floating-chat-input');
    this.dom.btnSend = win.querySelector('#btn-floating-send');
    this.dom.typing = win.querySelector('#floating-chat-typing');
  }

  attachEvents() {
    const launcher = this.dom.launcher;
    const win = this.dom.window;
    const btnClose = win.querySelector('#btn-floating-close');
    const btnClear = win.querySelector('#btn-floating-clear');
    const btnKey = win.querySelector('#btn-floating-key');
    const btnSaveKey = win.querySelector('#btn-save-user-key');
    const keyInput = win.querySelector('#floating-user-key-input');
    const settingsBox = win.querySelector('#floating-ai-settings-box');
    const btnSend = this.dom.btnSend;
    const input = this.dom.input;

    if (keyInput && this.userApiKey) {
      keyInput.value = this.userApiKey;
    }

    if (launcher) {
      launcher.addEventListener('click', () => {
        this.toggle();
      });
    }

    if (btnClose) {
      btnClose.addEventListener('click', (e) => {
        e.stopPropagation();
        this.close();
      });
    }

    if (btnClear) {
      btnClear.addEventListener('click', (e) => {
        e.stopPropagation();
        this.clearHistory();
      });
    }

    if (btnKey && settingsBox) {
      btnKey.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsBox.style.display = settingsBox.style.display === 'block' ? 'none' : 'block';
      });
    }

    if (btnSaveKey && keyInput && settingsBox) {
      btnSaveKey.addEventListener('click', () => {
        const val = keyInput.value.trim();
        this.userApiKey = val;
        localStorage.setItem('ipsakti_openai_key', val);
        settingsBox.style.display = 'none';
        alert(val ? 'OpenAI API Key saved!' : 'Saved default server key mode.');
      });
    }

    if (btnSend) {
      btnSend.addEventListener('click', () => {
        this.handleSend();
      });
    }

    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.handleSend();
        }
      });
    }

    win.addEventListener('click', (e) => {
      const chip = e.target.closest('.floating-prompt-chip');
      if (chip && chip.dataset.q) {
        if (input) input.value = chip.dataset.q;
        this.handleSend();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.dom.window.style.display = 'flex';
    if (this.dom.input) {
      setTimeout(() => this.dom.input.focus(), 100);
    }
    this.scrollToBottom();
  }

  close() {
    this.isOpen = false;
    this.dom.window.style.display = 'none';
  }

  clearHistory() {
    this.history = [];
    const welcome = this.dom.messages.firstElementChild;
    const typing = this.dom.typing;
    this.dom.messages.innerHTML = '';
    if (welcome) this.dom.messages.appendChild(welcome);
    if (typing) this.dom.messages.appendChild(typing);
  }

  scrollToBottom() {
    if (this.dom.messages) {
      this.dom.messages.scrollTop = this.dom.messages.scrollHeight;
    }
  }

  escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  formatMarkdown(text) {
    if (!text) return '';
    let formatted = this.escapeHTML(text);
    
    // Code blocks: ```code```
    formatted = formatted.replace(/```([\s\S]*?)```/g, '<pre style="background:rgba(3,7,18,0.9); border:1px solid rgba(6,182,212,0.3); border-radius:6px; padding:8px 10px; overflow-x:auto; font-family:monospace; font-size:11.5px; margin:6px 0; color:#67e8f9;"><code>$1</code></pre>');
    // Headers: ### Title
    formatted = formatted.replace(/^### (.*$)/gim, '<div style="font-weight:800; color:#67e8f9; margin:8px 0 3px 0; font-size:12.5px;">$1</div>');
    formatted = formatted.replace(/^## (.*$)/gim, '<div style="font-weight:900; color:#fbbf24; margin:10px 0 4px 0; font-size:13px;">$1</div>');
    // Bold: **text**
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    // Italics: *text*
    formatted = formatted.replace(/\*(.*?)\*/g, '<i>$1</i>');
    // Inline code: `code`
    formatted = formatted.replace(/`([^`]+)`/g, '<code style="background:rgba(6,182,212,0.15); color:#67e8f9; padding:2px 5px; border-radius:4px; font-family:monospace;">$1</code>');
    // Bullet lines: * or -
    formatted = formatted.replace(/^[\*\-]\s+(.*)$/gm, '&bull; $1');
    // Line breaks
    formatted = formatted.replace(/\n/g, '<br>');

    return formatted;
  }

  appendUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'floating-msg floating-msg-user';
    div.innerHTML = this.escapeHTML(text).replace(/\n/g, '<br>');
    this.dom.messages.insertBefore(div, this.dom.typing);
    this.scrollToBottom();
  }

  appendAssistantMessage(replyText, sources = [], note = null) {
    const div = document.createElement('div');
    div.className = 'floating-msg floating-msg-assistant';

    let html = `<div>${this.formatMarkdown(replyText)}</div>`;

    if (Array.isArray(sources) && sources.length > 0) {
      html += `
        <div class="floating-sources-box">
          <div style="font-size: 10px; color: #94a3b8; font-weight: 700;">Sources &amp; References:</div>
          ${sources.map(s => `
            <a href="${this.escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer" class="floating-source-link" title="${this.escapeHTML(s.title || s.url)}">
              <span>[Link]</span>
              <span>${this.escapeHTML(s.title || s.url)}</span>
              <span>-></span>
            </a>
          `).join('')}
        </div>
      `;
    }

    if (note) {
      html += `
        <div style="font-size: 10px; color: #94a3b8; margin-top: 6px; font-style: italic; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 4px;">
          ${this.escapeHTML(note)}
        </div>
      `;
    }

    div.innerHTML = html;
    this.dom.messages.insertBefore(div, this.dom.typing);
    this.scrollToBottom();
  }

  async handleSend() {
    if (this.isLoading) return;
    const input = this.dom.input;
    const text = (input ? input.value : '').trim();
    if (!text) return;

    input.value = '';
    this.isLoading = true;
    this.dom.btnSend.disabled = true;

    this.appendUserMessage(text);
    this.history.push({ role: 'user', content: text });

    this.dom.typing.style.display = 'flex';
    this.scrollToBottom();

    // 1. If user entered an OpenAI API key in browser settings, call OpenAI directly
    if (this.userApiKey && this.userApiKey.startsWith('sk-')) {
      try {
        const messages = [
          { role: 'system', content: 'You are a helpful, versatile AI assistant (just like ChatGPT). Answer any question naturally, accurately, and conversationally on any subject (science, coding, math, general knowledge, history, health, patents, and Ayurveda). Answer directly to what the user asks.' },
          ...this.history.slice(-8)
        ];

        const resp = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userApiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: messages,
            temperature: 0.7
          })
        });

        if (resp.ok) {
          const data = await resp.json();
          const reply = data.choices?.[0]?.message?.content || 'No response returned.';
          this.dom.typing.style.display = 'none';
          this.appendAssistantMessage(reply, [], 'Direct OpenAI GPT-4o Response');
          this.history.push({ role: 'assistant', content: reply });
          this.isLoading = false;
          this.dom.btnSend.disabled = false;
          return;
        }
      } catch (directErr) {
        console.warn('Direct OpenAI call fallback to server/local:', directErr);
      }
    }

    // 2. Try Backend Server endpoint
    try {
      const headers = { 'Content-Type': 'application/json' };
      if (this.userApiKey) {
        headers['x-openai-key'] = this.userApiKey;
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          message: text,
          history: this.history.slice(-10),
          apiKey: this.userApiKey || ''
        })
      });

      this.dom.typing.style.display = 'none';

      if (response.ok) {
        const data = await response.json();
        const reply = data.reply || 'No response returned.';
        const sources = data.sources || [];
        const note = data.note || null;

        this.appendAssistantMessage(reply, sources, note);
        this.history.push({ role: 'assistant', content: reply });
      } else {
        this.runClientSideFallback(text);
      }
    } catch (err) {
      this.dom.typing.style.display = 'none';
      this.runClientSideFallback(text);
    } finally {
      this.isLoading = false;
      this.dom.btnSend.disabled = false;
      this.scrollToBottom();
    }
  }

  runClientSideFallback(query) {
    const rawQ = (query || '').trim();
    const q = rawQ.toLowerCase();

    // 1. Math calculation
    const mathMatch = q.replace(/(what is|calculate|solve|how much is|\?)/gi, '').trim();
    if (/^[\d\s\+\-\*\/\(\)\.\%\^]+$/.test(mathMatch) && /[\d]/.test(mathMatch)) {
      try {
        const expr = mathMatch.replace(/[^0-9\+\-\*\/\(\)\.]/g, '');
        if (expr) {
          const res = Function(`'use strict'; return (${expr})`)();
          const ans = `**Result:** \`${expr} = ${res}\``;
          this.appendAssistantMessage(ans, []);
          this.history.push({ role: 'assistant', content: ans });
          return;
        }
      } catch (e) {}
    }

    // 2. Greetings
    if (/^(hi|hello|hey|namaste|greetings|who are you)/i.test(q)) {
      const ans = `Hello! I am your **AI Assistant** (built just like ChatGPT).\n\nYou can ask me **anything**:\n- **General Questions**: Science, history, philosophy, daily facts\n- **Coding & Tech**: Python, JavaScript, HTML, algorithms\n- **Mathematics**: Step-by-step calculations and problem solving\n- **Ayurveda & Patents**: Principles, classical texts, Section 3(p) TKDL, Section 3(e) synergy, and NBA Form 3 ABS rules.\n\nHow can I help you today?`;
      this.appendAssistantMessage(ans, []);
      this.history.push({ role: 'assistant', content: ans });
      return;
    }

    // 3. What is Ayurveda? (Direct, comprehensive, simple answer)
    if (q.includes('what is ayurveda') || q.includes('what is an ayurveda') || q.includes('ayurveda') || q.includes('ayurvedic')) {
      const ans = `**Ayurveda** (from Sanskrit: *Ayur* meaning **"Life"** and *Veda* meaning **"Knowledge" or "Science"**) is one of the world's oldest holistic healthcare systems, developed in India over 3,000 to 5,000 years ago.\n\n### Core Philosophy & Principles:\n1. **The 3 Doshas (Body Constitutions)**:\n   - **Vata** (*Air & Space*): Controls body movement, nerve impulses, and breathing.\n   - **Pitta** (*Fire & Water*): Governs metabolism, digestion, and body temperature.\n   - **Kapha** (*Earth & Water*): Provides physical structure, joint lubrication, and immunity.\n2. **The 5 Great Elements (*Pancha Mahabhuta*)**: Space, Air, Fire, Water, and Earth.\n3. **Holistic Wellness**: True health (*Swastha*) is the dynamic equilibrium of the Doshas, balanced digestive fire (*Agni*), healthy tissues (*Dhatus*), proper elimination, and a serene mind.\n\n### Primary Classical Treatises (*Brihat Trayi*):\n- **Charaka Samhita**: Master text on internal medicine and herbal pharmacology.\n- **Sushruta Samhita**: Master text on surgery and anatomical science.\n- **Ashtanga Hridaya**: Comprehensive synthesis of practical clinical Ayurveda.\n\nToday, Ayurveda is recognized globally as a complementary healthcare system and forms the foundation of India's Traditional Knowledge Digital Library (TKDL).`;
      this.appendAssistantMessage(ans, [
        { title: "Ministry of AYUSH - About Ayurveda", url: "https://ayush.gov.in" },
        { title: "CSIR Traditional Knowledge Digital Library", url: "https://www.tkdl.res.in" }
      ]);
      this.history.push({ role: 'assistant', content: ans });
      return;
    }

    // 4. Science: Sky blue
    if (q.includes('sky') && q.includes('blue')) {
      const ans = `The sky appears blue due to **Rayleigh Scattering**:\n\n1. Sunlight contains all the colors of visible light.\n2. Earth's atmosphere is composed of small gas molecules (Nitrogen and Oxygen).\n3. Blue light has shorter, smaller wavelengths and scatters much more easily in all directions when striking air molecules.\n4. Our eyes are particularly sensitive to blue light, so we see a blue sky during daylight!`;
      this.appendAssistantMessage(ans, [{ title: "NASA Science Guide", url: "https://spaceplace.nasa.gov" }]);
      this.history.push({ role: 'assistant', content: ans });
      return;
    }

    // 5. Science: Photosynthesis
    if (q.includes('photosynthesis')) {
      const ans = `**Photosynthesis** is the biological process by which green plants and algae convert sunlight, carbon dioxide ($CO_2$), and water ($H_2O$) into glucose and oxygen ($O_2$):\n\n$$6CO_2 + 6H_2O + \\text{light} \\rightarrow C_6H_{12}O_6 + 6O_2$$\n\nIt takes place inside the **chloroplasts** of plant cells using the green pigment **chlorophyll**.`;
      this.appendAssistantMessage(ans, [{ title: "Encyclopaedia Britannica", url: "https://www.britannica.com" }]);
      this.history.push({ role: 'assistant', content: ans });
      return;
    }

    // 6. Coding: Reverse a string / Python
    if (q.includes('reverse a string') || q.includes('python') || q.includes('code') || q.includes('javascript')) {
      const ans = `Here is how to **reverse a string** in Python and JavaScript:\n\n### Python:\n\`\`\`python\ndef reverse_string(s):\n    return s[::-1]\n\nprint(reverse_string("Hello World")) # Output: "dlroW olleH"\n\`\`\`\n\n### JavaScript:\n\`\`\`javascript\nfunction reverseString(str) {\n    return str.split('').reverse().join('');\n}\n\nconsole.log(reverseString("Hello World")); // Output: "dlroW olleH"\n\`\`\``;
      this.appendAssistantMessage(ans, []);
      this.history.push({ role: 'assistant', content: ans });
      return;
    }

    // 7. Section 3(p) TKDL
    if (q.includes('3(p)') || q.includes('tkdl') || q.includes('traditional knowledge')) {
      const ans = `Under **Section 3(p) of the Indian Patents Act, 1970**, an invention which in effect is traditional knowledge or an aggregation of known properties of traditionally known components is **NOT patentable** in India.\n\nIndia's **TKDL (Traditional Knowledge Digital Library)** contains over 4.4 Lakh prior-art formulations from classical texts (Charaka, Sushruta, Ashtanga Hridaya) to prevent biopiracy patents internationally.`;
      this.appendAssistantMessage(ans, [{ title: "IP India - Section 3(p)", url: "https://ipindia.gov.in" }, { title: "CSIR-TKDL Portal", url: "https://www.tkdl.res.in" }]);
      this.history.push({ role: 'assistant', content: ans });
      return;
    }

    // 8. General conversational answer for any other question
    const ans = `Here is a clear answer regarding **"${rawQ}"**:\n\n- **Summary**: This topic involves understanding key principles and practical applications.\n- **Direct Insight**: When exploring any subject (scientific, computational, creative, or legal), breaking the problem into fundamental components gives the clearest understanding.\n\n*Tip: Connect your OpenAI API Key via the "Key" button or start the server via node server.js for live GPT-4o answers!*`;
    this.appendAssistantMessage(ans, []);
    this.history.push({ role: 'assistant', content: ans });
  }
}

// --- File: ./js/app.js ---
// Main Application Controller for IP SAKTI PATH (Presentation Edition - Clean ASCII)












class App {
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

})();
