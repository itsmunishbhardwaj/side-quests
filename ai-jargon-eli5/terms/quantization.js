TERMS.push({
  section: 'hood',
  term: 'Quantization',
  hook: 'shrinking a model so it fits on smaller machines. fewer decimal places.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="14" y="30" width="128" height="50" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="14" y="100" width="68" height="50" rx="6" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="165" y1="55" x2="195" y2="55" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <line x1="165" y1="125" x2="195" y2="90" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="196" y="65" width="110" height="50" rx="6" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
              </g>
              <text x="78" y="50" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">3.14159265… (32-bit)</text>
              <text x="78" y="68" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">0.71828182… (32-bit)</text>
              <text x="48" y="120" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">3.14 (8-bit)</text>
              <text x="48" y="138" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">0.72 (8-bit)</text>
              <text x="251" y="83" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">4× smaller</text>
              <text x="251" y="100" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">still ~good</text>
              <text x="14" y="168" font-family="'Space Grotesk', sans-serif" font-size="11">full precision</text>
              <text x="14" y="25" font-family="'Space Grotesk', sans-serif" font-size="11">full precision →</text>
              <text x="14" y="96" font-family="'Space Grotesk', sans-serif" font-size="11">quantized →</text>
            </svg>`,
  note: `
            <p>Model weights are stored as floating-point numbers. By default that's 32-bit (or 16-bit) floats — high precision, large storage. Quantization converts those to lower-precision formats like 8-bit integers or even 4-bit. Each weight gets a bit sloppier, but the model gets 4–8× smaller and runs much faster.</p>
            <p>The quality loss is often surprisingly small. A 7B-parameter model at 4-bit quantization can fit on a laptop GPU and run locally, and for most tasks feels nearly as capable as the full-precision version. Tools like llama.cpp and GGUF format exist specifically to run quantized Llama models on consumer hardware.</p>
            <p>Quantization is what makes open-weight models practical outside a data center. It's also used in production APIs: serving quantized models cuts inference costs. The trade-off is some accuracy loss on precision-sensitive tasks — coding and math can suffer more than casual conversation.</p>
          `
});
