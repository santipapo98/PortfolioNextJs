import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import {SocialIcon} from 'react-social-icons';
import { Social } from '../typings';

type Props = {
  socials: Social[],
}

function Header({socials}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl m-auto z-20 xl:items-center'>
      <motion.div initial= {{ x: -500, opacity: 0, scale: 0.5 }} animate={{x: 0, opacity: 1, scale: 1}} transition={{duration: 1.5}} className='flex items-center'>
        {socials.map((social) => {
          return <SocialIcon key={social._id} url={social.url} target="_blank" fgColor='gray' bgColor='transparent' />
        })}
      </motion.div>

      <motion.div initial= {{ x: 500, opacity: 0, scale: 0.5 }} animate={{x: 0, opacity: 1, scale: 1}} transition={{duration: 1.5}} className='flex items-center'>
        <Link href='#contact'>
          <p className='uppercase text-gray-400 text-sm leading-[50px]'>Get In Touch</p>
        </Link>
      </motion.div>
    </header>
  )
}

export default Header