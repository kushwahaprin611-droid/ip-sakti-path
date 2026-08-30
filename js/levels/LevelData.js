// Complete 7 Levels + Final Boss Simulation Mission Data
export const levelData = [
  {
    id: 1,
    title: {
      en: "Level 1: The Formulation Gate",
      hi: "स्तर 1: सूत्रीकरण प्रवेश द्वार (वर्गीकरण)"
    },
    subtitle: {
      en: "Classification & Section 3(p) TKDL Filter",
      hi: "वर्गीकरण एवं धारा 3(p) टीकेडीएल फिल्टर"
    },
    location: "clinic_opd",
    badgeId: "badge_alchemist",
    badgeName: {
      en: "Formulation Classifier",
      hi: "सूत्रीकरण वर्गीकरणकर्ता"
    },
    xpReward: 150,
    itemReward: {
      id: "item_palm_leaf",
      name: { en: "Charaka Samhita Palm Leaf Citation", hi: "चरक संहिता ताड़पत्र उद्धरण" },
      desc: { en: "Ancient Sanskrit manuscript verifying classical textual prior art.", hi: "शास्त्रीय पूर्व-कला को प्रमाणित करने वाली प्राचीन पांडुलिपि।" }
    },
    briefing: {
      en: "A cohort of traditional and modern Ayurvedic formulation concepts has arrived at your facility. You must inspect each sample, analyze free-text formulations, and correctly sort them across Classical, Proprietary, Phytopharmaceutical, Ayurveda-Aahar, Cosmetic, and Section 3(p) non-patentable categories.",
      hi: "पारंपरिक और आधुनिक आयुर्वेदिक योगों का एक समूह आपके पास आया है। आपको प्रत्येक नमूने का निरीक्षण करना होगा, फॉर्मूलेशन का विश्लेषण करना होगा और उन्हें शास्त्रीय, प्रोप्राइटरी, फाइटोफार्मास्युटिकल, आयुर्वेद-आहार, प्रसाधन और धारा 3(p) गैर-पेटेंट श्रेणियों में सही ढंग से छांटना होगा।"
    },
    roleContext: {
      doctor: "As a Vaidya, protecting the integrity of classical AFI texts like Sharangdhara Samhita is your primary calling.",
      founder: "As a Formulator, understanding the boundary between public traditional knowledge and patentable innovation is vital.",
      farmer: "As a Cultivator, know which medicinal herbs enter classical syrups versus food supplements.",
      educator: "As an Educator, instruct your scholars on the 6 statutory categories of Ayurvedic products.",
      exporter: "As an Exporter, classifying products correctly in India is the foundation for international clearance."
    },
    simType: "classification"
  },
  {
    id: 2,
    title: {
      en: "Level 2: Protect What You Create",
      hi: "स्तर 2: सृजन की सुरक्षा (तालमेल व पेटेंट)"
    },
    subtitle: {
      en: "Simulated TKDL Search, Synergy Calculation & Decision Tree",
      hi: "टीकेडीएल पूर्व-कला खोज, तालमेल (Synergy) गणना एवं आईपी चयन"
    },
    location: "rnd_lab",
    badgeId: "badge_strategist",
    badgeName: {
      en: "Patent Pathfinder",
      hi: "पेटेंट रणनीतिकार"
    },
    xpReward: 200,
    itemReward: {
      id: "item_hplc_chart",
      name: { en: "HPLC Bioavailability & Synergy Certificate", hi: "एचपीएलसी जैव-उपलब्धता एवं तालमेल प्रमाण पत्र" },
      desc: { en: "Chromatographic proof of 2000% enhanced curcumin bioavailability.", hi: "करक्यूमिन की 2000% बढ़ी हुई जैव-उपलब्धता का वैज्ञानिक प्रमाण।" }
    },
    briefing: {
      en: "Your team is developing an enhanced Curcumin-Piperine nano-emulsion. Query the simulated TKDL database of 4.4 lakh formulations to uncover ancient Sanskrit prior art, calculate the Section 3(e) synergy index, and select the optimal multi-pillar IP protection portfolio.",
      hi: "आपकी टीम करक्यूमिन-पिपेरिन का एक उन्नत नैनो-इमल्शन विकसित कर रही है। प्राचीन संस्कृत पूर्व-कला खोजने के लिए 4.4 लाख योगों वाले सिमुलेटेड टीकेडीएल डेटाबेस को खोजें, धारा 3(e) तालमेल सूचकांक की गणना करें और इष्टतम आईपी सुरक्षा रणनीति चुनें।"
    },
    roleContext: {
      doctor: "Review how ancient Anupana (carrier) principles align with modern pharmacokinetic bio-enhancers.",
      founder: "Ensure your R&D investment is protected through process patents and trade secrets without violating Section 3(p).",
      farmer: "Track how high-curcumin Lakadong turmeric delivers maximum raw active yield for extraction.",
      educator: "Demonstrate Section 3(e) synergistic thresholds to your students with quantitative evidence.",
      exporter: "Structure your IP portfolio to protect both the manufacturing process and international trademarks."
    },
    simType: "synergy"
  },
  {
    id: 3,
    title: {
      en: "Level 3: Guardians of Tradition",
      hi: "स्तर 3: परंपरा के संरक्षक (जैव विविधता व एबीएस)"
    },
    subtitle: {
      en: "Himalayan Kutki, Interactive GI India Map & NBA ABS Forge",
      hi: "हिमालयी कुटकी, इंटरएक्टिव जीआई भारत मानचित्र एवं एनबीए एबीएस अनुबंध"
    },
    location: "herbal_farm",
    badgeId: "badge_custodian",
    badgeName: {
      en: "Biodiversity Custodian",
      hi: "जैव विविधता संरक्षक"
    },
    xpReward: 250,
    itemReward: {
      id: "item_nba_seal",
      name: { en: "NBA Form 1 & ABS Community Covenant", hi: "एनबीए फॉर्म 1 एवं एबीएस समुदाय अनुबंध" },
      desc: { en: "Official National Biodiversity Authority seal approving sustainable harvesting.", hi: "टिकाऊ जैव-संसाधन दोहन की मंजूरी देने वाला आधिकारिक एनबीए प्रमाण पत्र।" }
    },
    briefing: {
      en: "To source endangered wild Kutki (Picrorhiza kurroa) from high Himalayan slopes, you must comply with the Biological Diversity Act. Explore registered Geographical Indications across India on the interactive map and forge a legally sound 4.0% Access and Benefit Sharing (ABS) agreement with local forest dwellers.",
      hi: "हिमालय की चोटियों से संकटग्रस्त कुटकी प्राप्त करने के लिए आपको जैव विविधता अधिनियम का पालन करना होगा। भारत के इंटरएक्टिव मानचित्र पर भौगोलिक उपदर्शन (GI) का अन्वेषण करें और स्थानीय वनवासियों के साथ 4.0% एबीएस रॉयल्टी अनुबंध निष्पादित करें।"
    },
    roleContext: {
      doctor: "Safeguard rare medicinal herbs from overexploitation so future generations have authentic medicines.",
      founder: "Comply with Section 6 of the Biodiversity Act before filing any domestic or foreign patent.",
      farmer: "Lead community cultivation and fair price agreements under the People's Biodiversity Register (PBR).",
      educator: "Teach the ethical principles of the Nagoya Protocol and sovereign biodiversity rights.",
      exporter: "Verify that all exported raw botanical materials hold valid NBA Form 1 clearances and CITES permits."
    },
    simType: "biodiversity"
  },
  {
    id: 4,
    title: {
      en: "Level 4: The Indian Regulatory Maze",
      hi: "स्तर 4: भारतीय नियामक चक्रव्यूह (जीएमपी व लेबलिंग)"
    },
    subtitle: {
      en: "Schedule T Checklist, Label Builder & Timed Inspector Audit",
      hi: "अनुसूची T चेकलिस्ट, लेबल निर्माता एवं समयबद्ध औचक निरीक्षण"
    },
    location: "ayush_hq",
    badgeId: "badge_guardian",
    badgeName: {
      en: "Regulatory Guardian",
      hi: "नियामक रक्षक"
    },
    xpReward: 300,
    itemReward: {
      id: "item_schedule_t",
      name: { en: "Schedule T GMP Audit & Heavy Metals Assay", hi: "अनुसूची T जीएमपी ऑडिट एवं धातु परीक्षण रिपोर्ट" },
      desc: { en: "Certified laboratory report proving heavy metals compliance and clean-room audit.", hi: "भारी धातुओं की सुरक्षित सीमाओं और स्वच्छ निर्माण कक्ष की पुष्टि करने वाली रिपोर्ट।" }
    },
    briefing: {
      en: "State AYUSH Licensing Authority inspectors have arrived for an unannounced audit. Verify Schedule T GMP compliance, build an airtight medicine label, redact illegal disease cure claims under the Magic Remedies Act 1954, and pass the 45-second timed inspection simulation with Eris's whispered hints.",
      hi: "राज्य आयुष लाइसेंसिंग प्राधिकरण के निरीक्षक औचक निरीक्षण के लिए आए हैं। अनुसूची T जीएमपी अनुपालन की पुष्टि करें, वैध लेबल तैयार करें, जादुई उपचार अधिनियम 1954 के तहत भ्रामक दावों को हटाएं और एरिस के संकेतों के साथ 45-सेकंड का निरीक्षण पास करें।"
    },
    roleContext: {
      doctor: "Ensure patient safety through strict heavy metals assays (Lead < 10ppm, Arsenic < 3ppm, Mercury < 1ppm).",
      founder: "Maintain pristine Batch Manufacturing Records (BMR) and clean-room validation for Rule 158B licensing.",
      farmer: "Guarantee pesticide-free, authenticated raw materials that pass microbial and heavy metal screening.",
      educator: "Illustrate the legal penalties of the Magic Remedies Act to prevent misleading health commercialization.",
      exporter: "Align domestic Schedule T hygiene with international cGMP standards."
    },
    simType: "regulatory"
  },
  {
    id: 5,
    title: {
      en: "Level 5: Crossing Borders",
      hi: "स्तर 5: सीमा पार (वैश्विक निर्यात एवं टीएचएमपीडी)"
    },
    subtitle: {
      en: "Interactive World Trade Map, USFDA DSHEA & EU THMPD Workbench",
      hi: "इंटरएक्टिव वैश्विक व्यापार मानचित्र, यूएसएफडीए डीएसएचईए एवं यूरोपीय संघ टीएचएमपीडी"
    },
    location: "export_hub",
    badgeId: "badge_voyager",
    badgeName: {
      en: "Global Voyager",
      hi: "वैश्विक निर्यातक"
    },
    xpReward: 350,
    itemReward: {
      id: "item_dshea_dossier",
      name: { en: "USFDA DSHEA & EU THMPD Export Dossier", hi: "यूएसएफडीए एवं यूरोपीय संघ निर्यात अनुपालन डॉसियर" },
      desc: { en: "Validated export package featuring mandatory 21 CFR §101.93 disclaimers and 30-year EU dossiers.", hi: "अनिवार्य 21 CFR §101.93 अस्वीकरण और 30-वर्षीय पारंपरिक उपयोग का यूरोपीय डॉसियर।" }
    },
    briefing: {
      en: "Take your Ayurvedic brand onto the global stage. Explore international trade corridors on the interactive world map, compare USFDA DSHEA Dietary Supplement rules against the EU THMPD 30-year traditional use directive, and resolve cultural dilemmas with Eris.",
      hi: "अपने आयुर्वेदिक ब्रांड को वैश्विक मंच पर ले जाएं। इंटरएक्टिव विश्व मानचित्र पर व्यापारिक मार्गों का अन्वेषण करें, यूएसएफडीए डीएसएचईए नियमों की तुलना यूरोपीय संघ के 30-वर्षीय टीएचएमपीडी निर्देश से करें और एरिस के साथ सांस्कृतिक संवाद पूरा करें।"
    },
    roleContext: {
      doctor: "Translate traditional tridosha concepts into validated structure/function wellness statements.",
      founder: "Assemble the mandatory 21 CFR §101.93 disclaimer box and prepare 30-year European bibliographic dossiers.",
      farmer: "Fulfill phytosanitary and heavy metal clearance requirements for bulk herb export containers.",
      educator: "Analyze why Indian classical formulations often face regulatory friction in Western markets.",
      exporter: "Execute Madrid Protocol trademark filings across US, EU, UK, and GCC target markets."
    },
    simType: "export"
  },
  {
    id: 6,
    title: {
      en: "Level 6: Licensing, Manufacturing & Scale",
      hi: "स्तर 6: लाइसेंसिंग, निर्माण और विस्तार"
    },
    subtitle: {
      en: "Process Timeline Builder, MTA Verification & Cost Estimator",
      hi: "प्रक्रिया समयरेखा निर्माता, एमटीए सत्यापन एवं लागत कैलकुलेटर"
    },
    location: "global_summit",
    badgeId: "badge_architect",
    badgeName: {
      en: "Contract Architect",
      hi: "अनुबंध वास्तुकार"
    },
    xpReward: 400,
    itemReward: {
      id: "item_mta_contract",
      name: { en: "Bioprospecting MTA & Tech Transfer Deed", hi: "जैव-पूर्वेक्षण एमटीए एवं प्रौद्योगिकी हस्तांतरण विलेख" },
      desc: { en: "Legally binding licensing deed with genetic origin safeguards and 2.0% community escrow.", hi: "आनुवंशिक मूल सुरक्षा और 2.0% समुदाय एस्क्रो के साथ कानूनी लाइसेंसिंग अनुबंध।" }
    },
    briefing: {
      en: "A multinational pharmaceutical manufacturer wishes to license your standardized botanical extract technology. Assemble the 7-stage product lifecycle timeline, verify Material Transfer Agreements (MTA), and calibrate an ethical financial milestone model with community benefit escrow.",
      hi: "एक बहुराष्ट्रीय दवा कंपनी आपके मानकीकृत वानस्पतिक अर्क की तकनीक का लाइसेंस लेना चाहती है। 7-चरणीय उत्पाद समयरेखा तैयार करें, सामग्री हस्तांतरण समझौते (MTA) का सत्यापन करें और समुदाय लाभ एस्क्रो के साथ एक उचित वित्तीय मॉडल बनाएं।"
    },
    roleContext: {
      doctor: "Ensure technology transfer preserves original Ayurvedic compounding principles without dilution.",
      founder: "Negotiate non-exclusive licensing with upfront technology transfer fees and running royalties.",
      farmer: "Secure long-term fair-trade buyback contracts for local herbal cultivation cooperatives.",
      educator: "Review contract clauses to prevent biopiracy and intellectual property assignment traps.",
      exporter: "Establish international supply chain agreements with verified phytosanitary protocols."
    },
    simType: "licensing"
  },
  {
    id: 7,
    title: {
      en: "Level 7: Crisis & Defence (War Room)",
      hi: "स्तर 7: संकट और प्रतिरक्षा (वार रूम)"
    },
    subtitle: {
      en: "3-Minute Timed Biopiracy Crisis, Evidence Selection & Tone Selector",
      hi: "3-मिनट का समयबद्ध जैव-चोरी संकट, साक्ष्य चयन एवं स्वर (Tone) चयन"
    },
    location: "war_room",
    badgeId: "badge_shield",
    badgeName: {
      en: "Biopiracy Shield",
      hi: "जैव-चोरी रोधी ढाल"
    },
    xpReward: 500,
    itemReward: {
      id: "item_tkdl_opposition",
      name: { en: "TKDL Prior-Art Opposition Petition", hi: "टीकेडीएल पूर्व-कला विरोध याचिका" },
      desc: { en: "Section 25(1) pre-grant opposition writ with Sanskrit citations that defeated biopiracy.", hi: "संस्कृत श्लोकों के प्रमाण से युक्त धारा 25(1) विरोध याचिका जिसने विदेशी पेटेंट रद्द कराया।" }
    },
    briefing: {
      en: "RED ALERT: A foreign corporation has filed a patent application at the EPO and USPTO claiming exclusive rights over a traditional Turmeric-Neem antimicrobial formulation. Enter the War Room, select Sanskrit prior-art evidence under time pressure, build a Section 25 opposition petition, and select your diplomatic tone!",
      hi: "आपातकालीन चेतावनी: एक विदेशी कंपनी ने हल्दी और नीम के पारंपरिक रोगाणुरोधी योग पर एकाधिकार का दावा करते हुए ईपीओ और यूएसपीटीओ में पेटेंट आवेदन दायर किया है। वार रूम में प्रवेश करें, समय के दबाव में संस्कृत पूर्व-कला साक्ष्य चुनें, धारा 25 विरोध याचिका तैयार करें और अपना कूटनीतिक स्वर चुनें!"
    },
    roleContext: {
      doctor: "Identify the exact Charaka and Sushruta verses that describe Haridra and Nimba wound healing.",
      founder: "Deploy TKDL digital prior art to invalidate claims of novelty and inventive step.",
      farmer: "Protect indigenous agricultural heritage and community knowledge from foreign monopolization.",
      educator: "Replicate the landmark legal victories of the Indian Turmeric and Neem patent revocations.",
      exporter: "Defend global open access to Indian Ayurvedic heritage in foreign patent offices."
    },
    simType: "biopiracy_war"
  },
  {
    id: 8,
    title: {
      en: "Final Boss: The Grand IP Sakti Capstone Tribunal",
      hi: "महा-न्यायाधिकरण: सर्वोच्च ज्ञान एवं शक्ति परीक्षा"
    },
    subtitle: {
      en: "Multi-Panel Defense Integrating All 7 Inventory Artifacts",
      hi: "सभी 7 एकत्रित साक्ष्यों का उपयोग करते हुए बहु-पैनल न्यायाधिकरण रक्षा"
    },
    location: "ayush_hq",
    badgeId: "badge_grandmaster",
    badgeName: {
      en: "IP Sakti Grand Master",
      hi: "आईपी शक्ति महागुरु"
    },
    xpReward: 1000,
    itemReward: {
      id: "item_grand_seal",
      name: { en: "Sovereign IP Sakti Grandmaster Crest", hi: "संप्रभु आईपी शक्ति महागुरु राजमुद्रा" },
      desc: { en: "The ultimate emblem of Ayurvedic Intellectual Property Mastery.", hi: "आयुर्वेदिक बौद्धिक संपदा में महारत का सर्वोच्च प्रतीक।" }
    },
    briefing: {
      en: "The Grand Capstone Tribunal has convened. You must present your defense across 4 sovereign panels: the Indian Patent Controller, the National Biodiversity Authority, the AYUSH Licensing Board, and the Global Export Compliance Panel. Deploy your 7 inventory artifacts, uphold traditional ethics with Eris, and achieve your final IP Readiness Score (0–100)!",
      hi: "भव्य महा-न्यायाधिकरण एकत्र हो चुका है। आपको 4 सर्वोच्च पैनलों के समक्ष अपनी रक्षा प्रस्तुत करनी होगी: भारतीय पेटेंट नियंत्रक, राष्ट्रीय जैव विविधता प्राधिकरण, आयुष लाइसेंसिंग बोर्ड और वैश्विक निर्यात अनुपालन पैनल। अपने 7 साक्ष्यों का उपयोग करें, एरिस के साथ पारंपरिक मर्यादा का पालन करें और 0-100 का अंतिम आईपी स्कोर प्राप्त करें!"
    },
    roleContext: {
      doctor: "Demonstrate that classical wisdom and modern clinical validation can coexist in perfect harmony.",
      founder: "Prove that an Indian Ayurvedic enterprise can scale globally with impeccable legal compliance.",
      farmer: "Show that sustainable biodiversity harvesting empowers local communities with true dignity.",
      educator: "Stand as an enlightened master capable of guiding the next generation of AYUSH leaders.",
      exporter: "Establish an international benchmark for Ayurvedic quality, integrity, and regulatory triumph."
    },
    simType: "final_boss"
  }
];
