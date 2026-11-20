# Md Feroz Ahmed — Portfolio

Files:

- `index.html` — the page layout and design. You rarely need to touch it.
- `data.js` — **your content**: email, phone, social links (GitHub, LinkedIn, Kaggle, Facebook, Telegram, WhatsApp, Coursera), the typing roles, skills and projects. Edit this to update the site.
- `feroz-portrait.jpg` — profile photo. Replace it with a new upright (4:5) photo of the same name.
- `img/` — event photos (ICPC Preliminary 2026). Add more photos here; each has a large file and a `-thumb` copy.
- `Md_Feroz_Ahmed_CV.pdf` — the CV behind the "Download CV" button. Replace it with a new file of the same name.
- `fontawesome.min.js` — icons. Do not edit.

## How to update

1. Open `data.js` in a text editor (VS Code or Notepad).
2. Change the text inside the quotes. Keep the commas and brackets as they are.
   - New social link: copy one line in `socials` and change label, icon and url.
   - New project: copy one `{ ... },` block in `PROJECTS`, paste it at the top, edit it.
   - New skill: copy one `["...", "...", "..."],` line in `SKILLS`.
3. Save, open `index.html` in a browser to check, then push to GitHub. Vercel redeploys automatically.

Text in other sections (About, Kaggle numbers, Certifications, Education, Leadership, Research interests) lives in `index.html`: search for the words you want to change and edit them there.

## Deploy on Vercel

1. Create a GitHub repository (for example `feroz-portfolio`) and upload all these files.
2. On vercel.com, sign in with GitHub, choose **Add New → Project**, pick the repository and click **Deploy**.
3. Every later push to GitHub updates the live site.


## Keeping the numbers up to date

- **GitHub (automatic):** the "Latest on GitHub" strip under Projects shows your newest public repositories from `github.com/feroz-afm`. On Vercel it reads them through `api/repos.js`, which caches the answer for an hour so GitHub's rate limit never blocks visitors. Nothing to edit. If GitHub is unreachable the strip simply hides itself. Change `GITHUB_SHOW` in `data.js` to show more or fewer cards.
- **Kaggle (one place to edit):** Kaggle has no public feed a website can read, so open `data.js`, find `KAGGLE`, and change the numbers (rank, notebooks, datasets, medals...). Every place on the site and its hero stats follow that one line. The CV PDF is separate and needs a rebuild.
- Your **Projects cards, Demos and Skills** are still edited in `data.js` (`PROJECTS`, `DEMOS`, `SKILLS`).
