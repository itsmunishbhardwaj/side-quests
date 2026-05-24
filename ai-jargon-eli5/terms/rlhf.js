TERMS.push({
  section: 'learning',
  term: 'RLHF',
  hook: 'humans rank responses. the model learns to be more helpful.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="30" y="35" width="110" height="55" rx="10" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="30" y="100" width="110" height="55" rx="10" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="3"/>
                <rect x="195" y="65" width="100" height="60" rx="8" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="143" y1="62" x2="190" y2="80" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="143" y1="128" x2="190" y2="110" stroke="#1a1a1a" stroke-width="3" stroke-dasharray="3,3" marker-end="url(#arrow)"/>
              </g>
              <text x="85" y="60" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">Response A</text>
              <text x="85" y="76" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">"idk look it up"</text>
              <text x="85" y="125" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">Response B 👍</text>
              <text x="85" y="141" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">"here's how..."</text>
              <text x="245" y="92" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="15">model</text>
              <text x="245" y="110" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">"do more B"</text>
              <text x="160" y="174" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">humans pick winner → model learns</text>
            </svg>`,
  note: `
            <p>RLHF is how raw LLMs become genuinely helpful chatbots. Step one: humans look at pairs of model responses and pick the better one. Step two: train a "reward model" to predict which response humans would prefer. Step three: train the LLM to maximize that reward.</p>
            <p>This is what teaches the model to be helpful, honest-ish, and harmless, instead of just completing patterns. Without RLHF, a base LLM might respond to "How do I bake bread?" with another question or a list of related Wikipedia entries.</p>
            <p>It's expensive (humans are slow) but the resulting behavior change is enormous. RLHF is roughly what turned GPT-3 into ChatGPT.</p>
          `
});
