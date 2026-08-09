export async function onRequestGet() {
  const rss = "https://www.ynet.co.il/Integration/StoryRss1854.xml";

  try {
    const response = await fetch(rss, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const xml = await response.text();
    const items = [];

    const regex =
      /<item\b[\s\S]*?<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>[\s\S]*?<\/item>/gi;

    let match;

    while ((match = regex.exec(xml)) && items.length < 15) {
      const title = match[1]
        .replace(/<!\[CDATA\[|\]\]>/g, "")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&")
        .replace(/&#39;/g, "'")
        .replace(/<[^>]+>/g, "")
        .trim();

      if (title) {
        items.push({ title });
      }
    }

    return Response.json({
      items,
      updatedAt: new Date().toISOString()
    });

  } catch (error) {
    return Response.json({
      items: [],
      error: String(error)
    }, { status: 500 });
  }
}
