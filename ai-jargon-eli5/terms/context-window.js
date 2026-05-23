TERMS.push({
  section: 'basics',
  term: 'Context Window',
  hook: "the model's working memory. blink and it forgets the start.",
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="10" y="60" width="300" height="56" rx="4" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <g stroke="#1a1a1a" stroke-width="1.5">
                  <line x1="20" y1="78" x2="55" y2="78"/>
                  <line x1="60" y1="78" x2="90" y2="78"/>
                  <line x1="95" y1="78" x2="130" y2="78"/>
                  <line x1="135" y1="78" x2="160" y2="78"/>
                  <line x1="165" y1="78" x2="200" y2="78"/>
                  <line x1="205" y1="78" x2="235" y2="78"/>
                  <line x1="240" y1="78" x2="275" y2="78"/>
                  <line x1="280" y1="78" x2="305" y2="78"/>
                  <line x1="20" y1="96" x2="50" y2="96"/>
                  <line x1="55" y1="96" x2="95" y2="96"/>
                  <line x1="100" y1="96" x2="130" y2="96"/>
                  <line x1="135" y1="96" x2="170" y2="96"/>
                  <line x1="175" y1="96" x2="205" y2="96"/>
                  <line x1="210" y1="96" x2="245" y2="96"/>
                  <line x1="250" y1="96" x2="290" y2="96"/>
                </g>
                <rect x="85" y="42" width="160" height="88" rx="4" fill="none" stroke="#ff3c8e" stroke-width="3.5"/>
              </g>
              <text x="165" y="35" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">what the model sees</text>
              <text x="35" y="148" font-family="'Space Grotesk', sans-serif" font-size="11">← clipped</text>
              <text x="305" y="148" text-anchor="end" font-family="'Space Grotesk', sans-serif" font-size="11">clipped →</text>
              <text x="165" y="170" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">window slides as text grows</text>
            </svg>`,
  note: `
            <p>The context window is the model's working memory — the most text it can look at in one go. Older models had ~4k tokens (about 3000 words). New ones go up to a million or more.</p>
            <p>Outside the window, the model is blind. If you paste in a huge document, only the slice that fits inside the window is actually "seen" by the model; the rest gets clipped.</p>
            <p>Bigger windows are great for analyzing long docs, but they cost more (compute scales roughly quadratically with window size) and the model tends to get fuzzy on stuff in the middle of huge contexts.</p>
          `
});
