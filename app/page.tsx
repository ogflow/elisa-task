import Button from "@/src/components/Button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center py-24">
      <Link href="/news">
        <Button>Click me</Button>
      </Link>
    </main>
  );
}
