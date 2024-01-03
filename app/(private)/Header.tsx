"use client";
import useSWR from "swr";
import React from "react";
import User from "../components/User/User";

const Header = () => {
  const { data, isLoading, error } = useSWR("/api/users/profile");
  if (error) return <div> failed to load</div>;
  if (isLoading) return <div>loading</div>;
  return (
    <header className="flex justify-between p-5 bg-slate-800 items-center w-full">
      <div>
        <h2 className="font-serif text-lg">QuickTalk.</h2>
      </div>
      
      <div>
      <User user={data.data} href="account" />
      </div>
    </header>
  );
};

export default Header;
