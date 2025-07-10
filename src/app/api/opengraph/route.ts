import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'node-html-parser';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch the URL: ${response.statusText}`);
    }
    const html = await response.text();
    const root = parse(html);

    const getMetaTag = (name: string) => {
      const element = root.querySelector(`meta[property="og:${name}"]`) || root.querySelector(`meta[name="${name}"]`);
      return element ? element.getAttribute('content') : '';
    };

    const data = {
      title: getMetaTag('title') || root.querySelector('title')?.text || 'No title found',
      description: getMetaTag('description') || 'No description found',
      image: getMetaTag('image') || '',
      url: url,
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch OpenGraph data' }, { status: 500 });
  }
}
