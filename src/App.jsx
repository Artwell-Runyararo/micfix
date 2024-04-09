import { useState } from 'react'
import { Headerz } from './components/index';
import { NavBar } from './components/index';
import { HeroSection, ServicesHome } from './components/index';

function App() {

  return (
    <>
      {/* Top Header */}
      <Headerz />
      {/* End of Top Header */}


      {/* NavBar */}
      <NavBar />
      {/* End of NavBar */}


      {/* Hero Section */}
      <HeroSection />
      {/* End of Hero Section */}


      {/* ServicesHome Section */}
      <ServicesHome />
      {/* End of ServicesHome Section */}
    </>
  )
}

export default App
