import fs from "node:fs";
import path from "node:path";

const outputDir = path.join(process.cwd(), "assets", "tarot");

const majorCards = [
  { slug: "major-00-fool", title: "愚者", numeral: "0", motif: "sun" },
  { slug: "major-01-magician", title: "魔术师", numeral: "I", motif: "wand" },
  { slug: "major-02-high-priestess", title: "女祭司", numeral: "II", motif: "moon" },
  { slug: "major-03-empress", title: "皇后", numeral: "III", motif: "venus" },
  { slug: "major-04-emperor", title: "皇帝", numeral: "IV", motif: "mountain" },
  { slug: "major-05-hierophant", title: "教皇", numeral: "V", motif: "pillar" },
  { slug: "major-06-lovers", title: "恋人", numeral: "VI", motif: "gemini" },
  { slug: "major-07-chariot", title: "战车", numeral: "VII", motif: "chariot" },
  { slug: "major-08-strength", title: "力量", numeral: "VIII", motif: "lion" },
  { slug: "major-09-hermit", title: "隐者", numeral: "IX", motif: "lantern" },
  { slug: "major-10-wheel-of-fortune", title: "命运之轮", numeral: "X", motif: "wheel" },
  { slug: "major-11-justice", title: "正义", numeral: "XI", motif: "scales" },
  { slug: "major-12-hanged-man", title: "倒吊人", numeral: "XII", motif: "halo" },
  { slug: "major-13-death", title: "死神", numeral: "XIII", motif: "scythe" },
  { slug: "major-14-temperance", title: "节制", numeral: "XIV", motif: "water" },
  { slug: "major-15-devil", title: "恶魔", numeral: "XV", motif: "horn" },
  { slug: "major-16-tower", title: "高塔", numeral: "XVI", motif: "tower" },
  { slug: "major-17-star", title: "星星", numeral: "XVII", motif: "star" },
  { slug: "major-18-moon", title: "月亮", numeral: "XVIII", motif: "crescent" },
  { slug: "major-19-sun", title: "太阳", numeral: "XIX", motif: "solar" },
  { slug: "major-20-judgement", title: "审判", numeral: "XX", motif: "trumpet" },
  { slug: "major-21-world", title: "世界", numeral: "XXI", motif: "wreath" }
];

const suits = [
  { key: "wands", label: "权杖", icon: "wand", colorA: "#ffcf70", colorB: "#ff8b4f" },
  { key: "cups", label: "圣杯", icon: "cup", colorA: "#81d2ff", colorB: "#3b8fe6" },
  { key: "swords", label: "宝剑", icon: "sword", colorA: "#d7dcff", colorB: "#7a8cf5" },
  { key: "pentacles", label: "星币", icon: "pentacle", colorA: "#f5ec9a", colorB: "#d6b24a" }
];

