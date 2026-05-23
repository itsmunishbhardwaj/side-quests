TERMS.push({
  section: 'hood',
  term: 'LoRA',
  hook: 'fine-tune a model without touching the giant original. tiny add-on weights.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="20" y="35" width="160" height="110" rx="8" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="40" y1="65" x2="160" y2="65" stroke="#1a1a1a" stroke-width="1.5" opacity="0.4"/>
                <line x1="40" y1="80" x2="160" y2="80" stroke="#1a1a1a" stroke-width="1.5" opacity="0.4"/>
                <line x1="40" y1="95" x2="160" y2="95" stroke="#1a1a1a" stroke-width="1.5" opacity="0.4"/>
                <line x1="40" y1="110" x2="160" y2="110" stroke="#1a1a1a" stroke-width="1.5" opacity="0.4"/>
                <line x1="40" y1="125" x2="160" y2="125" stroke="#1a1a1a" stroke-width="1.5" opacity="0.4"/>
                <rect x="208" y="60" width="90" height="60" rx="8" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="180" y1="90" x2="206" y2="90" stroke="#ff3c8e" stroke-width="3"/>
                <circle cx="194" cy="90" r="5" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="2"/>
              </g>
              <text x="100" y="28" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">base model — frozen</text>
              <text x="253" y="55" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">LoRA adapter</text>
              <text x="253" y="95" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">trains</text>
              <text x="253" y="165" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">~1% of params</text>
            </svg>`,
  note: `
            <p>Standard fine-tuning means updating every parameter in the model — for a 70B-parameter model that's hundreds of gigabytes of gradients, days of GPU time, and a whole new copy of the model at the end. LoRA (Low-Rank Adaptation) is a smarter shortcut: freeze the original weights entirely and instead inject tiny trainable matrices alongside them.</p>
            <p>The math trick: large weight changes can be approximated as the product of two much smaller matrices. Instead of learning a 4096×4096 update (16M values), LoRA learns a 4096×16 and a 16×4096 matrix (~130k values) whose product approximates it. Same effect, ~100× fewer parameters to train.</p>
            <p>The adapter files end up just a few megabytes while the base model stays untouched. You can swap adapters in and out — one for coding, one for a specific language, one for a persona — without keeping multiple full model copies. This is why the open-source fine-tuning ecosystem exploded: you can fine-tune Llama on a single consumer GPU overnight.</p>
          `
});
