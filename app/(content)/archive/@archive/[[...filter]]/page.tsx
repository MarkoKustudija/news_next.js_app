import Link from "next/link";
import { Suspense } from "react";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import NewsList from "@/components/news/NewsList";

interface FilterHeaderProps {
  year?: number;
  month?: number;
}

interface FilteredNewsProps {
  year?: number;
  month?: number;
}

interface NewsArticle {
  id: string;
  title: string;
  image: string;
  content: string;
  date: string;
  slug: string;
}

interface FilteredNewsPageProps {
  params: {
    filter?: string[];
  };
}

async function FilterHeader({ year, month }: FilterHeaderProps) {
  const availableYears: number[] = getAvailableNewsYears();
  let links: number[] = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year!).includes(month))
  ) {
    throw new Error('Invalid filter.');
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }: FilteredNewsProps) {
  let news: NewsArticle[] = [];

  if (year && month === undefined) {
    news = await getNewsForYear(year);
  } else if (year && month !== undefined) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default function FilteredNewsPage({ params }: FilteredNewsPageProps) {
  const filter = params.filter || [];
  const selectedYear = filter[0] ? parseInt(filter[0]) : undefined;
  const selectedMonth = filter[1] ? parseInt(filter[1]) : undefined;

  return (
    <Suspense fallback={<p>Loading news...</p>}>
      {selectedYear !== undefined ? (
        <>
          <FilterHeader year={selectedYear} month={selectedMonth} />
          <FilteredNews year={selectedYear} month={selectedMonth} />
        </>
      ) : (
        <p>Please select a year to view news.</p>
      )}
    </Suspense>
  );
}

