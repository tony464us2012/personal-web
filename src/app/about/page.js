"use client";
import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import profilePic from '/public/images/profile/profile.jpeg'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
// import Skills from './Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Footer from '../components/Footer';

const AnimatedNumber = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        duration: 3000
    })
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if(isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])


    return (
        <span className='dark:text-light' ref={ref}></span>
    )
}

const About = () => {
  return (
    <>
        <Head>
            <title>Anthony | About Page</title>
            <meta name='description' content='Anthony Castro About Page' />
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
              <AnimatedText text='Passionate Software Developer' className='mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8' />
              <div className='grid w-full grid-cols-8 gap-16 lg:flex lg:flex-col sm:gap-6 mb-20'>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }} 
                    className='col-span-4 flex flex-col items-start justify-start dark:text-light xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark dark:text-light'>Biography</h2>
                    <p className='font-medium text-dark dark:text-light'> 
                        My name is Anthony, a web developer and UI/UX designer with a passion for creating 
                        beautiful, intuitive, and highly functional websites and applications. I have 3+
                        years of experience in web development and UI/UX design.
                    </p>
                    <p className='my-4 font-medium text-dark dark:text-light'>
                        I am a self-taught developer and designer. I have a passion for learning and
                        sharing my knowledge with others as publicly as possible.
                    </p>
                    <p className='font-medium text-dark dark:text-light'>
                        I am currently working as a freelance developer and designer. I am available for
                        hire. If you have a project that you want to get started, think you need my help
                        with something or just fancy saying hey, then get in touch.
                    </p>
                </motion.div>
                <div className='col-span-4 relative h-max rounded-2xl p-8 xl:col-span-4 lg:order-1 md:col-span-8'>
                   <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className='top-0 -right-3 -z-10 w-[100%] h-[100%] rounded-[2rem] bg-dark'> 
                        <Image src={profilePic} alt="anthony" className='w-full h-auto md:inline-block md:w-full rounded-xl'
                        priority
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                        />
                   </motion.div>
                </div>
              </div>
                   <div className='col-span-2 flex items-end justify-around p-3 xl:col-span-8 md:border-none md:flex-col md:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <div className='text-7xl font-bold text-dark dark:border-white border-black
                             dark:text-light md:text-5xl sm:text-4xl xs:text-4xl' >
                               <AnimatedNumber value={6} />+
                            </div>
                            <h2 className='font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base'>satisfied clients</h2>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <div className='text-7xl font-bold text-dark dark:text-light md:text-5xl md:text-center sm:text-4xl xs:text-4xl'>
                                <AnimatedNumber value={25} />+
                            </div>
                            <h2 className='font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base'>projects completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center md:items-center md:text-center'>
                            <div className='text-7xl font-bold text-dark dark:text-light md:text-5xl sm:text-4xl xs:text-4xl'>
                               <AnimatedNumber value={3} />+
                            </div>
                            <h2 className='font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base'>years of experience</h2>
                        </div>
                   </div>
              <Experience />
              <Education />
              <Footer />
            </Layout>
        </main>
    </>
  )
}
export default About