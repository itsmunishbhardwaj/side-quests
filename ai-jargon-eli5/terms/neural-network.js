TERMS.push({
  section: 'learning',
  term: 'Neural Network',
  hook: 'layers of fake neurons doing math. somehow this works.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <g stroke="#1a1a1a" stroke-width="1" opacity="0.7">
                  <line x1="40" y1="50" x2="120" y2="40"/>
                  <line x1="40" y1="50" x2="120" y2="90"/>
                  <line x1="40" y1="50" x2="120" y2="140"/>
                  <line x1="40" y1="90" x2="120" y2="40"/>
                  <line x1="40" y1="90" x2="120" y2="90"/>
                  <line x1="40" y1="90" x2="120" y2="140"/>
                  <line x1="40" y1="130" x2="120" y2="40"/>
                  <line x1="40" y1="130" x2="120" y2="90"/>
                  <line x1="40" y1="130" x2="120" y2="140"/>
                  <line x1="135" y1="40" x2="215" y2="60"/>
                  <line x1="135" y1="40" x2="215" y2="120"/>
                  <line x1="135" y1="90" x2="215" y2="60"/>
                  <line x1="135" y1="90" x2="215" y2="120"/>
                  <line x1="135" y1="140" x2="215" y2="60"/>
                  <line x1="135" y1="140" x2="215" y2="120"/>
                  <line x1="230" y1="60" x2="290" y2="90"/>
                  <line x1="230" y1="120" x2="290" y2="90"/>
                </g>
                <circle cx="40" cy="50" r="10" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="40" cy="90" r="10" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="40" cy="130" r="10" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="125" cy="40" r="10" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="125" cy="90" r="10" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="125" cy="140" r="10" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="222" cy="60" r="10" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="222" cy="120" r="10" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="295" cy="90" r="10" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
              </g>
              <text x="40" y="175" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">input</text>
              <text x="170" y="175" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">hidden layers</text>
              <text x="295" y="175" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">output</text>
            </svg>`,
  note: `
            <p>A neural network is the basic computational structure under all modern AI: layers of simple "neurons" (just numbers) connected by weighted edges (more numbers).</p>
            <p>Each neuron takes some inputs, multiplies them by weights, adds them up, runs the result through a simple non-linear function, and passes the output to the next layer. Stack enough of these and you can approximate ridiculously complex patterns.</p>
            <p>"Deep learning" just means neural networks with many layers (dozens to hundreds). Transformers, CNNs, RNNs — they're all neural networks with different shapes of connections.</p>
          `
});
