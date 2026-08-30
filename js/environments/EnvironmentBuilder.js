// 3D Procedural Environment Builder for all 5 Roles + 4 Shared Hubs
export class EnvironmentBuilder {
  constructor(scene) {
    this.scene = scene;
    this.currentEnvGroup = null;
    this.hotspots = [];
  }

  build(envType) {
    if (this.currentEnvGroup) {
      this.scene.remove(this.currentEnvGroup);
      this.currentEnvGroup = null;
    }
    this.hotspots = [];

    const group = new THREE.Group();

    switch (envType) {
      case "clinic_opd":
        this.buildClinic(group);
        break;
      case "rnd_lab":
        this.buildRndLab(group);
        break;
      case "herbal_farm":
        this.buildFarm(group);
        break;
      case "academy_hall":
        this.buildAcademy(group);
        break;
      case "export_hub":
        this.buildExportHub(group);
        break;
      case "patent_office":
        this.buildPatentOffice(group);
        break;
      case "ayush_hq":
        this.buildAyushHQ(group);
        break;
      case "global_summit":
        this.buildGlobalSummit(group);
        break;
      case "war_room":
        this.buildWarRoom(group);
        break;
      default:
        this.buildClinic(group);
    }

    this.currentEnvGroup = group;
    this.scene.add(group);
    return this.hotspots;
  }

  // 1. Traditional Ayurvedic OPD & Clinic
  buildClinic(group) {
    // Floor: Terracotta tiles
    const floorGeo = new THREE.PlaneGeometry(36, 36);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.8 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    group.add(floor);

    // Walls: Warm cream with wooden arches
    this.createWalls(group, 0xffedd5, 0x78350f);

    // Consultation Desk
    this.createDesk(group, 0, 0, 0x92400e);
    // Classical Nadi / Pulse Scanner on desk
    this.createProp(group, 0.4, 0.9, 0.2, 0.3, 0.15, 0.25, 0xd97706, "pulse_station");
    // Herb Apothecary Shelves along back wall
    this.createShelfWithJars(group, 0, -8, 0x582506);
    // Compounding Counter with Mortar & Pestle
    this.createProp(group, -6, 0.8, -4, 2.5, 0.8, 1.2, 0x78350f, "compounding_bench");
    // Patient Records Cabinet
    this.createProp(group, 6, 1.2, -4, 1.5, 2.4, 0.8, 0x451a03, "records_cabinet");

    // Hotspots in Clinic
    this.addHotspot(group, 0, 0, "hotspot_consultation", "Consultation & Nadi Desk", "inspect_desk");
    this.addHotspot(group, -6, -4, "hotspot_compounding", "AFI Formulation Workbench", "inspect_formulation");
    this.addHotspot(group, 0, -8, "hotspot_shelves", "Classical Medicine Archives", "inspect_archives");
  }

  // 2. Modern Botanical R&D Laboratory
  buildRndLab(group) {
    // Floor: High-gloss clean epoxy
    const floorGeo = new THREE.PlaneGeometry(36, 36);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.2, metalness: 0.1 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    group.add(floor);

    this.createWalls(group, 0x1e293b, 0x0284c7);

    // Main Lab Workbench
    this.createDesk(group, 0, 0, 0x334155);
    // HPLC Analytical Machine
    this.createProp(group, 0.5, 0.9, 0, 0.8, 0.6, 0.6, 0x0284c7, "hplc_machine");
    // Rotary Evaporator & Sonicator
    this.createProp(group, -5, 0.8, -3, 2.4, 0.9, 1.2, 0x475569, "extraction_station");
    // Cryo Sample Storage Freezer
    this.createProp(group, 6, 1.4, -4, 1.6, 2.6, 1.2, 0x0ea5e9, "cryo_freezer");
    // Patent Synergy Whiteboard
    this.createWhiteboard(group, 0, -8.8, 0xf8fafc);

    // Hotspots
    this.addHotspot(group, 0, 0, "hotspot_hplc", "HPLC & Synergy Analyzer", "inspect_hplc");
    this.addHotspot(group, -5, -3, "hotspot_extraction", "Standardized Extract Bench", "inspect_extract");
    this.addHotspot(group, 0, -8.5, "hotspot_whiteboard", "Patent Claim & Ratio Board", "inspect_whiteboard");
  }

