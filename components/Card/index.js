import Head from "next/head";
import Image from "next/image";

export default function Card(props) {
  return (
    <div class="flex justify-center w-[100%] mb-1">
      <div class="px-5 py-4 ease-in duration-200 hover:bg-black hover:scale-105 block w-[95%] p-3 rounded-lg shadow-lg bg-[#212638] text-white font-black">
        {props.children}
      </div>
    </div>
  );
}
