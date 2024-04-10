import { useState } from 'react'
import { Headerz } from './components/index';
import { NavBar } from './components/index';
import { HeroSection, ServicesHome, AboutHome, ContactHome, Footer } from './components/index';

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



      {/* AboutHome Section */}
      <AboutHome />
      {/* End of AboutHome Section */}


      {/* ContactHome Section */}
      <ContactHome />
      {/* End of ContactHome Section */}

      {/* Footer Section */}
      <Footer />
      {/* End of Footer Section */}
    </>
  )
}

export default App
