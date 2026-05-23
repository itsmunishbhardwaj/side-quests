TERMS.push({
  section: 'learning',
  term: 'Constitutional AI',
  hook: 'give the model a written set of principles to live by.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="170" y="40" width="120" height="100" rx="10" fill="#ffe24d" stroke="#1a1a1a" stroke-width="3"/>
                <rect x="30" y="30" width="120" height="120" rx="4" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="42" y1="55" x2="138" y2="55" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="42" y1="72" x2="125" y2="72" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="42" y1="89" x2="138" y2="89" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="42" y1="106" x2="115" y2="106" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="42" y1="123" x2="138" y2="123" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="152" y1="90" x2="168" y2="90" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <path d="M 230 145 Q 230 165 215 165 Q 200 165 200 145" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow)"/>
              </g>
              <text x="90" y="22" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">constitution</text>
              <text x="230" y="86" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="16">model</text>
              <text x="230" y="106" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">critiques itself</text>
              <text x="160" y="180" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">written rules → self-improvement loop</text>
            </svg>`,
  note: `
            <p>Constitutional AI is Anthropic's approach to alignment: instead of relying mostly on humans to rank responses, the model is given an explicit written set of principles — a "constitution" — and trained to critique and revise its own responses against those principles.</p>
            <p>The constitution covers stuff like "be honest," "avoid harm," "respect autonomy." The model effectively learns to police itself based on these rules during training.</p>
            <p>The advantage: it's faster than waiting for humans on everything, more transparent (the principles are written down), and scales better. Claude is trained this way.</p>
          `
});
