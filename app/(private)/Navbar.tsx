import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname()
  console.log({pathname})
  return (
    <nav className="flex max-w-md w-full bg-slate-800 my-3 p-5">
      <ul className="flex w-full justify-between">
        <li>
          <Link href="feed" className={pathname.startsWith("/feed") ? "text-green-400" :''}>Feed</Link>
        </li>
        <li>
          <Link href="profile" className={pathname.startsWith("/profile") ? "text-green-400" :''}>Profile</Link>
        </li>
        <li>
          <Link href="followers" className={pathname.startsWith("/followers") ? "text-green-400" :''}>Followers</Link>
        </li>
        <li>
          <Link href="following" className={pathname.startsWith("/following") ? "text-green-400" :''}>Following</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
