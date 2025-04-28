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
                <li className="mb-10 ms-6" key={index}>
                    <div className="absolute w-3 h-3 bg-[#00F3A4] rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <p className="text-gray-900/75 mb-1">{data.datetime}</p>
                    <h1 className="text-2xl font-bold mb-2 tracking-wider">{data.title}</h1>
                    <p>{data.description}</p>
                </li>
            ))}
        </ol>
    )
}

export default Timeline;