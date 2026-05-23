TERMS.push({
  section: 'thinking',
  term: 'Transformer',
  hook: "the architecture that runs basically every AI you've heard of.",
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <line x1="160" y1="170" x2="160" y2="148" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="80" y="120" width="160" height="22" rx="4" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="80" y="92" width="160" height="22" rx="4" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="80" y="64" width="160" height="22" rx="4" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="80" y="36" width="160" height="22" rx="4" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="160" y1="34" x2="160" y2="15" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <path d="M 110 47 Q 130 28 160 47" fill="none" stroke="#1a1a1a" stroke-width="1.3" stroke-dasharray="3,2"/>
                <path d="M 160 47 Q 190 28 210 47" fill="none" stroke="#1a1a1a" stroke-width="1.3" stroke-dasharray="3,2"/>
              </g>
              <text x="160" y="135" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">layer 1</text>
              <text x="160" y="107" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">layer 2</text>
              <text x="160" y="79" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">layer 3</text>
              <text x="160" y="51" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">layer N + attention</text>
              <text x="160" y="13" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">output</text>
              <text x="160" y="177" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">input</text>
            </svg>`,
  note: `
            <p>The transformer is the architecture — the structural design — behind basically every modern AI model. ChatGPT, Claude, Llama, the image-generators, even most translation tools.</p>
            <p>It was invented in 2017 in a paper titled "Attention Is All You Need." The key idea: instead of reading text one word at a time like older models, look at all the words at once and figure out which ones matter for which.</p>
            <p>You can think of it as a stack of "thinking layers," each one re-reading the whole input and adding more understanding. Modern LLMs stack dozens to hundreds of these.</p>
          `
});
