TERMS.push({
  section: 'using',
  term: 'Vector Database',
  hook: 'where you store all those embedding-starfield points for fast lookup.',
  diagram: `<svg class="diagram" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#wobble)">
                <circle cx="60" cy="50" r="4" fill="#1a1a1a"/>
                <circle cx="95" cy="35" r="4" fill="#1a1a1a"/>
                <circle cx="125" cy="60" r="4" fill="#1a1a1a"/>
                <circle cx="170" cy="40" r="4" fill="#1a1a1a"/>
                <circle cx="50" cy="95" r="4" fill="#1a1a1a"/>
                <circle cx="85" cy="115" r="4" fill="#1a1a1a"/>
                <circle cx="135" cy="100" r="4" fill="#1a1a1a"/>
                <circle cx="175" cy="125" r="4" fill="#1a1a1a"/>
                <circle cx="210" cy="105" r="4" fill="#1a1a1a"/>
                <circle cx="220" cy="65" r="4" fill="#1a1a1a"/>
                <circle cx="255" cy="80" r="4" fill="#1a1a1a"/>
                <circle cx="155" cy="85" r="8" fill="#ff3c8e" stroke="#1a1a1a" stroke-width="2"/>
                <circle cx="155" cy="85" r="40" fill="none" stroke="#ff3c8e" stroke-width="2" stroke-dasharray="3,3"/>
                <path d="M 285 30 L 200 75" stroke="#1a1a1a" stroke-width="2" marker-end="url(#arrow)"/>
              </g>
              <text x="285" y="22" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12">query</text>
              <text x="160" y="160" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12">find the closest points = similar items</text>
            </svg>`,
  note: `
            <p>A vector database is a specialized store for embeddings. Instead of querying by keyword, you query by similarity: "find me the 10 vectors closest to this one."</p>
            <p>Under the hood, it uses clever indexing (HNSW, IVF, etc.) to do approximate nearest-neighbor search fast — even across billions of vectors. Brute-force similarity would be way too slow at scale.</p>
            <p>Vector DBs are the backbone of RAG and semantic search. Examples: Pinecone, Weaviate, Qdrant, pgvector. Pretty much every serious AI app has one.</p>
          `
});
