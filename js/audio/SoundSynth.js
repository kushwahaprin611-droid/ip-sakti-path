// Zero-Dependency Web Audio API Synthesizer for IP Sakti Path
export class SoundSynth {
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

export const sound = new SoundSynth();