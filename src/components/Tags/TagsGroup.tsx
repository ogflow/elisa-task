import TagItem from "./TagItem";

export default function TagsGroup({ items }: { items: TagItem[] }) {
  return (
    <ul className="flex gap-2">
      {items.map((tag) => (
        <li key={tag.tag + tag.siteId}>
          <TagItem item={tag} />
        </li>
      ))}
    </ul>
  );
}
