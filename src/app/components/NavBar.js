'use client'

import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import {TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

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

    const [mode, setMode] = useThemeSwitcher()

  return (
    <header className= 'w-full bg-light text-dark px-32 py-8 font-medium flex items-center justify-between dark:text-light dark:bg-dark'>
        <nav>
            <CustomLink href='/' title='Home' className='mr-4' />
            <CustomLink href='/about' title='About' className='mx-4' />
            <CustomLink href='/projects' title='Projects' className='mx-4' />
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

            <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
            `}
            >
                {
                    mode === 'dark' ? 
                        <SunIcon className={'fill-dark'} />
                     :   <MoonIcon className={'fill-dark'} />
                }
            </button>

        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        </div>
    </header>
  )
}

export default NavBar