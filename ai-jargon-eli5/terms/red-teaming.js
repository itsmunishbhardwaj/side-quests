TERMS.push({
  section: 'safety',
  term: 'Red Teaming',
  hook: 'professionally trying to break the AI before bad actors do.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="10" y="70" width="88" height="44" rx="8" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="222" y="55" width="88" height="70" rx="8" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <path d="M 222 64 Q 210 50 210 40 Q 210 30 220 30 Q 266 30 320 30" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="5,3"/>
                <line x1="98" y1="80" x2="220" y2="80" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="98" y1="90" x2="220" y2="90" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="98" y1="100" x2="220" y2="100" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M 220 82 Q 175 65 130 76" fill="none" stroke="#a4ff3c" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
                <path d="M 220 98 Q 175 115 130 106" fill="none" stroke="#a4ff3c" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
              </g>
              <text x="54" y="97" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13" fill="white">red</text>
              <text x="54" y="110" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13" fill="white">team</text>
              <text x="266" y="95" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">model</text>
              <text x="160" y="68" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">attempt #1 … #500</text>
              <text x="160" y="170" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">most bounce · some land</text>
            </svg>`,
  note: `
            <p>Red teaming comes from Cold War military wargaming — the "red team" plays the adversary to stress-test your defenses before a real attack. Applied to AI: a group of humans (and now, models) whose job is to find failure modes before a model ships.</p>
            <p>Red teamers try to elicit harmful outputs, surface factual hallucinations, find privacy leaks, expose bias, identify manipulation potential, and discover any behavior the lab doesn't want in production. Every major lab does this before releases and often hires external specialists for independent coverage.</p>
            <p>Finding a failure mode before release means fixing it quietly. Not finding it means a user discovers it and shares it publicly. The gap between those two outcomes is the red team's job. It's why big releases are always preceded by months of internal testing you never see.</p>
          `
});
