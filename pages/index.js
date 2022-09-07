import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='flex bg-[#2F3855]'>
      <div class="flex-none w-[20vw] h-[100vh]">
        <div className='h-[13vh] bg-[#ffbd59]'></div>
        <div className='overflow-scroll max-h-[90vh]'> 
          <Card>Agent 1</Card>
          <Card>Agent 1</Card>
          <Card>Agent 1</Card>
          <Card>Agent 1</Card>
          <Card>Agent 1</Card>
          <Card>Agent 1</Card>
          <Card>Agent 1</Card>
          <Card>Agent 1</Card>
          <Card>
            Agent 2
          </Card>
          <Card>
            Agent 3
          </Card>
          <Card>
            Agent 4
          </Card>
        </div>
      </div>
      <div class="flex-none w-[80vw] h-[100vh]">
        <div className='flex h-[10vh] mt-7'>
            <Card>
            <p className='font-normal text-gray-300'>Average Time</p>
            <p className='text-white font-black'>Dummy Text</p> 
            </Card>
            <Card>
            <p className='font-normal text-gray-300'>Distance Travelled</p>
            <p className='text-white font-black'>Dummy Text</p> 
            </Card>
            <Card>
            <p className='font-normal text-gray-300'>Conversion Rate</p>
            <p className='text-white font-black'>Dummy Text</p> 
            </Card>
            <Card>
            <p className='font-normal text-gray-300'>Current Temperature</p>
            <p className='text-white font-black'>Dummy Text</p> 
            </Card>
            <Card>
            <p className='font-normal text-gray-300'>Travel Time</p>
            <p className='text-white font-black'>Dummy Text</p> 
            </Card>
        </div>
        <div className='h-[90vh]'>

        </div>
      </div>

    </div>
  )
}
