"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const target = window.location.hash ? document.getElementById(window.location.hash.slice(1)) : null;

    if (target) {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <div className="page-transition" key={pathname}>{children}</div>;
}
