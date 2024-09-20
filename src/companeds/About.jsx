import React from 'react'
import ols from'../assets/right.png'

function About({Col}) {
  return (
    <div className='buxs'>
      <div className='teng'>
        <div>
          <p className="text-ho">
            About Us
          </p>
          <p className="text-ki">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <div>
            <a className='btn' href="/">Read more
              <img className='old' src={ols} alt="" />
            </a>
          </div>
        </div>
        <div>
             <img src={Col} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About