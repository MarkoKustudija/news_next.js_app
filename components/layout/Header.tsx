import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <Link href="/">Home</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
