# AI Jargon, ELI5

A playful zine-style web page listing ~42 AI/LLM terms — each one links to the single best ELI5 explanation I could find on the internet.

Sources are hand-picked: 3Blue1Brown, Jay Alammar, Simon Willison, Anthropic, Hugging Face, Pinecone, Cloudflare, Wolfram, IBM, learnprompting, and Wikipedia.

## Run locally

Just open `index.html` in your browser. No build step. No dependencies.

```bash
open index.html
```

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `ai-jargon-eli5`) — set it to **Public**
2. In this folder, run:
   ```bash
   git init
   git add .
   git commit -m "init ai-jargon-eli5 zine"
   git remote add origin https://github.com/YOUR_USERNAME/ai-jargon-eli5.git
   git push -u origin main
   ```
3. Go to the repo on GitHub → **Settings** → **Pages** → Source: `Deploy from a branch` → Branch: `main` / `/ (root)` → Save
4. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/ai-jargon-eli5/
   ```
   (takes ~1 minute to go live the first time)

## Edit / contribute

All terms live as `<a class="card">` blocks inside `index.html` — grouped into six `<section>`s (Basics, How It Thinks, How It Learns, How We Use It, Keeping It Safe, Under The Hood). To add a term: copy a card, paste it into the right section, swap the term / hook / URL.

Rules of thumb when picking a link:
- prefer visual / interactive explainers (3Blue1Brown, illustrated blog posts) over text-walls
- the page on the other end should make sense to someone who has never opened a textbook
- if the best resource is a video, link the video — that's fine
