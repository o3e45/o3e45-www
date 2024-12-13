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
          <Link href="/journal/">Journal</Link>
          <Link href="/links/">Profiles</Link>
          <Link href="/notebook/">Notebook</Link>
          <Link href="/projects/">Projects</Link>
          <Link href="https://owendphotos.com">Photography && Modeling Portfolio</Link>
          <Link href="https://knowledge.owendobson.com">Public Research by Me</Link>
        </p>
      </nav>
    </header>
  );
}
