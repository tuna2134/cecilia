import fs from "fs/promises";
import { NextPage } from "next";

const Page: NextPage = async () => {
    const blogs = (await fs.readdir("blogs"))
        .filter((name) => name.endsWith(".mdx"))
        .map(async (name) => ({
            slug: name.replace(/\.mdx$/, ""),
            metadata: (await import(`@/blogs/${name}`)).metadata,
        }));
    const blogList = await Promise.all(blogs);
    blogList.sort((a, b) => {
        const dateA = new Date(a.metadata.datetime);
        const dateB = new Date(b.metadata.datetime);
        return dateB.getTime() - dateA.getTime();
    });
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">ブログ一覧</h1>
            <ul className="mt-6 grid grid-cols-2 gap-4">
                {blogList.map((blog) => (
                    <li
                        key={blog.slug}
                        className="rounded-md bg-gray-100 p-2 shadow-md"
                    >
                        <a
                            href={`/blogs/${blog.slug}`}
                            className="text-xl text-blue-500 hover:underline"
                        >
                            {blog.metadata.title}
                        </a>
                        <p className="text-gray-500">
                            作成日時：{blog.metadata.datetime}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
