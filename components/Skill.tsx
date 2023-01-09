import React from 'react'
import {motion} from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill
}

function Skill({directionLeft, skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                opacity: 0
            }}
            transition={{
                duration: 1
            }}
            whileInView={{opacity: 1}}
            src={urlFor(skill?.image).url()}
            className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex flex-col items-center justify-center h-full'>
                <p className='text-xs md:text-sm font-bold text-black opacity-100'>{skill?.title}</p>
                <p className='text-xs md:text-sm font-bold text-lime-500 opacity-100'>{skill?.progress}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill