"use client"
import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import profilePic from '/public/images/profile/developer-pic-2.jpg'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'

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
        <span ref={ref}></span>
    )
}

const page = () => {
  return (
    <>
        <Head>
            <title>Anthony | About Page</title>
            <meta name='description' content='Anthony Castro About Page' />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
              <AnimatedText text='Passionate Software Engineer' className='mb-16' />
              <div className='grid w-full grid-cols-8 gap-16'>
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                    <p className='font-medium text-dark/75'> 
                        Hi, I'm Anthony, a web developer and UI/UX designer with a passion for creating 
                        beautiful, intuitive, and highly functional websites and applications. I have 3+
                        years of experience in web development and UI/UX design.
                    </p>
                    <p className='my-4 font-medium text-dark/75'>
                        I am a self-taught developer and designer. I have a passion for learning and
                        sharing my knowledge with others as publicly as possible. I am a big believer of
                        open-source and giving back to the community.
                    </p>
                    <p className='font-medium text-dark/75'>
                        I am currently working as a freelance developer and designer. I am available for
                        hire. If you have a project that you want to get started, think you need my help
                        with something or just fancy saying hey, then get in touch.
                    </p>
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                   {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'>  */}
                        <Image src={profilePic} alt="anthony" className='w-full h-auto rounded-2xl' />
                   {/* </div> */}
                </div>
                   <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold text-dark' >
                               <AnimatedNumber value={6} />+
                            </span>
                            <h2 className='text-cl font-medium capitalize text-dark'>satisfied clients</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold text-dark'>
                                <AnimatedNumber value={25} />+
                            </span>
                            <h2 className='text-cl font-medium capitalize text-dark'>projects completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold text-dark'>
                               <AnimatedNumber value={3} />+
                            </span>
                            <h2 className='text-cl font-medium capitalize text-dark'>years of experience</h2>
                        </div>
                   </div>
              </div>
              {/* <Skills /> */}
              <Experience />
              <Education />
            </Layout>
        </main>
    </>
  )
}

export default page