TERMS.push({
  section: 'using',
  term: 'Agent',
  hook: 'an LLM that takes actions in the world, not just spits out text.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="125" y="20" width="80" height="40" rx="8" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="220" y="78" width="80" height="40" rx="8" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="125" y="135" width="80" height="40" rx="8" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="30" y="78" width="80" height="40" rx="8" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <path d="M 195 60 Q 235 65 240 78" fill="none" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <path d="M 240 118 Q 235 135 195 138" fill="none" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <path d="M 130 138 Q 85 130 85 118" fill="none" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <path d="M 85 78 Q 85 65 130 60" fill="none" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
              </g>
              <text x="165" y="46" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">think</text>
              <text x="260" y="104" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">act</text>
              <text x="165" y="161" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">observe</text>
              <text x="70" y="104" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">repeat</text>
            </svg>`,
  note: `
            <p>An agent is an LLM hooked up so it can take actions in the world — search the web, send emails, run code, click buttons, call APIs — not just produce text.</p>
            <p>The typical loop: model thinks → picks a tool → tool runs → model sees the result → thinks again → picks the next tool. Repeat until the goal is met. The model is the brain; the tools are the hands.</p>
            <p>The trick is keeping agents focused. Without guardrails they can spiral, repeat themselves, or get distracted. The good ones are simple loops with clear success criteria, not elaborate orchestration frameworks.</p>
          `
});