const ranks = [
  { key: "ace", label: "Ace", title: "王牌", count: 1 },
  { key: "two", label: "II", title: "二", count: 2 },
  { key: "three", label: "III", title: "三", count: 3 },
  { key: "four", label: "IV", title: "四", count: 4 },
  { key: "five", label: "V", title: "五", count: 5 },
  { key: "six", label: "VI", title: "六", count: 6 },
  { key: "seven", label: "VII", title: "七", count: 7 },
  { key: "eight", label: "VIII", title: "八", count: 8 },
  { key: "nine", label: "IX", title: "九", count: 9 },
  { key: "ten", label: "X", title: "十", count: 10 },
  { key: "page", label: "Page", title: "侍从", count: 1 },
  { key: "knight", label: "Knight", title: "骑士", count: 1 },
  { key: "queen", label: "Queen", title: "皇后", count: 1 },
  { key: "king", label: "King", title: "国王", count: 1 }
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function svgShell({ title, subtitle, accentA, accentB, centerContent, footerLeft, footerRight }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="480" height="840" viewBox="0 0 480 840" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="panel" x1="62" y1="38" x2="426" y2="790" gradientUnits="userSpaceOnUse">
      <stop stop-color="#10283D"/>
      <stop offset="1" stop-color="#08131F"/>
    </linearGradient>
    <linearGradient id="accent" x1="116" y1="130" x2="364" y2="680" gradientUnits="userSpaceOnUse">
      <stop stop-color="${accentA}"/>
      <stop offset="1" stop-color="${accentB}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(240 312) rotate(90) scale(250 210)">
      <stop stop-color="${accentA}" stop-opacity="0.18"/>
      <stop offset="1" stop-color="${accentB}" stop-opacity="0"/>
    </radialGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="480" height="840" rx="32" fill="#04111B"/>
  <rect x="14" y="14" width="452" height="812" rx="26" fill="url(#panel)" stroke="#E5C98D" stroke-opacity="0.34" stroke-width="2"/>
  <rect x="34" y="34" width="412" height="772" rx="22" stroke="#E5C98D" stroke-opacity="0.24"/>
  <circle cx="240" cy="240" r="124" fill="url(#glow)"/>
  <path d="M240 88L252 112L278 116L259 134L263 160L240 148L217 160L221 134L202 116L228 112L240 88Z" fill="#EED49A" fill-opacity="0.82"/>
  <text x="240" y="112" text-anchor="middle" fill="#F7EBD4" font-size="26" font-family="'Noto Serif SC', serif" letter-spacing="6">${title}</text>
  <text x="240" y="152" text-anchor="middle" fill="#F0D9A4" font-size="18" font-family="'Cormorant Garamond', serif" letter-spacing="4">${subtitle}</text>
  <g transform="translate(66 184)">
    ${centerContent}
  </g>
  <rect x="70" y="670" width="340" height="96" rx="18" fill="#08151F" fill-opacity="0.54" stroke="#E5C98D" stroke-opacity="0.16"/>
  <text x="92" y="710" fill="#F7EBD4" font-size="20" font-family="'Noto Serif SC', serif">${footerLeft}</text>
  <text x="92" y="740" fill="#C9DAE5" fill-opacity="0.9" font-size="16" font-family="'Noto Serif SC', serif">${footerRight}</text>
</svg>`;
}

function motifSvg(motif) {
  const motifs = {
    sun: `
      <circle cx="174" cy="146" r="72" fill="url(#accent)" filter="url(#softGlow)"/>
      <circle cx="174" cy="146" r="36" fill="#F9E5B7"/>
      ${Array.from({ length: 12 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / 12;
        const x1 = 174 + Math.cos(angle) * 58;
        const y1 = 146 + Math.sin(angle) * 58;
        const x2 = 174 + Math.cos(angle) * 96;
        const y2 = 146 + Math.sin(angle) * 96;
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#F9E5B7" stroke-width="5" stroke-linecap="round"/>`;
      }).join("")}
      <path d="M72 286C104 252 132 240 174 240C216 240 248 254 282 286" stroke="#F9E5B7" stroke-width="8" stroke-linecap="round"/>
      <circle cx="120" cy="310" r="18" fill="#F9E5B7" fill-opacity="0.5"/>
      <circle cx="228" cy="326" r="12" fill="#F9E5B7" fill-opacity="0.45"/>
    `,
    wand: `
      <rect x="160" y="54" width="28" height="268" rx="14" transform="rotate(22 160 54)" fill="url(#accent)"/>
      <path d="M96 108C126 106 148 92 176 64C204 92 226 106 256 108C228 136 214 166 214 206C214 246 228 274 256 300C226 304 202 318 176 350C150 318 126 304 96 300C122 270 138 242 138 206C138 170 122 140 96 108Z" stroke="#F7EBD4" stroke-width="8"/>
      <circle cx="176" cy="206" r="28" fill="#F7EBD4"/>
    `,
    moon: `
      <path d="M226 78C180 86 148 128 148 176C148 224 180 266 226 274C198 292 162 304 124 304C54 304 -2 248 -2 178C-2 108 54 52 124 52C162 52 198 64 226 78Z" transform="translate(108 54)" fill="url(#accent)"/>
      <circle cx="264" cy="150" r="22" fill="#F7EBD4" fill-opacity="0.88"/>
      <rect x="96" y="286" width="156" height="110" rx="22" stroke="#F7EBD4" stroke-width="6"/>
      <line x1="174" y1="286" x2="174" y2="396" stroke="#F7EBD4" stroke-width="6"/>
      <circle cx="130" cy="344" r="12" fill="#F7EBD4"/>
      <circle cx="218" cy="344" r="12" fill="#F7EBD4"/>
    `,
    venus: `
      <circle cx="174" cy="142" r="84" stroke="url(#accent)" stroke-width="16"/>
      <path d="M174 226V336" stroke="#F7EBD4" stroke-width="12" stroke-linecap="round"/>
      <path d="M126 286H222" stroke="#F7EBD4" stroke-width="12" stroke-linecap="round"/>
      <path d="M74 124C106 94 136 78 174 78C212 78 244 96 276 130" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    mountain: `
      <path d="M24 320L124 174L180 248L244 142L324 320H24Z" fill="url(#accent)" fill-opacity="0.62"/>
      <path d="M100 320V154L174 94L248 154V320" stroke="#F7EBD4" stroke-width="8" stroke-linejoin="round"/>
      <path d="M136 182H212" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <path d="M136 226H212" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    pillar: `
      <rect x="66" y="96" width="58" height="220" rx="12" fill="url(#accent)" fill-opacity="0.56" stroke="#F7EBD4" stroke-width="6"/>
      <rect x="224" y="96" width="58" height="220" rx="12" fill="url(#accent)" fill-opacity="0.56" stroke="#F7EBD4" stroke-width="6"/>
      <path d="M108 76H240" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <circle cx="174" cy="182" r="42" stroke="#F7EBD4" stroke-width="8"/>
      <path d="M174 140V224" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <path d="M132 182H216" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    gemini: `
      <circle cx="118" cy="126" r="44" stroke="#F7EBD4" stroke-width="8"/>
      <circle cx="230" cy="126" r="44" stroke="#F7EBD4" stroke-width="8"/>
      <path d="M118 170V292" stroke="url(#accent)" stroke-width="12" stroke-linecap="round"/>
      <path d="M230 170V292" stroke="url(#accent)" stroke-width="12" stroke-linecap="round"/>
      <path d="M118 206C142 186 154 176 174 176C194 176 206 186 230 206" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    chariot: `
      <path d="M104 150H244L278 232H70L104 150Z" fill="url(#accent)" fill-opacity="0.6" stroke="#F7EBD4" stroke-width="8" stroke-linejoin="round"/>
      <circle cx="112" cy="258" r="28" stroke="#F7EBD4" stroke-width="8"/>
      <circle cx="236" cy="258" r="28" stroke="#F7EBD4" stroke-width="8"/>
      <path d="M174 150V98" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <path d="M144 98H204" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    lion: `
      <path d="M174 108C220 108 258 146 258 192C258 238 220 276 174 276C128 276 90 238 90 192C90 146 128 108 174 108Z" fill="url(#accent)" fill-opacity="0.42" stroke="#F7EBD4" stroke-width="8"/>
      <path d="M126 302C148 282 164 272 174 272C184 272 200 282 222 302" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <circle cx="148" cy="184" r="10" fill="#F7EBD4"/>
      <circle cx="200" cy="184" r="10" fill="#F7EBD4"/>
      <path d="M150 222C164 232 184 232 198 222" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    lantern: `
      <path d="M174 74V126" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <path d="M126 130H222L242 220L174 298L106 220L126 130Z" fill="url(#accent)" fill-opacity="0.5" stroke="#F7EBD4" stroke-width="8" stroke-linejoin="round"/>
      <circle cx="174" cy="190" r="30" fill="#F7EBD4" filter="url(#softGlow)"/>
      <path d="M120 328C142 306 160 296 174 296C188 296 206 306 228 328" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    wheel: `
      <circle cx="174" cy="194" r="102" stroke="url(#accent)" stroke-width="16"/>
      <circle cx="174" cy="194" r="52" stroke="#F7EBD4" stroke-width="8"/>
      <path d="M174 92V296M72 194H276M108 128L240 260M240 128L108 260" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    scales: `
      <path d="M174 76V318" stroke="#F7EBD4" stroke-width="10" stroke-linecap="round"/>
      <path d="M104 120H244" stroke="#F7EBD4" stroke-width="10" stroke-linecap="round"/>
      <path d="M126 120L96 184M222 120L252 184" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <path d="M74 184H118L134 236H58L74 184Z" fill="url(#accent)" fill-opacity="0.52" stroke="#F7EBD4" stroke-width="6" stroke-linejoin="round"/>
      <path d="M230 184H274L290 236H214L230 184Z" fill="url(#accent)" fill-opacity="0.52" stroke="#F7EBD4" stroke-width="6" stroke-linejoin="round"/>
    `,
    halo: `
      <circle cx="174" cy="126" r="34" stroke="#F7EBD4" stroke-width="8"/>
      <path d="M174 160V322" stroke="#F7EBD4" stroke-width="10" stroke-linecap="round"/>
      <path d="M118 198L174 250L230 198" stroke="url(#accent)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M108 92H240" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    scythe: `
      <path d="M118 94C188 94 240 126 266 184C236 162 208 152 180 152C138 152 106 176 82 224C72 194 68 170 68 152C68 120 86 94 118 94Z" fill="url(#accent)" fill-opacity="0.6"/>
      <path d="M180 136L110 332" stroke="#F7EBD4" stroke-width="10" stroke-linecap="round"/>
      <path d="M198 118C248 128 274 164 274 220" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    water: `
      <path d="M94 132C126 132 154 164 174 228C194 164 222 132 254 132" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <path d="M118 198H230" stroke="url(#accent)" stroke-width="16" stroke-linecap="round"/>
      <path d="M108 258C128 238 150 228 174 228C198 228 220 238 240 258" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <path d="M88 300C118 282 146 274 174 274C202 274 230 282 260 300" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round" stroke-opacity="0.8"/>
    `,
    horn: `
      <path d="M112 126C124 92 146 74 174 74C202 74 224 92 236 126" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <path d="M126 126C126 164 148 188 174 188C200 188 222 164 222 126" fill="url(#accent)" fill-opacity="0.52" stroke="#F7EBD4" stroke-width="8"/>
      <circle cx="154" cy="150" r="8" fill="#F7EBD4"/>
      <circle cx="194" cy="150" r="8" fill="#F7EBD4"/>
      <path d="M144 214L118 304M204 214L230 304" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    tower: `
      <path d="M128 72H220L244 140V316H104V140L128 72Z" fill="url(#accent)" fill-opacity="0.54" stroke="#F7EBD4" stroke-width="8" stroke-linejoin="round"/>
      <path d="M174 46L190 82H158L174 46Z" fill="#F7EBD4"/>
      <path d="M94 126L56 188M254 126L292 188" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <path d="M174 164V264" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <path d="M138 214H210" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    star: `
      <path d="M174 74L194 130L254 130L206 164L224 222L174 188L124 222L142 164L94 130L154 130L174 74Z" fill="url(#accent)" stroke="#F7EBD4" stroke-width="6" stroke-linejoin="round"/>
      ${Array.from({ length: 6 }, (_, i) => {
        const x = 84 + i * 36;
        const y = i % 2 === 0 ? 282 : 322;
        return `<circle cx="${x}" cy="${y}" r="8" fill="#F7EBD4" fill-opacity="0.9"/>`;
      }).join("")}
      ${Array.from({ length: 4 }, (_, i) => {
        const x = 220 + i * 28;
        const y = i % 2 === 0 ? 300 : 338;
        return `<circle cx="${x}" cy="${y}" r="6" fill="#F7EBD4" fill-opacity="0.72"/>`;
      }).join("")}
    `,
    crescent: `
      <path d="M244 92C216 102 196 128 196 160C196 192 216 218 244 228C224 244 198 254 170 254C108 254 58 204 58 142C58 80 108 30 170 30C198 30 224 40 244 56C218 62 200 82 200 108C200 138 220 160 248 166" transform="translate(40 60)" fill="url(#accent)"/>
      <circle cx="122" cy="320" r="10" fill="#F7EBD4"/>
      <circle cx="174" cy="286" r="8" fill="#F7EBD4" fill-opacity="0.8"/>
      <circle cx="228" cy="320" r="10" fill="#F7EBD4"/>
    `,
    solar: `
      <circle cx="174" cy="174" r="84" fill="url(#accent)" filter="url(#softGlow)"/>
      ${Array.from({ length: 16 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / 16;
        const x1 = 174 + Math.cos(angle) * 70;
        const y1 = 174 + Math.sin(angle) * 70;
        const x2 = 174 + Math.cos(angle) * 120;
        const y2 = 174 + Math.sin(angle) * 120;
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#F7EBD4" stroke-width="6" stroke-linecap="round"/>`;
      }).join("")}
      <path d="M96 318C126 290 152 278 174 278C196 278 222 290 252 318" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    trumpet: `
      <path d="M94 162L214 122V246L94 206V162Z" fill="url(#accent)" fill-opacity="0.6" stroke="#F7EBD4" stroke-width="8" stroke-linejoin="round"/>
      <path d="M214 122L252 108V258L214 246" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <path d="M126 270C146 252 162 244 174 244C186 244 202 252 222 270" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <circle cx="92" cy="184" r="16" fill="#F7EBD4"/>
    `,
    wreath: `
      <ellipse cx="174" cy="194" rx="88" ry="112" stroke="url(#accent)" stroke-width="16"/>
      ${Array.from({ length: 12 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / 12;
        const x = 174 + Math.cos(angle) * 88;
        const y = 194 + Math.sin(angle) * 112;
        return `<circle cx="${x}" cy="${y}" r="8" fill="#F7EBD4" fill-opacity="0.9"/>`;
      }).join("")}
      <circle cx="174" cy="194" r="34" fill="#F7EBD4" fill-opacity="0.92"/>
    `
  };

  return motifs[motif];
}

