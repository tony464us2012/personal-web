'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Layout from './Layout'
import { SunIcon, MoonIcon } from './Icons'
import useThemeSwitcher from './hooks/useThemeSwitcher'


const Footer = () => {

  const [mode, setMode] = useThemeSwitcher()

  return (
    <footer className='w-full border-t-2 border-solid mt-20 pt-6 border-dark font-small text-lg text-dark dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
                Built by &nbsp;
            <Link href='/' className='underline underline-offset-2' target={'_blank'}>Anthony Castro</Link>
            </div>
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
        </Layout>
    </footer>
  )
}

export default Footer