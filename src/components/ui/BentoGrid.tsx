'use client';

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBgAnimation";
import Lottie from "lottie-react";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { useLanguage } from "@/hooks/LanguageContext";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id: number,
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {

    const [copied, setCopied] = useState(false);
    const { language } = useLanguage();

    const handleCopy = () => {
        const cvURL = language === 'EN' ?
        'https://utaedu-my.sharepoint.com/:b:/g/personal/anavas6516_uta_edu_ec/EaI1hBCSddZNpHUnVzUVicUBU9-2Rv_JzchN-QjdrtWoow?e=uZkhFF':
        'https://utaedu-my.sharepoint.com/:b:/g/personal/anavas6516_uta_edu_ec/Ea3qTtrnZqhDrxvHcfQBpxMBLPtmnyrwWBcDV6y5obArIA?e=PMupiq'
        const link = document.createElement('a');
        link.href= cvURL;
        link.target = '_blank';
        link.download = `cv_Ariel_Navas_${language}.pdf`;
        link.click();
        setCopied(true);
    };


    return (
        <div
            className={cn(
                `group/bento relative overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4  
                rounded-3xl  transition duration-200 hover:shadow-xl border border-white/[0.1]`,
                className,
            )}
            style={{
                background: 'rgb(4,7,29)',
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
            }}
        >
            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'object-cover, object-center')}
                        >
                        </img>
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className={'object-cover, object-center w-full h-full'}
                        >
                        </img>
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
                    </BackgroundGradientAnimation>
                )}

                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10',
                )}>
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="mt-2 mb-2 font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>
                    {/* </div> */}
                    {id === 2 && (
                        <div className="flex h-16 overflow-hidden relative">
                            <img src="./dog.gif" alt="dog" className="size-16 md:size-20 object-cover rounded-lg absolute animate-move" />
                        </div>
                    )}

                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-3 ">
                                {['React', 'Angular', 'Java'].map((item) => (
                                    <span key={item} className="py-2 px-3 text-xs opacity-50 rounded-lg
                                text-center bg-[#10132E]">
                                        {item}
                                    </span>
                                ))}
                                <span className="py-4 ox-3 rounded-lg text-center bg-[#10132e]" />
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <span className="py-4 ox-3 rounded-lg text-center bg-[#10132e]" />

                                {['Springboot', 'Node Js', 'Oracle'].map((item) => (
                                    <span key={item} className="py-2  px-3 text-xs opacity-50 rounded-lg
                                text-center bg-[#10132E]">
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-col gap-3 ">
                                {['Sql Server', 'PHP', 'Docker'].map((item) => (
                                    <span key={item} className="py-2  px-3 text-xs opacity-50 rounded-lg
                                    text-center bg-[#10132E]">
                                        {item}
                                    </span>
                                ))}
                                <span className="py-4 ox-3 rounded-lg text-center bg-[#10132e]" />
                            </div>
                        </div>
                    )}

                    {/* Download my cv */}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie loop={copied} autoplay={copied}
                                    animationData={animationData} rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                                />
                            </div>
                            <MagicButton
                                title={copied ? 'Copied!' : language === 'EN' ? 'Download my CV' : 'Descargar mi CV'}
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="!bg-[#161a31]"
                                handleClick={() => handleCopy()}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
