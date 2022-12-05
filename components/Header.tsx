import { motion } from 'framer-motion';
import React from 'react'
import {SocialIcon} from 'react-social-icons';

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl m-auto z-20 xl:items-center'>
      <motion.div initial= {{ x: -500, opacity: 0, scale: 0.5 }} animate={{x: 0, opacity: 1, scale: 1}} transition={{duration: 1.5}} className='flex items-center'>
        <SocialIcon url='https://www.linkedin.com/in/santiagoaguirreg/' fgColor='gray' bgColor='transparent' />
        <SocialIcon url='https://www.linkedin.com/in/santiagoaguirreg/' fgColor='gray' bgColor='transparent' />
        <SocialIcon url='https://www.linkedin.com/in/santiagoaguirreg/' fgColor='gray' bgColor='transparent' />
      </motion.div>
      <motion.div initial= {{ x: 500, opacity: 0, scale: 0.5 }} animate={{x: 0, opacity: 1, scale: 1}} transition={{duration: 1.5}} className='cursor-pointer'>
        <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
      <p className='md:inline-flex sm:hidden uppercase text-gray-400 text-sm'>Get In Touch</p>
      </motion.div>
    </header>
  )
}

export default Header