// 'use client';

import NewsList, { NewsItemProps, NewsProps } from "@/components/news/NewsList";
import { DUMMY_NEWS } from "@/dummy_news";
import { getAllNews } from "@/lib/news";
import React, { useEffect } from "react";

export default async function NewsPage() {

  const news = await getAllNews();

 
  return <NewsList news={news} />;
}
