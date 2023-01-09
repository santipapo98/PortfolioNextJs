import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}

function WorkExperience({experiences}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration: 1.5}}
    viewport={{once: true}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full md:px-10 md:p-0 justify-evenly ms-auto items-center'>
        <h3 className='absolute top-20 tracking-[20px] text-gray-500 text-2xl uppercase'>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-3 md:p-10  snap-x snap-mandatory scrollbar'>
          {experiences?.map((experience) => {
            return (
              <ExperienceCard key={experience._id} experience={experience}/>
            )
          })}
        </div>
    </motion.div>
  )
}

export default WorkExperience