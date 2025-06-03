'use client'
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { footerText, socialMedia } from '@/data'
import { useLanguage } from '@/hooks/LanguageContext'

const Footer = () => {

    const {description,descriptionES,title,titleES} = footerText;
    const {language} = useLanguage();

    return (
        <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='flex flex-col items-center text-4xl md:text-6xl font-bold bg-gradient-to-b from-gray-100 to-purple-400 bg-clip-text text-transparent
                lg:max-w-[50vw]'>
                    {language === 'EN' ? title : titleES}
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>{language === 'EN' ? description : descriptionES}</p>
                <a href="mailto:arielnavas05@gmail.com">
                    <MagicButton 
                    title="Let's get in touch"
                    icon={<FaLocationArrow/>}
                    position="right"/>
                </a>
            </div>

            <div className='flex flex-col mt-16 md:flex-row justify-between items-center'>
                <p className="md:text-base text-sm md:font-normal font-light text-center text-white-300  mt-10">
                    &copy; {new Date().getFullYear()} Ariel Navas. All rights reserved.
                </p>

                <div className='flex items-center md:gap-3 gap-6 mt-5'>
                    {socialMedia.map(({ id, img }, index) => (
                        <div key={id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180
                        bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <img src={img} alt={id.toString()} width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer