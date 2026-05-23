TERMS.push({
  section: 'basics',
  term: 'Token',
  hook: 'what the model actually sees. not words exactly — bits of words.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="80" y="25" width="160" height="38" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <line x1="141" y1="20" x2="141" y2="68" stroke="#ff3c8e" stroke-width="2" stroke-dasharray="4,3"/>
                <line x1="168" y1="20" x2="168" y2="68" stroke="#ff3c8e" stroke-width="2" stroke-dasharray="4,3"/>
                <line x1="110" y1="68" x2="65" y2="100" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="155" y1="68" x2="155" y2="100" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="200" y1="68" x2="245" y2="100" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <rect x="20" y="105" width="90" height="40" rx="6" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="125" y="105" width="60" height="40" rx="6" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="200" y="105" width="92" height="40" rx="6" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5"/>
              </g>
              <text x="160" y="50" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="18">tokenization</text>
              <text x="65" y="131" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="16">token</text>
              <text x="155" y="131" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="16">iz</text>
              <text x="246" y="131" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="16">ation</text>
              <text x="160" y="170" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">1 word → 3 tokens</text>
            </svg>`,
  note: `
            <p>The model doesn't see words. It sees tokens — chunks of characters that are usually 3–5 letters long. "Hello" is one token, but "tokenization" might be three: "token", "iz", "ation."</p>
            <p>Why chunks instead of words? There are millions of English words, but only ~50,000 unique tokens cover almost everything you'd ever write. That's a much friendlier alphabet for a model to learn.</p>
            <p>When you hear "the context window is 200k tokens" — that's roughly 150k English words of stuff the model can see at once.</p>
          `
});
