'use client';

import { createContext, useContext, useState, ReactNode, FC } from "react";
import { NewsItemProps } from "@/components/news/NewsList"; // Adjust the import path as needed
import { DUMMY_NEWS } from "@/dummy_news";

// Define the shape of the context value
interface NewsContextType {
  newsList: NewsItemProps[];
  setNewsList: React.Dispatch<React.SetStateAction<NewsItemProps[]>>;
}

// Create the context with a default value
const NewsContext = createContext<NewsContextType | undefined>(undefined);

// Define the NewsProvider component
export const NewsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [newsList, setNewsList] = useState<NewsItemProps[]>(DUMMY_NEWS);

  const value = {
    newsList,
    setNewsList,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

// Custom hook to use the NewsContext
export const useNews = (): NewsContextType => {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
};
