TERMS.push({
  section: 'safety',
  term: 'Interpretability',
  hook: 'cracking open the black box. figuring out what neurons are doing.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="12" y="35" width="110" height="110" rx="8" fill="#1a1a1a" stroke="#1a1a1a" stroke-width="2.5"/>
                <text x="67" y="100" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="36" fill="#fef9e7" opacity="0.6">?</text>
                <line x1="124" y1="90" x2="168" y2="90" stroke="#ffe24d" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="170" y="25" width="138" height="130" rx="8" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="182" y="40" width="52" height="22" rx="4" fill="#ffe24d" stroke="#1a1a1a" stroke-width="1.5"/>
                <rect x="244" y="40" width="52" height="22" rx="4" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="1.5"/>
                <rect x="182" y="74" width="46" height="22" rx="4" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1.5"/>
                <rect x="240" y="74" width="54" height="22" rx="4" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="1.5"/>
                <rect x="182" y="108" width="58" height="22" rx="4" fill="#c89aff" stroke="#1a1a1a" stroke-width="1.5"/>
                <rect x="252" y="108" width="44" height="22" rx="4" fill="#ffe24d" stroke="#1a1a1a" stroke-width="1.5"/>
              </g>
              <text x="67" y="158" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">black box</text>
              <text x="208" y="56" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">banana</text>
              <text x="270" y="56" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">anger</text>
              <text x="205" y="90" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">France</text>
              <text x="267" y="90" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">money</text>
              <text x="211" y="124" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">rhyming</text>
              <text x="274" y="124" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">fear</text>
              <text x="239" y="168" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">features found</text>
            </svg>`,
  note: `
            <p>A neural network's weights are technically readable — you can print every number — but that doesn't mean you understand what it's doing. Billions of parameters don't explain themselves. Interpretability research tries to reverse-engineer the internal representations: which parts of the network encode which concepts, and how.</p>
            <p>The big finding from Anthropic's mechanistic interpretability work: it's not neurons that map to concepts — it's directions in high-dimensional space called "features." A single neuron may participate in hundreds of unrelated features at once (superposition). Specific features correspond to human-readable ideas: "banana," "the eiffel tower," "code in Python," "the word before a period."</p>
            <p>Why it matters: you can't verify what you can't see. If you could reliably read a model's "reasoning," you could catch deception before it reaches output, debug hallucinations precisely, and confirm the model is doing what you think it's doing. Right now, most "interpretations" are post-hoc guesses. Fixing that is one of the most important open problems in AI safety.</p>
          `
});
