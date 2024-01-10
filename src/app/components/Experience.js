import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const Details = ({ title, date, credential }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-12 last:mt-6 w-[70%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            {/* <LiIcon reference={ref} /> */}
            <motion.div 
            className='text-dark dark:text-light/75'
            initial={{y:100}}
            whileInView={{y:0}}
            transition={{duration: 1, type:'slide-right'}}>
                <h4 className='capitalize font-bold text-xl mb-1 sm:text-lg xs:text-md'>{title}&nbsp;
                </h4>
                <span className='capitalize font-medium text-dark/75
                dark:text-light/75 xs:text-sm'>{date} </span>
                <p className='font-medium mt-1 md:text-sm'>{credential}</p>
            </motion.div>
        </li>
)}

const Experience = () => {
   
  return (
    <div className='my-24'>
        
        {/* <AnimatedText text='Experience' className='mb-16 lg:!text-6xl sm:!text-5xl xs:!text-5xl sm:mb-8' /> */}
        <motion.div 
          className='text-dark dark:text-light/75'
          initial={{y:50}}
          whileInView={{y:0}}
          transition={{duration: 1, type:'spring'}}>
            <h1 className='text-3xl underline font-bold text-center text-dark dark:text-light mb-6 lg:!text-5xl sm:!text-3xl xs:!text-2xl sm:mb-8'>Certifications</h1>    
        </motion.div> 
        
        <div className='w-full mx-auto relative lg:w-[90%] md:w-full'>

        {/* <motion.div style={{scaleY: scrollYProgress}} 
        className='absolute left-12 mt-10 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' /> */}

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                    title='Meta Front-End Developer Specialization'
                    date='Issued Mar 2023'
                    credential='Credential ID H8N5L2VYZ7HK'
                    />
            </ul>
        </div>
        
        </div>
  )
}

export default Experience