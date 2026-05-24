TERMS.push({
  section: 'hood',
  term: 'Mixture of Experts',
  hook: 'many small expert models inside one big one. only the relevant ones fire.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="14" y="72" width="60" height="36" rx="6" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="110" y="18" width="56" height="36" rx="6" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="110" y="63" width="56" height="36" rx="6" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5" opacity="0.3"/>
                <rect x="110" y="108" width="56" height="36" rx="6" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5" opacity="0.3"/>
                <rect x="110" y="127" width="56" height="36" rx="6" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="74" y1="84" x2="108" y2="36" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <line x1="74" y1="88" x2="108" y2="81" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.4"/>
                <line x1="74" y1="92" x2="108" y2="126" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.4"/>
                <line x1="74" y1="96" x2="108" y2="145" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <line x1="166" y1="36" x2="240" y2="90" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <line x1="166" y1="145" x2="240" y2="100" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="242" y="72" width="64" height="36" rx="6" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="2.5"/>
              </g>
              <text x="44" y="94" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">router</text>
              <text x="138" y="42" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">expert A ✓</text>
              <text x="138" y="85" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" opacity="0.4">expert B</text>
              <text x="138" y="130" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" opacity="0.4">expert C</text>
              <text x="138" y="151" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">expert D ✓</text>
              <text x="274" y="94" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">output</text>
            </svg>`,
  note: `
            <p>A standard transformer runs every token through every parameter, every time. Mixture of Experts (MoE) breaks the model into many specialized sub-networks ("experts") and adds a learned router that, for each token, picks only 2–4 of them to actually activate. The rest sit idle for that token.</p>
            <p>This means you can have a model with hundreds of billions of total parameters, but each forward pass only computes through a fraction of them — so it's as fast as a much smaller dense model while having the capacity of a much larger one. Mistral's Mixtral and GPT-4 (suspected) use this architecture.</p>
            <p>The trade-off: MoE models need more memory to hold all the experts in VRAM, even when only a few are active per token. So the hardware requirement is higher than a dense model of the same active-parameter count. But for serving at scale where throughput matters, MoE is one of the best efficiency tricks available.</p>
          `
});
