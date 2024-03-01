import React, { useEffect } from 'react'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../CollegeStule.css';
import { FreeMode, Pagination } from 'swiper/modules';
// import { jsonData } from "../assets/colleges.json";


const Colleges = () => {
    const [colleges, setColleges] = useState([])
    
    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/VarthanV/Indian-Colleges-List/master/colleges.json')
            const jsonData = await response.json()
            setColleges(jsonData.slice(0, 25))
        } catch (error) {
            console.error("Error")
        }
    }
    fetchData()  
    }, [])
  return (
    <div className='w-full flex flex-col justify-center my-4'>
        <h1 className='text-2xl my-4 text-center font-bold'>Some of the best Known Colleges</h1>
        <div className='h-[43vh] flex items-center'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {colleges.map((college, index) => 
        <SwiperSlide key={index}>
            <div className='relative p-5'>
                <h4 className='text-[17px] text-left font-bold'>University: {college.university}</h4>
                <p className='text-left'><span className='font-bold'>College:</span>{college.college}</p>
                <p className='text-left'><span className='font-bold'>College-type:</span>{college.college_type}</p>
                <p className='text-left'><span className='font-bold'>State:</span>{college.state}</p>
                <p className='text-left'><span className='font-bold'>District:</span>{college.district}</p>
            </div>
        </SwiperSlide>
        )}
        
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
        </div>
    </div>
  )
}


export default Colleges