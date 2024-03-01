import React from 'react'
import BannerHome from './BannerHome'
import Colleges from './Colleges'
import ContactForm from './ContactForm'
import Cources from './Cources'

const Home = () => {
  return (
    <><BannerHome />
    <Cources/>
    <Colleges />
    <ContactForm/>
    </>
  )
}

export default Home