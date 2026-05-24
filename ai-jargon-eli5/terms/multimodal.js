TERMS.push({
  section: 'basics',
  term: 'Multimodal',
  hook: 'it can see and hear and read. not just words anymore.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="20" y="20" width="50" height="36" rx="4" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="20" y="72" width="50" height="36" rx="4" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="20" y="124" width="50" height="36" rx="4" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="135" y="55" width="92" height="74" rx="10" fill="#ffe24d" stroke="#1a1a1a" stroke-width="3"/>
                <line x1="72" y1="38" x2="135" y2="78" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="72" y1="90" x2="135" y2="92" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="72" y1="142" x2="135" y2="105" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="229" y1="92" x2="255" y2="92" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="257" y="67" width="55" height="50" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
              </g>
              <text x="45" y="44" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="18">🖼</text>
              <text x="45" y="96" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="18">🔊</text>
              <text x="45" y="148" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">abc</text>
              <text x="181" y="98" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="22">LLM</text>
              <text x="285" y="98" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">text</text>
              <text x="160" y="175" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">image + sound + text → one brain</text>
            </svg>`,
  note: `
            <p>A multimodal model can handle more than just text. It can look at images, listen to audio, sometimes watch video — and respond to all of them.</p>
            <p>Under the hood, it usually still works in tokens: an image gets chopped into "image tokens" and fed into the same architecture as text tokens. The model learns to mix and match.</p>
            <p>This is why you can paste a screenshot to Claude or upload a photo to GPT and ask "what's wrong with this code?" — same model, just trained on more types of input.</p>
          `
});
