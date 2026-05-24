TERMS.push({
  section: 'thinking',
  term: 'Top-p Sampling',
  hook: 'the model picks a word from the top slice of likely options.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <line x1="30" y1="135" x2="300" y2="135" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="40" y="50" width="32" height="85" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="80" y="68" width="32" height="67" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="120" y="85" width="32" height="50" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="160" y="105" width="32" height="30" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="200" y="115" width="32" height="20" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="240" y="122" width="32" height="13" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="36" y="42" width="120" height="98" fill="none" stroke="#ff3c8e" stroke-width="3.5"/>
              </g>
              <text x="55" y="160" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="11">cat</text>
              <text x="95" y="160" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="11">dog</text>
              <text x="135" y="160" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="11">fox</text>
              <text x="175" y="160" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">owl</text>
              <text x="215" y="160" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">elk</text>
              <text x="255" y="160" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">...</text>
              <text x="100" y="35" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">nucleus (top-p)</text>
              <text x="285" y="35" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">prob ↑</text>
            </svg>`,
  note: `
            <p>Top-p is another knob for output randomness. It says: "only pick from the smallest set of next-word options whose probabilities add up to p (e.g. 0.9)."</p>
            <p>In practice this means the model considers all the likely options but ignores the long tail of weird, unlikely ones. With top-p = 0.9, it's choosing from maybe 5–20 candidates instead of all 50,000.</p>
            <p>Works alongside temperature. Together they give you fine control over the trade-off between coherence and creativity.</p>
          `
});