function suitIcon(icon, accentA, accentB) {
  const map = {
    wand: `
      <rect x="154" y="54" width="18" height="228" rx="9" transform="rotate(18 154 54)" fill="url(#accent)"/>
      <path d="M126 84C148 84 166 70 180 44C194 70 212 84 234 84C216 102 206 122 206 146C206 170 216 190 234 208C212 208 194 222 180 246C166 222 148 208 126 208C142 190 150 170 150 146C150 122 142 102 126 84Z" stroke="#F7EBD4" stroke-width="8"/>
    `,
    cup: `
      <path d="M112 72H236C232 132 214 176 174 214C134 176 116 132 112 72Z" fill="url(#accent)" stroke="#F7EBD4" stroke-width="8" stroke-linejoin="round"/>
      <path d="M146 214H202V252H146V214Z" fill="#F7EBD4"/>
      <path d="M124 252H224" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
    `,
    sword: `
      <path d="M174 48L214 120L186 148L186 268H162V148L134 120L174 48Z" fill="url(#accent)" stroke="#F7EBD4" stroke-width="8" stroke-linejoin="round"/>
      <path d="M120 148H228" stroke="#F7EBD4" stroke-width="8" stroke-linecap="round"/>
      <circle cx="174" cy="300" r="16" fill="#F7EBD4"/>
    `,
    pentacle: `
      <circle cx="174" cy="172" r="94" fill="url(#accent)" fill-opacity="0.24" stroke="#F7EBD4" stroke-width="8"/>
      <path d="M174 94L194 150H252L206 184L224 242L174 208L124 242L142 184L96 150H154L174 94Z" fill="#F7EBD4"/>
    `
  };
  return map[icon].replace(/url\(#accent\)/g, `url(#accent)`).replace(/#F7EBD4/g, "#F7EBD4");
}

function minorPattern(icon, count) {
  const positions = {
    1: [[174, 176]],
    2: [[124, 146], [224, 206]],
    3: [[174, 112], [118, 206], [230, 206]],
    4: [[124, 122], [224, 122], [124, 230], [224, 230]],
    5: [[124, 122], [224, 122], [174, 176], [124, 230], [224, 230]],
    6: [[124, 108], [224, 108], [124, 176], [224, 176], [124, 244], [224, 244]],
    7: [[124, 96], [224, 96], [124, 160], [224, 160], [174, 208], [124, 268], [224, 268]],
    8: [[124, 92], [224, 92], [124, 150], [224, 150], [124, 208], [224, 208], [124, 266], [224, 266]],
    9: [[124, 92], [224, 92], [124, 148], [224, 148], [174, 176], [124, 204], [224, 204], [124, 260], [224, 260]],
    10: [[124, 82], [224, 82], [124, 136], [224, 136], [124, 190], [224, 190], [124, 244], [224, 244], [124, 298], [224, 298]]
  };

  return positions[count].map(([x, y]) => `
    <g transform="translate(${x - 174} ${y - 172}) scale(0.34)">
      ${suitIcon(icon)}
    </g>
  `).join("");
}

function generateBackCard() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="480" height="840" viewBox="0 0 480 840" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="48" y1="22" x2="434" y2="812" gradientUnits="userSpaceOnUse">
      <stop stop-color="#12314B"/>
      <stop offset="1" stop-color="#08131F"/>
    </linearGradient>
    <radialGradient id="core" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(240 420) rotate(90) scale(228 180)">
      <stop stop-color="#EBCB91" stop-opacity="0.34"/>
      <stop offset="1" stop-color="#66D9D0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="480" height="840" rx="32" fill="#04111B"/>
  <rect x="14" y="14" width="452" height="812" rx="26" fill="url(#bg)" stroke="#E5C98D" stroke-opacity="0.36" stroke-width="2"/>
  <rect x="34" y="34" width="412" height="772" rx="22" stroke="#E5C98D" stroke-opacity="0.24"/>
  <circle cx="240" cy="420" r="172" fill="url(#core)"/>
  <circle cx="240" cy="420" r="124" stroke="#F7EBD4" stroke-opacity="0.65" stroke-width="3"/>
  <circle cx="240" cy="420" r="86" stroke="#66D9D0" stroke-opacity="0.6" stroke-width="2"/>
  <path d="M240 258L256 298L300 302L266 330L276 374L240 350L204 374L214 330L180 302L224 298L240 258Z" fill="#F7EBD4" fill-opacity="0.9"/>
  <path d="M240 466L256 506L300 510L266 538L276 582L240 558L204 582L214 538L180 510L224 506L240 466Z" fill="#F7EBD4" fill-opacity="0.9"/>
  <path d="M240 332V508M152 420H328M178 358L302 482M302 358L178 482" stroke="#F7EBD4" stroke-opacity="0.78" stroke-width="3" stroke-linecap="round"/>
  <text x="240" y="724" text-anchor="middle" fill="#F7EBD4" font-size="30" font-family="'Cormorant Garamond', serif" letter-spacing="8">TAROT</text>
</svg>`;
}

function generateMajorCard(card) {
  return svgShell({
    title: card.title,
    subtitle: card.numeral,
    accentA: "#EED49A",
    accentB: "#66D9D0",
    centerContent: motifSvg(card.motif),
    footerLeft: "大阿尔卡那",
    footerRight: `象征主题 · ${card.title}`
  });
}

function generateMinorCard(suit, rank) {
  const centerContent = rank.count > 1 && rank.count <= 10
    ? minorPattern(suit.icon, rank.count)
    : `
      <g transform="translate(0 10)">
        ${suitIcon(suit.icon, suit.colorA, suit.colorB)}
      </g>
      <text x="174" y="356" text-anchor="middle" fill="#F7EBD4" font-size="26" font-family="'Cormorant Garamond', serif" letter-spacing="5">${rank.label}</text>
    `;

  return svgShell({
    title: `${suit.label}${rank.title}`,
    subtitle: rank.label,
    accentA: suit.colorA,
    accentB: suit.colorB,
    centerContent,
    footerLeft: "小阿尔卡那",
    footerRight: `${suit.label} · ${rank.title}`
  });
}

ensureDir(outputDir);

fs.writeFileSync(path.join(outputDir, "card-back.svg"), generateBackCard(), "utf8");

for (const card of majorCards) {
  fs.writeFileSync(path.join(outputDir, `${card.slug}.svg`), generateMajorCard(card), "utf8");
}

for (const suit of suits) {
  for (const rank of ranks) {
    const slug = `minor-${suit.key}-${rank.key}.svg`;
    fs.writeFileSync(path.join(outputDir, slug), generateMinorCard(suit, rank), "utf8");
  }
}

console.log(`Generated tarot assets in ${outputDir}`);
