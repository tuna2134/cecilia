import Header from "@/components/ui/header";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="mx-auto my-6 max-w-3xl px-4">{children}</main>
        </>
    );
};

export default Layout;
