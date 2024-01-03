import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";

const User = ({ user, href }: { user?: UserI; href?: string }) => {
  return (
    <div className="flex">
      <Link href={`/${href || user?.username}`} className="flex items-center">
        <div>
          {user?.avatar && (
            <Image
              src={user.avatar}
              alt={user.username}
              width={50}
              height={50}
              className="rounded-full mr-3"
            />
          )}

          {!user?.avatar && (
            <div
              style={{ width: 50, height: 50 }}
              className=" bg-slate-600 rounded-full"
            ></div>
          )}
        </div>
        <div>
          <h2>{user?.username}</h2>
        </div>
      </Link>
    </div>
  );
};

export default User;
