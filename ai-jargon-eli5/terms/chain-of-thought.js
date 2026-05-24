TERMS.push({
  section: 'using',
  term: 'Chain of Thought',
  hook: 'tell the model to think out loud. it suddenly gets way smarter.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="20" y="65" width="55" height="50" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="77" y1="90" x2="93" y2="90" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <rect x="95" y="65" width="55" height="50" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="152" y1="90" x2="168" y2="90" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <rect x="170" y="65" width="55" height="50" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="227" y1="90" x2="243" y2="90" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <rect x="245" y="55" width="60" height="70" rx="8" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="3"/>
              </g>
              <text x="47" y="86" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">step 1</text>
              <text x="47" y="102" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">"first..."</text>
              <text x="122" y="86" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">step 2</text>
              <text x="122" y="102" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">"then..."</text>
              <text x="197" y="86" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">step 3</text>
              <text x="197" y="102" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">"so..."</text>
              <text x="275" y="88" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">answer</text>
              <text x="275" y="104" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">🎯</text>
              <text x="160" y="155" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">"let's think step by step"</text>
              <text x="160" y="175" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">show your work → better answer</text>
            </svg>`,
  note: `
            <p>Chain of thought (CoT) is a prompting trick: tell the model to "think step by step" or "show your reasoning," and it'll produce its answer alongside the intermediate work. Crucially, this usually makes the answer better.</p>
            <p>The mechanical reason: each token of output is also input for generating the next token. So writing out the steps gives the model more relevant context to compute the final answer from. It literally has more to "think with."</p>
            <p>Modern reasoning models like o1 and Claude with extended thinking do an internal, often hidden version of this — they "think" before responding, and the visible answer is much sharper for it.</p>
          `
});
