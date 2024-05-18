import Image from "next/image";
import Link from "next/link";
import { Bevan } from "next/font/google";

const bevan = Bevan({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <footer className="bg-wood bg-repeat bg-center py-6 px-6 max-w-6xl m-auto text-yellow-100">
      <h2 className={`${bevan.className} text-2xl`}>SITEMAP</h2>
      <div className="lg:flex max-w-[40rem] m-auto justify-between">
        <ul className="mb-6">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/articles">ARTICLES</Link>
          </li>
          <li>VOX</li>
          <li>HIRE</li>
          <li>ABOUT</li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
        <ul className="mb-6">
          <li>SITEMAP</li>
          <li>COLOPHON</li>
          <li>PRIVACY POLICY</li>
        </ul>
      </div>
      <hr className="mb-6 max-w-[40rem] m-auto border-t-2 border-yellow-100" />
      <div className="flex gap-2 max-w-[40rem] m-auto">
        <input
          className="bg-transparent focus:bg-transparent border-2 border-yellow-100 text-yellow-100 placeholder-yellow-100 px-2 py-2"
          placeholder="Your Email"
        />
        <button className="border-2 bg-yellow-100 text-[#222] px-2 py-2 font-bold hover:bg-yellow-50">
          SUBSCRIBE
        </button>
      </div>
      <hr className="mt-6 max-w-[40rem] m-auto border-t-2 border-yellow-100" />
      <div className="max-w-[40rem] m-auto flex justify-between py-2 gap-6">
        <p className="text-sm">
          Copyright &copy; 2024 - Courteous Curtis. All Rights Reserved. Smithed
          by @frontendguy89
        </p>
        <ul className="flex gap-2">
          <li>
            <Image
              src="/icons8-facebook-48.svg"
              alt="Facebook"
              height="64"
              width="64"
              className="bg-yellow-100"
            />
          </li>
          <li>
            <Image
              src="/icons8-instagram-48.svg"
              alt="Facebook"
              height="64"
              width="64"
              className="bg-yellow-100"
            />
          </li>
          <li>
            <Image
              src="/icons8-youtube-48.svg"
              alt="Facebook"
              height="64"
              width="64"
              className="bg-yellow-100"
            />
          </li>
          <li>
            <Image
              src="/icons8-tiktok-48.svg"
              alt="Facebook"
              height="64"
              width="64"
              className="bg-yellow-100"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
