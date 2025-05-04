import fs from "fs/promises";
import { Timer, TimeZone } from "iconoir-react";

interface PropsParams {
    slug: string;
}

interface Props {
    params: Promise<PropsParams>;
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const { default: Post, metadata } = await import(`@/blogs/${slug}.mdx`);
    return (
        <>
            <div className="mb-6 rounded-lg border border-gray-300 p-2 shadow-md">
                <h2 className="p-1 text-center text-2xl font-bold tracking-wider">
                    {metadata.title}
                </h2>
                <div className="mt-4 flex items-center justify-center space-x-2">
                    <Timer />
                    <p>作成日時：{metadata.datetime}</p>
                </div>
            </div>
            <div className="prose">
                <Post />
            </div>
        </>
    );
}

export async function generateStaticParams() {
    const blogs = (await fs.readdir("blogs")).filter((name) =>
        name.endsWith(".mdx"),
    );
    return blogs.map((name) => ({
        slug: name.replace(/\.mdx$/, ""),
    }));
}
export const dynamicParams = false;
