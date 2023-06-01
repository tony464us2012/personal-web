import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <motion.div 
            className='text-dark dark:text-light/75'
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:'spring'}}>
                <h3 className='capitalize font-bold text-2xl'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light'>
                    {time} | {place} </span>
                <p className='font-medium w-full dark:text-light'>{info}</p>
            </motion.div>
        </li>
)}

const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-7xl mb-32 w-full text-center text-dark'>
            Experience
        </h2>
        
        <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-12 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' />

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
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