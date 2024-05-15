import Image from "next/image";
import { Bevan } from "next/font/google";
import { Bars2Icon } from "@heroicons/react/16/solid";
import Link from "next/link";

const bevan = Bevan({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <header className="px-6 py-6 max-w-6xl m-auto text-center">
    <Link href="/">
        <Image
          src="/skull.svg"
          alt="skull"
          width="160"
          height="160"
          className="text-center m-auto"
        />
   </Link>
        <h1 className={`text-4xl ${bevan.className} uppercase border-t-4 border-[#333] border-b-4 logotext`}>
          <Link href="/">COURTEOUS CURTIS</Link>
        </h1>
      <button>
        <Bars2Icon className="size-8 text-center m-auto my-2" />
      </button>
    </header>
  );
}
