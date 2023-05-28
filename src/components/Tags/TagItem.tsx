export default function TagItem({ item }: { item: TagItem }) {
  if (!item) return null;

  return (
    <span className="bg-slate-200 dark:bg-slate-700 rounded px-2 py-1 whitespace-nowrap">
      {item.tag}
    </span>
  );
}