  // 3. Sacred Herbal Farm & Polyhouse
  buildFarm(group) {
    // Ground: Rich fertile loam & grass patches
    const floorGeo = new THREE.PlaneGeometry(36, 36);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x14532d, roughness: 0.9 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    // Polyhouse Greenhouse Arches
    this.createGreenhouseFrame(group);

    // Cultivation Garden Beds (Ashwagandha, Tulsi, Shatavari)
    this.createCropBed(group, -5, -3, 0x166534, "Ashwagandha Plot");
    this.createCropBed(group, 5, -3, 0x15803d, "Sacred Tulsi Plot");
    this.createCropBed(group, -5, 3, 0x16a34a, "Himalayan Kutki Bed");

    // Timber Drying Shed
    this.createProp(group, 0, 1.2, -7, 4.0, 2.2, 2.5, 0x78350f, "drying_shed");
    // Administrative Biodiversity Register Hut
    this.createProp(group, 6, 1.0, 5, 2.8, 2.0, 2.5, 0x92400e, "pbr_hut");

    // Hotspots
    this.addHotspot(group, -5, 3, "hotspot_kutki", "Wild Kutki Cultivation Plot", "inspect_kutki");
    this.addHotspot(group, 0, -7, "hotspot_drying", "Solar Drying & Moisture Sensor", "inspect_drying");
    this.addHotspot(group, 6, 5, "hotspot_pbr", "People's Biodiversity Register", "inspect_pbr");
  }

  // 4. AYUSH Training Institute & Workshop Hall
  buildAcademy(group) {
    const floorGeo = new THREE.PlaneGeometry(36, 36);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    this.createWalls(group, 0x1e293b, 0x6366f1);

    // Smart Interactive Blackboard
    this.createWhiteboard(group, 0, -8.8, 0x0f172a, true);
    // Lecturer Demonstration Bench
    this.createDesk(group, 0, -4, 0x475569);
    // Student Amphitheater Podiums
    this.createProp(group, -5, 0.5, 2, 2.0, 0.7, 1.0, 0x1e293b, "student_bench_1");
    this.createProp(group, 5, 0.5, 2, 2.0, 0.7, 1.0, 0x1e293b, "student_bench_2");
    // Digital IP Precedents Kiosk
    this.createProp(group, -7, 1.0, -4, 1.0, 1.8, 0.8, 0x6366f1, "precedents_kiosk");

    // Hotspots
    this.addHotspot(group, 0, -4, "hotspot_demo", "Formulation Demo Bench", "inspect_demo");
    this.addHotspot(group, 0, -8.5, "hotspot_smartboard", "Interactive IP Flowchart Board", "inspect_smartboard");
    this.addHotspot(group, -7, -4, "hotspot_kiosk", "AYUSH Case Precedents Kiosk", "inspect_kiosk");
  }

  // 5. Global Export Logistics Hub
  buildExportHub(group) {
    const floorGeo = new THREE.PlaneGeometry(36, 36);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    this.createWalls(group, 0x0f172a, 0xf59e0b);

    // Global Trade Logistics Map Terminal
    this.createProp(group, 0, 0.8, 0, 2.4, 0.8, 1.4, 0x0284c7, "trade_terminal");
    // Stacks of Shipping Crates with Barcodes
    this.createProp(group, -6, 1.0, -4, 2.0, 2.0, 2.0, 0xd97706, "shipping_crates");
    // Export Documentation & Phytosanitary Desk
    this.createProp(group, 6, 0.8, -4, 2.2, 0.8, 1.2, 0x475569, "export_docs_desk");

    // Hotspots
    this.addHotspot(group, 0, 0, "hotspot_terminal", "Global Compliance Map", "inspect_trade_map");
    this.addHotspot(group, 6, -4, "hotspot_docs", "Phytosanitary & DSHEA Dossiers", "inspect_export_docs");
    this.addHotspot(group, -6, -4, "hotspot_crates", "Warehouse Packaging & CITES Check", "inspect_crates");
  }

