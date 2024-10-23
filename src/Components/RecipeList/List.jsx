import React, { useContext, useEffect, useState,useRef } from 'react'
import { DataProvider } from "../../App";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function List() {
    const [query,setquery] = useState()
    const {dataRec} = useContext(DataProvider)
    const [data,setData] = useState(dataRec?dataRec:null)
    useEffect(()=> {
        setData(dataRec)
    },[dataRec])
    const useNav = useNavigate()
    
    console.log(data);
    
    const handlePageChange = (id)=>{
    useNav(`/recipe/${id}`)
   }
   const handleSearch = ()=> {
    const searched = dataRec.filter((value, index) => {
        if(value.title.toLowerCase().includes(query.toLowerCase())){
            return data
        }
    })
    setData(searched)
   }

   const listRef = useRef([]);
  useEffect(() => {
    listRef.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 4,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 70%",
              end: "bottom 40%",
              scrub: true,
            },
          }
        );
      }
    });
  }, [dataRec]);

  return (
    <div className='flex flex-col items-center relative top-28 mb-[50vh]'>
        <div className="bg-white p-2  w-[30vw] rounded-xl  flex items-center border justify-between ">
              <input
                type="text"
                value={query}
                placeholder="Search Recipe here......"
                className="p-2 rounded-lg outline-none w-full"
                onChange={(e)=>{
                    setquery(e.target.value)
                }}
              />
              <button className="bg-black text-white p-2 w-24  rounded-lg" onClick={handleSearch}>
                Search
              </button>
            </div>
      <div className="flex flex-wrap justify-evenly w-[90vw] h-[100vh]">
      {data&&dataRec ? (
        data.map((items, i) => {
          return (
            <div ef={(el) => (listRef.current[i] = el)}
              className="bg-[#E7FAFE] w-[26%] h-[55%] cursor-pointer rounded-3xl flex flex-col flex-wrap justify-between items-center mt-[5%] p-4 transition-all ease-in-out duration-300 hover:scale-105 "
              key={i} onClick={()=>handlePageChange(items._id)} 
            >
              <div className="w-[21vw]">
                <img src={items.image} className="rounded-3xl" />
                <img
                  src="/logos/like.png"
                  width={"30px"}
                  className=" absolute translate-x-[18vw] -translate-y-[27vh]"
                /> 
                <div>
                  <p className="text-xl font-bold pt-4">{items.title}</p>
                </div>
              </div>
              <div className="flex justify-between w-[65%] text-sm">
                <button className="bg-white rounded-full p-2 w-[55%] ">
                  {items.time}
                </button>
                <button className="bg-white rounded-full p-2 w-[40%]">
                  {items.name}
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading....</p>
      )}
    </div>
    </div>
  )
}

export default List
