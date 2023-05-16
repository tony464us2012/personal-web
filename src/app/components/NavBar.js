'use client'

import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import {TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className='' }) => {
    const pathname = usePathname()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark 
            absolute -bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? 'w-full' : 'w-0'}`} >
            &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header className= 'w-full px-32 py-8 font-medium flex items-center '>
        <nav>
            <CustomLink href='/' title='Home' className='mr-4' />
            <CustomLink href='/about' title='About' className='mx-4' />
            <CustomLink href='/projects' title='Projects' className='mx-4' />
            <CustomLink href='/articles' title='Articles' className='ml-4' />
        </nav>
        {/* <Logo />  */}
        <nav className='flex items-center ml-auto flex-wrap'>
            
            <motion.a href='https://twitter.com' target={"_blank"}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}
            className='w-6 mr-3'
            ><TwitterIcon /></motion.a>

            <motion.a href='https://https://github.com/' target={"_blank"}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}
            className='w-6 mr-3'
            ><GithubIcon /></motion.a>

            <motion.a href='https://linkedin.com' target={"_blank"}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}
            className='w-6 mr-3'
            ><LinkedInIcon /></motion.a>
            
            <motion.a href='https://pinterest.com' target={"_blank"}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}
            className='w-6 mr-3'
            ><PinterestIcon /></motion.a>

        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        </div>
    </header>
  )
}

export default NavBar