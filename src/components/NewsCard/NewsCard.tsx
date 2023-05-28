import Link from "next/link";
import TagsGroup from "../Tags/TagsGroup";

type Props = {
  item: NewsItem;
};
export default function NewsCard({ item }: Props) {
  if (!item) return null;

  const { id, publishDate, title, siteSpecificTags } = item;

  return (
    <article className="border dark:border-transparent dark:bg-slate-800 px-6 py-8 flex flex-col gap-4">
      <span>{new Date(publishDate)?.toLocaleString()}</span>
      <Link href={`/news/${id}`} className="no-underline hover:underline">
        {title}
      </Link>
      <TagsGroup items={siteSpecificTags} />
    </article>
  );
}
