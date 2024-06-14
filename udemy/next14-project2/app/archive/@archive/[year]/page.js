import NewsList from "@/components/newsList/newsList";
import { getNewsForYear } from "@/lib/news";
import React from "react";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);
  return <NewsList news={news} />;
}
