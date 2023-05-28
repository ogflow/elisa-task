import classNames from "classnames";
import styles from "./TagItem.module.css";

export default function TagItem({ item }: { item: TagItem }) {
  if (!item) return null;

  return (
    <span
      className={classNames(
        styles["tag"],
        "rounded px-2 py-1 whitespace-nowrap"
      )}
    >
      {item.tag}
    </span>
  );
}
