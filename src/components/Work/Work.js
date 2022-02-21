import React from 'react'
const Work = () => {
  return (
    <div id="work">
        <div className='my-work bg-white max-w-7xl mx-auto md:text-left text-center md:text'>
            
            <div className='py-3 px-3 font-sans '>
                <h2 className='text-black'>My Work</h2>

                <div className='mt-5'>
                    <div className='md:flex gap-2 h-auto w-auto'>

                        <div className='bg-green-900 md:w-1/4 rounded mt-3'>
                            <img src='./heroImage.png' alt='work-1' className='w-full'></img>
                        </div>
                        <div className='bg-blue-600 md:w-1/4 rounded mt-3'>
                            <img src='./heroImage.png' alt='work-1' className='w-full'></img>
                        </div>
                        <div className='bg-blue-600 md:w-1/4 rounded mt-3'>
                            <img src='./heroImage.png' alt='work-1' className='w-full'></img>
                        </div>
                        <div className='bg-blue-600 md:w-1/4 rounded mt-3'>
                            <img src='./heroImage.png' alt='work-1' className='w-full'></img>
                        </div>

                    </div>
                    <a href='#' className='bg-indigo-600 text-white py-2 px-3 block w-20 mx-auto text-center no-underline font-semibold rounded my-5 hover:bg-indigo-900'>More...</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work