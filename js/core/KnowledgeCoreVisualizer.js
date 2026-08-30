// Ayurveda Knowledge Core Interactive Visualizer (HTML5 Canvas)
// Clean ASCII version - no emoji characters

export class KnowledgeCoreVisualizer {
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
