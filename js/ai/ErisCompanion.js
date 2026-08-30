// 3D Companion Spirit: Eris (Ancient Wisdom & Herbcraft Guardian)
export class ErisCompanion {
  constructor(scene) {
    this.scene = scene;
    this.mesh = null;
    this.auraMesh = null;
    this.manuscriptMesh = null;
    this.particles = null;
    this.bondLevel = 20; // 0-100%
    this.targetOffset = { x: 1.5, y: 1.4, z: -1.2 };
    this.currentPos = { x: 0, y: 1.5, z: 0 };
    this.hoverTime = 0;

    this.shlokas = [
      {
        sanskrit: "सर्वं धर्मं विदुषस्तत् सर्वभूतहिते रतः।",
        translation: {
          en: "The wise understand that true righteousness is being devoted to the welfare of all beings.",
          hi: "विद्वान वही है जो समस्त प्राणियों के कल्याण और हित में समर्पित रहता है।"
        },
        source: "Charaka Samhita, Sutrasthana"
      },
      {
        sanskrit: "प्रयोजनं चास्य स्वस्थस्य स्वास्थ्यरक्षणमातुरस्य विकारप्रशमनं च॥",
        translation: {
          en: "The supreme purpose of Ayurveda is to protect the health of the healthy and relieve the ailments of the afflicted.",
          hi: "आयुर्वेद का परम प्रयोजन स्वस्थ व्यक्ति के स्वास्थ्य की रक्षा करना और रोगी के विकार का शमन करना है।"
        },
        source: "Charaka Samhita, Sutrasthana 30/26"
      },
      {
        sanskrit: "न हि सर्वत्र सर्वेषां सिद्धिर्भवति कर्मणाम्। युक्तिज्ञानादुपायेन सिध्यन्ति विविधाः क्रियाः॥",
        translation: {
          en: "Actions do not succeed by chance everywhere; various deeds succeed through reasoned knowledge and wisdom.",
          hi: "सभी कर्म केवल संयोग से सिद्ध नहीं होते, उचित युक्ति और ज्ञान से ही कार्य सफल होते हैं।"
        },
        source: "Sushruta Samhita, Sutrasthana"
      },
      {
        sanskrit: "यस्य कस्य च वृक्षस्य यत्किंचिदपि सम्भवेत्। औषधं सर्वमेवेदं न किंचिदौषधं विना॥",
        translation: {
          en: "Every leaf, herb, and tree upon the earth holds medicinal virtue; nothing in nature is devoid of healing power.",
          hi: "इस पृथ्वी पर प्रत्येक वृक्ष व वनस्पति में औषधीय गुण है; प्रकृति में कुछ भी व्यर्थ नहीं है।"
        },
        source: "Ashtanga Hridaya"
      },
      {
        sanskrit: "विद्या ददाति विनयं विनयाद्याति पात्रताम्।",
        translation: {
          en: "Wisdom bestows humility; from humility arises true worthiness.",
          hi: "ज्ञान विनम्रता प्रदान करता है, और विनम्रता से ही सच्ची योग्यता आती है।"
        },
        source: "Hitopadesha"
      }
    ];

    this.levelHints = {
      1: {
        en: "Remember, dear friend, if the sacred rishis already wrote the recipe in the ancient palm leaves, no single company can claim it as their private invention! Listen to what Sakti Sahayak says about Section 3(p).",
        hi: "याद रखें मित्र, यदि प्राचीन ऋषियों ने यह योग ताड़पत्रों पर पहले ही लिख दिया है, तो कोई इसे अपना निजी आविष्कार नहीं कह सकता! धारा 3(p) पर शक्ति सहायक के परामर्श को ध्यान से सुनें।"
      },
      2: {
        en: "To create something truly new, like combining turmeric with pepper, you must show that nature's allies work together with greater harmony than they do alone! That is true synergy.",
        hi: "कुछ नया रचने के लिए, जैसे हल्दी और काली मिर्च का योग, आपको यह सिद्ध करना होगा कि वे दोनों मिलकर एकल प्रभाव से कई गुना अधिक शक्ति उत्पन्न करते हैं! यही सच्चा तालमेल है।"
      },
      3: {
        en: "The alpine herbs like Kutki do not belong only to us—they belong to the forest and the mountain tribes who have tended them for centuries. A fair share of your fruits will keep the sacred valleys green!",
        hi: "कुटकी जैसी दिव्य जड़ी-बूटियाँ केवल हमारी नहीं हैं—वे उस वन और पर्वतवासियों की धरोहर हैं जिन्होंने सदियों से उनकी रक्षा की है। उन्हें उनका उचित हिस्सा देना ही धर्म है!"
      },
      4: {
        en: "I hear footsteps! The regulatory inspector is checking the clean rooms and the labels. Make sure you don't promise miraculous cures—honest healing speaks for itself without falsehood.",
        hi: "मुझे कदमों की आहट सुनाई दे रही है! औषधि निरीक्षक कारखाने और लेबलों की जांच कर रहे हैं। ध्यान रहे कि कोई चमत्कारी दावे न हों—सच्ची चिकित्सा बिना असत्य के चमकती है।"
      },
      5: {
        en: "Crossing the ocean is like learning a new language. Across the seas, they look for dietary supplement boxes and 30-year histories. Let's honour our traditions while speaking their regulatory tongue!",
        hi: "समुद्र पार करना एक नई भाषा सीखने जैसा है। विदेशों में वे डाइटरी सप्लीमेंट और 30 वर्षों के दस्तावेज़ मांगते हैं। अपनी परंपरा का मान रखते हुए उनके नियमों का सम्मान करें!"
      },
      6: {
        en: "Contracts and partnerships are like planting a grove together. Make sure the roots are protected by clear agreements, so no one cuts the branches unfairly later.",
        hi: "अनुबंध और साझेदारी साथ मिलकर एक वन लगाने जैसी है। सुनिश्चित करें कि जड़ें स्पष्ट समझौतों से सुरक्षित हों, ताकि बाद में कोई शाखाएं न काट सके।"
      },
      7: {
        en: "Stay calm, my friend! Even when foreign companies try to claim our sacred neem and turmeric, the ancient verses in the TKDL will be our unbreakable shield. Choose your words with courage and dignity!",
        hi: "शांत रहें मित्र! जब विदेशी संस्थाएं हमारे नीम और हल्दी पर अधिकार जताने की चेष्टा करें, तो टीकेडीएल में दर्ज हमारे श्लोक ही हमारी अभेद्य ढाल बनेंगे। साहस और गरिमा से उत्तर दें!"
      },
      8: {
        en: "You have walked the sacred path of knowledge with grace and honor. Stand tall before the grand tribunal—every scroll and certificate you gathered will speak for your mastery!",
        hi: "आपने गरिमा और निष्ठा के साथ ज्ञान के इस पावन मार्ग को पार किया है। इस महा-न्यायाधिकरण के समक्ष गर्व से खड़े हों—आपके सभी एकत्रित प्रमाण आपकी योग्यता का साक्ष्य देंगे!"
      }
    };

    this.init3DMesh();
  }

