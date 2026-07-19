"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    const counted = sessionStorage.getItem("visit_counted");
    if (counted) return;
    sessionStorage.setItem("visit_counted", "1");
    fetch("/api/visits", { method: "POST" }).catch(() => {});
  }, [pathname]);

  return null;
}
