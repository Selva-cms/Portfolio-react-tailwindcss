import React from 'react'

const About = () => {
  return (
    <div className='bg-indigo-600 h-auto' id="about">
        
        <div className='about max-w-7xl mx-auto md:flex py-5'>
            
            <div className='md:w-1/2 h-96 md:h-auto bg-white rounded-md mx-3 shadow-2xl'>
                <img src='./heroImage.png' className='md:w-full w-full md:h-auto h-96'></img>
            </div>

            <div className='md:w-1/2 h-auto md:ml-20 md:mt-10 my-3 mx-3 tracking-wide leading-relaxed font-sans text-white '>

                <h2 className='md:text-left text-center'>About Me</h2>
                <p className='pt-3 pb-5 text-center'>klsdjfkjd fdsjfdsfs fdsifusdf dfijdsifjids fisdfisudhfs fsduihfusdhf sdhfsdhfiudshf dsfdsuhfidshfidsuf sdifdsiufhdishfidsfi fidsifuhsdifhs dfusdhfiugsduif sdfhsdiuf klsdjfkjd fdsjfdsfs fdsifusdf dfijdsifjids fisdfisudhfs fsduihfusdhf sdhfsdhfiudshf dsfdsuhfidshfidsuf sdifdsiufhdishfidsfi fidsifuhsdifhs dfusdhfiugsduif sdfhsdiuf
             </p>

                <a href='#' className='bg-indigo-800 tracking-wide text-white font-sans text-sm no-underline py-2 px-3 rounded font-semibold hover:bg-white hover:text-indigo-900 hover:text-md hover:font-bold block mx-auto w-28 text-center'>View Portfolio</a>

            </div>

        </div>

    </div>
  )
}

export default About