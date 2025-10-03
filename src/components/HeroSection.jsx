import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { WiStars } from 'react-icons/wi'

const HeroSection = () => {

    const biggboss=[{data:"2.5M+",titile:"Total Votes"},

        {data:"14",titile:"Active Contenttants"},
        {data:"85",titile:"Days Running"},
        {data:"0",titile:"Eliminations"}
    ]


  return (
    <section className=' flex justify-center flex-col items-center h-full bg-radial from-[#4780f1]  via-[#4780f1] to-[#2867ec]  gap-y-5 text-center'>

            <div className='flex text-sm font-semibold p-1 bg-white/20 items-center border-[1px]  px-4 rounded-4xl shadow-2xl my-4'>
                <WiStars size={28} />

                <span>Season 8 Live Now</span>
            </div>
            <h1 className='text-5xl md:text-7xl text-shadow-lg font-extrabold text-white '>Vote for Your</h1>
                <h1 className='text-4xl md:text-7xl  text-shadow-lg font-extrabold text-[#fde047] '>Favorite Contestant</h1>
            <p className='text-sm md:text-xl  '>Support your favorite housemate in Bigg Boss Tamil. Your votes matter! Cast your vote now and see live results.</p>
            <div className='flex items-center gap-8 mt-10'>
                <button className='flex items-center gap-3 bg-white text-blue-600 font-bold text-xl p-2 px-8 rounded-xl hover:scale-105 cursor-pointer'>
                    <FaArrowTrendUp />

                    Vote Now
                </button>
                <button className='flex items-center gap-3  text-white border-2 border-white font-bold text-xl p-2 px-8 rounded-xl hover:scale-105 cursor-pointer'>

                    View Result
                </button>

            </div>

            <ul className='grid grid-cols-2 md:grid-cols-4 gap-12 mt-10'>
                {
                    biggboss.map((item,idx)=>(

                        <li key={idx} className='bg-white/5 border rounded-xl text-center gap-y-4 p-4'>
                            <h1 className='text-2xl font-bold'>{item.data}</h1>
                            <p>{item.titile}</p>

                        </li>
                    ))
                }


            </ul>


    </section>
  )
}

export default HeroSection