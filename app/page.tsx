import Timeline from "@/components/pages/home/timeline";
import Header from "@/components/pages/home/header";
import * as PageHeader from "@/components/ui/header";

export default function Home() {
    return (
        <>
            <PageHeader.default />
            <Header />
            <div className="mx-auto mt-6 max-w-3xl px-4">
                <p className="mb-3 p-1 text-2xl font-bold tracking-wider">
                    歴史
                </p>
                <Timeline
                    timeline={[
                        {
                            title: "プログラミングの世界に入り込む",
                            datetime: "2020/07",
                            description:
                                "Discord Botを作るためにPythonを学び始めた。",
                        },
                        {
                            title: "sbv2-api 誕生",
                            datetime: "2025/09",
                            description:
                                "Discord botに組み込めたら面白いと思って開発を開始して作った。",
                        },
                        {
                            title: "New! ウェブサイト6代目開発開始(Proj Cecilia)",
                            datetime: "2025/04",
                            description:
                                "前のサイトを変えたくなった。そして再び一から作ることにした。余談だが、プロジェクトの名前はキリスト教の聖人の名前からとっている。",
                        },
                    ]}
                />
            </div>
        </>
    );
}

export const dynamic = 'force-dynamic'
