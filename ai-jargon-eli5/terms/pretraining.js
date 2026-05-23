TERMS.push({
  section: 'learning',
  term: 'Pretraining',
  hook: 'feed it the internet. let it predict the next word, over and over.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="20" y="40" width="58" height="14" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="24" y="50" width="58" height="14" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="28" y="60" width="58" height="14" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="32" y="70" width="58" height="14" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="36" y="80" width="58" height="14" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2"/>
                <line x1="98" y1="68" x2="125" y2="68" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="130" y="35" width="100" height="80" rx="10" fill="#ffe24d" stroke="#1a1a1a" stroke-width="3"/>
                <line x1="234" y1="75" x2="262" y2="75" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="265" y="55" width="48" height="40" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <path d="M 235 95 Q 270 130 200 130 Q 130 130 175 100" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
              </g>
              <text x="50" y="20" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="11">internet</text>
              <text x="180" y="80" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="16">predict</text>
              <text x="180" y="98" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="16">next →</text>
              <text x="289" y="80" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">?</text>
              <text x="160" y="155" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">repeat billions of times → smart model</text>
            </svg>`,
  note: `
            <p>Pretraining is the marathon training phase: feed the model an enormous pile of text — the public internet, books, code, Wikipedia — and have it predict the next token, over and over, billions of times.</p>
            <p>That's the whole task during pretraining: "given these 4096 tokens, what's token 4097?" The model gets graded on each guess and slowly, painfully, its billions of parameters drift toward making good predictions.</p>
            <p>This is where the model learns grammar, facts, reasoning patterns, code, languages — the bulk of what it knows. After pretraining you have a "base model" that can complete text but isn't a great chatbot yet.</p>
          `
});
