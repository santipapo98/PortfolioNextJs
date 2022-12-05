import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200'>
        <motion.img className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='/Santiago Aguirre.jpg'
        alt=''
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{duration:1.2}}
        viewport={{once: true}}
        whileInView={{
            y: 0,
            opacity: 1,
        }}
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of hello</h4>
            <p className='font-bold text-2xl mt-1'>KASMAICK</p>
            <div className='flex space-x-2 my-2'>   
                <img className='h-10 w-10 rounded-full' src="https://img.icons8.com/ultraviolet/512/react.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://img.icons8.com/ultraviolet/512/react.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://img.icons8.com/ultraviolet/512/react.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://img.icons8.com/ultraviolet/512/react.png" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started... - Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard