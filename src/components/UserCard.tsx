import Image from "next/image";
import { HTMLAttributes } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  date: string;
  role: string;
};

interface UserCardProps extends HTMLAttributes<HTMLDivElement> {
  user: User;
}

export default function UserCard({ user, ...rest }: UserCardProps) {
  return (
    <div
      className="flex px-5 py-4 shadow-md flex-row gap-4 justify-between items-center rounded-lg bg-gray-800 opacity-90 cursor-pointer hover:opacity-100 transition-all"
      {...rest}
    >
      <div className="flex flex-row gap-2">
        <Image src={user.avatar} alt="User Avatar" width={56} height={56} />

        <div className="flex flex-col gap-1 justify-center">
          <span className="text-xs text-white font-semibold">{user.name}</span>
          <span className="text-sm text-gray-500">{user.email}</span>
        </div>
      </div>

      <span
        className={[
          "px-4 py-1 rounded-xl text-white",
          user.role === "admin" ? "bg-blue-500" : "bg-green-500",
        ].join(" ")}
      >
        {user.role}
      </span>
    </div>
  );
}
