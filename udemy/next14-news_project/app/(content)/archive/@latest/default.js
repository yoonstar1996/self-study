import NewsList from "@/components/newsList";
import { getLatestNews } from "@/lib/news";
import React from "react";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News </h2>
      <NewsList news={latestNews} />
    </>
  );
}
