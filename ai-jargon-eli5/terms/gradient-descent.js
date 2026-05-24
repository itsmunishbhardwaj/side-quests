TERMS.push({
  section: 'learning',
  term: 'Gradient Descent',
  hook: "rolling downhill toward 'less wrong'. that's how it learns.",
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <path d="M 25 35 Q 160 230 295 35" fill="none" stroke="#1a1a1a" stroke-width="3.5" stroke-linecap="round"/>
                <line x1="20" y1="155" x2="300" y2="155" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="3,4" opacity="0.5"/>
                <circle cx="55" cy="55" r="12" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="2.5"/>
                <path d="M 64 64 Q 90 95 112 116 Q 135 135 158 143" fill="none" stroke="#1a1a1a" stroke-width="2.2" stroke-dasharray="4,4" marker-end="url(#arrow)"/>
              </g>
              <text x="55" y="38" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">start</text>
              <text x="160" y="172" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="14">less wrong ↓</text>
              <text x="280" y="35" text-anchor="end" font-family="'Space Grotesk', sans-serif" font-size="12">loss</text>
            </svg>`,
  note: `
            <p>Gradient descent is how a neural network actually learns. Picture it as a ball rolling downhill on a "loss landscape" — the high points are where the model is very wrong; the valleys are where it's getting things right.</p>
            <p>At each step: run an example through the model, see how wrong the answer is (the "loss"), then compute which way to nudge each parameter to make the loss a little smaller. Take that tiny step. Repeat billions of times.</p>
            <p>It's painfully incremental, but with enough compute it works astoundingly well. Pretty much every neural net you've heard of was trained with some flavor of gradient descent.</p>
          `
});
