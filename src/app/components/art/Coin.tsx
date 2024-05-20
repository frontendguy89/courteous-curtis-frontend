"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Coin() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Image
      src={theme === "dark" ? "/coin_dark.svg" : "/coin.svg"}
      alt="coin"
      width="256"
      height="256"
      className="text-center m-auto"
    />
  );
}
