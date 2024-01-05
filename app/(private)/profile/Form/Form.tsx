import React, { FormEvent, useState } from "react";
import { useSWRConfig } from "swr";

const Form = () => {
  const { mutate } = useSWRConfig();
  const [post, setPost] = useState("");

  const handlePostSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (post.trim()) {
      const res = await fetch("/api/posts", {
        method: "post",
        body: JSON.stringify({ content: post }),
      });
      if (res.ok) {
        setPost("");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handlePostSubmit}>
        <textarea
          placeholder="what happening?"
          onChange={(e) => setPost(e.target.value)}
          value={post}
          className="w-full rounded-lg bg-slate-700 my-3  py-3 px-5 outline-none"
        ></textarea>

        <button
          type="submit"
          className=" bg-slate-900 py-2 px-5 rounded-lg outline-none"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Form;
