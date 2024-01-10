"use client";
import React from 'react'
import Head from 'next/head'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../components/Icons'
import cryptoScreener from '../../../public/images/projects/crypto-screener-cover-image.jpg'
import Footer from '../components/Footer';


const Project = ({ title, type, img, link, github }) => {

    return (
        <article className='w-full flex items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 text-dark'>
            {/* <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] 
            bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' /> */}
           {/* <Link href={link} target='_blank'
           className='w-full cursor-pointer overflow-hidden rounded-lg'>
               <Image src={img} alt={title} className='w-full h-auto' priority />
           </Link> */}

           <div className='w-full flex flex-col item-start justify-between mt-4'>
               <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
                   {type}
               </span>
               <Link href={link} 
                    target='_blank' 
                    className='hover:underline underline-offset-2'>
                   <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
               </Link>
               <div className='w-full mt-2 flex items-center justify-between'>
                   <Link href={link} 
                        target='_blank' 
                        className='text-lg font-semibold underline md:text-base'>
                       Visit
                   </Link>
                   <Link href={github} 
                        target='_blank' 
                        className='w-8 md:w-6'>
                       <GithubIcon className=' text-dark dark:text-light' />
                   </Link>
               </div>    
           </div>
       </article>
    )}

const projects = () => {
  return (
    <>
        <Head>
            <title>Anthony | Projects Page</title>
            <meta name='description' content='Anthony Castro About Page' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Imagination is more important than knowledge' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />  
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    {/* <div className='col-span-12'>
                        <FeaturedProject 
                            type='Featured Project'
                            title='109 Burger Joint'
                            summary=''
                            img= {cryptoScreener}
                            link='https://www.google.com'
                            github='https://github.com/tony464us2012/109'
                         />
                    </div> */}
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                            title='109 Burger Joint'
                            img= {cryptoScreener}
                            link='https://109-delta.vercel.app/'
                            github='https://github.com/tony464us2012/109'
                         />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                            title='Project-1'
                            img= {cryptoScreener}
                            link='https://www.google.com'
                            github='https://www.google.com'
                         />
                    </div>
                </div>
                <Footer />
            </Layout>
        </main>
    </>
  )
}

export default projects