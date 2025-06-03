'use client'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import { useLanguage } from '@/hooks/LanguageContext';


function Grid() {
    const {language} = useLanguage();

    return (
        <section id='about'>
            <BentoGrid>
                {gridItems.map((item, index) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={language==='EN' ? item.title: item.titleES}
                        description={language==='EN' ? item.description: item.descriptionES} 
                        className={item.className}
                        img = {item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={ item.titleClassName}
                        spareImg={item.spareImg}/>
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid