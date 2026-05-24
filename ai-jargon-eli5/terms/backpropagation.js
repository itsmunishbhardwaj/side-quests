TERMS.push({
  section: 'learning',
  term: 'Backpropagation',
  hook: 'the trick that lets a network figure out which knob to turn.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <g stroke="#1a1a1a" stroke-width="1" opacity="0.4">
                  <line x1="40" y1="60" x2="120" y2="50"/>
                  <line x1="40" y1="60" x2="120" y2="100"/>
                  <line x1="40" y1="110" x2="120" y2="50"/>
                  <line x1="40" y1="110" x2="120" y2="100"/>
                  <line x1="135" y1="50" x2="215" y2="80"/>
                  <line x1="135" y1="100" x2="215" y2="80"/>
                  <line x1="230" y1="80" x2="290" y2="80"/>
                </g>
                <path d="M 280 95 Q 250 110 220 95" fill="none" stroke="#ff3c8e" stroke-width="3" marker-end="url(#arrow)"/>
                <path d="M 215 95 Q 175 115 138 105" fill="none" stroke="#ff3c8e" stroke-width="3" marker-end="url(#arrow)"/>
                <path d="M 120 110 Q 80 130 45 120" fill="none" stroke="#ff3c8e" stroke-width="3" marker-end="url(#arrow)"/>
                <circle cx="40" cy="60" r="10" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="40" cy="110" r="10" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="125" cy="50" r="10" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="125" cy="100" r="10" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="222" cy="80" r="10" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="295" cy="80" r="11" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="2.5"/>
                <text x="295" y="84" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13" fill="#fff">!</text>
              </g>
              <text x="295" y="50" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="11">wrong!</text>
              <text x="160" y="158" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">error flows backward, tunes every knob</text>
            </svg>`,
  note: `
            <p>Backpropagation (or "backprop") is the math trick that makes gradient descent feasible. The problem: you need to know how every weight in a deep network affected the final error.</p>
            <p>Backprop's clever idea: start at the output, compute how the last layer contributed to the error, then walk backward through the network using the chain rule from calculus. Each layer's contribution is computed from the next layer's.</p>
            <p>It's the breakthrough that unlocked training large neural networks. Old hat by now, but still load-bearing.</p>
          `
});
