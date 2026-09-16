import { IUserType } from "@/.next/types/users";
import PostCard from "../Components/PostCard/PostCard";

const PostsPage = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: IUserType[] = await res.json();
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
             {
                data.map(user=> <PostCard key={user.id} user={user} ></PostCard>)
             }    
        </div>
    );
};

export default PostsPage;