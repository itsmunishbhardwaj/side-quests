TERMS.push({
  section: 'learning',
  term: 'Fine-tuning',
  hook: 'take a smart generalist, teach it your specific job.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="10" y="45" width="90" height="90" rx="10" fill="#ffe24d" stroke="#1a1a1a" stroke-width="3"/>
                <line x1="103" y1="90" x2="128" y2="90" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="130" y="65" width="56" height="50" rx="4" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <line x1="138" y1="78" x2="178" y2="78" stroke="#1a1a1a" stroke-width="1.2"/>
                <line x1="138" y1="88" x2="178" y2="88" stroke="#1a1a1a" stroke-width="1.2"/>
                <line x1="138" y1="98" x2="170" y2="98" stroke="#1a1a1a" stroke-width="1.2"/>
                <line x1="189" y1="90" x2="214" y2="90" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="216" y="45" width="90" height="90" rx="10" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="3"/>
              </g>
              <text x="55" y="86" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">generalist</text>
              <text x="55" y="104" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">LLM</text>
              <text x="158" y="135" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">small dataset</text>
              <text x="261" y="86" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">code</text>
              <text x="261" y="104" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">helper</text>
              <text x="160" y="170" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">general knowledge → specialized behavior</text>
            </svg>`,
  note: `
            <p>Fine-tuning is the second phase of training: take a pretrained model that knows the general world, then continue training it on a much smaller, more specific dataset.</p>
            <p>This is how a generic LLM becomes a coding assistant, a medical-question-answerer, or a polite chat helper. The base knowledge stays; the behavior shifts.</p>
            <p>The dataset for fine-tuning is tiny compared to pretraining — maybe thousands or millions of examples instead of trillions of tokens. But it has huge influence over how the model actually behaves.</p>
          `
});
