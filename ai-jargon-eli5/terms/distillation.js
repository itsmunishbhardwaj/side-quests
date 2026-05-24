TERMS.push({
  section: 'hood',
  term: 'Distillation',
  hook: 'training a small model to mimic a big one. lighter, almost as smart.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="12" y="25" width="100" height="130" rx="8" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="114" y1="90" x2="155" y2="90" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="157" y="55" width="60" height="70" rx="8" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="219" y1="90" x2="256" y2="90" stroke="#1a1a1a" stroke-width="2.5" marker-end="url(#arrow)"/>
                <rect x="258" y="65" width="50" height="50" rx="8" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5"/>
              </g>
              <text x="62" y="95" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14" fill="white">teacher</text>
              <text x="62" y="167" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">big model</text>
              <text x="187" y="93" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">mimic</text>
              <text x="187" y="140" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">outputs</text>
              <text x="283" y="95" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">student</text>
              <text x="283" y="130" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">small</text>
            </svg>`,
  note: `
            <p>Distillation is training a small "student" model to reproduce the outputs of a large "teacher" model. Instead of training on raw data, the student trains on the teacher's predictions — including the soft probability distributions, not just the final answers. This carries more signal than just right/wrong labels.</p>
            <p>The result: a small model that punches above its weight. It's captured some of the teacher's reasoning patterns and knowledge without needing the teacher's size. GPT-4 level behavior in a model that runs on a laptop is the dream — distillation is one of the main tools for getting there.</p>
            <p>Real examples: Mistral's small models were trained partly on GPT-4 outputs. DeepSeek-R1's smaller variants were distilled from the larger R1. The technique is why the open-source community can move fast — instead of training from scratch, distill from the frontier model to bootstrap a capable smaller one.</p>
          `
});
