import React from 'react'

const Skills = () => {
  return (
    <div className='bg-indigo-600 h-screen' id="skills">
        <div className='max-w-7xl mx-auto items-center'>
            <div className='pt-12 font-sans md:text-left text-center text-white'>
                <h2>My Skills</h2>

                <div className='graph mt-5 font-semibold px-10 pt-10'>
                    <div className='graph-1 w-11/12 h-24 bg-gradient-to-r from-green-100 via-blue-500 shadow-2xl mb-3 rounded'>
                        <h4 className='pt-9 pl-5 text-left text-indigo-900'>HTML, CSS and Tailwindcss<span className='px-10'>80%</span></h4>
                    </div>
                    <div className='graph-1 w-10/12 h-24 bg-gradient-to-r from-green-100 via-blue-500 shadow-2xl mb-3 rounded'>
                        <h4 className='pt-9 pl-5 text-left text-indigo-900'>Java <span className='px-10'>70%</span></h4>
                    </div>
                    <div className='graph-1 w-9/12 h-24 bg-gradient-to-r from-green-100 via-blue-500 shadow-2xl mb-3 rounded'>
                        <h4 className='pt-9 pl-5 text-left text-indigo-900'>Web Development <span className='px-10'>75%</span></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills