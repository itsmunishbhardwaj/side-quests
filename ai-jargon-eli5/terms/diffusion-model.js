TERMS.push({
  section: 'hood',
  term: 'Diffusion Model',
  hook: 'how AI makes images. starts with noise, sculpts out a picture.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="10" y="35" width="80" height="80" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <circle cx="22" cy="50" r="2" fill="#1a1a1a"/>
                <circle cx="42" cy="46" r="2" fill="#1a1a1a"/>
                <circle cx="64" cy="55" r="2" fill="#1a1a1a"/>
                <circle cx="78" cy="48" r="2" fill="#1a1a1a"/>
                <circle cx="18" cy="68" r="2" fill="#1a1a1a"/>
                <circle cx="48" cy="74" r="2" fill="#1a1a1a"/>
                <circle cx="72" cy="70" r="2" fill="#1a1a1a"/>
                <circle cx="28" cy="88" r="2" fill="#1a1a1a"/>
                <circle cx="56" cy="94" r="2" fill="#1a1a1a"/>
                <circle cx="78" cy="100" r="2" fill="#1a1a1a"/>
                <circle cx="36" cy="106" r="2" fill="#1a1a1a"/>
                <circle cx="62" cy="80" r="2" fill="#1a1a1a"/>
                <circle cx="14" cy="100" r="2" fill="#1a1a1a"/>
                <line x1="92" y1="75" x2="118" y2="75" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="120" y="35" width="80" height="80" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <circle cx="160" cy="75" r="26" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="3,2"/>
                <circle cx="152" cy="70" r="2" fill="#1a1a1a"/>
                <circle cx="168" cy="70" r="2" fill="#1a1a1a"/>
                <circle cx="134" cy="52" r="1.5" fill="#1a1a1a"/>
                <circle cx="184" cy="52" r="1.5" fill="#1a1a1a"/>
                <circle cx="140" cy="104" r="1.5" fill="#1a1a1a"/>
                <line x1="202" y1="75" x2="228" y2="75" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="230" y="35" width="80" height="80" rx="6" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <circle cx="270" cy="75" r="26" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
                <circle cx="262" cy="70" r="2.5" fill="#1a1a1a"/>
                <circle cx="278" cy="70" r="2.5" fill="#1a1a1a"/>
                <path d="M 258 84 Q 270 94 282 84" fill="none" stroke="#1a1a1a" stroke-width="2.2" stroke-linecap="round"/>
              </g>
              <text x="50" y="135" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="14">noise</text>
              <text x="160" y="135" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="14">forming</text>
              <text x="270" y="135" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="14">image</text>
              <text x="160" y="165" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13">many denoising steps →</text>
            </svg>`,
  note: `
            <p>A diffusion model is the architecture behind most modern AI image generators — Stable Diffusion, Midjourney, DALL-E, Flux. A different beast from a language model entirely.</p>
            <p>The trick: train a model to take a slightly noisy image and produce a slightly less noisy one. Apply this learned denoising step many times, starting from pure random noise, and you sculpt out a coherent picture — like a sculptor chipping away at a block until the figure emerges.</p>
            <p>For text-to-image, each denoising step is biased by your prompt, so the picture that emerges matches the description. The same idea now powers video and even some audio generation.</p>
          `
});
