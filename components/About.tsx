import { motion } from 'framer-motion'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
    pageInfo: PageInfo
}

function About({pageInfo}: Props) {
  return (
    <motion.div
    className='flex flex-col text-center relative h-screen md:text-left md:flex-row max-w-7xl m-auto px-3 justify-evenly items-center'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration: 1.5}}
    viewport={{once: true}}
    >
        <h3 className='absolute top-24 tracking-[20px] text-gray-500 text-2xl uppercase'>About</h3>
        <motion.img
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{duration: 1.2}}
            viewport={{once: true}}
            whileInView={
                {
                    x: 0,
                    opacity: 1
                }
            }
        src={urlFor(pageInfo?.profilePicture).url()} className='-mb-[150px] md:mb-0 flex-shrink-0 w-[200px] h-[200px] rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' alt="Santiago Aguirre Image" />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-3xl md:text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background </h4>
            <p className='text-base text-xs md:text-xl'>{pageInfo.backgroundInformation}</p>
        </div>
    </motion.div>
  )
}

export default About