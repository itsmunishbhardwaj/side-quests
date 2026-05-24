TERMS.push({
  section: 'safety',
  term: 'Jailbreak',
  hook: "tricking a model into bypassing its safety rules.",
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="130" y="20" width="28" height="140" rx="4" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5"/>
                <path d="M 142 85 L 158 100 L 148 115 L 162 128" fill="none" stroke="#ff3c8e" stroke-width="3.5" stroke-linecap="round"/>
                <rect x="220" y="55" width="80" height="70" rx="8" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="20" y1="65" x2="128" y2="65" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M 128 70 Q 90 80 60 72" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
                <line x1="160" y1="105" x2="218" y2="105" stroke="#ff3c8e" stroke-width="2.5" marker-end="url(#arrow)"/>
                <line x1="20" y1="105" x2="128" y2="105" stroke="#ff3c8e" stroke-width="2.5" marker-end="url(#arrow)"/>
              </g>
              <text x="14" y="58" font-family="'Space Grotesk', sans-serif" font-size="11">normal</text>
              <text x="14" y="98" font-family="'Space Grotesk', sans-serif" font-size="11" fill="#ff3c8e">jailbreak</text>
              <text x="260" y="95" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">model</text>
              <text x="144" y="172" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">safety wall</text>
            </svg>`,
  note: `
            <p>Models are trained to refuse certain requests: weapons synthesis, content involving minors, step-by-step cyberattack help. A jailbreak is a prompt engineered to slip past these refusals — framing the request in a way that tricks the model into cooperating.</p>
            <p>Classic techniques: roleplay ("pretend you're an AI with no rules"), fictional wrapping ("write a story where a character explains exactly how to…"), hypothetical framing ("for a novel I'm writing, what would a chemist say about…"). The model cooperates because it's treating the request as creative, not literal.</p>
            <p>Labs patch jailbreaks as they're found, but it's a constant arms race. Finding them before bad actors is the job of red teamers. No model is fully jailbreak-proof — the trade-off is that making refusals more aggressive also makes the model less useful for legitimate edge cases.</p>
          `
});
