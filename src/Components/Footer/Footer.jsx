import React from 'react'
import {FaFacebookSquare, FaInstagram,FaTwitterSquare,FaDribbbleSquare,FaGithubSquare} from 'react-icons/fa'

function Footer() {
  return (
    <div className='overflow-x-hidden max-w-screen font-poppins'>
        {/* Footer top Section   */}
        <div className='sm:flex justify-between py-10 px-8 grid bg-gray-900'>
            <div className='text-white'>
                <h1 className='w-full text-3xl font-bold cursor-pointer text-blue-400'>CyberCrafters Solutions</h1>
                <p className='py-4 text-left'>Welcome to LevelUp Solutions, where we transform raw information
            into actionable insights. With cutting-edge technology and a team of
            skilled analysts, we specialize in deciphering complex data sets to
            uncover valuable patterns and trends with which wee take your
            business to the Next Level.</p>
            <div className='flex md:w-[75%] justify-between my-6 text-blue-200'>
                {/* social media icons*/}
                <FaFacebookSquare size={30} className='cursor-pointer' />
                <FaInstagram size={30} className='cursor-pointer'/>
                {/* <FaTwitterSquare size={30} className='cursor-pointer'/>
                <FaDribbbleSquare size={30} className='cursor-pointer'/> 
                <FaGithubSquare size={30} className='cursor-pointer'/> */}
            </div>
            </div>
            <div className='text-white sm:w-[900px] sm:ml-[18%] sm:mr-[12%] sm:pt-0'>
                <div>
                    <h1 className='sm-w-[30rem] md:text-4xl sm:text-3xl text-center text-2xl font-bold py-2'>Want tips & Tricks to optimize your Work flow?</h1>
                    <p className='text-center pb-4'>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='justify-center flex'>
                        <input className='placeholder:pl-2 flex mr-[-50px] h-10 sm:w-[50%] sm:h-[35px] mx-auto rounded-md text-black' type="emial" placeholder='Enter your Email'/>
                        <button className='bg-blue-400 mx-auto w-28 hover:bg-blue-500 rounded-md font-medium'>Sign Up</button>
                    </div>
                    <p className='text-sm mx-10 flex-col text-center pt-4'>Wee care about the protection of your data. Read our{" "}
                        <span className='underline cursor-pointer text-blue-400'>Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
        {/* Footer top section end */}
        {/* Footer bottom section with Links */}
        <div>

        </div>
        {/* Footer bottom section with Links end */}
    </div>
  )
}

export default Footer