import NewsList, { NewsItemProps, NewsProps } from "@/components/news/NewsList";
import { DUMMY_NEWS } from "@/dummy_news";
import React from "react";



export default function NewsPage() {


  return <NewsList news={DUMMY_NEWS} />;
}
