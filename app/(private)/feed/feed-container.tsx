"use client";
import React, { useState } from "react";
import FeedList from "./feed-list";

const FeedContainer = () => {
  const [count, setCount] = useState(0);

  const pages = [];

  for (let i = 0; i <= count; i++) {
    pages.push(<FeedList index={i} key={i} />);
  }

  return (
    <div>
      {pages}

      <div className="flex justify-center w-full">
        <button
          className="bg-slate-700 py-2 px-5 rounded-lg"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default FeedContainer;
