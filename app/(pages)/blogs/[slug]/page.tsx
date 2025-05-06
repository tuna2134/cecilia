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
            </div>
            <p className="text-gray-600/80">作成日時：{metadata.datetime}</p>
            <div className="prose mt-2">
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
