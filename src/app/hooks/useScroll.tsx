"use client";
import { useSyncExternalStore, useState, useEffect } from "react";

// function subscribe(callback: any) {
//   window.addEventListener("scroll", callback);
//   return () => window.removeEventListener("scroll", callback);
// }

// export function useScroll(): boolean {
//   const scrollY = useSyncExternalStore(
//     subscribe,
//     () => window.scrollY,
//     () => 0
//   );

//   return scrollY > 100;
// }

export function useScroll(): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolled;
}
