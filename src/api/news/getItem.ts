export default async function getItem(id: string): Promise<NewsItem> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_PATH + "/id/" + id);

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
