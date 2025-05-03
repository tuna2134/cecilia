import fs from "fs/promises";

interface PropsParams {
    slug: string;
}

interface Props {
    params: Promise<PropsParams>;
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const { default: Post, metadata } = await import(`@/blogs/${slug}.mdx`);
    return <Post />;
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
