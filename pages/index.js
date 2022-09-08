import Head from "next/head";
import Image from "next/image";

import Card from "../components/Card";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie } from "recharts";
import GoogleMapComponent from "../components/Map/GoogleMapComponent";
import { useState } from "react";
import Script from "next/script";

import axios from 'axios';

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];
// import styles from '../styles/Home.module.css'
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Home() {
  const [page, setPage] = useState(1);
//   axios({
//     url: 'https://FirebaseAPI.amoghsingh.repl.co/admin/get_agents',
//     // configuration
// })
// .then(response => 
//    response.json()
   
// )
  return (
	<>
    <div className="flex bg-[#2F3855]">
      <div class="flex-none w-[20vw] h-[100vh]">
        <div className="">
			<Image src={require('../assets/4.png')} />
		</div>
        <div className="overflow-scroll max-h-[90vh]">
          <Card>Agent 1</Card>
          <Card>Agent 2</Card>
          <Card>Agent 3</Card>
          <Card>Agent 4</Card>
          <Card>Agent 5</Card>
          <Card>Agent 6</Card>
          <Card>Agent 7</Card>
          <Card>Agent 8</Card>
		  <Card><span className="align-middle my-8 text-[#FFBD59] text-5xl font-extrabold">
                    +
                  </span><span className="text-3xl text-center justify-center align-middle ml-4">Add User</span></Card>

				  <Card><span onClick={()=>{setPage(0)}} className="text-3xl text-center justify-center align-middle ml-4">See All Users</span></Card>
        </div>
      </div>
      <div className="flex-none w-[80vw] h-[100vh]">
        <p className="mt-4 ml-8 text-white text-4xl font-extrabold">
          Good Morning Abhay!
        </p>

		{page === 0 && (
			<>
				
			</>
		)}


        {page === 1 && (
          <>
            <div className="flex ml-2 mr-4 h-[10vh] mt-7">
              <Card>
                <p className="font-normal text-white-300 font-black">
                  Average Time
                </p>
                <p className="text-white font-black">
                  <span className="text-[#FFBD59] text-4xl">17</span>mins
                </p>
              </Card>
              <Card>
                <p className="font-normal text-white-300 font-black">
                  Average Distance Travelled
                </p>
                <p className="text-white font-black">
                  <span className="text-[#FFBD59] text-4xl">2.5</span>km
                </p>
              </Card>
              <Card>
                <p className="font-normal text-white-300 font-black">
                  Conversion Rate
                </p>
                <p className="text-white font-black">
                  <span className="text-[#FFBD59] text-4xl">5/</span>8
                </p>
              </Card>
              <Card>
                <p className="font-normal text-white-300 font-black">
                  Current Temperature
                </p>
                <span className="text-[#FFBD59] text-4xl">108°</span>F
              </Card>
              <Card>
                <p className="font-normal text-white-300 font-black">
                  Average Travel Time
                </p>
                <span className="text-[#FFBD59] text-4xl">15</span>mins
                <span className="ml-2 text-[#FFBD59] text-4xl">21</span>secs
              </Card>
            </div>
            <div className="h-[84vh] w-[100%] mt-3">
              <div className="flex h-[45%] w-[100%] mb-4">
                <div className="w-[48%] h-[100%] mr-3 ml-3 bg-[#212638] rounded-xl text-white">
                  <GoogleMapComponent
                    destinations={[
                      {
                        lat: 13.0805503,
                        lng: 80.1981651,
                      },
                      {
                        lat: 12.8407821,
                        lng: 80.1532963,
                      },
                      {
                        lat: 12.6207801,
                        lng: 80.1944872,
                      },
                    ]}
                  />
                </div>
                <div className="w-[48%] h-[100%] bg-[#212638] rounded-xl">
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
              <div className="flex h-[45%] w-[100%]">
                <div className="w-[48%] h-[100%] mr-3 ml-3 bg-[#212638] rounded-xl text-white">
                  <p className="my-8 ml-8 text-white text-2xl font-extrabold">
                    Agent Details
                  </p>
                  <p className="mt-2 ml-8 text-[#b8b8b8] text-xl font-medium">
                    Name :{" "}
                    <span className="text-[#FFBD59] text-2xl font-semibold">
                      Amogh Singh
                    </span>
                  </p>
                  <p className="mt-2 ml-8 text-[#b8b8b8] text-xl font-medium">
                    Email :{" "}
                    <span className="text-[#FFBD59] text-2xl font-semibold">
                      amogh@gmail.com
                    </span>
                  </p>
                  <p className="mt-2 ml-8 text-[#b8b8b8] text-xl font-medium">
                    Phone :{" "}
                    <span className="text-[#FFBD59] text-2xl font-semibold">
                      +91 9876543210
                    </span>
                  </p>
                  <p className="mt-2 ml-8 text-[#b8b8b8] text-xl font-medium">
                    Location:{" "}
                    <span className="text-[#FFBD59] text-2xl font-semibold">
                      Chennai
                    </span>
                  </p>
                  <p className="mt-2 ml-8 text-[#b8b8b8] text-xl font-medium">
                    Social Media :{" "}
                    <span className="text-[#FFBD59] text-2xl font-semibold">
                      Instagram, Linkedin
                    </span>
                  </p>
                </div>
                <div className="flex w-[48%] h-[100%] rounded-xl overflow-hidden">
                  <div className="w-[48%] h-[100%] mr-6 bg-[#212638] rounded-xl">
                    <p className="my-8 ml-8 text-white text-2xl font-extrabold">
                      Agent Rating
                    </p>
                    <p className=" text-center text-white text-8xl font-extrabold">
                      4.6
                    </p>
                    <p className="mt-8 text-center mr-auto text-white text-3xl font-semibold">
                      Ranking:{" "}
                      <span className="font-black text-5xl text-[#FFBD59]">
                        #32
                      </span>
                    </p>
                  </div>
                  <div className="w-[48%] h-[100%] bg-[#212638] rounded-xl">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart width={400} height={400}>
                        <Pie
                          dataKey="value"
                          isAnimationActive={true}
                          data={data01}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          innerRadius={50}
                          fill="#FFBD59"
                          label
                        />
                        <Legend />
                        {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
	</>
  );
}
