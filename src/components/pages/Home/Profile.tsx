import { Github, Mail, Twitter } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";

export const Profile: React.FC = () => {
    return (
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
                <div className="mt-4 flex items-center gap-2">
                    <Link href="https://x.com/fdc_tuna2134">
                        <Twitter />
                    </Link>
                    <Link href="https://github.com/tuna2134">
                        <Github />
                    </Link>
                    <Link href="mailto:m-kikuchi@tuna2134.dev">
                        <Mail />
                    </Link>
                </div>
            </div>
        </div>
    );
};
