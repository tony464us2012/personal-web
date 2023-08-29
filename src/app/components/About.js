// "use client"
// import React, { useEffect } from 'react'
// import Head from 'next/head'
// import Image from 'next/image'
// import AnimatedText from '../components/AnimatedText'
// import Layout from '../components/Layout'
// import profilePic from '/public/images/profile/developer-pic-2.jpg'
// import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
// import { useRef } from 'react'
// import Skills from './Skills'
// import Experience from '../components/Experience'
// import Education from '../components/Education'

// const AnimatedNumber = ({ value }) => {
//     const ref = useRef(null)
//     const motionValue = useMotionValue(0)
//     const springValue = useSpring(motionValue, {
//         duration: 3000
//     })
//     const isInView = useInView(ref, {once: true})

//     useEffect(() => {
//         if(isInView) {
//             motionValue.set(value)
//         }
//     }, [isInView, value, motionValue])

//     useEffect(() => {
//         springValue.on("change", (latest) => {
//             if(ref.current && latest.toFixed(0) <= value) {
//                 ref.current.textContent = latest.toFixed(0)
//             }
//         })
//     }, [springValue, value])


//     return (
//         <span className='dark:text-light' ref={ref}></span>
//     )
// }

// const About = () => {
//   return (
//     <>
//         <Head>
//             <title>Anthony | About Page</title>
//             <meta name='description' content='Anthony Castro About Page' />
//         </Head>
//         <main className='flex w-full flex-col items-center justify-center dark:text-light'>
//             <Layout className='pt-16'>
//               <AnimatedText text='Passionate Software Engineer' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
//               <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
//                 <div className='col-span-3 flex flex-col items-start justify-start dark:text-light xl:col-span-4 md:order-2 md:col-span-8'>
//                     <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>Biography</h2>
//                     <p className='font-medium text-dark/75 dark:text-light'> 
//                         Hi, I'm Anthony, a web developer and UI/UX designer with a passion for creating 
//                         beautiful, intuitive, and highly functional websites and applications. I have 3+
//                         years of experience in web development and UI/UX design.
//                     </p>
//                     <p className='my-4 font-medium text-dark/75 dark:text-light'>
//                         I am a self-taught developer and designer. I have a passion for learning and
//                         sharing my knowledge with others as publicly as possible. I am a big believer of
//                         open-source and giving back to the community.
//                     </p>
//                     <p className='font-medium text-dark/75 dark:text-light'>
//                         I am currently working as a freelance developer and designer. I am available for
//                         hire. If you have a project that you want to get started, think you need my help
//                         with something or just fancy saying hey, then get in touch.
//                     </p>
//                 </div>
//                 <div className='col-span-3 relative h-max rounded-2xl p-8 xl:col-span-4 md:order-1 md:col-span-8'>
//                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'> 
//                         <Image src={profilePic} alt="anthony" className='w-full h-auto rounded-2xl'
//                         priority
//                         sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 3vw'
//                         />
//                    </div>
//                 </div>
//                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row sm:items-center md:order-3'>
//                         <div className='flex flex-col items-end justify-center xl:items-center'>
//                             <span className='inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl' >
//                                <AnimatedNumber value={6} />+
//                             </span>
//                             <h2 className='text-cl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base'>satisfied clients</h2>
//                         </div>
//                         <div className='flex flex-col items-end justify-center'>
//                             <span className='inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
//                                 <AnimatedNumber value={25} />+
//                             </span>
//                             <h2 className='text-cl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base'>projects completed</h2>
//                         </div>
//                         <div className='flex flex-col items-end justify-center'>
//                             <span className='inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
//                                <AnimatedNumber value={3} />+
//                             </span>
//                             <h2 className='text-cl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base'>years of experience</h2>
//                         </div>
//                    </div>
//               </div>
//               {/* <Skills /> */}
//               <Experience />
//               <Education />
//             </Layout>
//         </main>
//     </>
//   )
// }
// export default About