  // 6. Government Patent Office
  buildPatentOffice(group) {
    const floorGeo = new THREE.PlaneGeometry(36, 36);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x475569 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    this.createWalls(group, 0x334155, 0xd97706);
    this.createDesk(group, 0, 0, 0x1e293b);
    this.createProp(group, -5, 1.0, -4, 1.8, 2.0, 0.8, 0x0284c7, "tkdl_terminal");
    this.createProp(group, 5, 0.8, -4, 2.0, 0.8, 1.2, 0x78350f, "trademark_desk");

    this.addHotspot(group, 0, 0, "hotspot_examiner", "Patent Controller Bench", "inspect_examiner");
    this.addHotspot(group, -5, -4, "hotspot_tkdl", "TKDL Prior Art Portal", "inspect_tkdl");
  }

  // 7. AYUSH Regulatory Headquarters
  buildAyushHQ(group) {
    const floorGeo = new THREE.PlaneGeometry(36, 36);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x1e293b });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    this.createWalls(group, 0x0f172a, 0x10b981);
    this.createDesk(group, 0, 0, 0x064e3b);
    this.createProp(group, -5, 0.8, -4, 2.2, 0.8, 1.2, 0x047857, "gmp_desk");

    this.addHotspot(group, 0, 0, "hotspot_sla", "State Licensing Authority (SLA)", "inspect_sla");
    this.addHotspot(group, -5, -4, "hotspot_gmp", "Schedule T Audit Verification", "inspect_gmp");
  }

  // 8. Virtual International Summit
  buildGlobalSummit(group) {
    const floorGeo = new THREE.PlaneGeometry(36, 36);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x030712, roughness: 0.1, metalness: 0.5 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    this.createWalls(group, 0x0f172a, 0x38bdf8);
    // Circular Holographic Negotiation Table
    const tableGeo = new THREE.CylinderGeometry(3.5, 3.5, 0.8, 32);
    const tableMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, emissive: 0x0369a1, emissiveIntensity: 0.4 });
    const table = new THREE.Mesh(tableGeo, tableMat);
    table.position.set(0, 0.4, 0);
    group.add(table);

    this.addHotspot(group, 0, 0, "hotspot_summit", "International Treaty Summit Table", "inspect_summit");
  }

  // 9. Crisis Defense War Room
  buildWarRoom(group) {
    const floorGeo = new THREE.PlaneGeometry(36, 36);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x050811, roughness: 0.2 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    this.createWalls(group, 0x0f172a, 0xef4444);
    // Central War Table
    this.createProp(group, 0, 0.8, 0, 4.0, 0.8, 2.5, 0x7f1d1d, "war_table");
    // Main Threat Monitor Display on back wall
    const screenGeo = new THREE.BoxGeometry(10, 4, 0.2);
    const screenMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, emissive: 0xef4444, emissiveIntensity: 0.6 });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 3, -8.8);
    group.add(screen);

    this.addHotspot(group, 0, 0, "hotspot_war_table", "Biopiracy Defense Command Console", "inspect_war_table");
    this.addHotspot(group, 0, -8.5, "hotspot_threat_screen", "Global Patent Infringement Radar", "inspect_radar");
  }

  // Helper Utilities
  createWalls(group, wallColor, accentColor) {
    const wallMat = new THREE.MeshStandardMaterial({ color: wallColor, roughness: 0.9 });
    const trimMat = new THREE.MeshStandardMaterial({ color: accentColor, roughness: 0.5 });

    // Back Wall
    const backGeo = new THREE.BoxGeometry(36, 6, 0.4);
    const backWall = new THREE.Mesh(backGeo, wallMat);
    backWall.position.set(0, 3, -9);
    group.add(backWall);

    // Back Trim
    const trimGeo = new THREE.BoxGeometry(36, 0.3, 0.5);
    const trim = new THREE.Mesh(trimGeo, trimMat);
    trim.position.set(0, 5.8, -8.9);
    group.add(trim);
  }

  createDesk(group, x, z, color) {
    const deskGeo = new THREE.BoxGeometry(3.0, 0.8, 1.4);
    const deskMat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.7 });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.set(x, 0.4, z);
    desk.castShadow = true;
    desk.receiveShadow = true;
    group.add(desk);
  }

  createProp(group, x, y, z, w, h, d, color, name) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.6 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.name = name;
    group.add(mesh);
  }

  createShelfWithJars(group, x, z, color) {
    const shelfGeo = new THREE.BoxGeometry(8, 3.5, 0.8);
    const shelfMat = new THREE.MeshStandardMaterial({ color: color });
    const shelf = new THREE.Mesh(shelfGeo, shelfMat);
    shelf.position.set(x, 1.75, z);
    group.add(shelf);

    // Several glowing herb bottles on shelf
    for (let i = -3; i <= 3; i += 1.2) {
      const jarGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.45, 12);
      const jarMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, emissive: 0xd97706, emissiveIntensity: 0.5 });
      const jar = new THREE.Mesh(jarGeo, jarMat);
      jar.position.set(x + i, 2.2, z + 0.35);
      group.add(jar);
    }
  }

  createWhiteboard(group, x, z, color, isSmart = false) {
    const boardGeo = new THREE.BoxGeometry(6, 2.5, 0.1);
    const boardMat = new THREE.MeshStandardMaterial({
      color: color,
      emissive: isSmart ? 0x6366f1 : 0x000000,
      emissiveIntensity: isSmart ? 0.3 : 0
    });
    const board = new THREE.Mesh(boardGeo, boardMat);
    board.position.set(x, 2.8, z);
    group.add(board);
  }

  createCropBed(group, x, z, color, name) {
    const bedGeo = new THREE.BoxGeometry(4.0, 0.3, 2.5);
    const bedMat = new THREE.MeshStandardMaterial({ color: 0x451a03 });
    const bed = new THREE.Mesh(bedGeo, bedMat);
    bed.position.set(x, 0.15, z);
    group.add(bed);

    // Green plant bushes
    for (let i = -1.2; i <= 1.2; i += 0.8) {
      for (let j = -0.6; j <= 0.6; j += 0.6) {
        const plantGeo = new THREE.SphereGeometry(0.28, 8, 8);
        const plantMat = new THREE.MeshStandardMaterial({ color: color });
        const plant = new THREE.Mesh(plantGeo, plantMat);
        plant.position.set(x + i, 0.45, z + j);
        group.add(plant);
      }
    }
  }

  createGreenhouseFrame(group) {
    const archGeo = new THREE.TorusGeometry(8, 0.12, 8, 24, Math.PI);
    const archMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 });
    for (let z = -6; z <= 6; z += 4) {
      const arch = new THREE.Mesh(archGeo, archMat);
      arch.position.set(0, 0, z);
      group.add(arch);
    }
  }

  addHotspot(group, x, z, id, label, action) {
    // 3D Glowing Beacon Ring on floor
    const ringGeo = new THREE.RingGeometry(0.8, 1.0, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(x, 0.05, z);
    group.add(ring);

    // Vertical Glowing Pillar
    const colGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.2, 8);
    const colMat = new THREE.MeshBasicMaterial({
      color: 0xfef08a,
      transparent: true,
      opacity: 0.5
    });
    const col = new THREE.Mesh(colGeo, colMat);
    col.position.set(x, 1.1, z);
    group.add(col);

    this.hotspots.push({
      id: id,
      x: x,
      z: z,
      radius: 2.2,
      label: label,
      action: action,
      ringMesh: ring
    });
  }

  updateHotspots(deltaTime) {
    for (const h of this.hotspots) {
      if (h.ringMesh) {
        h.ringMesh.rotation.z += deltaTime * 1.5;
      }
    }
  }
}