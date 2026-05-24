TERMS.push({
  section: 'hood',
  term: 'Claude',
  hook: "Anthropic's model family. you're talking to one right now (hi!).",
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="10" y="55" width="72" height="90" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="22" y1="72" x2="70" y2="72" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="22" y1="84" x2="70" y2="84" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="22" y1="96" x2="62" y2="96" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="22" y1="108" x2="68" y2="108" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="22" y1="120" x2="58" y2="120" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="82" y1="100" x2="118" y2="100" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="120" y="72" width="68" height="56" rx="8" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="188" y1="100" x2="222" y2="100" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="224" y="55" width="86" height="90" rx="8" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2.5"/>
                <path d="M 267 75 Q 267 67 259 67 Q 251 67 251 76 Q 251 83 267 95 Q 283 83 283 76 Q 283 67 275 67 Q 267 67 267 75 Z" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="1.5"/>
              </g>
              <text x="46" y="50" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">constitution</text>
              <text x="154" y="103" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">train</text>
              <text x="267" y="158" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">Claude</text>
            </svg>`,
  note: `
            <p>Claude is Anthropic's model family. The training methodology differs from pure RLHF — Anthropic uses Constitutional AI (CAI), where the model is trained against an explicit written constitution of principles rather than pure human thumbs-up/thumbs-down signals. The model learns to critique and revise its own outputs according to those principles.</p>
            <p>There are multiple Claude tiers: flagship models for complex reasoning (currently Claude Opus), faster/cheaper mid-tier models (Sonnet), and quick lightweight versions (Haiku). There's also Claude Code for software engineering. Like GPT, smarter roughly means more expensive and slower.</p>
            <p>Anthropic's public emphasis on safety shapes how Claude behaves. It's more likely to refuse ambiguous requests, more willing to say "I don't know," and more likely to push back on instructions it finds problematic. Whether that's a feature or a bug depends on what you're doing — but it's not an accident, it's the explicit design goal.</p>
          `
});
