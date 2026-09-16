'use client'
import { IUserType } from "@/.next/types/users";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IUserProps{
    user: IUserType
}

const PostCard = ({user}:IUserProps) => {
    const pathname = usePathname();

  return (
    <div className="card bg-base-100 card-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{user.userId}</h2>
        <div className="justify-end card-actions">
         <Link className={`${pathname === `/posts/${user.id}` ? "text-blue-500": ""}`} href={`/posts/${user.id}`}>
             <button className="btn btn-primary">Show Posts</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
