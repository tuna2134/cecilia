import { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <>
            <div className="w-full flex items-center gap-4 py-8">
                <Image
                    src="/images/icon.png"
                    alt="icon"
                    width={128}
                    height={128}
                    className="rounded-full"
                />
                <div>
                    <h2 className="text-2xl font-bold">こんにちは！</h2>
                    <p>
                        はじめまして、tuna2134です。サーバーをいじったりするのが楽しいと思っている人間です！
                    </p>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">最近の活動</h3>
            </div>
        </>
    );
};

export default Home;
