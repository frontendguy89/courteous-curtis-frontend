import Link from "next/link";

export default function Nav({isNav}) {
  return (
    <nav
      className="max-w-6xl m-auto flex items-center justify-center text-center bg-wood py-4 text-yellow-100"
     
    >
      <ul className="flex flex-col lg:flex-row gap-2 lg:gap-6 uppercase font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
        <li>
          <Link href="/vox">Vox</Link>
        </li>
        <li>Hire</li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
