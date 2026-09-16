import { IUserType } from "@/.next/types/users";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface IParamsProps{
    params: Promise<{postId:string}>
}

export const metadata: Metadata = {
    title: "User post details"
}
const PostDetailsPage = async({params}:IParamsProps) => {
    const {postId} = await params;
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    if(!res.ok){
        notFound();
    }

    const post: IUserType = await res.json();
    return (
        <div className="border-2 p-4">
            <h1 className="text-center">Title: {post.title}</h1>
            <p className="text-sm">{post.body}</p>
        </div>
    );
};

export default PostDetailsPage;