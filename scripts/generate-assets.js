const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate a sample resume PDF (valid minimal PDF structure)
const samplePdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 200 >>
stream
BT
/F1 24 Tf
50 720 Td
(Pal Patel - Full-Stack Developer Resume) Tj
/F1 12 Tf
0 -30 Td
(Email: palpatel.dev@gmail.com | Portfolio: palpatel.dev | Ahmedabad, India) Tj
0 -25 Td
(Specialization: Next.js, TypeScript, React, Node.js, PostgreSQL, Docker) Tj
0 -20 Td
(Education: B.Tech Computer Engineering - Gujarat Technological University) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000224 00000 n 
0000000474 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
555
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'resume.pdf'), samplePdf);
console.log('resume.pdf created');

// Generate an SVG for profile-card and also save an SVG version
const svgAvatar = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800" fill="none">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0c12"/>
      <stop offset="50%" stop-color="#141824"/>
      <stop offset="100%" stop-color="#07080b"/>
    </linearGradient>
    <linearGradient id="neon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#10B981" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
  </defs>
  
  <rect width="600" height="800" fill="url(#bg)"/>
  <rect width="600" height="800" fill="url(#grid)"/>
  <circle cx="300" cy="340" r="260" fill="url(#glow)"/>
  
  <!-- Modern Geometric Developer Silhouette Avatar -->
  <g transform="translate(150, 160)">
    <!-- Outer Cyber Ring -->
    <circle cx="150" cy="150" r="140" stroke="url(#neon)" stroke-width="2" stroke-dasharray="12 8" opacity="0.6"/>
    <circle cx="150" cy="150" r="126" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    
    <!-- Face / Head outline -->
    <circle cx="150" cy="120" r="64" fill="#181e2e" stroke="url(#neon)" stroke-width="2"/>
    <!-- Modern Tech Glasses -->
    <rect x="110" y="106" width="34" height="20" rx="4" fill="#090d16" stroke="#10B981" stroke-width="2"/>
    <rect x="156" y="106" width="34" height="20" rx="4" fill="#090d16" stroke="#10B981" stroke-width="2"/>
    <line x1="144" y1="116" x2="156" y2="116" stroke="#10B981" stroke-width="2"/>
    <!-- Headphone Band -->
    <path d="M 86 120 C 86 60, 214 60, 214 120" fill="none" stroke="#64748b" stroke-width="5" stroke-linecap="round"/>
    <rect x="80" y="110" width="12" height="26" rx="6" fill="#10B981"/>
    <rect x="208" y="110" width="12" height="26" rx="6" fill="#10B981"/>
    
    <!-- Torso / Hoodie -->
    <path d="M 70 240 C 70 190, 230 190, 230 240 L 250 300 L 50 300 Z" fill="#141926" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    <!-- PP Emblem on hoodie -->
    <text x="150" y="250" font-family="monospace" font-size="20" font-weight="900" fill="#10B981" text-anchor="middle" letter-spacing="4">PP</text>
  </g>
  
  <!-- Identity card labels -->
  <text x="300" y="560" font-family="system-ui, sans-serif" font-size="32" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="1">PAL PATEL</text>
  <text x="300" y="598" font-family="monospace" font-size="14" font-weight="600" fill="#10B981" text-anchor="middle" letter-spacing="3">FULL-STACK DEVELOPER</text>
  <text x="300" y="630" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle">AHMEDABAD, INDIA // IST</text>
  
  <rect x="160" y="660" width="280" height="38" rx="8" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" stroke-width="1"/>
  <circle cx="184" cy="679" r="4" fill="#10B981"/>
  <text x="280" y="684" font-family="monospace" font-size="12" font-weight="700" fill="#10B981" text-anchor="middle" letter-spacing="2">AVAILABLE FOR HIRE</text>
  
  <!-- Tech footer line -->
  <text x="300" y="750" font-family="monospace" font-size="11" fill="#475569" text-anchor="middle" letter-spacing="4">DEV // 2026 // GTU // TS &bull; NEXT &bull; GO</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'profile-card.svg'), svgAvatar);

// Also create a 1x1 or sample jpg file using basic valid JPEG header or copy
// We will generate a valid minimal JPEG file bytes
const minimalJpgBase64 = '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=';
fs.writeFileSync(path.join(publicDir, 'profile-card.jpg'), Buffer.from(minimalJpgBase64, 'base64'));

console.log('profile-card.svg and profile-card.jpg created');

