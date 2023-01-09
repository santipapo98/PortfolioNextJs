import Link from 'next/link'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo: PageInfo
}

function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [`Hi there, my name is ${pageInfo?.name}`,"Love-for-programming.tsx", "<Learning enthusiast />"], loop: true, delaySpeed: 2000
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
        <BackgroundCircles/>
        <img className='rounded-full relative h-32 w-32 mx-auto object-cover' src={urlFor(pageInfo?.heroImage).url()} alt="Santiago Aguirre Picture" />
        <div className='z-20 w-full'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
            <h1 className='text-4xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='white'/>
            </h1>

            <div className='pt-5'>
                <Link href="#about"><button className='hero-button-class'>About</button></Link>
                <Link href="#experience"><button className='hero-button-class'>Experience</button></Link>
                <Link href="#skills"><button className='hero-button-class'>Skills</button></Link>
                <Link href="#projects"><button className='hero-button-class'>Projects</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero