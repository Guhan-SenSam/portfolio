import {AnimatedTooltip} from "./AnimatedGroup.tsx";
import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {FC} from "react";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface TechSection {
    title: string;
    items: TechItem[];
}

interface TechItem {
    id: number;
    name: string;
    image: string;
    designation: string;
}

interface TechBentoGridProps {
    data: TechSection[];
}

export const TechBentoGrid: FC<TechBentoGridProps> = ({ data }) => {
    return (
        <div className="flex flex-row gap-4 p-6 flex-wrap mx-20 justify-center">
            {data.map((section) => (
                <div
                    key={section.title}
                    className="border p-6 rounded-2xl pr-20 border-border hover:border-accent hover:scale-[102%] transition-all duration-300 hover:shadow-accent hover:shadow-[0px_0px_10px_3px]"
                >
                    <h3 className="text-white text-2xl font-semibold mb-6">{section.title}</h3>
                    <AnimatedTooltip items={section.items} />
                </div>
            ))}
        </div>
    );
};
