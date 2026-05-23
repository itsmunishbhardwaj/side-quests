TERMS.push({
  section: 'using',
  term: 'RAG',
  hook: "let the model look stuff up before answering. like an open-book test.",
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <rect x="6" y="60" width="42" height="54" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="50" y1="87" x2="66" y2="87" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <rect x="68" y="60" width="44" height="54" rx="6" fill="#a4ff3c" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="114" y1="87" x2="130" y2="87" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <rect x="132" y="60" width="44" height="54" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="140" y1="75" x2="168" y2="75" stroke="#1a1a1a" stroke-width="1.2"/>
                <line x1="140" y1="86" x2="168" y2="86" stroke="#1a1a1a" stroke-width="1.2"/>
                <line x1="140" y1="97" x2="160" y2="97" stroke="#1a1a1a" stroke-width="1.2"/>
                <line x1="178" y1="87" x2="194" y2="87" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <rect x="196" y="50" width="60" height="74" rx="8" fill="#ffe24d" stroke="#1a1a1a" stroke-width="2.5"/>
                <line x1="258" y1="87" x2="274" y2="87" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
                <rect x="276" y="60" width="40" height="54" rx="6" fill="#fef9e7" stroke="#1a1a1a" stroke-width="2.5"/>
              </g>
              <text x="27" y="96" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="26">?</text>
              <text x="90" y="96" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="20">🔍</text>
              <text x="226" y="96" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="22">LLM</text>
              <text x="296" y="96" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="24">!</text>
              <text x="27" y="135" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">ask</text>
              <text x="90" y="135" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">search</text>
              <text x="154" y="135" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">docs</text>
              <text x="226" y="138" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">read + reply</text>
              <text x="296" y="135" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">answer</text>
            </svg>`,
  note: `
            <p>RAG (Retrieval-Augmented Generation) is the architecture where, before the model answers, it first looks up relevant documents and stuffs them into the prompt. Like giving the model an open-book exam instead of relying purely on memory.</p>
            <p>The flow: question in → embed it as a vector → search a vector database for similar documents → drop the top hits into the model's context → model answers using them. The user sees one fluid reply; under the hood, a tiny search engine ran first.</p>
            <p>This is how AI products handle "what do our internal docs say about X" without retraining. It also dramatically reduces hallucination — the model has real facts to point at instead of guessing.</p>
          `
});
