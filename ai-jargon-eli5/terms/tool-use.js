TERMS.push({
  section: 'using',
  term: 'Tool Use',
  hook: 'the model can call calculators, browse the web, run code.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="125" y="65" width="70" height="60" rx="10" fill="#ffe24d" stroke="#1a1a1a" stroke-width="3"/>
                <rect x="15" y="20" width="58" height="40" rx="6" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="15" y="130" width="58" height="40" rx="6" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="250" y="20" width="58" height="40" rx="6" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="250" y="130" width="58" height="40" rx="6" fill="#c89aff" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="73" y1="40" x2="125" y2="80" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="73" y1="150" x2="125" y2="115" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="195" y1="80" x2="247" y2="40" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="195" y1="115" x2="247" y2="150" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
              </g>
              <text x="44" y="46" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="16">🔢</text>
              <text x="44" y="155" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="16">🌐</text>
              <text x="160" y="100" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="16">LLM</text>
              <text x="279" y="46" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="16">💻</text>
              <text x="279" y="155" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="16">📊</text>
              <text x="44" y="78" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">calc</text>
              <text x="44" y="125" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">web</text>
              <text x="279" y="78" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">code</text>
              <text x="279" y="125" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">db</text>
            </svg>`,
  note: `
            <p>Tool use (also called "function calling") is the mechanism that lets a chat model break out of "just talking" and do things — call a calculator, fetch a URL, query a database, run some code.</p>
            <p>You tell the model in the prompt: "Here are these tools you can call, and here's what each one does." When the model wants to use one, it outputs a structured call instead of regular text. Your code runs the tool, and the result goes back into the conversation.</p>
            <p>This is the building block for agents. Without tool use, models are stuck in their training-time snapshot of the world. With it, they can act on live data and real systems.</p>
          `
});
