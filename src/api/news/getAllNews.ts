export default async function getAllNews(): Promise<NewsItem[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_PATH + '/list?tags=corporate.elisa.fi:national-press&maxResults=10');

  if (!res.ok) throw new Error('failed to fetch data')

  return res.json();
}