import React from "react";

import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/newsList/newsList";

export default function NewsPage() {
  return (
    <>
      <h1>NewsPage</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
