import Link from "next/link"

export default function Nav() {
    return (
        <nav className="max-w-6xl m-auto flex items-center justify-center text-center">
            <ul className="flex flex-col lg:flex-row gap-2 lg:gap-6 uppercase font-bold">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/articles">Articles</Link></li>
                <li>Vox</li>
                <li>Hire</li>
                <li>About</li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}