"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Form = () => {
  const router = useRouter();
  const [username, setUserName] = useState<undefined | string>("");
  const [password, setPassword] = useState<undefined | string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "post",
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/feed");
    } else {
      alert("log in failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col bg-slate-800 p-3 max-w-xs w-full rounded">
      <div className="text-center">
        <h3 className="p-3 font-semibold">Sign In</h3>
      </div>

      <div>
        <hr />
      </div>

      <div className="flex flex-col gap-5 p-3" >
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            id="username"
            placeholder="Username"
            value={username}
            required
            className="p-3 rounded outline-none text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Password"
            value={password}
            required
            className="p-3 rounded outline-none text-black"

          />
        </div>
        <button type="submit" className="mt-3 p-3 bg-slate-900 rounded-lg">Login</button>
      </div>
    </form>
  );
};

export default Form;
