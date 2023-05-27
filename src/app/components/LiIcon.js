import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({ reference }) => {

  const { scrollYProgress } = useScroll(
    {
      target: reference,
      offset: ["center end", "center center"]
    }
  )

  return (
    <figure className='absolute left-0 stroke-dark' >
      <svg className='-rotate-90'  width='100' height='100' viewbox='0 0 100 100'>
          <circle cx='75' cy='50' r='20' className='stroke-primary stroke-1 fill-none' />
          <motion.circle cx='75' cy='50' r='20' className='stroke-[3px] fill-light'
          style={{pathLength: scrollYProgress}}
          />
          <circle cx='75' cy='50' r='10' className='animate-pulse stroke-1 fill-primary' />
          </svg>
    </figure>
  )
}

export default LiIcon