import Image from "next/image";

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
      </div>
    </header>
  );
};

export default Header;
