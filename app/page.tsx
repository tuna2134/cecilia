import Timeline from "@/components/pages/home/timeline";
import Header from "@/components/pages/home/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-3xl px-4">
        <Timeline
          timeline={[
            {
              title: "プログラミングの世界に入り込む",
              datetime: "2020/07",
              description: "Discord Botを作るためにPythonを学び始めた。",
            },
            {
              title: "sbv2-api 誕生",
              datetime: "2025/09",
              description:
                "Discord botに組み込めたら面白いと思って開発を開始して作った。",
            },
            {
              title: "New! ウェブサイト6代目開発開始(Proj C)",
              datetime: "2025/04",
              description:
                "前のサイトを変えたくなった。そして再び一から作ることにした。",
            },
          ]}
        />
      </div>
    </>
  );
}
