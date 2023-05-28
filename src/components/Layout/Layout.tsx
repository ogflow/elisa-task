"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerStuck, setHeaderStuck] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setHeaderStuck(e.intersectionRatio < 1),
      { threshold: [1] }
    );

    observer.observe(headerRef.current as Element);
  }, [headerRef, setHeaderStuck]);

  return (
    <>
      <header
        ref={headerRef}
        className={classNames(styles["header-wrapper"], "sticky")}
      >
        <div
          className={classNames(
            "border-b border-b-slate-200 dark:border-b-slate-800",
            "flex gap-8 items-center",
            headerStuck ? "px-4 py-3 md:px-8 md:py-6" : "p-4 md:p-8"
          )}
        >
          <Link href="/">
            <Image
              src="/elisa-logotype.svg"
              alt="Elisa Logo"
              className="dark:brightness-0 dark:invert"
              width={headerStuck ? 60 : 100}
              height={headerStuck ? 24 : 40}
              priority
            />
          </Link>
          <nav className="hidden md:block">
            <Link
              href="/news"
              className={classNames(
                "p-4 no-underline font-bold text-lg rounded text-[#0019af] transition",
                "dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              )}
            >
              News
            </Link>
          </nav>
        </div>
      </header>
      {children}
    </>
  );
}
