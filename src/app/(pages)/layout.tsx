import Header from "@/components/Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-8">
                {children}
            </main>
        </>
    );
};

export default Layout;
