import getItem from "@/src/api/news/getItem";
import Button from "@/src/components/Button/Button";
import Link from "next/link";
import sanitize from "sanitize-html";

type Params = {
  id: string;
};
type Props = {
  params: Params;
};

export default async function NewsItemPage({ params: { id } }: Props) {
  const item = await getItem(id);

  return (
    <main className="container max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <nav className="mb-8">
        <Link href="/news">
          <Button color="light">Go back</Button>
        </Link>
      </nav>
      <article>
        <span>{new Date(item.publishDate)?.toLocaleString()}</span>
        <h1 className="my-5">{item.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: sanitize(item.content as string),
          }}
        />
      </article>
    </main>
  );
}
