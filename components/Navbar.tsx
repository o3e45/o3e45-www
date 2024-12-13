import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <Link href="/">
        <h1>Owen Dobson</h1>
      </Link>
      <nav>
        <p>
          <Link href="/">Home</Link>
          <Link href="/blog/">Blog</Link>
          </Link>
        </p>
      </nav>
    </header>
  );
}
