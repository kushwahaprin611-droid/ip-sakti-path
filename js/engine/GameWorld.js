// Main 3D World Engine for IP Sakti Path (Three.js Lifecycle & Simulation Loop)
import { CameraController } from "./CameraController.js";
import { PlayerAvatar } from "./PlayerAvatar.js";
import { InputManager } from "./InputManager.js";
import { ErisCompanion } from "../ai/ErisCompanion.js";
import { EnvironmentBuilder } from "../environments/EnvironmentBuilder.js";
import { sound } from "../audio/SoundSynth.js";

export class GameWorld {
  constructor(containerElement) {
    this.container = containerElement;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    
    this.cameraController = null;
    this.playerAvatar = null;
    this.inputManager = null;
    this.erisCompanion = null;
    this.envBuilder = null;

    this.currentRole = "doctor";
    this.currentEnv = "clinic_opd";
    this.hotspots = [];
    this.activeHotspot = null;
    
    this.lastTime = performance.now();
    this.footstepTimer = 0;

    this.onHotspotEnter = null;
    this.onHotspotExit = null;
    this.onInteractTriggered = null;

    this.init();
  }

  init() {
    if (typeof THREE === "undefined") return;

    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x070b12);
    this.scene.fog = new THREE.FogExp2(0x070b12, 0.025);

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(
      55,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      100
    );
    this.camera.position.set(0, 5, 8);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.container.appendChild(this.renderer.domElement);

    // 4. Lighting
    this.setupLighting();

    // 5. Ambient Floating Particles
    this.setupDustParticles();

    // 6. Subsystems
    this.cameraController = new CameraController(this.camera, this.renderer.domElement);
    this.playerAvatar = new PlayerAvatar(this.scene, this.currentRole);
    this.inputManager = new InputManager(this.cameraController);
    this.erisCompanion = new ErisCompanion(this.scene);
    this.envBuilder = new EnvironmentBuilder(this.scene);

    // Load initial environment
    this.loadEnvironment(this.currentEnv);

    // Bind Interaction callbacks
    this.inputManager.onInteract = () => {
      if (this.activeHotspot && this.onInteractTriggered) {
        sound.playClick();
        this.onInteractTriggered(this.activeHotspot);
      }
    };

    // Ground raycasting for click-to-move
    this.setupRaycasting();

    // Window resize handler
    window.addEventListener("resize", () => this.onWindowResize());

    // Start 60fps Loop
    this.animate();
  }

  setupLighting() {
    const ambient = new THREE.AmbientLight(0xffedd5, 0.65);
    this.scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xfffbeb, 1.2);
    dirLight.position.set(10, 15, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 35;
    dirLight.shadow.camera.left = -12;
    dirLight.shadow.camera.right = 12;
    dirLight.shadow.camera.top = 12;
    dirLight.shadow.camera.bottom = -12;
    this.scene.add(dirLight);

    const accentLight = new THREE.PointLight(0xf59e0b, 0.8, 15);
    accentLight.position.set(0, 4, 0);
    this.scene.add(accentLight);
  }

  setupDustParticles() {
    const pCount = 80;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 25;
      pPos[i * 3 + 1] = Math.random() * 6;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xfef08a,
      size: 0.05,
      transparent: true,
      opacity: 0.6
    });
    this.dustParticles = new THREE.Points(pGeo, pMat);
    this.scene.add(this.dustParticles);
  }

  setupRaycasting() {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

    this.renderer.domElement.addEventListener("click", (e) => {
      // Ignore click if mouse was dragging camera
      if (this.cameraController.isDragging) return;

      const rect = this.renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, this.camera);
      const intersectionPoint = new THREE.Vector3();
      const intersects = raycaster.ray.intersectPlane(groundPlane, intersectionPoint);

      if (intersects) {
        this.inputManager.setTargetMovePoint(intersectionPoint);
      }
    });
  }

  loadEnvironment(envType) {
    this.currentEnv = envType;
    this.hotspots = this.envBuilder.build(envType);
    this.playerAvatar.teleport(0, 3);
    sound.setAmbient(envType);
  }

  setRole(role) {
    this.currentRole = role;
    this.playerAvatar.setRole(role);
    // Switch to starting environment matching role
    const envMap = {
      doctor: "clinic_opd",
      founder: "rnd_lab",
      farmer: "herbal_farm",
      educator: "academy_hall",
      exporter: "export_hub"
    };
    this.loadEnvironment(envMap[role] || "clinic_opd");
  }

  onWindowResize() {
    if (!this.camera || !this.renderer) return;
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const now = performance.now();
    const deltaTime = Math.min((now - this.lastTime) / 1000, 0.1);
    this.lastTime = now;

    // 1. Process movement
    const moveDir = this.inputManager.getMoveDirection(this.playerAvatar.position);
    this.playerAvatar.update(deltaTime, moveDir);

    // Footstep audio
    if (this.playerAvatar.isMoving) {
      this.footstepTimer += deltaTime;
      if (this.footstepTimer > 0.35) {
        this.footstepTimer = 0;
        sound.playFootstep();
      }
    }

    // 2. Update Eris Companion
    this.erisCompanion.update(deltaTime, this.playerAvatar.position, this.playerAvatar.rotation);

    // 3. Update Camera
    this.cameraController.update(this.playerAvatar.position);

    // 4. Update Hotspots & Proximity Checks
    this.envBuilder.updateHotspots(deltaTime);
    this.checkHotspotProximity();

    // 5. Dust animation
    if (this.dustParticles) {
      this.dustParticles.rotation.y += deltaTime * 0.02;
    }

    // 6. Render
    this.renderer.render(this.scene, this.camera);
  }

  checkHotspotProximity() {
    const playerPos = this.playerAvatar.position;
    let closestHotspot = null;
    let closestDist = Infinity;

    for (const h of this.hotspots) {
      const dx = h.x - playerPos.x;
      const dz = h.z - playerPos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist <= h.radius && dist < closestDist) {
        closestDist = dist;
        closestHotspot = h;
      }
    }

    if (closestHotspot !== this.activeHotspot) {
      this.activeHotspot = closestHotspot;
      if (this.activeHotspot) {
        if (this.onHotspotEnter) this.onHotspotEnter(this.activeHotspot);
      } else {
        if (this.onHotspotExit) this.onHotspotExit();
      }
    }
  }
}