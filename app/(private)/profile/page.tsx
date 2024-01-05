'use client'
import React from 'react'
import useSWR from 'swr'
import Form from './Form/Form';
import PostContainer from '@/app/components/Post/post-container';

const Profile = () => {
 const {data, isLoading, error} = useSWR("/api/users/profile");

 if(error) return <div>failed to fetch</div>
 if(isLoading) return <div>loading ...</div>
  return (
    <div>
      <h2>Profile</h2>
      <Form />
      <PostContainer username={data.data.username} /> 
    </div>
  )
}

export default Profile