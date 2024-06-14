import Link from "next/link";
import React from "react";

export type NewsItemProps = {
  id?: string;
  title: string;
  text: string;
};

export type NewsProps = {
  news: NewsItemProps[];
};

export default function NewsList({ news }: NewsProps) {
  return (
    <>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <Link href={`/news/${item.id}`}>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
