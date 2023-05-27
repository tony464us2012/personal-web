import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <motion.div 
            className='text-dark'
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:'spring'}}>
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;
                    <a href={companyLink} target='_blank' className='text-primary capitalize'> {company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75'>{time} | {address} </span>
                <p className='font-medium w-full'>{work}</p>
            </motion.div>
        </li>
)}

const Experience = () => {
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

        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-12 top-0 w-[4px] h-full bg-dark origin-top' />

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                    position='Web Developer'
                    company='109 Burger Joint'
                    companyLink='https://109burgerjoint.com/'
                    address='Miami, FL'
                    time='2019 - Present'
                    work='Achieved a 30% increase in takeout sales revenue 
                    by eliminating third-party ordering platforms and their 
                    fees. I implemented a user-friendly account system that 
                    enables customers to conveniently track and access their 
                    order history. Additionally, I developed a dynamic craft 
                    beer menu utilizing the Untapped API, catering to beer 
                    enthusiasts. Furthermore, I successfully improved SEO 
                    strategies to drive sales growth and cultivate positive 
                    word-of-mouth promotion.'
                    />
                    <Details
                    position='Web Developer'
                    company='Fence Kings'
                    companyLink='https://myfencekings.com/'
                    time='2018 - 2019'
                    address='Miami, FL'
                    work='Developed and implemented a pricing estimator for fencing 
                    projects, accounting for various factors like fence styles, length, 
                    gates, and doors. This led to substantial sales growth through an 
                    increased number of estimates generated. Additionally, I designed 
                    and implemented a modern, user-friendly UX/UI interface, resulting 
                    in improved interactivity and an enhanced user experience. 
                    Furthermore, I successfully employed effective SEO strategies to 
                    boost online visibility and attract a larger pool of potential 
                    customers.' 
                    />
            </ul>
        </div>
        
        </div>
  )
}

export default Experience