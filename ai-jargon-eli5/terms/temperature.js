TERMS.push({
  section: 'thinking',
  term: 'Temperature',
  hook: 'a creativity dial. low = boring &amp; safe. high = wild &amp; weird.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="30" y="78" width="260" height="24" rx="12" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="30" y="78" width="130" height="24" rx="12" fill="#3ddbd9" stroke="none"/>
                <rect x="30" y="78" width="260" height="24" rx="12" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
                <circle cx="160" cy="90" r="16" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="60" y1="55" x2="60" y2="70" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="160" y1="55" x2="160" y2="70" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="260" y1="55" x2="260" y2="70" stroke="#1a1a1a" stroke-width="1.5"/>
              </g>
              <text x="60" y="48" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">0</text>
              <text x="160" y="48" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">0.7</text>
              <text x="260" y="48" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">2.0</text>
              <text x="60" y="135" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">boring &amp; safe</text>
              <text x="260" y="135" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">wild &amp; weird</text>
              <text x="160" y="172" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">how much randomness in word choice</text>
            </svg>`,
  note: `
            <p>Temperature is a single knob that controls how "creative" or random the model's output is. Low = boring and safe; high = wild and weird.</p>
            <p>Mechanically: at every step, the model has a list of possible next words with probabilities. Temperature controls how much it skews toward the top option vs spreading the love. Temp 0 = always pick the most likely word. Temp 1 = sample fairly. Temp 2+ = chaos.</p>
            <p>For factual questions, lower is better. For brainstorming or creative writing, crank it up. Most chat interfaces hide this knob at around 0.7.</p>
          `
});
