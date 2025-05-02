import Image from "next/image";
import { ArrowDown, Github, PageDown, X } from "iconoir-react";
import Link from "next/link";

const SNSIcons = [
    {
        url: "https://github.com/tuna2134",
        icon: Github,
    },
    {
        url: "https://x.com/@fdc_tuna2134",
        icon: X,
    },
];

const Header: React.FC = async () => {
    const res = await fetch(
        "https://discord.com/api/v10/users/739702692393517076",
        {
            headers: {
                Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
            },
        },
    );
    const data = await res.json();
    const avatarURL = `https://cdn.discordapp.com/avatars/739702692393517076/${data.avatar}.png?size=1024`;
    return (
        <header className="h-screen w-screen flex justify-center items-center">
            <div>
                <Image
                    alt="avatar"
                    src={avatarURL}
                    width={156}
                    height={156}
                    className="mb-2 rounded-full"
                />
                <h1 className="text-2xl font-bold text-center">tuna2134</h1>
                <div className="flex justify-center space-x-2 mt-2">
                    {SNSIcons.map((sns, key) => (
                        <Link href={sns.url} key={key}>
                            <sns.icon height={32} width={32} />
                        </Link>
                    ))}
                </div>
                <div className="mt-6 flex justify-center">
                    <ArrowDown className="animate-bounce" />
                </div>
            </div>
        </header>
    );
};

export default Header;
