import getAllNews from "@/src/api/news/getAllNews";
import NewsCard from "@/src/components/NewsCard/NewsCard";

export const metadata = {
  title: "Recent news — Elisa",
};

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <main className="container max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <h1 className="my-5 font-bold">Recent news</h1>
      <ul className="flex flex-col gap-2" id="news-list">
        {news.map((item) => (
          <li key={item.id}>
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
    </main>
  );
}
