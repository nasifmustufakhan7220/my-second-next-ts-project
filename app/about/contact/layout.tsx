import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My contact"
}

const ContactLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>

            <h1>This is a fixed portion of contact page and this is a common portion for only contact children</h1>

            {children}
        </div>
    );
};

export default ContactLayout;