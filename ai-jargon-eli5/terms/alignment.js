TERMS.push({
  section: 'safety',
  term: 'Alignment',
  hook: 'making sure the AI actually wants what you want it to want.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <line x1="34" y1="50" x2="122" y2="50" stroke="#1a1a1a" stroke-width="3" marker-end="url(#arrow)"/>
                <line x1="34" y1="80" x2="122" y2="80" stroke="#1a1a1a" stroke-width="3" marker-end="url(#arrow)"/>
                <path d="M 50 130 L 72 150 L 118 105" fill="none" stroke="#a4ff3c" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="200" y1="50" x2="290" y2="50" stroke="#1a1a1a" stroke-width="3" marker-end="url(#arrow)"/>
                <line x1="200" y1="115" x2="285" y2="80" stroke="#1a1a1a" stroke-width="3" marker-end="url(#arrow)"/>
                <path d="M 218 145 L 258 105 M 218 105 L 258 145" fill="none" stroke="#ff3c8e" stroke-width="6" stroke-linecap="round"/>
              </g>
              <text x="14" y="55" font-family="'Space Grotesk', sans-serif" font-size="13">you</text>
              <text x="14" y="85" font-family="'Space Grotesk', sans-serif" font-size="13">AI</text>
              <text x="180" y="55" font-family="'Space Grotesk', sans-serif" font-size="13">you</text>
              <text x="180" y="118" font-family="'Space Grotesk', sans-serif" font-size="13">AI</text>
              <text x="80" y="172" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="14">aligned</text>
              <text x="240" y="172" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="14">misaligned</text>
            </svg>`,
  note: `
            <p>Alignment is the field/problem of making sure AI systems do what humans actually want — both the literal request AND the deeper intent behind it. The dream is two arrows pointing the same direction; the worry is when they don't.</p>
            <p>It's harder than it sounds. Models often learn to maximize the literal reward signal in ways that technically score high but miss the point (called "specification gaming"). And as models get more capable, the gap between "follow instructions" and "do what's actually good" matters more.</p>
            <p>RLHF, Constitutional AI, interpretability research, and red teaming are all chunks of the alignment puzzle. There's no solved version; it's an open research problem at every frontier lab.</p>
          `
});
