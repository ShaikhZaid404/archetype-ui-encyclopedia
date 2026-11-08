// ==========================================================================
// UI DESIGN STYLES ENCYCLOPEDIA - DATA SOURCE
// Comprehensive repository of 12 distinct UI design paradigms
// ==========================================================================

const UI_STYLES_DATA = [
  {
    id: "minimalism",
    name: "Minimalism (Swiss Clean)",
    badge: "Timeless",
    category: "clean",
    description: "Prioritizes content clarity, functional hierarchy, generous negative space, hairline 1px borders, and austere monochrome typography.",
    keyTraits: [
      "1px subtle border (#e4e4e7)",
      "box-shadow: 0 1px 3px rgba(0,0,0,0.04)",
      "Strict monochrome + 1 accent",
      "Generous whitespace padding",
      "High legibility sans-serif"
    ],
    colorPalette: [
      { name: "Pure White", hex: "#ffffff" },
      { name: "Zinc Light", hex: "#f4f4f5" },
      { name: "Border Gray", hex: "#e4e4e7" },
      { name: "Zinc Muted", hex: "#71717a" },
      { name: "Deep Charcoal", hex: "#09090b" }
    ],
    bestFor: "Developer Tools, FinTech, Publishing, Portfolios, Enterprise SaaS",
    avoidFor: "Kids apps, gaming portals, entertainment-heavy experiences",
    codeHtml: `<div class="demo-card">
  <span class="demo-badge">Design System</span>
  <h3 class="demo-title">Swiss Precision</h3>
  <p class="demo-desc">Eliminating unnecessary decoration to amplify utility, clarity, and structural balance.</p>
  <input class="demo-input" placeholder="Type something..." />
  <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: space-between;">
    <button class="demo-btn-primary">Confirm</button>
    <div class="demo-toggle active"></div>
  </div>
</div>`,
    codeCss: `.style-minimalism .demo-card {
  background: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}
.style-minimalism .demo-btn-primary {
  background: #09090b;
  color: #ffffff;
  border-radius: 6px;
  padding: 0.55rem 1.1rem;
}`
  },
  {
    id: "neobrutalism",
    name: "Neo-Brutalism",
    badge: "Trending",
    category: "bold",
    description: "Rebellion against sterile corporate minimalism. Features heavy solid black borders, hard zero-blur offset drop shadows, and high-voltage saturation.",
    keyTraits: [
      "border: 3px solid #000000",
      "box-shadow: 5px 5px 0px #000",
      "transform: translate(2px, 2px) on active",
      "Pop palette: Cyan, Pink, Yellow, Lime",
      "Chunky grotesk / mono fonts"
    ],
    colorPalette: [
      { name: "Neo Yellow", hex: "#FFE600" },
      { name: "Electric Cyan", hex: "#00F0FF" },
      { name: "Acid Pink", hex: "#FF66C4" },
      { name: "Lime Punch", hex: "#55E67A" },
      { name: "Solid Black", hex: "#000000" }
    ],
    bestFor: "Gumroad creators, Figma plugins, Web3, Creative agencies, EdTech",
    avoidFor: "Hospital/medical software, traditional banking, serious legal dashboards",
    codeHtml: `<div class="demo-card">
  <span class="demo-badge">POP ART UI</span>
  <h3 class="demo-title">Neo-Brutalist Card</h3>
  <p class="demo-desc">Unapologetic lines, aggressive contrasts, and delightful tactile button feedback.</p>
  <input class="demo-input" placeholder="Your creative handle..." />
  <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: space-between;">
    <button class="demo-btn-primary">Ship It 🚀</button>
    <div class="demo-toggle active"></div>
  </div>
</div>`,
    codeCss: `.style-neobrutalism .demo-card {
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 12px;
  box-shadow: 6px 6px 0px #000000;
}
.style-neobrutalism .demo-btn-primary {
  background: #00F0FF;
  border: 3px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  font-weight: 800;
}
.style-neobrutalism .demo-btn-primary:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px #000000;
}`
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    badge: "Modern OS",
    category: "modern",
    description: "Layered spatial depth inspired by frosted glass, popularized by Apple iOS, macOS Big Sur, and Windows 11 Fluent Design.",
    keyTraits: [
      "backdrop-filter: blur(20px)",
      "background: rgba(255, 255, 255, 0.14)",
      "border: 1px solid rgba(255, 255, 255, 0.25)",
      "Multi-colored dynamic background orbs",
      "Translucent specular edge highlights"
    ],
    colorPalette: [
      { name: "Frosted White", hex: "rgba(255,255,255,0.15)" },
      { name: "Specular Border", hex: "rgba(255,255,255,0.3)" },
      { name: "Orb Cyan", hex: "#38bdf8" },
      { name: "Orb Violet", hex: "#818cf8" },
      { name: "Deep Glass Navy", hex: "#0f172a" }
    ],
    bestFor: "Music players, crypto wallets, futuristic landing pages, OS interfaces",
    avoidFor: "Text-dense documentation, users with low-contrast visual impairments",
    codeHtml: `<div class="demo-card">
  <span class="demo-badge">Spatial Glass</span>
  <h3 class="demo-title">Frosted Horizon</h3>
  <p class="demo-desc">Translucent light refraction floating over vibrant ambient lighting backgrounds.</p>
  <input class="demo-input" placeholder="Search glass components..." />
  <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: space-between;">
    <button class="demo-btn-primary">Explore Glass</button>
    <div class="demo-toggle active"></div>
  </div>
</div>`,
    codeCss: `.style-glassmorphism .demo-card {
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(20px) saturate(190%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.35);
}`
  },
  {
    id: "neumorphism",
    name: "Neumorphism (Soft UI)",
    badge: "Tactile",
    category: "3d",
    description: "Extruded plastic surface effect where shapes appear molded directly from the background using balanced paired light and dark drop-shadows.",
    keyTraits: [
      "box-shadow: 9px 9px 18px #be, -9px -9px 18px #fff",
      "Monochromatic background continuity",
      "box-shadow: inset ... for pressed states",
      "Seamless soft rounded geometry",
      "Subtle tactile embossed/debossed feel"
    ],
    colorPalette: [
      { name: "Soft Gray Surface", hex: "#e0e5ec" },
      { name: "Dark Shadow", hex: "#bebebe" },
      { name: "Specular Shadow", hex: "#ffffff" },
      { name: "Deep Charcoal Text", hex: "#2d3748" },
      { name: "Tactile Blue Accent", hex: "#3182ce" }
    ],
    bestFor: "Smart home remote apps, calculator apps, IoT control surfaces, audio dials",
    avoidFor: "Complex accessible websites, high accessibility (WCAG AAA) compliance",
    codeHtml: `<div class="demo-card">
  <span class="demo-badge">SOFT UI</span>
  <h3 class="demo-title">Extruded Control</h3>
  <p class="demo-desc">Continuous molded surfaces where elements appear gently pushed up or pressed in.</p>
  <input class="demo-input" placeholder="Value slider..." />
  <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: space-between;">
    <button class="demo-btn-primary">Press Button</button>
    <div class="demo-toggle active"></div>
  </div>
</div>`,
    codeCss: `.style-neumorphism .demo-card {
  background: #e0e5ec;
  border-radius: 24px;
  box-shadow: 10px 10px 20px #bebebe, 
              -10px -10px 20px #ffffff;
}
.style-neumorphism .demo-btn-primary:active {
  box-shadow: inset 4px 4px 8px #bebebe, 
              inset -4px -4px 8px #ffffff;
}`
  },
  {
    id: "claymorphism",
    name: "Claymorphism",
    badge: "Playful 3D",
    category: "3d",
    description: "Chubby, pillowy, friendly 3D aesthetic featuring soft pastel colors, deep inner highlights, and pill-like floating volumes.",
    keyTraits: [
      "border-radius: 28px - 32px",
      "Dual inset shadows creating pillowy volume",
      "Floating colorful soft drop shadow",
      "Squishy rubber / toy-like tactile feedback",
      "Pastel and candy-colored gradients"
    ],
    colorPalette: [
      { name: "Clay Indigo", hex: "#6366f1" },
      { name: "Pastel Pink", hex: "#ec4899" },
      { name: "Sky Cyan", hex: "#38bdf8" },
      { name: "Candy Lime", hex: "#10b981" },
      { name: "Pure White Glow", hex: "#ffffff" }
    ],
    bestFor: "Gamified apps, kids learning, Web3 avatars, onboarding wizards, casual games",
    avoidFor: "Government portals, enterprise B2B compliance software",
    codeHtml: `<div class="demo-card">
  <span class="demo-badge">TOY CLAY 3D</span>
  <h3 class="demo-title">Clay Morph Card</h3>
  <p class="demo-desc">Friendly inflated shapes with layered inner reflections that feel like real play-dough.</p>
  <input class="demo-input" placeholder="Type playful note..." />
  <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: space-between;">
    <button class="demo-btn-primary">Squish It</button>
    <div class="demo-toggle active"></div>
  </div>
</div>`,
    codeCss: `.style-claymorphism .demo-card {
  background: #6366f1;
  border-radius: 32px;
  box-shadow: 16px 16px 32px rgba(79, 70, 229, 0.4),
              inset 6px 6px 10px rgba(255, 255, 255, 0.45),
              inset -6px -6px 10px rgba(30, 27, 75, 0.35);
}`
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk / Sci-Fi HUD",
    badge: "High Tech",
    category: "dark",
    description: "High-tech dystopian aesthetic loaded with angular corner notches (clip-path chamfers), neon glows, terminal data grids, and high-frequency scanlines.",
    keyTraits: [
      "clip-path polygon chamfered corners",
      "text-shadow & box-shadow neon glow",
      "Neon Cyan (#00ffcc) & Cyber Yellow (#fcee0a)",
      "Monospaced data labels and grid borders",
      "Pitch-black stealth background (#090b10)"
    ],
    colorPalette: [
      { name: "Void Black", hex: "#090b10" },
      { name: "Neon Cyan", hex: "#00ffcc" },
      { name: "Cyber Yellow", hex: "#fcee0a" },
      { name: "Glitch Magenta", hex: "#ff0055" },
      { name: "Matrix Green", hex: "#00ff66" }
    ],
    bestFor: "Crypto dashboards, gaming hubs, security / monitoring tools, AI agents",
    avoidFor: "E-commerce fashion stores, corporate HR software",
    codeHtml: `<div class="demo-card">
  <span class="demo-badge">SYSTEM PROTOCOL 01</span>
  <h3 class="demo-title">NEURAL INTERFACE</h3>
  <p class="demo-desc">High-bandwidth cybernetic telemetry channel active. Quantum cryptography synced.</p>
  <input class="demo-input" placeholder="EXEC // COMMAND_ENTRY" />
  <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: space-between;">
    <button class="demo-btn-primary">ENGAGE SYS</button>
    <div class="demo-toggle active"></div>
  </div>
</div>`,
    codeCss: `.style-cyberpunk .demo-card {
  background: #090b10;
  border: 1px solid #00ffcc;
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.25);
}`
  },
  {
    id: "bento",
    name: "Bento Grid (Modern SaaS)",
    badge: "Industry Standard",
    category: "modern",
    description: "The modern modular design language popularized by Apple keynote slides and Linear. Asymmetrical cards, smooth pill tags, and elegant micro-borders.",
    keyTraits: [
      "Subtle linear gradient card background",
      "border: 1px solid rgba(255,255,255,0.08)",
      "High visual hierarchy with modular cards",
      "Pill-shaped status chips and badges",
      "Subtle hover illumination"
    ],
    colorPalette: [
      { name: "Slate Deep", hex: "#0f172a" },
      { name: "Bento Card Surface", hex: "#1e293b" },
      { name: "Electric Blue", hex: "#3b82f6" },
      { name: "Soft Slate Text", hex: "#94a3b8" },
      { name: "Pure Light", hex: "#ffffff" }
    ],
    bestFor: "SaaS landing pages, feature showcases, analytics dashboards, iOS apps",
    avoidFor: "Non-modular, linear narrative storytelling pages",
    codeHtml: `<div class="demo-card">
  <span class="demo-badge"><span style="width:6px;height:6px;border-radius:50%;background:#60a5fa;display:inline-block;"></span> Bento Module</span>
  <h3 class="demo-title">Structured Intelligence</h3>
  <p class="demo-desc">Asymmetrical compartmentalization of dense metrics into digestible visual modules.</p>
  <input class="demo-input" placeholder="Search features..." />
  <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: space-between;">
    <button class="demo-btn-primary">Connect App</button>
    <div class="demo-toggle active"></div>
  </div>
</div>`,
    codeCss: `.style-bento .demo-card {
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
}`
  },
  {
    id: "skeuomorphism",
    name: "Skeuomorphism (Tactile 3D)",
    badge: "Classic Craft",
    category: "3d",
    description: "Realistic real-world physical metaphors from early iOS and audio hardware. Brushed metallic surfaces, glossy beveled buttons, and realistic volume.",
    keyTraits: [
      "Metallic multi-stop linear gradients",
      "Beveled edge highlights and shadow insets",
      "Embossed text shadows (0 1px 0 #fff)",
      "Physical push-button depth",
      "Rich tactile chrome / leather textures"
    ],
    colorPalette: [
      { name: "Brushed Chrome", hex: "#e1e1e1" },
      { name: "Steel Border", hex: "#9e9e9e" },
      { name: "Gloss Blue", hex: "#1e70d4" },
      { name: "Emboss Light", hex: "#ffffff" },
      { name: "Shadow Edge", hex: "#222222" }
    ],
    bestFor: "Audio synthesizers & DAWs, luxury horology apps, automotive instrument dials",
    avoidFor: "Fast mobile web apps where lightweight flat CSS is preferred",
    codeHtml: `<div class="demo-card">
  <span class="demo-badge">ANALOG METRIC</span>
  <h3 class="demo-title">Metallic Channel</h3>
  <p class="demo-desc">Physical hardware knobs, brushed aluminum switches, and tactile push buttons.</p>
  <input class="demo-input" placeholder="Audio frequency Hz..." />
  <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: space-between;">
    <button class="demo-btn-primary">Activate Unit</button>
    <div class="demo-toggle active"></div>
  </div>
</div>`,
    codeCss: `.style-skeuomorphism .demo-card {
  background: linear-gradient(180deg, #fdfdfd 0%, #ebebeb 100%);
  border: 1px solid #b0b0b0;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 #ffffff;
}`
  },
  {
    id: "retro90s",
    name: "Retro 90s / Windows 95",
    badge: "Nostalgic",
    category: "retro",
    description: "The dawn of personal computing. Features battleship-gray surfaces, 2px outset/inset beveled window borders, blue titlebars, and system fonts.",
    keyTraits: [
      "outset / inset beveled borders (2px)",
      "Classic #c0c0c0 battleship gray",
      "Titlebars with minimize/maximize/close icons",
      "Pixel system fonts (MS Sans Serif)",
      "Zero blur flat shadows"
    ],
    colorPalette: [
      { name: "Win95 Gray", hex: "#c0c0c0" },
      { name: "Classic Navy", hex: "#000080" },
      { name: "Titlebar Cyan", hex: "#1084d0" },
      { name: "Border Shadow", hex: "#808080" },
      { name: "Bevel White", hex: "#ffffff" }
    ],
    bestFor: "Nostalgic portfolios, indie dev games, retro emulators, creative music sites",
    avoidFor: "Standard corporate e-commerce, banking portals",
    codeHtml: `<div class="demo-card">
  <div class="retro-window-titlebar">
    <span>SYSTEM_CONFIG.EXE</span>
    <div class="retro-window-btns">
      <div class="retro-win-btn">_</div>
      <div class="retro-win-btn">□</div>
      <div class="retro-win-btn">×</div>
    </div>
  </div>
  <div class="retro-content-wrap">
    <span class="demo-badge">VINTAGE OS</span>
    <h3 class="demo-title">Windows 95 UI</h3>
    <p class="demo-desc">True 90s personal computing nostalgia with beveled borders and classic titlebars.</p>
    <input class="demo-input" value="C:\\WINDOWS\\SYSTEM32" />
    <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: space-between;">
      <button class="demo-btn-primary">OK</button>
      <div class="demo-toggle active"></div>
    </div>
  </div>
</div>`,
    codeCss: `.style-retro90s .demo-card {
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
}`
  },
  {
    id: "darkluxury",
    name: "Dark Luxury / Haute Couture",
    badge: "Editorial",
    category: "dark",
    description: "Midnight obsidian velvet backgrounds, brushed gold leaf typography, elegant serif font pairings, and dramatic editorial atmosphere.",
    keyTraits: [
      "Radial gradient obsidian background",
      "Champagne gold & bronze accents (#e6af2e)",
      "High contrast serif titles (Cinzel/Bodoni)",
      "border: 1px solid rgba(230, 175, 46, 0.25)",
      "Subtle warm ambient gold glows"
    ],
    colorPalette: [
      { name: "Velvet Obsidian", hex: "#09090b" },
      { name: "Champagne Gold", hex: "#e6af2e" },
      { name: "Pale Gold", hex: "#fef08a" },
      { name: "Stone Gray", hex: "#a8a29e" },
      { name: "Pure Silk", hex: "#f5f5f4" }
    ],
    bestFor: "Haute couture fashion, private wealth portals, luxury real estate, premium perfume",
    avoidFor: "Casual utility apps, children's games, dense technical spreadsheets",
    codeHtml: `<div class="demo-card">
  <span class="demo-badge">PRIVATE RESERVE</span>
  <h3 class="demo-title">Atelier Heritage</h3>
  <p class="demo-desc">Uncompromising bespoke craftsmanship rendered in pitch obsidian and warm spun gold.</p>
  <input class="demo-input" placeholder="VIP Invitation Code..." />
  <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: space-between;">
    <button class="demo-btn-primary">Request Entry</button>
    <div class="demo-toggle active"></div>
  </div>
</div>`,
    codeCss: `.style-darkluxury .demo-card {
  background: radial-gradient(circle at 50% 0%, #1e1b18 0%, #0d0c0b 100%);
  border: 1px solid rgba(230, 175, 46, 0.25);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(230, 175, 46, 0.08);
}`
  },
  {
    id: "synthwave",
    name: "Synthwave / Retrowave 80s",
    badge: "Arcade Retro",
    category: "retro",
    description: "The pulsing electric neon 80s dream. Chrome reflections, neon magenta and electric cyan lighting, sunset glow, and outrun aesthetics.",
    keyTraits: [
      "Neon magenta (#ff2a8d) & cyan (#05d9e8)",
      "Deep cosmic violet background (#14052b)",
      "Glowing text and box shadows",
      "Dynamic arcade outrun vibes",
      "High energy color clash"
    ],
    colorPalette: [
      { name: "Cosmic Purple", hex: "#14052b" },
      { name: "Neon Magenta", hex: "#ff2a8d" },
      { name: "Electric Cyan", hex: "#05d9e8" },
      { name: "Retro Violet", hex: "#7928ca" },
      { name: "Laser White", hex: "#ffffff" }
    ],
    bestFor: "Music streaming, synth production, retro arcade gaming, festival sites",
    avoidFor: "Tax filing software, medical records, serious administrative tools",
    codeHtml: `<div class="demo-card">
  <span class="demo-badge">OUTRUN 1984</span>
  <h3 class="demo-title">Neon Horizon</h3>
  <p class="demo-desc">Cruising along the endless wireframe grid into an incandescent synth sunset.</p>
  <input class="demo-input" placeholder="Track BPM / Frequency..." />
  <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: space-between;">
    <button class="demo-btn-primary">Play Track ⚡</button>
    <div class="demo-toggle active"></div>
  </div>
</div>`,
    codeCss: `.style-synthwave .demo-card {
  background: linear-gradient(180deg, #1f0b3e 0%, #100322 100%);
  border: 2px solid #ff2a8d;
  box-shadow: 0 0 25px rgba(255, 42, 141, 0.4);
}`
  },
  {
    id: "material3",
    name: "Material You / Flat 2.0 (M3)",
    badge: "Modern Mobile",
    category: "modern",
    description: "Google's latest dynamic tonal color elevation system. Pill-shaped buttons, friendly rounded containers (24px), dynamic contrast, and zero clutter.",
    keyTraits: [
      "border-radius: 24px (expressive shapes)",
      "Harmonious tonal color matching",
      "Clean elevation without heavy skeuomorphism",
      "Pill-shaped friendly buttons",
      "High accessibility & touch targets"
    ],
    colorPalette: [
      { name: "Material Purple", hex: "#6750a4" },
      { name: "Surface Tint", hex: "#eaddff" },
      { name: "Secondary Container", hex: "#e8def8" },
      { name: "Outline Border", hex: "#79747e" },
      { name: "Deep On-Surface", hex: "#1d1b20" }
    ],
    bestFor: "Android apps, modern enterprise software, utility productivity apps",
    avoidFor: "Moody dark game portals, luxury high-fashion magazines",
    codeHtml: `<div class="demo-card">
  <span class="demo-badge">Material You 3</span>
  <h3 class="demo-title">Expressive Surface</h3>
  <p class="demo-desc">Dynamic tonal color schemes and friendly geometry built for all display densities.</p>
  <input class="demo-input" placeholder="Add a new task..." />
  <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: space-between;">
    <button class="demo-btn-primary">Save Task</button>
    <div class="demo-toggle active"></div>
  </div>
</div>`,
    codeCss: `.style-material3 .demo-card {
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(121, 116, 126, 0.15);
}`
  }
];

