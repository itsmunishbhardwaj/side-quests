TERMS.push({
  section: 'thinking',
  term: 'Self-Attention',
  hook: 'every word in a sentence looking at every other word, deciding what matters.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="40" y="70" width="60" height="40" rx="6" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="130" y="70" width="60" height="40" rx="6" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="220" y="70" width="60" height="40" rx="6" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2.5"/>
                <path d="M 100 80 Q 115 60 130 80" fill="none" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M 130 100 Q 115 120 100 100" fill="none" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M 190 80 Q 205 60 220 80" fill="none" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M 220 100 Q 205 120 190 100" fill="none" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M 100 90 Q 160 35 220 90" fill="none" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M 220 95 Q 160 145 100 95" fill="none" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
              </g>
              <text x="70" y="96" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">the</text>
              <text x="160" y="96" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">cat</text>
              <text x="250" y="96" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">sat</text>
              <text x="160" y="172" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">every word looks at every other word</text>
            </svg>`,
  note: `
            <p>Self-attention is attention pointed at the same sentence — every word looks at every other word in the same chunk of text, including itself, and decides what to focus on.</p>
            <p>It's "self" because it's not attention between two different things (like English and French in translation). It's a sentence inspecting itself to figure out internal relationships.</p>
            <p>This is the workhorse of the transformer. Multiple layers of self-attention build up more and more abstract understanding: who refers to whom, what depends on what, what's the topic.</p>
          `
});
