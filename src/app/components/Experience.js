import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'
import AnimatedText from './AnimatedText'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-12 last:mt-6 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            {/* <LiIcon reference={ref} /> */}
            <motion.div 
            className='text-dark dark:text-light/75'
            initial={{y:100}}
            whileInView={{y:0}}
            transition={{duration: 1, type:'slide-right'}}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;
                    <a href={companyLink} target='_blank' className='text-primary capitalize dark:text-primaryDark'> {company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75
                dark:text-light/75 xs:text-sm'>{time} | {address} </span>
                <p className='font-medium w-full md:text-sm'>{work}</p>
            </motion.div>
        </li>
)}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["center end", "center center"]
        }
    )
  return (
    <div className='my-32'>
        
        {/* <AnimatedText text='Experience' className='mb-16 lg:!text-6xl sm:!text-5xl xs:!text-5xl sm:mb-8' /> */}
        <motion.div 
          className='text-dark dark:text-light/75'
          initial={{y:50}}
          whileInView={{y:0}}
          transition={{duration: 2, type:'spring'}}>
            <h1 className='text-5xl font-bold text-center text-dark dark:text-light mb-8 lg:!text-5xl sm:!text-4xl xs:!text-4xl sm:mb-8'>Experience</h1>    
        </motion.div> 
        
        <div ref={ref} className='w-full red mx-auto relative lg:w-[90%] md:w-full'>

        {/* <motion.div style={{scaleY: scrollYProgress}} 
        className='absolute left-12 mt-10 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' /> */}

            <ul className='w-full flex flex-col items-start justify-between ml-4  xs:ml-2'>
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