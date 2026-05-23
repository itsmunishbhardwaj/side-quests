TERMS.push({
  section: 'using',
  term: 'MCP',
  hook: 'a universal plug for hooking AI assistants up to your apps and data.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="10" y="70" width="72" height="40" rx="8" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="82" y1="90" x2="118" y2="90" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="120" y="62" width="64" height="56" rx="8" fill="#3ddbd9" stroke="#1a1a1a" stroke-width="2.5"/>
                <rect x="232" y="16" width="74" height="28" rx="6" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="232" y="54" width="74" height="28" rx="6" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="232" y="98" width="74" height="28" rx="6" fill="#c89aff" stroke="#1a1a1a" stroke-width="2"/>
                <rect x="232" y="136" width="74" height="28" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2"/>
                <line x1="184" y1="82" x2="230" y2="30" stroke="#1a1a1a" stroke-width="1.8" marker-end="url(#arrow)"/>
                <line x1="184" y1="87" x2="230" y2="68" stroke="#1a1a1a" stroke-width="1.8" marker-end="url(#arrow)"/>
                <line x1="184" y1="93" x2="230" y2="112" stroke="#1a1a1a" stroke-width="1.8" marker-end="url(#arrow)"/>
                <line x1="184" y1="98" x2="230" y2="150" stroke="#1a1a1a" stroke-width="1.8" marker-end="url(#arrow)"/>
              </g>
              <text x="46" y="95" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">LLM</text>
              <text x="152" y="94" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14">MCP</text>
              <text x="269" y="35" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">calendar</text>
              <text x="269" y="73" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">code</text>
              <text x="269" y="117" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">files</text>
              <text x="269" y="155" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">web</text>
            </svg>`,
  note: `
            <p>Before MCP, every AI tool needed a bespoke integration for every app — Claude needed one custom plugin for Notion, a different one for GitHub, another for Slack. N tools × M apps = an exhausting mess of one-off connectors.</p>
            <p>MCP (Model Context Protocol) is a standard Anthropic open-sourced in 2024, now widely adopted. Any MCP-compatible AI client can talk to any MCP-compatible server with the same interface. Build the integration once, works everywhere.</p>
            <p>Think USB-C: before it there was a pile of proprietary chargers — each device its own cable. USB-C means one plug, any device. MCP is that for AI tool access. It's why you can hook Claude up to your filesystem, your calendar, your browser, and a database all in one config file.</p>
          `
});
