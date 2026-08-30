// Third-Person Orbit & Follow Camera Controller for IP Sakti Path
export class CameraController {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;
    this.target = new THREE.Vector3(0, 1.2, 0);
    
    this.distance = 7.5;
    this.minDistance = 3.5;
    this.maxDistance = 14.0;
    
    this.theta = Math.PI * 0.25; // Azimuth angle
    this.phi = Math.PI * 0.32;   // Polar / Elevation angle
    
    this.minPhi = 0.15;
    this.maxPhi = Math.PI * 0.48; // Prevent going below floor
    
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    
    this.focusOffset = { x: 0, y: 0, z: 0 };
    this.isCinematic = false;

    this.bindEvents();
  }

  bindEvents() {
    this.domElement.addEventListener("mousedown", (e) => {
      if (e.button === 0) {
        this.isDragging = true;
        this.previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    });

    window.addEventListener("mouseup", () => {
      this.isDragging = false;
    });

    window.addEventListener("mousemove", (e) => {
      if (!this.isDragging) return;

      const deltaX = e.clientX - this.previousMousePosition.x;
      const deltaY = e.clientY - this.previousMousePosition.y;

      this.theta -= deltaX * 0.006;
      this.phi -= deltaY * 0.005;

      this.phi = Math.max(this.minPhi, Math.min(this.maxPhi, this.phi));
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    this.domElement.addEventListener("wheel", (e) => {
      e.preventDefault();
      this.distance += e.deltaY * 0.006;
      this.distance = Math.max(this.minDistance, Math.min(this.maxDistance, this.distance));
    }, { passive: false });
  }

  update(playerPos) {
    if (!playerPos) return;

    // Smoothly track target
    const targetY = playerPos.y + 1.2;
    this.target.x += (playerPos.x - this.target.x) * 0.1;
    this.target.y += (targetY - this.target.y) * 0.1;
    this.target.z += (playerPos.z - this.target.z) * 0.1;

    // Spherical coordinate math for camera position
    const sinPhi = Math.sin(this.phi);
    const cosPhi = Math.cos(this.phi);
    const sinTheta = Math.sin(this.theta);
    const cosTheta = Math.cos(this.theta);

    const camX = this.target.x + this.distance * sinPhi * sinTheta;
    const camY = this.target.y + this.distance * cosPhi;
    const camZ = this.target.z + this.distance * sinPhi * cosTheta;

    this.camera.position.set(camX, Math.max(0.6, camY), camZ);
    this.camera.lookAt(this.target);
  }

  setCinematicFocus(isFocus) {
    this.isCinematic = isFocus;
    if (isFocus) {
      this.distance = 4.5;
      this.phi = Math.PI * 0.38;
    } else {
      this.distance = 7.5;
    }
  }
}