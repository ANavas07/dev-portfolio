'use client'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/textGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { heroText } from '@/data';
import { useLanguage } from '@/hooks/LanguageContext';

const Hero = () => {
    const {language} = useLanguage();
    const {description,descriptionES,shortTitle,shortTitleES,title,titleES} = heroText;

    return (
        <div className='pt-5' >
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='-top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,rgba(228,228,231,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.3)_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.3)_1px,transparent_1px)]",
                    )}
                />
                <div className='flex justify-center relative my-20 z-10'>
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100'>{language==='EN' ? shortTitle: shortTitleES}</h2>
                        <TextGenerateEffect key={language} className='text-center text-[40px] md:text-5xl lg:text-6xl' words={language==='EN' ? title : titleES} />
                        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                            {language==='EN' ? description : descriptionES}
                        </p>

                        <a href="#about">
                            <MagicButton title={language==='EN' ? 'View my job': 'Mira mi trabajo'} icon={<FaLocationArrow/>} position='right' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero