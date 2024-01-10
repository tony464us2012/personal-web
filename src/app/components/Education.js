import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const Details = ({ type, time, place }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='border-black my-4 flex items-center justify-around'>
            {/* <LiIcon reference={ref} /> */}
            <motion.div 
            className='text-dark dark:text-light/75 flex flex-col items-center justify-center'
            initial={{y:100}}
            whileInView={{y:0}}
            transition={{duration: 1, type:'spring'}}>
                <h4 className='capitalize font-bold text-xl mb-1 sm:text-lg xs:text-md'>
                    {place}
                </h4>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {type} </span>
                <p className='font-medium dark:text-light md:text-sm'>{time}</p>
            </motion.div>
        </li>
)}

const Education = () => {
   
  return (
    <div className='mt-24 mb-32'>
        <motion.div 
          className='text-dark dark:text-light/75'
          initial={{y:50}}
          whileInView={{y:0}}
          transition={{duration: 1, type:'spring'}}>
            <h1 className='text-3xl underline font-bold text-center text-dark dark:text-light mb-6 lg:!text-3xl sm:!text-2xl xs:!text-2xl sm:mb-6'>Education</h1>    
        </motion.div> 
        
        <div className='w-full mx-auto relative lg:w-[90%] md:w-full'>

        {/* <motion.div style={{scaleY: scrollYProgress}} 
        className='absolute left-12 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' /> */}

            <ul className='w-full flex flex-col items-center justify-center ml-4 xs:ml-2'>
                <Details 
                    type='Associate of Arts'
                    time='2012 - 2015'
                    place='Miami Dade College'
                    />
                <Details 
                    type='Bachelor of Arts'
                    time='2015 - 2017'
                    place='Florida International University'
                    />
            </ul>
        </div>
        
        </div>
  )
}

export default Education