import React from 'react'
import pla from '../assets/plader.png'
import ols from '../assets/right.png'
import bol from '../assets/bol.png'

function Logos() {
  return (
    <div>
      <div className="pyton">
      <div className="assa">
        <p className="text-d">
          Travel Tips and Advice
        </p>
        <div>
          <a className='btn' href="/">View all
            <img className='old' src={ols} alt="" />
          </a>
        </div>
      </div>
        <div className="python">
          <div className="item-s">
            <div>
              <img src={pla} alt="" />
            </div>
            <div>
              <p className="text-hi">
                East Village Ice Cream Crawl
              </p>
                <p className="text-kl ">
                   We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…
                </p>
            </div>
          </div>
          <div className="item-s">
            <div>
              <img src={bol} alt="" />
            </div>
            <div>
              <p className="text-hi">
              Brooklyn Bridge cinematic photo walk
              </p>
                <p className="text-kl ">
                This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge. 
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logos