import React from "react";
import { FaArrowRight, FaArrowTrendUp } from "react-icons/fa6";
const TopContestantSection = () => {

  const nominatedContestant=[
    {
      image:"c1.jpg",
      name:"Rajesh Kumar",
      vote:"12,450"
    },
    {
      image:"c2.jpg",
      name:"Rajesh Kumar",
      vote:"12,450"
    },
    {
      image:"c3.jpg",
      name:"Rajesh Kumar",
      vote:"12,450"
    },
    {
      image:"c4.jpg",
      name:"Rajesh Kumar",
      vote:"12,450"
    },
    {
      image:"c5.jpg",
      name:"Rajesh Kumar",
      vote:"12,450"
    },
    {
      image:"c6.jpg",
      name:"Rajesh Kumar",
      vote:"12,450"
    }
  
  ]


  return (
    <section className=" bg-[#f7fbff] flex flex-col  items-center p-[4%]">
      <div className="flex text-blue-600 text-sm font-semibold p-2  items-center gap-2 border-[1px]  border-blue-400 bg-blue-50 px-4 rounded-4xl my-4">
        <FaArrowTrendUp size={12} />

        <span>Top Contestants</span>
      </div>

      <h1 className="text-black text-2xl md:text-4xl font-bold my-4">Who Will You Support?</h1>
      <p className="text-gray-600 text-lg">Vote for your favorite housemate now</p>

      <ul className="flex flex-wrap my-12 gap-10">

          {
            nominatedContestant.map((item,idx)=>(
            
            <li className="flex flex-col items-center ">
                <img src={item.image} alt={item.name} className="size-42 rounded-full border-4 border-blue-300 hover:border-blue-600 cursor-pointer hover:scale-105"/>
                <p className="text-black font-semibold mt-4">{item.name}</p>
                <p className="text-gray-500">{item.vote} votes</p>


            </li>))
          }



      </ul>
      <button className=" bg-gradient-to-r from-[#367bf3] to-[#2a6aed] p-2 rounded-xl px-8 flex items-center font-bold gap-4 shadow-2xl shadow-blue-700">View All Contestants & Vote 

        <FaArrowRight />
      </button>


    </section>
  );
};

export default TopContestantSection;
