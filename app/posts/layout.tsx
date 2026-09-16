import { Metadata } from "next";

export const metadata: Metadata = {
    title: "User post"
}
const UserLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div>
            <h1 className="text-3xl mb-3">
                User details post
            </h1>            

            {children}
        </div>
    );
};

export default UserLayout;