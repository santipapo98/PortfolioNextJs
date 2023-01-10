import {motion} from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Link from 'next/link'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

type Props = {
  projects: Project[]
}

function Projects({projects}: Props) {
  return (
    <motion.div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}>

        <h3 className='absolute top-24 tracking-[20px] text-gray-500 text-2xl uppercase'>Projects</h3>

          <div className='relative w-full h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar'>
            {projects.map((project, index) => {
              return (
                <div key={project?._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-4 md:p-44 h-screen">
                  <motion.img
                  initial={{
                    y: -300,
                    opacity: 0
                  }}
                  transition={{duration: 1.2}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  className='w-[full] h-[200px]'
                  src={urlFor(project?.image).url()} alt="" />
                  <div className='relative space-y-4 px-0 md:px-10 max-w-6xl'>
                  {projects.length !== index + 1 && <ArrowSmallRightIcon className='absolute top-1/4 right-1 text-[#F7AB0A] h-7 w-7 animate-pulse'/> }
                    <h4 className='text-4xl font-semibold text-center'> <Link href={project?.linkToBuild} target="_blank"><span className='underline decoration-[#F7AB0A]/50'>{project?.title}</span></Link></h4>
                    <div className='flex items-center justify-center space-x-2 mt-0'>
                      {project?.technologies?.map((technology) => {
                        return (<img className='h-10 h-10' key={technology?._id} src={urlFor(technology.image).url()}/> )
                      })}
                    </div>
                    <p className='text-md text-center md:text-left'>{project?.summary}</p>
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