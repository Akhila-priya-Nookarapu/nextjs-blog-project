const fs = require("fs");
const path = require("path");

const posts = fs.readdirSync("posts").map(f =>
  f.replace(".mdx", "")
);

// Ensure public folder exists
const publicDir = path.join(process.cwd(), "public");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Sitemap
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

posts.forEach(p => {
  sitemap += `
  <url>
    <loc>http://localhost:3000/posts/${p}</loc>
  </url>`;
});

sitemap += "\n</urlset>";

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);


// RSS
let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Next.js Blog</title>
<link>http://localhost:3000</link>
<description>Sample Blog Feed</description>
`;

posts.forEach(p => {
  rss += `
  <item>
    <title>${p}</title>
    <link>http://localhost:3000/posts/${p}</link>
    <description>Post ${p}</description>
    <pubDate>${new Date().toUTCString()}</pubDate>
  </item>`;
});

rss += `
</channel>
</rss>`;

fs.writeFileSync(path.join(publicDir, "rss.xml"), rss);

console.log("Sitemap and RSS generated successfully");
