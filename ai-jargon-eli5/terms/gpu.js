TERMS.push({
  section: 'hood',
  term: 'GPU',
  hook: 'the chip that does the massive parallel math AI needs.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="16" y="30" width="120" height="120" rx="8" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="30" y="46" width="38" height="38" rx="4" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="82" y="46" width="38" height="38" rx="4" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="30" y="98" width="38" height="38" rx="4" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="82" y="98" width="38" height="38" rx="4" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="183" y="30" width="120" height="120" rx="8" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="189" y="37" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="204" y="37" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="219" y="37" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="234" y="37" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="249" y="37" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="264" y="37" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="279" y="37" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="189" y="53" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="204" y="53" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="219" y="53" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="234" y="53" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="249" y="53" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="264" y="53" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="279" y="53" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="189" y="69" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="204" y="69" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="219" y="69" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="234" y="69" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="249" y="69" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="264" y="69" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="279" y="69" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="189" y="85" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="204" y="85" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="219" y="85" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="234" y="85" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="249" y="85" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="264" y="85" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
                <rect x="279" y="85" width="12" height="12" rx="2" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="1"/>
              </g>
              <text x="76" y="168" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">CPU</text>
              <text x="76" y="22" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">4 big cores</text>
              <text x="243" y="168" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="13">GPU</text>
              <text x="243" y="22" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11">thousands of tiny cores</text>
            </svg>`,
  note: `
            <p>A CPU (your laptop's main chip) has a handful of powerful, general-purpose cores — great at running one complex task fast. A GPU (graphics card) has thousands of tiny, simpler cores — great at running thousands of simple tasks at exactly the same time.</p>
            <p>Neural network math is almost entirely matrix multiplication: multiply giant grids of numbers together, millions of times per second. That's perfectly suited to GPU parallelism. Training GPT-3 required thousands of A100 GPUs running for weeks. Inference (actually using a model) needs fewer, but still more than a CPU can handle efficiently at scale.</p>
            <p>NVIDIA's H100s are currently the gold standard — each costs ~$30k, and large training runs use thousands of them. GPU access is the main bottleneck for AI labs, which is why "compute" is treated as a strategic resource in AI policy discussions.</p>
          `
});
