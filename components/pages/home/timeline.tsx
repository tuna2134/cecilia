export interface TimelineData {
    title: string;
    datetime: string;
    description: string;
}

interface Props {
    timeline: TimelineData[];
}

const Timeline: React.FC<Props> = ({ timeline }) => {
    return (
        <ol className="relative border-s border-gray-200">
            {timeline.map((data, index) => (
                <li className="ms-6 mb-10" key={index}>
                    <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-[#00F3A4]"></div>
                    <p className="mb-1 text-gray-900/75">{data.datetime}</p>
                    <h1 className="mb-2 text-2xl font-bold tracking-wider">
                        {data.title}
                    </h1>
                    <p>{data.description}</p>
                </li>
            ))}
        </ol>
    );
};

export default Timeline;
