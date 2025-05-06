const Header: React.FC = () => {
    return (
        <header className="border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold">tuna2134</h1>
                </div>
                <nav className="flex space-x-4">
                    <a href="/" className="text-gray-700 hover:text-gray-900">
                        Home
                    </a>
                    <a
                        href="/blogs"
                        className="text-gray-700 hover:text-gray-900"
                    >
                        Blog
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
