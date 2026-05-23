TERMS.push({
  section: 'basics',
  term: 'LLM',
  hook: 'the thing typing back at you. trained on a stupendous pile of text.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="10" y="70" width="70" height="42" rx="8" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="110" y="42" width="100" height="98" rx="12" fill="#ffe24d" stroke="#1a1a1a" stroke-width="3"/>
                <rect x="240" y="70" width="70" height="42" rx="8" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="82" y1="91" x2="106" y2="91" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <line x1="212" y1="91" x2="236" y2="91" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
              </g>
              <text x="45" y="98" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="18">hi!</text>
              <text x="160" y="100" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="30">LLM</text>
              <text x="275" y="98" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="16">hey :)</text>
              <text x="160" y="168" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="14">text in → text out, one token at a time</text>
            </svg>`,
  note: `
            <p>When you chat with ChatGPT, Claude, or Gemini — that's an LLM. It's a giant pattern-matching engine that has read a stupendous amount of text and learned to predict what word comes next, again and again.</p>
            <p>The "large" is doing real work: these models have hundreds of billions of internal numbers, trained on basically the whole readable internet plus a lot of books. That scale is where the surprising capabilities come from.</p>
            <p>It doesn't "know" things the way you do. It's making statistical guesses one word at a time — those guesses just happen to be very useful because the patterns in human language carry a lot of meaning with them.</p>
          `
});
