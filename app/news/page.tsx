import getAllNews from "@/src/api/news/getAllNews";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <ul>
      {news.map((item) => (
        <li key={item.id}>
          <span>{item.publishDate}</span>
          <a href={`/news/${item.id}`}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
