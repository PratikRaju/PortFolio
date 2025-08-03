import React from 'react'
import { TypeAnimation } from 'react-type-animation';
export default function Skills() {
  return (
    <div className='bg-gradient-to-b from-[#F3EBDD] via-[#FFE9B0] to-[#D6EFC5] min-h-[200vh]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] mx-auto py-10 md:py-[10%] gap-8'>
        <img 
  src="public/raj-skill.jpg" 
  alt="About Me" 
  className="w-[450px] h-[450px] rounded-full object-cover mx-auto border-6 border-amber-900"
/>

        <div className='flex flex-col justify-center'>
          <p className='text-amber-900 text-lg md:text-5xl text-center md:text-left font-sans md:pl-10 lg:pl-20 pt-0 md:pt-5 tracking-[1px] md:tracking-[4px] selection:bg-black selection:text-white'>
             <TypeAnimation
      sequence={[
        'What Skill Do I Have ?',
        1000,
      ]}
      wrapper="span"
      speed={40}
      style={{display: 'inline-block' }}
      repeat={Infinity}
    />
          </p>
        </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] mx-auto gap-8'>
          <div>
            <h1 className='text-amber-900 text-5xl selection:bg-black selection:text-white'>Data Analysis</h1>
            <div className='mt-10 mb-5'>
              <button className='group mr-4 cursor-pointer' onClick={() => window.open("https://en.wikipedia.org/wiki/SQL", "_blank")}>
                <img src="public/sql.svg" alt="sql" className='w-15 h-15'/><span className='opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity'>SQL</span>
              </button>
              <button className='group mr-4 cursor-pointer' onClick={() => window.open("https://en.wikipedia.org/wiki/Python", "_blank")}>
                <img src="public/python.svg" alt="python" className='w-15 h-15' /><span className='opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity'>PYTHON</span>
              </button>
              <button className='group mr-4 cursor-pointer' onClick={() => window.open("https://en.wikipedia.org/wiki/Microsoft_Excel", "_blank")}>
                <img src="public/excel.svg" alt="excel" className='w-15 h-15' /><span className='opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity'>EXCEL</span>
              </button>
              <button className='group mr-4 cursor-pointer' onClick={() => window.open("https://en.wikipedia.org/wiki/Tableau", "_blank")}>
                <img src="public/tableau.svg" alt="tableau" className='w-15 h-15' /><span className='opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity'>TABLEAU</span>
              </button>
              <button className='group mr-4 cursor-pointer' onClick={() => window.open("https://en.wikipedia.org/wiki/Microsoft_Power_BI", "_blank")}>
                <img src="public/power-bi-icon.svg" alt="powerBi" className='w-15 h-15' /><span className='opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity'>PowerBI</span>
              </button>
            </div>
            <p className='text-[21px] font-light pb-4 selection:bg-black selection:text-white'>⚡Experienced Data Analyst with a strong background in statistical analysis, data visualization.</p>
            <p className='text-[21px] font-light pb-4 selection:bg-black selection:text-white'>⚡Proficient in Python, SQL, and various data visualization tools to derive actionable insights.</p>
            <p className='text-[21px] font-light pb-4 selection:bg-black selection:text-white'>⚡Passionate about leveraging data to drive decision-making and improve business outcomes.</p>
          </div>
          <div className='m-auto hover:rotate-[360deg] duration-600'><img src="public/analysis.jpg" alt="analysis-image" className='w-[900px] rounded-3xl' /></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] mx-auto gap-8 pb-20'>
          <div className='m-auto grid place-items-center group'>
              <div className="group mr-4 cursor-pointer flex items-center gap-2 translate-x-10 translate-y-15 duration-500 group-hover:rotate-[0deg] group-hover:translate-x-[140px] group-hover:translate-y-[170px]" onClick={() => window.open("https://en.wikipedia.org/wiki/HTML", "_blank")}><img src="public/html5.svg" alt="HTML" className="w-15 h-15" /><span className="opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity">HTML</span></div>
              <div className='group mr-4 cursor-pointer flex items-center gap-2 translate-x-[-150px] translate-y-20 duration-500 group-hover:translate-x-[90px] group-hover:translate-y-[210px]' onClick={() => window.open("https://en.wikipedia.org/wiki/CSS", "_blank")}><img src="public/css.svg" alt="CSS" className='w-15 h-15' /> <span className='opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity'>CSS</span></div>
              <div className='group mr-4 cursor-pointer flex items-center gap-2 translate-x-50 translate-y-10 duration-500 group-hover:translate-x-[-90px] group-hover:translate-y-[150px]' onClick={() => window.open("https://en.wikipedia.org/wiki/JAVASCRIPT", "_blank")}><img src="public/javascript.svg" alt="JAVASCRIPT" className='w-15 h-15' /><span className='opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity'>JAVASCRIPT</span></div>
              <div className='group mr-4 cursor-pointer flex items-center gap-2 translate-x-[-20px] duration-500 group-hover:translate-x-[-120px] group-hover:translate-y-[-10px]' onClick={() => window.open("https://en.wikipedia.org/wiki/TAILWIND", "_blank")}><img src="public/tailwind.svg" alt="TAILWIND" className='w-15 h-15' /><span className='opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity'>TAILWIND</span></div>
              <div className='group mr-4 cursor-pointer flex items-center gap-2 translate-x-[-160px] translate-y-10 duration-500 group-hover:translate-x-[-100px] group-hover:translate-y-[-170px]' onClick={() => window.open("https://en.wikipedia.org/wiki/React", "_blank")}><img src="public/react.svg" alt="REACT" className='w-15 h-15' /><span className='opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity'>REACT</span></div>
              <div className='group mr-4 cursor-pointer flex items-center gap-2 translate-x-20 duration-500 group-hover:translate-x-[80px] group-hover:translate-y-[-230px]' onClick={() => window.open("https://en.wikipedia.org/wiki/Gsap", "_blank")}><img src="public/gsap.png" alt="GSAP" className='w-15 h-15 rounded-full hover:' /><span className='opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity'>GSAP</span></div>
          </div>
          <div className='mt-20'>
            <h1 className='text-amber-900 text-5xl pb-7 selection:bg-black selection:text-white'>FRONT-END</h1>
            <p className='text-[21px] font-light pb-4 selection:bg-black selection:text-white'>⚡ Building responsive website front-end using HTML, CSS, JavaScript,Tailwind,React,Gsap.</p>
            <p className='text-[21px] font-light pb-4 selection:bg-black selection:text-white'>⚡ Crafting blazing-fast, responsive UIs with React, Tailwind CSS, and GSAP animations for seamless user experiences.</p>
            <p className='text-[21px] font-light pb-4 selection:bg-black selection:text-white'>⚡ Building pixel-perfect, interactive websites using modern stacks like HTML5, CSS3, JavaScript, and React with optimized performance.</p>
          </div>
        </div>
    </div>
  )
}