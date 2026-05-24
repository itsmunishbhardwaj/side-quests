TERMS.push({
  section: 'hood',
  term: 'GPT',
  hook: "the family of models from OpenAI. 'generative pre-trained transformer'.",
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <line x1="20" y1="158" x2="300" y2="158" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="22" y="138" width="32" height="20" rx="3" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="90" y="115" width="42" height="43" rx="3" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="165" y="80" width="52" height="78" rx="3" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="244" y="38" width="56" height="120" rx="3" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2"/>
              </g>
              <text x="38" y="133" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="10">GPT-1</text>
              <text x="111" y="110" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="10">GPT-2</text>
              <text x="191" y="75" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="10">GPT-3</text>
              <text x="272" y="33" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="10">GPT-4</text>
              <text x="38" y="173" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">2018</text>
              <text x="111" y="173" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">2019</text>
              <text x="191" y="173" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">2020</text>
              <text x="272" y="173" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10">2023</text>
            </svg>`,
  note: `
            <p>GPT — Generative Pre-trained Transformer — is the model family OpenAI has been releasing since 2018. "Pre-trained" means trained on massive amounts of text first; "generative" means it produces new text; "transformer" is the underlying architecture. The recipe: pretrain on everything, then fine-tune for instructions.</p>
            <p>Each version was a leap: GPT-2 (2019) was considered too dangerous to release in full. GPT-3 (2020) had 175 billion parameters and shocked people by writing coherent essays from a short prompt — few-shot learning without any explicit training. GPT-4 (2023) passed bar exams and became the engine behind ChatGPT's viral moment.</p>
            <p>Now "GPT" is both a specific product line and the adjective people casually slap on any large language model. OpenAI keeps architecture details private, but the pretrain-then-RLHF recipe GPT popularized is now the template every lab follows.</p>
          `
});
