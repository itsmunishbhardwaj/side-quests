TERMS.push({
  section: 'thinking',
  term: 'Attention',
  hook: 'how a model figures out which words to care about most.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="20" y="22" width="50" height="34" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="100" y="22" width="50" height="34" rx="6" fill="#ffe24d" stroke="#1a1a1a" stroke-width="3.5"/>
                <rect x="180" y="22" width="50" height="34" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="260" y="22" width="50" height="34" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <ellipse cx="165" cy="148" rx="32" ry="22" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2.5"/>
                <path d="M 148 130 Q 100 100 50 62" fill="none" stroke="#1a1a1a" stroke-width="1.5" marker-end="url(#arrow)"/>
                <path d="M 158 126 Q 138 90 128 62" fill="none" stroke="#1a1a1a" stroke-width="5" marker-end="url(#arrow)"/>
                <path d="M 175 126 Q 195 90 202 62" fill="none" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M 184 130 Q 230 100 284 62" fill="none" stroke="#1a1a1a" stroke-width="1.5" marker-end="url(#arrow)"/>
              </g>
              <text x="45" y="45" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="16">the</text>
              <text x="125" y="45" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="16">cat</text>
              <text x="205" y="45" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="16">sat</text>
              <text x="285" y="45" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="16">mat</text>
              <text x="165" y="156" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="20">it</text>
            </svg>`,
  note: `
            <p>Attention is how a model decides which words in the input matter most for understanding each other word. For every word, the model computes a kind of weighted spotlight on all the other words.</p>
            <p>When the model reads "the cat sat on the mat because it was tired," attention is what helps it figure out that "it" refers to "cat" and not "mat." That thick arrow from "it" → "cat" is just a much higher weight than the arrows pointing elsewhere.</p>
            <p>Before attention, models had to compress everything into one fixed memory and read strictly left-to-right. Attention let them look back at any word at any time. The 2017 paper that introduced it was literally titled "Attention Is All You Need."</p>
          `
});
