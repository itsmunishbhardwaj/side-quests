TERMS.push({
  section: 'basics',
  term: 'Parameter',
  hook: 'knobs and dials. billions of them. all twiddled during training.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <line x1="60" y1="55" x2="155" y2="40" stroke="#1a1a1a" stroke-width="1"/>
                <line x1="60" y1="55" x2="155" y2="120" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="60" y1="105" x2="155" y2="40" stroke="#1a1a1a" stroke-width="2"/>
                <line x1="60" y1="105" x2="155" y2="80" stroke="#1a1a1a" stroke-width="1"/>
                <line x1="60" y1="105" x2="155" y2="120" stroke="#1a1a1a" stroke-width="3"/>
                <line x1="165" y1="40" x2="260" y2="80" stroke="#1a1a1a" stroke-width="2"/>
                <line x1="165" y1="80" x2="260" y2="80" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="165" y1="120" x2="260" y2="80" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="60" y1="55" x2="155" y2="80" stroke="#ff3c8e" stroke-width="4"/>
                <circle cx="50" cy="55" r="11" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="50" cy="105" r="11" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="160" cy="40" r="11" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="160" cy="80" r="11" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="160" cy="120" r="11" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="270" cy="80" r="11" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <path d="M 90 22 Q 100 45 108 65" fill="none" stroke="#ff3c8e" stroke-width="2.5" marker-end="url(#arrow)"/>
              </g>
              <text x="90" y="15" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">a weight</text>
              <text x="160" y="172" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">× billions of these</text>
            </svg>`,
  note: `
            <p>A parameter is one number inside the model — a knob that gets turned during training. Modern LLMs have hundreds of billions of these.</p>
            <p>Each parameter is essentially a weight on a connection between two artificial neurons. During training, the model nudges each weight up or down until its predictions get better. After training, those frozen weights ARE the model.</p>
            <p>When you hear "Llama-3 70B" — the 70B is 70 billion parameters. Bigger usually means smarter (up to a point), but also slower and more expensive to run.</p>
          `
});
