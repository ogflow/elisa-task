export default function TagItem({ item }: { item: TagItem }) {
  if (!item) return null;

  return (
    <span className="bg-slate-200 rounded px-2 py-1 whitespace-nowrap">
      {item.tag}
    </span>
  );
}
