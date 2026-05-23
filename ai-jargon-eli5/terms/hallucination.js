TERMS.push({
  section: 'thinking',
  term: 'Hallucination',
  hook: 'when the model confidently makes stuff up. happens a lot.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="30" y="35" width="50" height="50" rx="8" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <circle cx="44" cy="55" r="3" fill="#1a1a1a"/>
                <circle cx="66" cy="55" r="3" fill="#1a1a1a"/>
                <path d="M 42 72 Q 55 78 68 72" fill="none" stroke="#1a1a1a" stroke-width="2"/>
                <path d="M 90 60 Q 100 50 110 55 L 280 55 Q 290 55 290 65 L 290 110 Q 290 120 280 120 L 130 120 L 115 135 L 120 120 L 110 120 Q 100 120 100 110 Z" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="125" y1="105" x2="265" y2="105" stroke="#ff3c8e" stroke-width="3" stroke-linecap="round"/>
              </g>
              <text x="195" y="83" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">Author of Hamlet:</text>
              <text x="195" y="103" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="16">John Lennon</text>
              <text x="160" y="160" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">confidently wrong</text>
            </svg>`,
  note: `
            <p>A hallucination is when an LLM says something that sounds confident and correct but is just… made up. A fake citation, a wrong fact, a function that doesn't exist.</p>
            <p>It happens because the model is a probabilistic next-word predictor, not a database. If the patterns suggest a plausible-sounding answer, it'll generate one even when it has no real grounding for it.</p>
            <p>This is why you should sanity-check anything important an AI tells you, and why techniques like RAG (letting the model look stuff up) exist — to give the model real facts to latch onto.</p>
          `
});
