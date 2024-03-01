import React from 'react'

const BannerHome = () => {
  return (
    <div className="bg-[url('./src/assets/collegeimg.jpg')] bg-cover bg-center h-screen flex justify-start items-center">
        <div className='bg-black bg-opacity-65 flex flex-col w-[60%] gap-2 ml-10 py-5 px-5 rounded-xl '>
            <h1 className='text-4xl font-bold text-white'>Welcome to College Seeker..!!</h1>
            <h3 className='text-2xl font-bold'>If you're looking for career guidance</h3>
            <h3 className='text-2xl'>Congrats..!! You are at right place</h3>
            <p className='font-'>Explore and discover the best colleges in Delhi and Noida with our comprehensive college review website. Whether you're a prospective student, a parent, or an academic enthusiast, our platform offers detailed insights and reviews on a wide range of colleges in the bustling cities of Delhi and Noida. From academic programs and faculty expertise to campus facilities and extracurricular activities, our website provides valuable information to help you make informed decisions about your higher education journey. Join our community to read and contribute authentic reviews, ratings, and experiences, empowering individuals to find the perfect college match tailored to their aspirations and needs.</p>
            <button className='rounded-xl bg-black w-60 p-5 hover:bg-blue-700'>Join Us to explore</button>
            <div className='flex items-center bg-black w-3/4 rounded-md'>
              <input className='bg-black font-bold rounded-tl-md rounded-bl-md border-none w-3/4' type="search" name="" id="" placeholder='Search best University in Delhi NCR'/>
              <button className='bg-blue-700 hover:bg-blue-900 w-1/4 h-10 rounded-tr-md rounded-br'><svg className="w-8 block m-auto text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"/>
    <path fill-rule="evenodd" d="M21.7 21.7a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 0 1 1.4-1.4l3.5 3.5c.4.4.4 1 0 1.4Z" clip-rule="evenodd"/>
  </svg>
  </button>
            </div>
        </div>
    </div>
  )
}

export default BannerHome