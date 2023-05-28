"use client";
import classNames from "classnames";
import Image from "next/image";
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
      <div
        ref={headerRef}
        className={classNames(styles["header-wrapper"], "sticky")}
      >
        <header
          className={classNames(
            "bg-white border-b border-b-slate-200",
            headerStuck ? "px-4 py-3 md:px-8 md:py-6" : "p-4 md:p-8"
          )}
        >
          <Image
            src="/elisa-logotype.svg"
            alt="Elisa Logo"
            className="dark:brightness-0 dark:invert"
            width={headerStuck ? 60 : 100}
            height={headerStuck ? 24 : 40}
            priority
          />
        </header>
      </div>
      {children}
    </>
  );
}
