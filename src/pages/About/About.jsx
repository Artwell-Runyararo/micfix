import React from 'react'
import { Headerz, NavBar, Footer } from '../../components'

const About = () => {
  return (
    <>
      <Headerz />
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm col-md col-lg">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam debitis perferendis
              minus ipsum. Ut dolores similique iure optio eaque hic molestias nam tempora dicta, vel quae minus reprehenderit ratione veritatis.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About