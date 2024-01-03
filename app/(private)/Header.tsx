"use client";
import useSWR from "swr";
import React from "react";

const Header = () => {

  const { data, isLoading, error } = useSWR(
    "/api/users/profile");
  if (error) return <div> failed to load</div>;
  if (isLoading) return <div>loading</div>;
  return <header>{data.data.username}</header>;
};

export default Header;
