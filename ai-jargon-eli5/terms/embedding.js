TERMS.push({
  section: 'basics',
  term: 'Embedding',
  hook: 'every word becomes a point in a high-dimensional starfield.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <line x1="35" y1="155" x2="295" y2="155" stroke="#1a1a1a" stroke-width="2"/>
                <line x1="35" y1="155" x2="35" y2="20" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="105" cy="80" r="10" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="128" cy="98" r="10" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="85" cy="58" r="7" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="245" cy="128" r="10" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2"/>
              </g>
              <text x="105" y="65" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">cat</text>
              <text x="148" y="115" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">dog</text>
              <text x="85" y="48" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="11">kitten</text>
              <text x="245" y="148" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">car</text>
              <text x="165" y="175" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">similar things land close together</text>
            </svg>`,
  note: `
            <p>An embedding is a way to turn a word (or sentence, or image) into a long list of numbers — usually a few hundred to a few thousand of them.</p>
            <p>The cool trick: similar things end up close together in this numerical space. "Cat" and "dog" land near each other; "cat" and "calculator" land far apart. The numbers themselves are meaningless to humans, but distances and directions encode meaning.</p>
            <p>This is the foundation of semantic search, vector databases, and a lot of how modern AI "understands" stuff. Words → points in space → math.</p>
          `
});