  init3DMesh() {
    if (typeof THREE === "undefined") return;
    
    this.group = new THREE.Group();

    // 1. Sage Figure Core Body in White and Saffron Robes
    const bodyGeo = new THREE.CylinderGeometry(0.16, 0.38, 1.25, 20);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xfef9c3,
      emissive: 0x10b981,
      emissiveIntensity: 0.35,
      roughness: 0.4,
      metalness: 0.1,
      transparent: true,
      opacity: 0.95
    });
    this.mesh = new THREE.Mesh(bodyGeo, bodyMat);
    this.mesh.position.y = 0.62;
    this.group.add(this.mesh);

    // Eris Face & Glowing Expressive Eyes
    const headGeo = new THREE.SphereGeometry(0.22, 20, 20);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xffedd5,
      emissive: 0xfbbf24,
      emissiveIntensity: 0.25
    });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 1.38;
    this.group.add(head);

    // Glowing Expressive Emerald/Gold Eyes
    const eyeGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x34d399 });
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.07, 1.42, 0.19);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.07, 1.42, 0.19);
    this.group.add(leftEye);
    this.group.add(rightEye);

    // Saffron Shawl with subtle leafy flow
    const shawlGeo = new THREE.TorusGeometry(0.42, 0.08, 10, 24);
    const shawlMat = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      emissive: 0xf97316,
      emissiveIntensity: 0.45
    });
    const shawl = new THREE.Mesh(shawlGeo, shawlMat);
    shawl.rotation.x = Math.PI / 2.2;
    shawl.position.y = 1.08;
    this.group.add(shawl);

    // 2. Floating Palm-Leaf Manuscript behind shoulder
    const manuGeo = new THREE.BoxGeometry(0.48, 0.04, 0.28);
    const manuMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      emissive: 0x78350f,
      roughness: 0.7
    });
    this.manuscriptMesh = new THREE.Mesh(manuGeo, manuMat);
    this.manuscriptMesh.position.set(0.42, 0.85, 0.28);
    this.manuscriptMesh.rotation.set(0.25, -0.35, 0.15);
    this.group.add(this.manuscriptMesh);

    // 3. Soft Golden-Green Aura Halo
    const auraGeo = new THREE.RingGeometry(0.48, 0.62, 32);
    const auraMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65
    });
    this.auraMesh = new THREE.Mesh(auraGeo, auraMat);
    this.auraMesh.position.y = 1.4;
    this.auraMesh.rotation.x = Math.PI / 2;
    this.group.add(this.auraMesh);

    // 4. Stardust Particles Trail
    const pCount = 36;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 1.4;
      pPos[i * 3 + 1] = Math.random() * 1.8;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 1.4;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xfef08a,
      size: 0.065,
      transparent: true,
      opacity: 0.85
    });
    this.particles = new THREE.Points(pGeo, pMat);
    this.group.add(this.particles);

    if (this.scene) {
      this.scene.add(this.group);
    }
  }

  update(delta, playerPos) {
    if (!this.group || !playerPos) return;

    this.hoverTime += delta * 2.2;
    const hoverY = Math.sin(this.hoverTime) * 0.15;

    // Follow player with soft smooth damping
    const targetX = playerPos.x + this.targetOffset.x;
    const targetY = playerPos.y + this.targetOffset.y + hoverY;
    const targetZ = playerPos.z + this.targetOffset.z;

    this.group.position.x += (targetX - this.group.position.x) * 0.08;
    this.group.position.y += (targetY - this.group.position.y) * 0.08;
    this.group.position.z += (targetZ - this.group.position.z) * 0.08;

    // Gentle floating rotations
    if (this.manuscriptMesh) {
      this.manuscriptMesh.rotation.y = -0.35 + Math.sin(this.hoverTime * 1.2) * 0.12;
      this.manuscriptMesh.position.y = 0.85 + Math.cos(this.hoverTime * 1.5) * 0.05;
    }

    if (this.auraMesh) {
      this.auraMesh.rotation.z += delta * 0.6;
    }

    if (this.particles) {
      this.particles.rotation.y += delta * 0.3;
    }
  }

  // Conversational response engine adhering strictly to Eris System Prompt
  chat(userMessage, currentLevel = 1, lang = "en") {
    const msg = (userMessage || "").toLowerCase();
    let responseText = "";
    let emotion = "happy";
    let bondDelta = 2; // Engaging with Eris deepens bond

    if (msg.includes("hello") || msg.includes("hi") || msg.includes("नमस्ते") || msg.includes("eris")) {
      responseText = lang === "hi" 
        ? "नमस्ते प्रिय मित्र! मैं आपके साथ इस ज्ञान यात्रा पर हूँ। प्रकृति और पारंपरिक ज्ञान की रक्षा में हम साथ आगे बढ़ेंगे।"
        : "Greetings, my friend! I am right here by your side. Together we shall honor traditional wisdom and walk the sacred path of mastery.";
      emotion = "proud";
    } else if (msg.includes("help") || msg.includes("hint") || msg.includes("मदद") || msg.includes("संकेत") || msg.includes("what should i do")) {
      const hint = this.getHintForLevel(currentLevel, lang);
      responseText = hint;
      emotion = "encouraging";
      bondDelta = 3;
    } else if (msg.includes("citation") || msg.includes("law") || msg.includes("section") || msg.includes("act") || msg.includes("धारा") || msg.includes("कानून")) {
      responseText = lang === "hi"
        ? "मैं एक ज्ञान-आत्मा हूँ, कानूनी सलाहकार नहीं! सटीक धाराओं और कानूनी उद्धरणों के लिए कृपया हमारे साथी 'शक्ति सहायक' से पूछें—वे इसमें निपुण हैं।"
        : "I am a spirit of ancient lore and wisdom, not a legal judge! For exact statutory sections and citations, please consult Sakti Sahayak—they provide perfect legal accuracy.";
      emotion = "gently_humorous";
    } else if (msg.includes("patent") || msg.includes("tradition") || msg.includes("sacred") || msg.includes("herb") || msg.includes("community")) {
      responseText = lang === "hi"
        ? "हमारी जड़ी-बूटियाँ और ग्रंथ पीढ़ियों की साधना हैं। नवाचार करते समय भी हमें उस मूल जड़ का सम्मान करना चाहिए जिसने हमें यह उपहार दिया।"
        : "Our healing herbs and verses are the fruits of centuries of devotion. While we innovate, we must forever honor the soil and communities who preserved this heritage.";
      emotion = "proud";
      bondDelta = 4;
    } else {
      responseText = lang === "hi"
        ? "मैं आपकी निष्ठा को महसूस कर सकती हूँ। मन को शांत रखें, अपने अंतर्मन की बुद्धि पर विश्वास करें, और आगे बढ़ें!"
        : "I feel your dedication, dear friend. Keep a steady heart, trust your ethical compass, and let us take the next step forward!";
      emotion = "happy";
    }

    this.increaseBond(bondDelta);

    const randomShloka = this.shlokas[Math.floor(Math.random() * this.shlokas.length)];

    return {
      text: responseText,
      emotion: emotion,
      bondLevel: this.bondLevel,
      shloka: randomShloka
    };
  }

  getHintForLevel(level = 1, lang = "en") {
    const hintObj = this.levelHints[level] || this.levelHints[1];
    return hintObj[lang] || hintObj["en"];
  }

  getRandomShloka() {
    return this.shlokas[Math.floor(Math.random() * this.shlokas.length)];
  }

  increaseBond(amount = 5) {
    this.bondLevel = Math.min(100, this.bondLevel + amount);
    return this.bondLevel;
  }

  getBondPerks() {
    if (this.bondLevel >= 90) {
      return { tier: 4, name: "Sovereign Soul", title: "ऋषि-सखा (Sage Kin)", hintBonus: "Reveals deep precedent insights and unique ending scenes." };
    } else if (this.bondLevel >= 75) {
      return { tier: 3, name: "Ancient Guardian", title: "धरोहर रक्षक (Heritage Custodian)", hintBonus: "Unlocks whispered warnings during timed crisis and inspector rounds." };
    } else if (this.bondLevel >= 50) {
      return { tier: 2, name: "Heritage Ally", title: "सच्चा मित्र (Trusted Ally)", hintBonus: "Unlocks classical Sanskrit shloka guidance in mini-games." };
    } else {
      return { tier: 1, name: "Kindred Spirit", title: "जिज्ञासु पथिक (Curious Seeker)", hintBonus: "Provides gentle encouragement and fundamental hints." };
    }
  }
}
