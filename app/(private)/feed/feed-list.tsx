"use client";
import useSWR from "swr";
import React from "react";
import Post from "@/app/components/Post/post";

const FeedList = ({ index }: { index: number }) => {
  const { data, isLoading, error } = useSWR("/api/posts/feed?page=" + index);

  if (error) return <div>Faild to load</div>;
  if (isLoading) return <div>loading</div>;

  return (
    <div>
      <ul>
        {data?.data.map((post: PostI) => {
          return (
            <li className="my-5" key={post.id}>
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeedList;
