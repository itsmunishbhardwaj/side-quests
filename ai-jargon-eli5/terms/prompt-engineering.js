TERMS.push({
  section: 'using',
  term: 'Prompt Engineering',
  hook: 'the art of asking really well so the model gives you what you want.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="20" y="30" width="125" height="120" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="32" y1="62" x2="130" y2="62" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="32" y1="78" x2="130" y2="78" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="32" y1="94" x2="100" y2="94" stroke="#1a1a1a" stroke-width="1.5"/>
                <text x="32" y="50" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700">"summarize this"</text>
                <line x1="148" y1="90" x2="172" y2="90" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="175" y="60" width="50" height="60" rx="6" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2"/>
                <text x="200" y="95" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">meh</text>
                <rect x="230" y="30" width="80" height="60" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <text x="270" y="50" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="9" font-weight="700">"3 bullets for</text>
                <text x="270" y="62" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="9" font-weight="700">an exec, no fluff"</text>
                <rect x="230" y="100" width="80" height="50" rx="6" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5"/>
                <text x="270" y="130" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">🎯</text>
                <line x1="270" y1="92" x2="270" y2="98" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
              </g>
              <text x="160" y="174" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">specific input → great output</text>
            </svg>`,
  note: `
            <p>Prompt engineering is the craft of writing inputs to an LLM that reliably get you the output you want. It sits somewhere between writing a brief, coaching a junior employee, and weird incantation magic.</p>
            <p>Small wording changes can produce wildly different results. "Summarize this" vs "Summarize this in 3 bullet points for a busy executive" vs "Summarize this like you're explaining it to your grandma" — same model, very different vibes out.</p>
            <p>It's less an engineering discipline than a writing one. The best prompt engineers are clear thinkers who can specify exactly what good output looks like.</p>
          `
});
