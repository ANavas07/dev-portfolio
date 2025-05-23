import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { div } from 'motion/react-client'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className='flex flex-col items-center text-4xl md:text-6xl font-bold bg-gradient-to-b from-gray-100 to-purple-400 bg-clip-text text-transparent'>
                A small selection of {' '}
                <span className='text-purple'>my recent projects</span>
            </h1>

            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ title, description, iconLists, id, img, link }) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] 
                            overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src='/bg.png' alt='bgimg' />
                                </div>
                                <img src={img} alt={title} className='z-10 absolute bottom-0' />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {description}
                            </p>
                            {/* technologies */}
                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10
                                        lg:h-10 w-8 h-8 flex justify-center items-center'
                                            style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Check live site */}
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-cs text-sm text-purple-300'>Check Live Site</p>
                                <FaLocationArrow className='ms-3' color='#CBACF9'/>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects