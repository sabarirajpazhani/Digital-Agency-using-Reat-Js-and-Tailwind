import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../../images/heroImage.jpg'
import Stars from '../../images/stars.png'
import {motion} from 'framer-motion'

function Herosection() {
  return (
    <div className='font-poppins'>
        {/* component from tailgride */}
<div
   class="relative dark:bg-dark pt-[120px] pb-[110px] lg:pt-[150px] bg-[#e0e0e0]"
   >
   <div class="container mx-auto px-10">
      <div class="flex flex-wrap items-center -mx-4">
         <div class="w-full px-4 lg:w-5/12">
            <div class="hero-content">

                <motion.div  //for motion 
                variants={{      
                visible:{opacity:1,y:0},
                hidden:{opacity:0,y:75},
                }}
                initial="hidden"
                animate="visible"
                transition={{duration:2.4,delay:0.25}}>     
                    <h1 class="text-transparent bg-clip-text bg-gradient-to-r sm:text-8xl text-2xl from-blue-400 to-emerald-600 mb-3 font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-5xl">
                        Here you can <br />
                        <span className='sm:text-8xl text-4xl'>Level Up Your Business</span>
                    </h1>
                    <p class="mb-8 max-w-[480px] sm:text-base text-body-color text-sm">
                        Welcome and thank you for taking your time to take a look at our solutions, wee can ensure you that wee will take your Business to the next level, so hang in tight and lets Level UP!
                    </p>
                </motion.div>
                <motion.div 
                variants={{      //for motion
                visible:{opacity:1,x:0},
                hidden:{opacity:0,x:-75},
                }}
                initial="hidden"
                animate="visible"
                transition={{duration:2.4,delay:0.25}}>
                <ul class="flex flex-wrap items-center">
                  <li>
                     <Link
                        to="#"
                        class="bg-blue-400 inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-white rounded-lg hover:bg-blue-500 sm:px-10 lg:px-8 xl:px-10"
                        >
                     Get Started
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="#"
                        class="bg-blue-200/80 ml-6 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-black font-normal hover:bg-blue-200 sm:px-10 lg:px-8 xl:px-10"
                        >
                     Take a look
                     </Link>
                  </li>
                </ul>
                </motion.div>
               
               
               <motion.div 
                variants={{      //for motion
                visible:{opacity:1},
                hidden:{opacity:0},
                }}
                initial="hidden"
                animate="visible"
                transition={{duration:0.8,delay:0.25}}
                class="clients pt-16">
                  <h6
                     class="flex items-center mb-6 text-xs font-normal text-body-color dark:text-dark-6"
                     >
                     Some Of Our Clients
                     <span class="inline-block w-8 h-px ml-3 bg-body-color"></span>
                  </h6>
                  <div class="flex items-center gap-4 xl:gap-[50px]">
                     <Link to="#" class="block py-3">
                     <img
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                        alt="oracle"
                        />
                     </Link>
                     <Link to="#" class="block py-3">
                     <img
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                        alt="intel"
                        />
                     </Link>
                     <Link to="#" class="block py-3">
                     <img
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                        alt="logitech"
                        />
                     </Link>
                  </div>
               </motion.div>
            </div>
         </div>
         <div class="hidden px-4 lg:block lg:w-1/12"></div>
         <div class="w-full px-4 lg:w-6/12">
            <div class="lg:ml-auto lg:text-right">
               <motion.div 
                variants={{      //for motion
                visible:{opacity:1,x:0,fliter:"blur(0px)"},
                hidden:{opacity:0,x:75,fliter:"blur(5px)"},
                }}
                initial="hidden"
                animate="visible"
                transition={{duration:0.8,delay:0.25}}
                class="relative z-10 inline-block pt-11 lg:pt-0 mt-6">
                  <img
                     src={heroImage}
                     alt="hero"
                     class="max-w-full lg:ml-auto rounded-l-[20%] rounded-br-[6%]"
                    />
                    <img src={Stars} alt="stars" className='z-20 h-28 absolute mt-[-105%] right-[-5%] opacity-70 hover:opacity-100' />

                  <span class="absolute -left-8 -bottom-8 z-[-1]">
                     <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                     </svg>
                     
                  </span>
               </motion.div>
            </div>
         </div>
      </div>
   </div>
</div>
        {/* component from tailgride end */}

    </div>
  )
}

export default Herosection