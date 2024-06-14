import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <header id="main-header">
        <div id="logo">
          <Link href="/">Home</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/archive">Archive</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
