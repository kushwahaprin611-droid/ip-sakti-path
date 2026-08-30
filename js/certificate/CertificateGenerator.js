// High-Resolution Official Certificate Generator for IP Sakti Path
export class CertificateGenerator {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 1600;
    this.canvas.height = 1130; // A4 Landscape ratio
    this.ctx = this.canvas.getContext("2d");
  }

  generateCertificate(playerName, roleTitle, score, dateString, lang = "en") {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // 1. Background Parchment Texture
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, "#0c1322");
    grad.addColorStop(0.5, "#070b14");
    grad.addColorStop(1, "#05080e");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // 2. Ornate Golden Borders
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 14;
    ctx.strokeRect(40, 40, w - 80, h - 80);

    ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
    ctx.lineWidth = 4;
    ctx.strokeRect(60, 60, w - 120, h - 120);

    // Corner decorative rosettes
    const corners = [[60, 60], [w - 60, 60], [60, h - 60], [w - 60, h - 60]];
    corners.forEach(([cx, cy]) => {
      ctx.fillStyle = "#f59e0b";
      ctx.beginPath();
      ctx.arc(cx, cy, 12, 0, Math.PI * 2);
      ctx.fill();
    });

    // 3. Header Emblem & Titles
    ctx.textAlign = "center";

    // Sacred Lotus / Emblem icon
    ctx.font = "60px serif";
    ctx.fillStyle = "#f59e0b";
    ctx.fillText("🪷", w / 2, 140);

    ctx.font = "bold 38px 'Cinzel', serif";
    ctx.fillStyle = "#fef08a";
    ctx.fillText("IP SAKTI PATH — ज्ञान & शक्ति", w / 2, 210);

    ctx.font = "600 22px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#34d399";
    ctx.fillText(
      lang === "hi" ? "राष्ट्रीय एवं अंतरराष्ट्रीय आयुर्वेदिक बौद्धिक संपदा उत्कृष्टता प्रमाण पत्र" : "CERTIFICATE OF AYURVEDIC INTELLECTUAL PROPERTY & REGULATORY MASTERY",
      w / 2,
      255
    );

    // Divider line
    ctx.strokeStyle = "rgba(245, 158, 11, 0.5)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 300, 285);
    ctx.lineTo(w / 2 + 300, 285);
    ctx.stroke();

    // 4. Body Text
    ctx.font = "24px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText(
      lang === "hi" ? "यह प्रमाणित किया जाता है कि" : "This is to certify that",
      w / 2,
      360
    );

    // Player Name
    ctx.font = "bold 56px 'Cinzel', serif";
    ctx.fillStyle = "#f59e0b";
    ctx.fillText(playerName || "Ayurveda Practitioner", w / 2, 440);

    // Role
    ctx.font = "italic 26px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(
      (lang === "hi" ? "ने सफलतापूर्वक विशिष्ट साधना पूर्ण की: " : "has successfully demonstrated sovereign mastery as: ") + roleTitle,
      w / 2,
      505
    );

    // Achievements description
    ctx.font = "20px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#e2e8f0";
    const desc1 = lang === "hi"
      ? "इन्होंने भारतीय पेटेंट अधिनियम (धारा 3p, 3e, 3d), टीकेडीएल, जैविक विविधता अधिनियम (ABS Form 1),"
      : "having completed rigorous simulation across the Patents Act 1970 (Sec 3(p), 3(e), 3(d)), TKDL Archives,";
    const desc2 = lang === "hi"
      ? "औषधि एवं प्रसाधन नियम 158B, USFDA DSHEA, EU THMPD एवं अंतरराष्ट्रीय विधिक रणनीतियों में सर्वोच्च प्रवीणता प्राप्त की है।"
      : "Biological Diversity Act 2002/2023, D&C Act Rule 158B, Schedule T GMP, USFDA DSHEA, and EU THMPD directives.";

    ctx.fillText(desc1, w / 2, 590);
    ctx.fillText(desc2, w / 2, 630);

    // 5. Score & Seal Box
    ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
    ctx.strokeStyle = "#10b981";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(w / 2 - 180, 680, 360, 90, 12);
    ctx.fill();
    ctx.stroke();

    ctx.font = "bold 18px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#34d399";
    ctx.fillText(lang === "hi" ? "अंतिम आईपी तत्परता स्कोर" : "FINAL IP READINESS SCORE", w / 2, 715);
    ctx.font = "bold 36px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#fef08a";
    ctx.fillText(`${score}/100 (Sovereign Level)`, w / 2, 755);

    // 6. Signatures & Verification Stamp
    const leftSigX = 260;
    const rightSigX = w - 260;
    const sigY = 960;

    // Eris Seal
    ctx.font = "italic 22px serif";
    ctx.fillStyle = "#34d399";
    ctx.fillText("Eris (Wisdom Spirit)", leftSigX, sigY - 30);
    ctx.strokeStyle = "#34d399";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(leftSigX - 120, sigY - 15);
    ctx.lineTo(leftSigX + 120, sigY - 15);
    ctx.stroke();
    ctx.font = "16px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#64748b";
    ctx.fillText(lang === "hi" ? "प्राचीन ज्ञान एवं परंपरा संरक्षक" : "Ancient Heritage Custodian", leftSigX, sigY + 10);

    // Sakti Sahayak Seal
    ctx.font = "italic 22px serif";
    ctx.fillStyle = "#06b6d4";
    ctx.fillText("Sakti Sahayak (Legal Oracle)", rightSigX, sigY - 30);
    ctx.strokeStyle = "#06b6d4";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(rightSigX - 120, sigY - 15);
    ctx.lineTo(rightSigX + 120, sigY - 15);
    ctx.stroke();
    ctx.font = "16px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#64748b";
    ctx.fillText(lang === "hi" ? "विधिक एवं नियामक परीक्षक" : "Statutory & RAG Legal Examiner", rightSigX, sigY + 10);

    // Center QR Stamp / Verification Token
    const hash = "IPS-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    ctx.font = "14px monospace";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(`Date: ${dateString || "August 2026"} | Verification Hash: ${hash}`, w / 2, 1030);

    return this.canvas.toDataURL("image/png");
  }

  downloadCertificate(dataUrl, filename = "IP_Sakti_Path_Certificate.png") {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}