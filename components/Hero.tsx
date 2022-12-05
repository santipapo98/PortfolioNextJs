import Link from 'next/link'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi there, my name is Santiago","Love-for-programming.tsx", "<EpistemophilicByChoice />"], loop: true, delaySpeed: 2000
    })
    
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
        <BackgroundCircles/>
        <img className='rounded-full relative h-32 w-32 mx-auto object-cover' src="/Santiago Aguirre.jpg" alt="Santiago Aguirre Picture" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
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