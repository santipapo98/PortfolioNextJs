import { motion } from 'framer-motion'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
    experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center justify-end space-y-2 flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-[#292929] md:p-10 p-3 pb-10 opacity-40 hover:opacity-100 transition-opacity duration-200'>
        <motion.img className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-center'
        src={urlFor(experience.companyImage).url()}
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
            <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
            <div className='flex space-x-2 my-2'>
                {experience?.technologies?.map((technologie) => {
                    return (<img className='h-10 w-10 rounded-full' key={technologie._id} src={urlFor(technologie.image).url()} alt={technologie.title} />)
                })}

            </div>
            <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()} -{" "} {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                {experience.points.map((point) => {
                    return(<li key={point}>{point}</li>)
                })}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard