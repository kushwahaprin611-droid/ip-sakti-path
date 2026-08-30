// 3D Procedural Humanoid Player Avatar with Role-Specific Outfits and Dynamic Auras
export class PlayerAvatar {
  constructor(scene, role = "doctor") {
    this.scene = scene;
    this.role = role;
    this.group = new THREE.Group();
    this.walkCycle = 0;
    this.isMoving = false;
    this.moveSpeed = 7.5;
    this.rotation = 0;
    this.position = { x: 0, y: 0, z: 0 };
    this.currentAura = "gold";
    this.auraMesh = null;
    
    this.limbs = {};
    this.buildMesh();
  }

  buildMesh() {
    if (typeof THREE === "undefined") return;

    // Palette per role
    const palettes = {
      doctor: { coat: 0xf8fafc, trim: 0xf59e0b, pants: 0x1e293b, skin: 0xfbcfe8, accent: 0x10b981 },
      founder: { coat: 0x38bdf8, trim: 0x0284c7, pants: 0x0f172a, skin: 0xfcd34d, accent: 0x06b6d4 },
      farmer: { coat: 0x166534, trim: 0xf59e0b, pants: 0x78350f, skin: 0xfde047, accent: 0x84cc16 },
      educator: { coat: 0x475569, trim: 0xe2e8f0, pants: 0x1e293b, skin: 0xfbcfe8, accent: 0x6366f1 },
      exporter: { coat: 0x1e1b4b, trim: 0xf59e0b, pants: 0x09090b, skin: 0xfcd34d, accent: 0xeab308 }
    };

    const p = palettes[this.role] || palettes.doctor;

    // 1. Torso
    const torsoGeo = new THREE.BoxGeometry(0.5, 0.7, 0.3);
    const torsoMat = new THREE.MeshStandardMaterial({ color: p.coat, roughness: 0.6 });
    this.torso = new THREE.Mesh(torsoGeo, torsoMat);
    this.torso.position.y = 1.05;
    this.torso.castShadow = true;
    this.group.add(this.torso);

    // Collar / Sash
    const sashGeo = new THREE.BoxGeometry(0.52, 0.15, 0.32);
    const sashMat = new THREE.MeshStandardMaterial({ color: p.trim, roughness: 0.5 });
    const sash = new THREE.Mesh(sashGeo, sashMat);
    sash.position.y = 1.25;
    this.group.add(sash);

    // 2. Head
    const headGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({ color: p.skin, roughness: 0.7 });
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.y = 1.6;
    this.head.castShadow = true;
    this.group.add(this.head);

    // Hair / Turban
    const hairGeo = new THREE.BoxGeometry(0.42, 0.15, 0.42);
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.9 });
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.y = 1.72;
    this.group.add(hair);

    // 3. Left & Right Arms
    const armGeo = new THREE.BoxGeometry(0.14, 0.55, 0.14);
    const armMat = new THREE.MeshStandardMaterial({ color: p.coat });

    this.leftArmPivot = new THREE.Group();
    this.leftArmPivot.position.set(-0.35, 1.35, 0);
    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.y = -0.25;
    leftArm.castShadow = true;
    this.leftArmPivot.add(leftArm);
    this.group.add(this.leftArmPivot);

    this.rightArmPivot = new THREE.Group();
    this.rightArmPivot.position.set(0.35, 1.35, 0);
    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.y = -0.25;
    rightArm.castShadow = true;
    this.rightArmPivot.add(rightArm);
    this.group.add(this.rightArmPivot);

    // 4. Left & Right Legs
    const legGeo = new THREE.BoxGeometry(0.18, 0.7, 0.18);
    const legMat = new THREE.MeshStandardMaterial({ color: p.pants, roughness: 0.8 });

    this.leftLegPivot = new THREE.Group();
    this.leftLegPivot.position.set(-0.16, 0.7, 0);
    const leftLeg = new THREE.Mesh(legGeo, legMat);
    leftLeg.position.y = -0.35;
    leftLeg.castShadow = true;
    this.leftLegPivot.add(leftLeg);
    this.group.add(this.leftLegPivot);

    this.rightLegPivot = new THREE.Group();
    this.rightLegPivot.position.set(0.16, 0.7, 0);
    const rightLeg = new THREE.Mesh(legGeo, legMat);
    rightLeg.position.y = -0.35;
    rightLeg.castShadow = true;
    this.rightLegPivot.add(rightLeg);
    this.group.add(this.rightLegPivot);

    // 5. Glowing Elemental Aura Ring
    this.setupAura("gold");

    this.scene.add(this.group);
  }

  setupAura(type = "gold") {
    if (this.auraMesh) {
      this.group.remove(this.auraMesh);
      this.auraMesh = null;
    }

    const colors = {
      gold: 0xf59e0b,
      emerald: 0x10b981,
      cyan: 0x06b6d4,
      fire: 0xef4444
    };

    const auraColor = colors[type] || 0xf59e0b;
    this.currentAura = type;

    const ringGeo = new THREE.TorusGeometry(0.65, 0.04, 16, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: auraColor,
      transparent: true,
      opacity: 0.75
    });
    this.auraMesh = new THREE.Mesh(ringGeo, ringMat);
    this.auraMesh.rotation.x = Math.PI / 2;
    this.auraMesh.position.y = 0.1;
    this.group.add(this.auraMesh);
  }

  setAura(type) {
    this.setupAura(type);
  }

  update(delta) {
    if (this.isMoving) {
      this.walkCycle += delta * 12;
      const angle = Math.sin(this.walkCycle) * 0.6;
      if (this.leftArmPivot) this.leftArmPivot.rotation.x = angle;
      if (this.rightArmPivot) this.rightArmPivot.rotation.x = -angle;
      if (this.leftLegPivot) this.leftLegPivot.rotation.x = -angle;
      if (this.rightLegPivot) this.rightLegPivot.rotation.x = angle;
    } else {
      if (this.leftArmPivot) this.leftArmPivot.rotation.x = 0;
      if (this.rightArmPivot) this.rightArmPivot.rotation.x = 0;
      if (this.leftLegPivot) this.leftLegPivot.rotation.x = 0;
      if (this.rightLegPivot) this.rightLegPivot.rotation.x = 0;
    }

    if (this.auraMesh) {
      this.auraMesh.rotation.z += delta * 1.5;
      this.auraMesh.position.y = 0.1 + Math.sin(Date.now() * 0.003) * 0.05;
    }
  }

  setPosition(x, z) {
    this.group.position.x = x;
    this.group.position.z = z;
  }

  setRotation(rad) {
    this.group.rotation.y = rad;
  }
}