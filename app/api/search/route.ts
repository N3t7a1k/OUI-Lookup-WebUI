import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const page = searchParams.get('page');
  const limit = searchParams.get('limit');

  const baseUrl = process.env.API_BASE_URL;

  if (!baseUrl) {
    return NextResponse.json({ error: 'API base URL is not configured' }, { status: 500 });
  }

  const targetUrl = `${baseUrl}/${query}?page=${page}&limit=${limit}`;

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      return NextResponse.json({ error: `External API Error: ${errorData}` }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}