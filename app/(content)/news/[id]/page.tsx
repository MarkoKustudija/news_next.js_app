import { NewsItemProps } from "@/components/news/NewsList";
import React from "react";

export default function NewsDetailsPage({params}: any) {
    const id = params.id;

  return (
    <article>
      <h1>News Details Page:  {id} </h1>
      {/* <h1>{title}</h1>
      <p>{text}</p> */}
    </article>
  );
}
