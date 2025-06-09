"use client";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { useLanguage } from "@/hooks/LanguageContext";
import { approachText, approachTextData } from "@/data";


const Approach = () => {
    const { language } = useLanguage();
    const { title, titleES } = approachText;
    const a = approachTextData[0]
    const b = approachTextData[1]
    const c = approachTextData[2]

    return (
        <section className="w-full py-20 mt-28 md:mt-[700px]" id="approach">
            <h1 className='flex flex-col items-center text-4xl md:text-6xl font-bold bg-gradient-to-b from-gray-100 to-red-400 bg-clip-text text-transparent'>
                {language === 'EN' ? title : titleES}
            </h1>

            <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
                <Card title={language === 'EN' ? a.title : a.titleES} icon={<AceternityIcon order="1" />}
                    description={language === 'EN' ? a.description : a.descriptionES}>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title={language === 'EN' ? b.title : b.titleES} icon={<AceternityIcon order="2" />}
                    description={language === 'EN' ? b.description : b.descriptionES}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                </Card>
                <Card title={language === 'EN' ? c.title : c.titleES} icon={<AceternityIcon order="3" />}
                    description={language === 'EN' ? c.description : c.descriptionES}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </section>
    );
}

const Card = ({
    title,
    icon,
    children,
    description,
}: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    description?: string;
}) => {
    const [hovered, setHovered] = React.useState(false);

    //Handle mobile hover state
    const [isTouchDevice, setIsTouchDevice] = React.useState(false);

    useEffect(() => {
        setIsTouchDevice(
            "ontouchstart" in window || navigator.maxTouchPoints > 0
        );
    }, []);

    const showContent = hovered || isTouchDevice;

    return (
        <div
            onMouseEnter={() => !isTouchDevice && setHovered(true)}
            onMouseLeave={() => !isTouchDevice && setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]
            max-w-sm w-full mx-auto p-4 relative h-[30rem] lg:h-[35rem] rounded-3xl"
        >
            {/* Corner icons */}
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            {/* Content shown on hover OR mobile */}
            <AnimatePresence>
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Icon and text */}
            <div className="relative z-20">
                <div className={`
                    text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                    transition duration-200 w-full mx-auto flex items-center justify-center
                    ${showContent ? 'opacity-0 translate-y-4' : 'opacity-100'}
                `}>
                    {icon}
                </div>
                <h2 className={`
                    text-3xl font-bold text-center mt-4 transition duration-200 relative z-10
                    ${showContent ? 'opacity-100 text-white -translate-y-2' : 'opacity-0 text-black'}
                `}>
                    {title}
                </h2>
                <h2 className={`
                    text-sm font-bold text-center mt-4 transition duration-200 relative z-10
                    ${showContent ? 'opacity-100 text-white -translate-y-2' : 'opacity-0 text-black'}
                `} style={{ color: showContent ? "#e4ecff" : undefined }}>
                    {description}
                </h2>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-bold text-white backdrop-blur-3xl text-2xl p-x5 p-y2">
                    {order}
                </span>
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

export default Approach;
