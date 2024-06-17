import { DUMMY_NEWS, NewsArticle } from "@/dummy_news";
import sql from "better-sqlite3";

const db = sql("data.db");

export async function getAllNews(): Promise<NewsArticle[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return DUMMY_NEWS;
}

export async function getNewsItem(slug: string): Promise<NewsArticle | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  return newsItem;
}

export async function getLatestNews(): Promise<NewsArticle[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
  return DUMMY_NEWS.reduce((years: number[], news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number): number[] {
  return DUMMY_NEWS.reduce((months: number[], news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === year) {
      const month = new Date(news.date).getMonth() + 1;
      if (!months.includes(month)) {
        months.push(month);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: number): NewsArticle[] {
  return DUMMY_NEWS.filter((news) => new Date(news.date).getFullYear() === year);
}

export function getNewsForYearAndMonth(year: number, month: number): NewsArticle[] {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === year && newsMonth === month;
  });
}

// export async function getAllNews() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return DUMMY_NEWS;
// }

// export async function getNewsItem(slug: string) {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
//   return newsItem;
// }

// export async function getLatestNews() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return DUMMY_NEWS.slice(0, 3);
// }

// export function getAvailableNewsYears() {

//      return DUMMY_NEWS.reduce((years: number[], news) => {
//     const year = new Date(news.date).getFullYear();
//     if (!years.includes(year)) {
//       years.push(year);
//     }
//     return years;
//   }, []).sort((a, b) => b - a);
// }

// export function getAvailableNewsMonths(year: number) {
//     return DUMMY_NEWS.reduce((months : number[], news) => {
//       const newsYear = new Date(news.date).getFullYear();
//       if (newsYear === +year) {
//         const month = new Date(news.date).getMonth();
//         if (!months.includes(month)) {
//           months.push(month + 1);
//         }
//       }
//       return months;
//     }, []).sort((a, b) => b - a);

// }

// export function getNewsForYear(year: number){
//   return DUMMY_NEWS.filter((news) => new Date(news.date).getFullYear() === year)
// }

// export function getNewsForYearAndMonth(year : number, month : number) {
//   return DUMMY_NEWS.filter((news) => {
//     const newsYear = new Date(news.date).getFullYear();
//     const newsMonth = new Date(news.date).getMonth() + 1;
//     return newsYear === year && newsMonth === month;
//   });

// }


