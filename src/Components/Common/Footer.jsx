import React from 'react'

function Footer() {
    return (
        <div className='w-full h-[60vh] font-Inter flex justify-center '>
            <div className=' flex flex-col items-center justify-evenly bg-[#E7FAFE] rounded-3xl p-4 overflow-hidden'>
                <p className='text-6xl font-bold my-4'>Deliciousness to your inbox</p>
                <p className='text-xl w-[60%] text-center text-slate-400'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                
                <div className='flex items-center'>
                <img src="./logos/left.png" className='w-[300px] h-[250px] -translate-x-[9vw] translate-y-[4vh]'/>
                
                <div className='bg-white p-4 w-[30vw] rounded-xl h-24 flex items-center justify-between'>
                    <input type="email" placeholder="Your email address..." className='p-4 rounded-xl outline-none'/>
                    <button className='bg-black text-white p-4 rounded-xl'>Subscribe</button>
                </div>
                
                <img src="./logos/right.png" className='w-[300px] h-[270px] translate-x-[9vw] translate-y-[3vh]'/>  
                
                </div>
        </div>
        </div>
    )
}

export default Footer
