"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Skull() {
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
      src={theme === "dark" ? "/skull-dark.svg" : "/skull.svg"}
      alt="skull"
      width="160"
      height="160"
      className="text-center m-auto"
    />
  );
}
