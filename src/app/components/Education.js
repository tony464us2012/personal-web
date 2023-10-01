import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-12 last:mb-6 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'>
            {/* <LiIcon reference={ref} /> */}
            <motion.div 
            className='text-dark dark:text-light/75'
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 1, type:'spring'}}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place} </span>
                <p className='font-medium w-full dark:text-light md:text-sm'>{info}</p>
            </motion.div>
        </li>
)}

const Education = () => {
   
  return (
    <div className='my-32'>
        <motion.div 
          className='text-dark dark:text-light/75'
          initial={{y:50}}
          whileInView={{y:0}}
          transition={{duration: 2, type:'spring'}}>
            <h1 className='text-5xl font-bold text-center text-dark dark:text-light mb-8 lg:!text-5xl sm:!text-4xl xs:!text-4xl sm:mb-8'>Education</h1>    
        </motion.div> 
        
        <div className='w-full mx-auto relative lg:w-[90%] md:w-full'>

        {/* <motion.div style={{scaleY: scrollYProgress}} 
        className='absolute left-12 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' /> */}

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                    type='Associate of Arts'
                    time='2016 - 2018'
                    place='Miami Dade College'
                    info='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    />
                <Details 
                    type='Associate of Arts'
                    time='2016 - 2018'
                    place='Florida International University'
                    info='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    />
            </ul>
        </div>
        
        </div>
  )
}

export default Education