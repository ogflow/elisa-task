import getItem from "@/src/api/news/getItem";

type Params = {
  id: string;
}
type Props = {
  params: Params;
}

export default async function NewsItemPage({ params: { id }}: Props) {
  const item = await getItem(id);

  return (
    <div>
      <h1>{item.title}</h1>
      <div>{item.content}</div>
    </div>
  )
}