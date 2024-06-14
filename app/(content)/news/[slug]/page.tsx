import { NewsItemProps } from "@/components/news/NewsList";
import { DUMMY_NEWS } from "@/dummy_news";
import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function NewsDetailsPage({ params }: any) {
  const slug = params.slug;

  // const newsItem = DUMMY_NEWS.find((newsItem) => (newsItem.slug === slug));
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }
  
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`} >
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
