import React from 'react'
import { TypeAnimation } from 'react-type-animation';
export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
  <div
    className="absolute top-0 left-0 w-1/2 h-full bg-[#F3EBDD] z-10"
    style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
  >
    <div className="flex items-center h-full pt-20">
      <div className="text-left p-20">
        <h1 className="text-4xl font-bold text-[#102B1E] pb-6 selection:bg-black selection:text-white">
          Hi, I am
        </h1>
        <h1 className="text-4xl font-bold text-[#102B1E] selection:bg-black selection:text-white">RajKumar Behera</h1>
        <p className="text-[#333] mt-2 pb-5 text-2xl selection:bg-black selection:text-white">
          <TypeAnimation
      sequence={[
        'Software Engineer',
        1000, 
        'Data Analyst',
        1000,
        'Frontend Devloper',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </p>
        <div className='text-3xl'>
        <button className='mr-4 cursor-pointer' onClick={() => window.open("https://www.linkedin.com/in/rajkumar-behera-b0b7a8302/", "_blank")}><i class="fa-brands fa-linkedin"></i></button>
        <button className='m-4 cursor-pointer' onClick={() => window.open("https://github.com/PratikRaju", "_blank")}><i class="fa-brands fa-github"></i></button>
        <button className='ml-4 cursor-pointer' onClick={() => window.open("https://www.instagram.com/_.raazzz.__", "_blank")}><i class="fa-brands fa-square-instagram"></i></button>
      </div>
      </div>
    </div>
  </div>
  <div className="absolute top-0 right-0 w-full h-full bg-[#102B1E] z-0 flex items-center justify-end pr-20">
    <img
      src="public/Raj-image-removebg-preview.png"
      alt="Profile"
      className="max-h-[90%] z-20 absolute bottom-0"
    />
  </div>
</div>

  )
}
