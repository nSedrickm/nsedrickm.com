import { useSyncExternalStore } from "react";

function subscribe(callback: any) {
  window.addEventListener("scroll", callback);
  return () => window.removeEventListener("scroll", callback);
}

export const useScroll = () => {
  return useSyncExternalStore<boolean>(subscribe, () => window.scrollY > 100);
};
