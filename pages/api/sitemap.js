export default function handler(req, res) {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')

    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
      <loc>https://www.ashishbhoi.com/</loc>
      <lastmod>2022-08-22T00:00:00+05:30</lastmod>
    </url>
    <url>
      <loc>https://www.ashishbhoi.com/index</loc>
      <lastmod>2022-08-22T00:00:00+05:30</lastmod>
    </url>
    <url>
      <loc>https://www.ashishbhoi.com/projects</loc>
      <lastmod>2022-08-21T00:00:00+05:30</lastmod>
    </url>
    <url>
      <loc>https://www.ashishbhoi.com/about</loc>
      <lastmod>2022-08-21T00:00:00+05:30</lastmod>
    </url>
    <url>
      <loc>https://www.ashishbhoi.com/contact</loc>
      <lastmod>2022-08-23T00:00:00+05:30</lastmod>
    </url>
    </urlset>`

    res.end(xml)
}