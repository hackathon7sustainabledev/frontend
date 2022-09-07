import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import GoogleMapComponent from '../components/Map/GoogleMapComponent'
import axios from 'axios';


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
        <div className='flex ml-2 mr-4 h-[10vh] mt-7'>
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
        <div className='h-[84vh] w-[100%] mt-3'>
          <div className='flex h-[45%] w-[100%] mb-4'>
            <div className='w-[48%] h-[100%] mr-3 ml-3 bg-black rounded-xl text-white'>
			<GoogleMapComponent />
            </div>
            <div className='w-[48%] h-[100%] bg-black rounded-xl'>
sfsf
            </div>
          </div>
          <div className='flex h-[45%] w-[100%]'>
            <div className='w-[48%] h-[100%] mr-3 ml-3 bg-black rounded-xl text-white'>
fse
            </div>
            <div className='w-[48%] h-[100%] bg-black rounded-xl'>
sfsf
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
