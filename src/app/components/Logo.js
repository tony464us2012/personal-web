"use client"

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href='/' className='w-16 h-16 bg-dark text-light flex items-center justify-center text-2xl font-bold'
        whileHover={{
            backgroundColor: '#58E6D9',
            transition: {duration: 1, repeat: Infinity, repeatType: 'reverse'}
        }}>
            Anthony Castro
        </MotionLink>
    </div>
  )
}

export default Logo