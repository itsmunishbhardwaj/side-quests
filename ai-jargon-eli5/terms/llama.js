TERMS.push({
  section: 'hood',
  term: 'Llama',
  hook: "Meta's open-weight LLM family. you can run it on your laptop.",
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="20" y="45" width="110" height="90" rx="8" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="43" y="70" width="38" height="30" rx="4" fill="#1a1a1a"/>
                <path d="M 47 70 L 47 61 Q 47 50 62 50 Q 77 50 77 61 L 77 70" fill="none" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>
                <circle cx="62" cy="85" r="5" fill="#fef9e7"/>
                <rect x="190" y="45" width="110" height="90" rx="8" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="245" y1="65" x2="245" y2="100" stroke="#1a1a1a" stroke-width="3"/>
                <path d="M 228 88 L 245 108 L 262 88" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="228" y1="112" x2="262" y2="112" stroke="#1a1a1a" stroke-width="3"/>
              </g>
              <text x="75" y="40" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">closed weights</text>
              <text x="245" y="40" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">open weights</text>
              <text x="75" y="150" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">API only</text>
              <text x="245" y="150" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">Llama</text>
            </svg>`,
  note: `
            <p>Llama is Meta's open-weight model family — the weights (the actual numbers that define the model) are publicly released, so anyone can download and run them. GPT-4 and Claude are closed: you can only access them through an API. Llama you can run on your own laptop, with no API key, no cost per token, no data leaving your machine.</p>
            <p>This changed the landscape dramatically. Before Llama, frontier-ish models were behind paywalls or proprietary APIs. After Llama, the open-source community could fine-tune, quantize, study, and build on top of a capable base model. Dozens of community variants (Mistral, Phi, Gemma) followed the same open-weight pattern.</p>
            <p>The trade-off: open-weight models have fewer safety guardrails by default since you can strip them out. And they're not quite at GPT-4 / Claude quality at the top end. But for many use cases — private data, local deployment, research, experimentation — Llama-class models are more than sufficient.</p>
          `
});
