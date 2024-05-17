"use client";

import Image from "next/image";
import { Bevan } from "next/font/google";
import { Bars2Icon, SunIcon, MoonIcon } from "@heroicons/react/16/solid";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

const bevan = Bevan({
  subsets: ["latin"],
  weight: "400",
});

export default function Header({ handleToggle }: {handleToggle: any }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="px-6 py-6 max-w-6xl m-auto text-center ">
      <Link href="/" className="w-[160px] block m-auto">
        <Image
          src={theme === 'dark' ? '/skull-dark.svg' : '/skull.svg'}
          alt="skull"
          width="160"
          height="160"
          className="text-center m-auto"
        />
      </Link>
      <h1
        className={`text-4xl ${bevan.className} uppercase border-t-4 border-[#333] dark:border-yellow-100 border-b-4 logotext`}
      >
        <Link href="/">COURTEOUS CURTIS</Link>
      </h1>
      <div className="flex items-center justify-center gap-4">
        <button>
          <Switch
            className="group inline-flex h-4 w-11 items-center rounded-full bg-transparent border-2 border-[#333] dark:border-yellow-100 transition py-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <span className="size-3 ranslate-x-1 transition group-data-[checked]:translate-x-7">
              {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            </span>
          </Switch>
        </button>
        <button onClick={handleToggle}>
          <Bars2Icon className="size-8 text-center m-auto my-2" />
        </button>
      </div>
    </header>
  );
}
