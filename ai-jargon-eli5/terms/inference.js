TERMS.push({
  section: 'basics',
  term: 'Inference',
  hook: 'what happens after training. the model actually thinking for you.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="10" y="65" width="60" height="50" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="72" y1="90" x2="98" y2="90" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="100" y="40" width="120" height="100" rx="10" fill="#ffe24d" stroke="#1a1a1a" stroke-width="3"/>
                <path d="M 152 60 Q 152 50 160 50 Q 168 50 168 60" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="148" y="60" width="24" height="18" rx="3" fill="#1a1a1a"/>
                <line x1="222" y1="90" x2="248" y2="90" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="250" y="65" width="60" height="50" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
              </g>
              <text x="40" y="96" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="20">?</text>
              <text x="160" y="112" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="18">FROZEN</text>
              <text x="160" y="130" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">trained model</text>
              <text x="280" y="96" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="20">!</text>
              <text x="160" y="172" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">no learning — just executing</text>
            </svg>`,
  note: `
            <p>Inference is what happens when you actually USE a trained model — you give it input, it gives you output. Different from training, which is the months-long process of teaching the model in the first place.</p>
            <p>Every time you send a message to Claude, a server somewhere is running inference: loading the frozen weights, doing a bunch of matrix multiplications, and producing your reply one token at a time.</p>
            <p>Inference is cheaper than training per query, but at scale (billions of queries) it's where most of the AI industry's compute spend actually goes.</p>
          `
});
