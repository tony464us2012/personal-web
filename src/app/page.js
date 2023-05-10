import Image from 'next/image'
import NavBar from './components/NavBar'
import Layout from './components/Layout'
import profilePic from '../../public/images/profile/developer-pic-1.png'

export default function Home() {
  return (
    <div>
      <NavBar />
    <main className='flex item-center text-dark w-full min-h-screen'>
      <Layout>
        <div className='flex items-center justify-center w-full h-full'>
          <div>
            <Image src={profilePic} alt="anthony" className='w-full h-auto' />
          </div>
        </div>
      </Layout>
    </main>
    </div>
  )
}
