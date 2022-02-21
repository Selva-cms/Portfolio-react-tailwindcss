import React from 'react'
import { FaAddressBook, FaMobile, FaMailBulk} from "react-icons/fa";

const Contact = () => {
  return (
    <div className='bg-white h-auto' id="contact">
        
        <div className='about max-w-7xl mx-auto md:flex'>

            <div className='md:w-1/2 h-96 md:my-7 tracking-wide leading-loose font-sans md:text-left text-center'>

                <div className='text-indigo-600'>
                    <h2 className='md:text-left text-center'>Get in touch, Let's talk</h2>
                    <h4>Fill in the details and I'll get back to you as soon as I can.</h4>
                </div>
                
               
               <div className='mt-20'>

                    <h5 className='pb-10 text-indigo-900'><FaMobile className='text-4xl pr-5'/> +91 9677436645</h5>

                    <h5 className='pb-10 text-indigo-900'><FaMailBulk className='text-4xl pr-5'/> hi.selva.cms@gmail.com</h5>

                    <h5 className='pb-10 text-indigo-900'><FaAddressBook className='text-4xl pr-5'/> 938, Manavai, Tamilnadu, India</h5>
               </div>
               

            </div>

            <div className='md:w-1/2 w-full h-96 md:h-auto bg-white rounded-md shadow-2xl mx-auto'>
                <form class="px-8 pt-6 pb-8 mt-10 mb-4">
                    <div class="mb-4">

                    <input class="shadow appearance-none rounded w-full border-0 hover:border-indigo-600 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Name"></input>
                    </div>

                    <div class="mb-6">

                    <input class="shadow appearance-none border-0 hover:border-indigo-600 rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"></input>

                    <textarea placeholder='Your Message here' className='shadow appearance-none border-0 hover:border-indigo-600 rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline font-sans tracking-wide'>

                    </textarea>

                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-indigo-500 hover:bg-indigo-900 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline border-0 block mx-auto" type="button">
                            Send Message
                        </button>
                    </div>
                </form>
                <p class="text-center text-gray-500 text-xs">
                    &copy;2020 CMS Dev. All rights reserved.
                </p>
                </div>
            </div>

        </div>
  )
}

export default Contact