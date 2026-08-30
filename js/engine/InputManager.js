// Multi-Modal Input Manager: Keyboard, Mouse Raycast, Virtual Touch Joystick
export class InputManager {
  constructor(cameraController) {
    this.cameraController = cameraController;
    this.keys = {};
    this.moveVector = { x: 0, z: 0 };
    this.targetMovePoint = null;
    this.isJoystickActive = false;
    this.joystickVector = { x: 0, y: 0 };
    
    this.onInteract = null;
    this.onInventory = null;
    this.onSaktiAI = null;
    this.onLocations = null;
    this.onEscape = null;

    this.bindKeyboard();
    this.bindVirtualJoystick();
  }

  bindKeyboard() {
    window.addEventListener("keydown", (e) => {
      // Ignore when typing in inputs/textareas
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      this.keys[e.code] = true;

      if (e.code === "KeyE") {
        if (this.onInteract) this.onInteract();
      } else if (e.code === "KeyI") {
        if (this.onInventory) this.onInventory();
      } else if (e.code === "KeyH") {
        if (this.onSaktiAI) this.onSaktiAI();
      } else if (e.code === "KeyM") {
        if (this.onLocations) this.onLocations();
      } else if (e.code === "Escape") {
        if (this.onEscape) this.onEscape();
      }
    });

    window.addEventListener("keyup", (e) => {
      this.keys[e.code] = false;
    });
  }

  bindVirtualJoystick() {
    const zone = document.getElementById("virtual-joystick-zone");
    const knob = document.getElementById("joystick-knob");
    if (!zone || !knob) return;

    let touchId = null;
    const maxRadius = 40;

    const handleStart = (clientX, clientY) => {
      this.isJoystickActive = true;
      const rect = zone.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      handleMove(clientX, clientY, centerX, centerY);
    };

    const handleMove = (clientX, clientY, centerX, centerY) => {
      let dx = clientX - centerX;
      let dy = clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > maxRadius) {
        dx = (dx / dist) * maxRadius;
        dy = (dy / dist) * maxRadius;
      }

      knob.style.transform = `translate(${dx}px, ${dy}px)`;
      this.joystickVector.x = dx / maxRadius;
      this.joystickVector.y = dy / maxRadius;
    };

    const handleEnd = () => {
      this.isJoystickActive = false;
      this.joystickVector.x = 0;
      this.joystickVector.y = 0;
      knob.style.transform = `translate(0px, 0px)`;
    };

    zone.addEventListener("pointerdown", (e) => {
      touchId = e.pointerId;
      zone.setPointerCapture(touchId);
      const rect = zone.getBoundingClientRect();
      handleStart(e.clientX, e.clientY);
    });

    zone.addEventListener("pointermove", (e) => {
      if (this.isJoystickActive && e.pointerId === touchId) {
        const rect = zone.getBoundingClientRect();
        handleMove(e.clientX, e.clientY, rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
    });

    zone.addEventListener("pointerup", (e) => {
      if (e.pointerId === touchId) {
        handleEnd();
        try { zone.releasePointerCapture(touchId); } catch(err) {}
      }
    });

    zone.addEventListener("pointercancel", handleEnd);
  }

  getMoveDirection(playerPos) {
    let inputX = 0;
    let inputZ = 0;

    // Keyboard inputs
    if (this.keys["KeyW"] || this.keys["ArrowUp"]) inputZ -= 1;
    if (this.keys["KeyS"] || this.keys["ArrowDown"]) inputZ += 1;
    if (this.keys["KeyA"] || this.keys["ArrowLeft"]) inputX -= 1;
    if (this.keys["KeyD"] || this.keys["ArrowRight"]) inputX += 1;

    // Joystick inputs override or add
    if (this.isJoystickActive) {
      inputX = this.joystickVector.x;
      inputZ = this.joystickVector.y;
    }

    // Normalize
    const length = Math.sqrt(inputX * inputX + inputZ * inputZ);
    if (length > 0) {
      inputX = inputX / Math.max(1, length);
      inputZ = inputZ / Math.max(1, length);

      // Camera-relative rotation
      // When pressing 'W' (inputZ = -1), player should move in the direction the camera is facing horizontally
      const theta = this.cameraController.theta;
      const sinT = Math.sin(theta);
      const cosT = Math.cos(theta);

      const worldX = inputX * cosT - inputZ * sinT;
      const worldZ = -inputX * sinT - inputZ * cosT;

      return { x: worldX, z: worldZ };
    }

    // Click to move pathing
    if (this.targetMovePoint && playerPos) {
      const dx = this.targetMovePoint.x - playerPos.x;
      const dz = this.targetMovePoint.z - playerPos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist > 0.3) {
        return { x: dx / dist, z: dz / dist };
      } else {
        this.targetMovePoint = null;
      }
    }

    return { x: 0, z: 0 };
  }

  setTargetMovePoint(pt) {
    this.targetMovePoint = pt;
  }
}