import Image from 'next/image'
import NavBar from './components/NavBar'
import Layout from './components/Layout'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from './components/Icons'
import Footer from './components/Footer'
import HireMe from './components/HireMe'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import lightBulb from '../../public/images/profile/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <NavBar />
    <main className='flex item-center text-dark w-full min-h-screen'>
      <Layout className='pt-0'>
        <div className='flex items-center justify-center w-full h-full'>
          <div className='w-1/2'>
            <Image src={profilePic} alt="anthony" className='w-full h-auto' />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText text='Turning Vision Into Reality With Code and Design' /> 
            <p className='my-4 text-base font-medium'>
              As a skilled full-stack developer, I am dedicated to runing ideas into innovative web appications. I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. All of my work is produced locally from my home office in the United States. Please take a look at my work and experience below.
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
            </p>
            <div className='flex items-center self-start mt-2'>
              <Link href='/Resume.pdf' target={'_blank'} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid
              border-border-transparent hover:border-dark' download={true}>
                Resume
                <LinkArrow className='w-6 ml-2 text-sm' />
              </Link>
              <Link href='mailto:tony464us2011@yahoo.com' target={'_blank'} className='ml-4 text-lg font-medium capitalize text-dark underline'>
                Email
              </Link>
            </div>
            </div>
        </div>
        <Footer />
      </Layout>
      <HireMe />
      <div className='absolute right-8 bottom-8 inline-block w-24'>
        <Image src={lightBulb} alt="Anthonys" className='w-full h-auto' />
      </div>
    </main>
    </>
  )
}
