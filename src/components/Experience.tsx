'use client'
import { companies, experienceText, workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'
import { useLanguage } from '@/hooks/LanguageContext';

function Experience() {
    const {language} = useLanguage();
    const { title, titleES } = experienceText;

    return (
        <div className='py-20' id='experience'>
            <h1 className='flex flex-col items-center text-4xl md:text-6xl font-bold bg-gradient-to-b from-gray-100 to-blue-400 bg-clip-text text-transparent'>
                {language === 'EN' ? title : titleES}
            </h1>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 '>
                {workExperience.map(({ id, className, description, thumbnail, title, descriptionES, titleES }) => (
                    <Button
                        key={id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius='1.75rem'
                        className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                    >
                        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={thumbnail} alt={thumbnail} className={'lg:w-32 md:w-20 w-16'} />

                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>
                                    {language === 'EN' ? title: titleES}
                                </h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>{language === 'EN' ? description : descriptionES}</p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-12'>
                {companies.map(({ id, img, nameImg, name }) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2 z-10'>
                        <img src={img} alt={name} className='md:w-[120px] w-[50px]' />
                        <img src={nameImg} alt={name} className='md:w-[120px] w-[80px]' />
                        {/* <img src={img} alt={name} className='md:w-10 w-5' /> */}
                        {/* <img src={nameImg} alt={name} className='md:w-24 w-20' /> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience