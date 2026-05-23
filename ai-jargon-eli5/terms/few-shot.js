TERMS.push({
  section: 'using',
  term: 'Few-shot',
  hook: "show the model 2–3 examples and it'll pattern-match the rest.",
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="20" y="20" width="180" height="30" rx="4" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="20" y="58" width="180" height="30" rx="4" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="20" y="96" width="180" height="30" rx="4" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="20" y="134" width="180" height="32" rx="4" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="208" y1="150" x2="232" y2="150" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="235" y="130" width="65" height="40" rx="6" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
              </g>
              <text x="30" y="40" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700">cat → 🐱</text>
              <text x="30" y="78" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700">dog → 🐶</text>
              <text x="30" y="116" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700">fox → 🦊</text>
              <text x="30" y="156" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700">owl → ?</text>
              <text x="267" y="156" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="18">🦉</text>
            </svg>`,
  note: `
            <p>Few-shot prompting is when you give the model a handful of input/output examples in the prompt itself, before asking it to handle a new case. Like showing your work in a math test.</p>
            <p>"Q: 4+5? A: 9. Q: 7+2? A: 9. Q: 8+3? A: ___" — the model picks up the pattern and continues. This works astonishingly well for tasks the model has never been explicitly trained on.</p>
            <p>"Zero-shot" is no examples at all. "One-shot" is one. "Few-shot" usually means 2–10. Beyond that you're approaching fine-tuning territory.</p>
          `
});
