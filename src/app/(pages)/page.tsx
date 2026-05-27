import { NextPage, Metadata } from "next";
import { Activity, ActivityData } from "@/components/pages/Home/Activity";
import { Profile } from "@/components/pages/Home/Profile";

export const metadata: Metadata = {
    title: "ホーム",
    description: "tuna2134のホームページ",
};

const activities: ActivityData[] = [
    {
        title: "cecilia",
        description: "Next.jsで作成したポートフォリオサイトです。",
        url: "https://github.com/tuna2134/cecilia",
    },
    {
        title: "Neody Networks",
        description: "AS152873をはじめインフラをメインで運用しています。",
        url: "https://neody.ad.jp",
    },
];

const Home: NextPage = () => {
    return (
        <>
            <Profile />
            <div>
                <h3 className="text-xl font-bold mb-4">最近の活動</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activities.map((activity, index) => (
                        <Activity key={index} activity={activity} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