// Chameleon component variants for morphing
const CHAMELEON_COMPONENTS = {
  profile: {
    name: "User Profile Card",
    render: (styleId) => `
      <div class="demo-card" style="max-width: 380px;">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <div style="width: 54px; height: 54px; border-radius: 50%; background: linear-gradient(135deg, #38bdf8, #818cf8); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.2rem; color: #fff; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
            SZ
          </div>
          <div>
            <h4 class="demo-title" style="margin: 0; font-size: 1.15rem;">Shaikh Zaid</h4>
            <span class="demo-badge" style="margin-top: 4px;">Staff UI Architect</span>
          </div>
        </div>
        <p class="demo-desc">Design system specialist focused on micro-interactions, responsive design systems, and visual style craft.</p>
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem;">
          <div style="flex: 1; padding: 0.5rem; border-radius: 8px; background: rgba(255,255,255,0.05); text-align: center;">
            <div style="font-weight: 800; font-size: 1rem;">142</div>
            <div style="font-size: 0.7rem; opacity: 0.7;">Projects</div>
          </div>
          <div style="flex: 1; padding: 0.5rem; border-radius: 8px; background: rgba(255,255,255,0.05); text-align: center;">
            <div style="font-weight: 800; font-size: 1rem;">98.4%</div>
            <div style="font-size: 0.7rem; opacity: 0.7;">Score</div>
          </div>
        </div>
        <div style="display: flex; gap: 0.75rem;">
          <button class="demo-btn-primary" style="flex: 1;">Connect</button>
          <button class="demo-btn-secondary">Message</button>
        </div>
      </div>
    `
  },
  pricing: {
    name: "SaaS Pricing Tier",
    render: (styleId) => `
      <div class="demo-card" style="max-width: 380px;">
        <span class="demo-badge">PRO PLAN</span>
        <h3 class="demo-title" style="font-size: 1.75rem; margin: 0.5rem 0;">₹1,999 <span style="font-size: 0.85rem; font-weight: 500; opacity: 0.7;">/ month</span></h3>
        <p class="demo-desc">Everything you need to ship world-class user interfaces at breakneck speed.</p>
        <div style="display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.5rem; font-size: 0.85rem;">
          <div style="display: flex; align-items: center; gap: 8px;">✓ <span>Unlimited Design Tokens</span></div>
          <div style="display: flex; align-items: center; gap: 8px;">✓ <span>12 Authentic UI Themes</span></div>
          <div style="display: flex; align-items: center; gap: 8px;">✓ <span>Instant CSS Code Export</span></div>
        </div>
        <button class="demo-btn-primary" style="width: 100%;">Upgrade to Pro</button>
      </div>
    `
  },
  player: {
    name: "Media Player",
    render: (styleId) => `
      <div class="demo-card" style="max-width: 380px;">
        <div style="width: 100%; height: 140px; border-radius: 12px; background: linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4); margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; box-shadow: 0 8px 20px rgba(0,0,0,0.3);">
          🎧
        </div>
        <span class="demo-badge">Now Playing</span>
        <h3 class="demo-title" style="margin: 0.4rem 0 0.1rem;">Midnight Neon Waves</h3>
        <p class="demo-desc" style="margin-bottom: 1rem;">Antigravity Sound Lab • 3:42</p>
        <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.15); border-radius: 3px; margin-bottom: 1.25rem; position: relative;">
          <div style="width: 65%; height: 100%; background: #06b6d4; border-radius: 3px;"></div>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <button class="demo-btn-secondary" style="padding: 0.4rem 0.8rem;">⏮</button>
          <button class="demo-btn-primary" style="padding: 0.6rem 1.4rem;">⏸ Pause</button>
          <button class="demo-btn-secondary" style="padding: 0.4rem 0.8rem;">⏭</button>
        </div>
      </div>
    `
  }
};
