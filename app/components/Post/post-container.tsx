import React, { useState } from "react";
import PostList from "./post-list";

const PostContainer = ({ username }: { username: string }) => {
  const [count, setCount] = useState(0);

  const page = [];

  for (let i = 0; i <= count; i++) {
    page.push(<PostList  index={i} username={username} />);
  }
  return <div>
    {page}

    <div>
        <button onClick={()=> setCount((prev)=> prev + 1)}>Load More </button>
    </div>
  </div>;
};

export default PostContainer;
