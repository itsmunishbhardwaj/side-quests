TERMS.push({
  section: 'learning',
  term: 'Overfitting',
  hook: 'memorizing answers instead of actually learning. very bad.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <line x1="20" y1="135" x2="140" y2="135" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="20" y1="135" x2="20" y2="35" stroke="#1a1a1a" stroke-width="1.5"/>
                <path d="M 25 115 Q 80 60 135 90" fill="none" stroke="#a4ff3c" stroke-width="3.5" stroke-linecap="round"/>
                <circle cx="35" cy="110" r="3" fill="#1a1a1a"/>
                <circle cx="55" cy="95" r="3" fill="#1a1a1a"/>
                <circle cx="75" cy="80" r="3" fill="#1a1a1a"/>
                <circle cx="95" cy="78" r="3" fill="#1a1a1a"/>
                <circle cx="115" cy="92" r="3" fill="#1a1a1a"/>
                <line x1="180" y1="135" x2="300" y2="135" stroke="#1a1a1a" stroke-width="1.5"/>
                <line x1="180" y1="135" x2="180" y2="35" stroke="#1a1a1a" stroke-width="1.5"/>
                <path d="M 195 110 L 215 95 L 220 110 L 235 80 L 240 95 L 255 78 L 260 92 L 275 75 L 280 92" fill="none" stroke="#ff3c8e" stroke-width="3" stroke-linecap="round"/>
                <circle cx="195" cy="110" r="3" fill="#1a1a1a"/>
                <circle cx="215" cy="95" r="3" fill="#1a1a1a"/>
                <circle cx="235" cy="80" r="3" fill="#1a1a1a"/>
                <circle cx="255" cy="78" r="3" fill="#1a1a1a"/>
                <circle cx="275" cy="92" r="3" fill="#1a1a1a"/>
              </g>
              <text x="80" y="160" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">good fit</text>
              <text x="80" y="175" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">learned the pattern</text>
              <text x="240" y="160" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">overfit</text>
              <text x="240" y="175" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">memorized the dots</text>
            </svg>`,
  note: `
            <p>Overfitting is when a model memorizes its training data instead of actually learning the underlying patterns. It scores great on the data it has seen, fails badly on anything new.</p>
            <p>Imagine teaching a kid math by only showing them the answers to ten specific problems. They might ace those ten and totally bomb a new question. That's overfitting.</p>
            <p>The fix is usually some combination of: more training data, simpler model, "regularization" tricks that discourage memorization, and an honest test set the model never saw during training.</p>
          `
});
