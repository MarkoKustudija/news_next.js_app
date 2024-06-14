import NewsList, { NewsItemProps, NewsProps } from "@/components/news/NewsList";
import React from "react";

const dummy_news: NewsItemProps[] = [
  {
    id: "m1",
    title: "1st News",
    text: "some text",
  },
  {
    id: "m2",
    title: "2nd News",
    text: "some text",
  },
  {
    id: "m3",
    title: "3rd News",
    text: "some text",
  },
];

export default function NewsPage() {
  return <NewsList news={dummy_news} />;
}
