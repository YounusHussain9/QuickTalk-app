"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Form = () => {
  const router = useRouter();
  const [username, setUserName] = useState<undefined | string>("");
  const [password, setPassword] = useState<undefined | string>("");
  const [confirmPassword, setConfirmPassword] = useState<undefined | string>(
    ""
  );

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors([]);

    if (password != confirmPassword) {
        const newError =[]
        newError.push("Confirm password is not match")
      setErrors(newError);
      return;
    }
    const res = await fetch("/api/signup", {
      method: "post",
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      window.location.href = "/signin";
    } else {
      alert("Sign up failed");
    }
  };

  console.log(errors)
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-slate-800 p-3 max-w-xs w-full rounded"
    >
      <div className="text-center">
        <h3 className="p-3 font-semibold">Sign Up</h3>
      </div>

      <div>
        <hr />
      </div>

      <div className="flex flex-col gap-5 p-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="username">
            Username<sup>*</sup>
          </label>
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
          <label htmlFor="password">
            Password<sup>*</sup>
          </label>
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

        <div className="flex flex-col gap-2">
          <label htmlFor="confirmpassowrd">
            Confirm Password<sup>*</sup>
          </label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="password"
            placeholder="Password"
            value={confirmPassword}
            required
            className="p-3 rounded outline-none text-black"
          />
        </div> 
        {errors.map((err, index)=>{
            return(
<p key={index} className=" fw-normal text-sm text-red-500 "><span>{err}</span></p>
            )
        })}
        <button type="submit" className="mt-3 p-3 bg-orange-500 rounded-lg">
          Register
        </button>
      </div>
    </form>
  );
};

export default Form;
