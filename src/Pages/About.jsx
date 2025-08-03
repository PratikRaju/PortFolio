import React from 'react'
import { TypeAnimation } from 'react-type-animation';
export default function About() {
  const aboutLines = [
    "I'm Rajkumar, a data analyst who loves finding stories in numbers.",
    "I work with structured and unstructured data to help teams understand trends,",
    "improve performance, and make confident decisions.",
    "I've worked on projects involving sales forecasting,",
    "and business dashboards using Python, SQL, and Tableau.",
    "I'm also comfortable with Excel automation and Power BI."
  ];


  return (
    <div className='bg-gradient-to-b from-[#F3EBDD] via-[#FFE9B0] to-[#D6EFC5]'>
      
         <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] mx-auto py-10 md:py-[10%] gap-8'>
        <img 
          src="/About-me.png" 
          alt="About Me" 
          className='w-full max-w-[450px] mx-auto'
        />
        <div className='flex flex-col'>
          <div className='text-amber-900 text-lg md:text-xl text-center md:text-left font-sans md:pl-10 lg:pl-20 pt-0 md:pt-5 tracking-[1px] md:tracking-[2px] selection:bg-black selection:text-white'>
            {aboutLines.map((line, index) => (
              <TypeAnimation
                key={index}
                sequence={[
                  line,
                  1000 * (index + 1) // Staggered delay based on line position
                ]}
                wrapper="p"
                speed={50}
                style={{ display: 'block', marginBottom: '0.5rem' }}
                repeat={0} // No repetition
                cursor={index === aboutLines.length - 1} // Only show cursor on last line
              />
            ))}
          </div>
        </div>
      </div>
      {/* Education Header */}
      <div className='flex justify-center mb-12 md:mb-16 px-4'>
        <h1 className='font-medium text-amber-900 text-3xl md:text-4xl lg:text-[50px] border-2 border-amber-900 px-6 py-3 inline-block tracking-wide rounded-lg bg-white/20 backdrop-blur-sm selection:bg-black selection:text-white'>
          EDUCATION
        </h1>
      </div>

      {/* Education Cards Container */}
      <div className='space-y-12 md:space-y-16 lg:space-y-20 pb-20 px-4 md:px-8'>
        {/* GITA College Card */}
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg w-full max-w-5xl hover:shadow-xl transition-shadow duration-300">
            <img
              src="/gita-logo.jpeg"
              alt="GITA Logo"
              className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain rounded-full border-2 border-amber-200 shadow-md"
            />
            <div className="flex-1 w-full text-[#102B1E]">
              <div className="bg-[#FFE9B0] rounded-t-xl p-4 md:p-5 flex flex-col md:flex-row justify-between items-start md:items-center font-bold text-base md:text-lg">
                <div>
                  <h3 className='selection:bg-black selection:text-white'>GITA Autonomous College, Bhubaneswar</h3>
                  <p className="font-semibold mt-1 selection:bg-black selection:text-white">B.Tech in Computer Science</p>
                </div>
                <span className="text-sm md:text-base font-medium mt-2 md:mt-0 selection:bg-black selection:text-white">2024 - 2027</span>
              </div>

              <div className="p-4 md:p-5 rounded-b-xl space-y-3 md:space-y-4">
                <ul className="list-none space-y-2 md:space-y-3 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 selection:bg-black selection:text-white">⚡</span>
                    <span className='selection:bg-black selection:text-white'>Currently pursuing my B.Tech in Computer Science from GITA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 selection:bg-black selection:text-white">⚡</span>
                    <span className='selection:bg-black selection:text-white'>Studying software engineering topics like DS, Algorithms, DBMS etc.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 selection:bg-black selection:text-white">⚡</span>
                    <span className='selection:bg-black selection:text-white'>Completed courses on Data Analytics and MERN Stack Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 selection:bg-black selection:text-white">⚡</span>
                    <span className='selection:bg-black selection:text-white'>Received Merit cum Means Scholarship awarded to top 10% students</span>
                  </li>
                </ul>
                <div className="flex justify-end">
                  <a
                    href="https://gita.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                     className="inline-block mt-3 bg-[#102B1E] text-white py-2 px-5 rounded-lg 
             border-2 border-transparent
             transition-all duration-300 text-sm md:text-base 
             selection:bg-black selection:text-white
             hover:bg-white hover:text-black hover:border-black"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Polytechnic Card */}
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg w-full max-w-5xl hover:shadow-xl transition-shadow duration-300">
            <img
              src="/govt-polytechnic.jpeg"
              alt="Polytechnic Logo"
              className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain rounded-full border-2 border-amber-200 shadow-md"
            />
            <div className="flex-1 w-full text-[#102B1E]">
              <div className="bg-[#FFE9B0] rounded-t-xl p-4 md:p-5 flex flex-col md:flex-row justify-between items-start md:items-center font-bold text-base md:text-lg">
                <div>
                  <h3 className='selection:bg-black selection:text-white'>Government Polytechnic, Bhubaneswar</h3>
                  <p className="font-semibold mt-1 selection:bg-black selection:text-white">Diploma in Information Technology</p>
                </div>
                <span className="text-sm md:text-base font-medium mt-2 md:mt-0 selection:bg-black selection:text-white">2021 - 2024</span>
              </div>

              <div className="p-4 md:p-5 rounded-b-xl space-y-3 md:space-y-4">
                <ul className="list-none space-y-2 md:space-y-3 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 selection:bg-black selection:text-white">⚡</span>
                    <span className='selection:bg-black selection:text-white'>Successfully completed a rigorous program emphasizing core IT principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 selection:bg-black selection:text-white">⚡</span>
                    <span className='selection:bg-black selection:text-white'>Gained practical experience in designing and implementing software solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 selection:bg-black selection:text-white">⚡</span>
                    <span className='selection:bg-black selection:text-white'>Developed strong analytical and problem-solving skills through projects</span>
                  </li>
                </ul>
                <div className="flex justify-end">
                  <a
                    href="https://gpbhubaneswar.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                     className="inline-block mt-3 bg-[#102B1E] text-white py-2 px-5 rounded-lg 
             border-2 border-transparent
             transition-all duration-300 text-sm md:text-base 
             selection:bg-black selection:text-white
             hover:bg-white hover:text-black hover:border-black"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}