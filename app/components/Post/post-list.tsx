'use client'
import React from 'react'
import useSWR from 'swr'
import Post from './post'

const PostList = ({username, index}: {username: string, index: number}) => {
    const {data, error, isLoading}= useSWR('api/posts?page=' + index+ "&username=" + username  )

    if(error) <div> load failed</div>
    if(isLoading) <div>loading...</div>
  return (
    <div>
        <ul>
            {data?.data.map((post: PostI)=>{
return <li key={post.id}>
    <Post post={post}/>
</li>
            })}
        </ul>
    </div>
  )
}

export default PostList