// Vercel serverless function: returns the newest public repositories of the GitHub user.
// The answer is cached for an hour on Vercel's edge, so visitors never hit GitHub's per-IP rate limit.
// Optional: add a GITHUB_TOKEN environment variable in Vercel (no scopes needed) for even more headroom.
const USER = "feroz-afm";

module.exports = async (req, res) => {
  try {
    const headers = { "User-Agent": "feroz-portfolio", Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = "Bearer " + process.env.GITHUB_TOKEN;
    const r = await fetch("https://api.github.com/users/" + USER + "/repos?sort=pushed&per_page=30", { headers });
    if (!r.ok) throw new Error("GitHub answered " + r.status);
    const data = await r.json();
    const slim = data.map((x) => ({
      name: x.name, html_url: x.html_url, description: x.description, language: x.language,
      stargazers_count: x.stargazers_count, pushed_at: x.pushed_at, fork: x.fork, archived: x.archived,
    }));
    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).json(slim);
  } catch (e) {
    res.setHeader("Cache-Control", "no-store");
    res.status(502).json({ error: "GitHub is not reachable right now" });
  }
};
