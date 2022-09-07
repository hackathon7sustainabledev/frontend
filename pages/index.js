import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie } from 'recharts';
import GoogleMapComponent from '../components/Map/GoogleMapComponent'
import { useState } from 'react';
// import axios from 'axios';



const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];
// import styles from '../styles/Home.module.css'
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export default function Home() {
	const [page, setPage] = useState(1);
  return (
	
    <div className='flex bg-[#2F3855]'>
      <div class="flex-none w-[20vw] h-[100vh]">
        <div className='h-[13vh] bg-[#ffbd59]'></div>
        <div className='overflow-scroll max-h-[90vh]'> 
          <Card>Agent 1</Card>
          <Card>Agent 2</Card>
          <Card>Agent 3</Card>
          <Card>Agent 4</Card>
          <Card>Agent 5</Card>
          <Card>Agent 6</Card>
          <Card>Agent 7</Card>
          <Card>Agent 8</Card>
          
        </div>
      </div>
      <div class="flex-none w-[80vw] h-[100vh]">
	  <p className='mt-4 ml-8 text-white text-4xl font-extrabold'>Good Morning Abhay</p>
        {page===1 && (<>
		<div className='flex ml-2 mr-4 h-[10vh] mt-7'>
            <Card>
            <p className='font-normal text-gray-300'>Average Time</p>
            <p className='text-white font-black'><span className='text-[#FFBD59] text-4xl'>17</span>mins</p> 
            </Card>
            <Card>
            <p className='font-normal text-gray-300'>Distance Travelled</p>
            <p className='text-white font-black'><span className='text-[#FFBD59] text-4xl'>2.5</span>km</p> 
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
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
            </div>
          </div>
          <div className='flex h-[45%] w-[100%]'>
            <div className='w-[48%] h-[100%] mr-3 ml-3 bg-black rounded-xl text-white'>
              <p className='mt-4 mb-4 ml-8 text-white text-2xl font-extrabold'>Agent Info</p>
              <p className='mt-2 ml-8 text-[#b8b8b8] text-xl font-medium'>Name : Abhay Arora</p>
              <p className='mt-2 ml-8 text-[#b8b8b8] text-xl font-medium'>Email : abhay@gmail.com</p>
              <p className='mt-2 ml-8 text-[#b8b8b8] text-xl font-medium'>Phone : +91 9876543210</p>
              <p className='mt-2 ml-8 text-[#b8b8b8] text-xl font-medium'>Location: Chennai</p>
              <p className='mt-2 ml-8 text-[#b8b8b8] text-xl font-medium'>Social Media : Instagram, LinkedIn</p>
              
            </div>
            <div className='flex w-[48%] h-[100%] rounded-xl overflow-hidden'>
                <div className="w-[48%] h-[100%] mr-6 bg-black rounded-xl">
                  <p className='mt-4 ml-8 text-white text-2xl font-extrabold'>Agent Rating</p>
                  <p className='mt-8 ml-16 text-white text-8xl font-extrabold'>4.6</p>
                </div>
                <div className="w-[48%] h-[100%] bg-black rounded-xl">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={400} height={400}>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={data01}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    />
                    {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                </div>
            </div>
          </div>
        </div>
		</>)
}
      </div>

    </div>
  )
}
