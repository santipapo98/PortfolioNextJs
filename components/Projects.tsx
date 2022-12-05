import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function Projects({}: Props) {
  const projects = [1,2,3,4,5]
  return (
    <motion.div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}>
        <h3 className='absolute top-24 tracking-[20px] text-gray-500 text-2xl uppercase'>Projects</h3>
        
          <div className='relative w-full h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar'>
            {projects.map((project, index) => {
              return (
                <div key={index} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                  <motion.img 
                  initial={{
                    y: -300,
                    opacity: 0
                  }}
                  transition={{duration: 1.2}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  src="https://via.placeholder.com/300.png/09f/fff" alt="" />
                  <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'> <span className='underline decoration-[#F7AB0A]/50'> Case Study {index + 1} of {projects.length}:</span></h4>
                    <p className='text-lg text-center md:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita necessitatibus omnis dignissimos iure aspernatur. Assumenda ad repellendus in quam sed rerum, accusantium amet reprehenderit corrupti quo aliquam veritatis asperiores aut!</p>
                  </div>
                </div>
              )
            })}
          </div>
        
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects