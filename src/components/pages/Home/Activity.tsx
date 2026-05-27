import Link from "next/link";

export interface ActivityData {
    title: string;
    description: string;
    url: string | null;
}

interface ActivityProps {
    activity: ActivityData;
}

export const Activity: React.FC<ActivityProps> = ({ activity }) => {
    return (
        <div className="p-4 border border-gray-300 rounded-lg mb-4 flex flex-col">
            <h4 className="text-lg font-semibold">{activity.title}</h4>
            <p className="grow mb-2 text-gray-700">{activity.description}</p>
            {activity.url && (
                <Link
                    href={activity.url}
                    className="text-blue-500 hover:underline text-sm"
                >
                    詳細
                </Link>
            )}
        </div>
    );
};
