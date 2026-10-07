import { useState } from "react";

export default function useTema() {
  const [gelap, setGelap] = useState(() => {
    try {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });
  const ganti = () => setGelap((g) => !g);
  return { gelap, ganti };
}
