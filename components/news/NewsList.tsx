import Image from "next/image";
import Link from "next/link";
import React from "react";

export type NewsItemProps = {
  id?: string;
  slug? : string;
  title: string;
  image: string;
  date: string;
  content: string;
};

export type NewsProps = {
  news: NewsItemProps[];
};

export default function NewsList({ news }: NewsProps) {
  return (
    <>
    <h1> News Page </h1>
      <ul className="news-list">
        {news.map((item, index) => (
          <li key={index}>
            <Link href={`/news/${item.slug}`}>
              <img src={`/images/news/${item.image}`} alt={item.title}/>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
