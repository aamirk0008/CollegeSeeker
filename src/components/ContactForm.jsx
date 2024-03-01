import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex flex-col justify-center items-center my-10'>
        <h1 className='text-3xl font-bold'>Submit your Details here</h1>
        <div className='flex flex-col w-[400px] my-5 gap-1'>
            <label htmlFor="">Name:</label>
            <input type="name" className=' p-2 bg-transparent border-2 rounded-md' required placeholder='Enter your name'/>

            <label htmlFor="">Email:</label>
            <input type="email" className='bg-transparent border-2 rounded-md' required name="email" id="" placeholder='Enter your email'/>

            <label htmlFor="">Number:</label>
            <input className='bg-transparent border-2 rounded-md' type="tel" name="number" id="" placeholder='Enter your conntact number'/>

            <label htmlFor="">Looking For:</label>
            <select className='bg-transparent border-2 rounded-md text-white' name="Cources" id="">
                <option className='bg-blue-800' value="btech">B.Tech</option>
                <option className='bg-blue-800' value="mtech">M.Tech</option>
                <option className='bg-blue-800' value="bba">BBA</option>
                <option className='bg-blue-800' value="mba">MBA</option>
            </select>

            <label htmlFor="">Message:</label>
            <textarea name="message" className='bg-transparent border-2 rounded-md' id="" cols="30" rows="5" placeholder='Enter your queries'></textarea>

            <button className='mt-5 mx-auto py-1 font-bold border-2 w-[150px] rounded-md hover:bg-blue-500' type="submit">Submit</button>
        </div>
    </div>
  )
}

export default ContactForm