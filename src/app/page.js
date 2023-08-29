'use client'
import Image from 'next/image'
import Layout from './components/Layout'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from './components/Icons'
import Footer from './components/Footer'
import profilePic from '../../public/images/profile/developer-pic-1.png'

const Home = () => {
  return (
    <main className='flex item-center text-dark bg-light dark:bg-dark w-full min-h-[93vh] dark:text-light'>
      <Layout className='pt-16 sm:pt-8'>
        <div className='flex items-center justify-center w-full h-full lg:flex-col pb-20'>
        <div className='w-1/2 md:w-full'>
            <Image src={profilePic} alt="anthony" className='w-full h-auto md:inline-block md:w-full' 
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
            />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            <AnimatedText text='Creating User Experience'  
            className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:text-6xl md:!text-5xl sm:!tex-3xl'/> 
            <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
            As a proficient full-stack developer, my commitment lies in transforming concepts into groundbreaking web applications. 
            My passion involves crafting top-notch software that enhances the lives of others. My expertise spans from serving individuals to small businesses. 
            All my work originates from my home office. 
            Discover my portfolio and look into my latest React.js projects and web development insights.
            </p>
            <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link href='/Resume.pdf' target={'_blank'} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid
              border-border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
              hover:dark:border-light md:p-2 md:px-4 md:text-base' download={true}>
                Resume
                <LinkArrow className='w-6 ml-2 text-sm' />
              </Link>
              <Link href='mailto:tony464us2011@yahoo.com' target={'_blank'} className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>
                Email
              </Link>
            </div>
            </div>
        </div>
        <Footer />
      </Layout>
    </main>
  )
}

export default Home
