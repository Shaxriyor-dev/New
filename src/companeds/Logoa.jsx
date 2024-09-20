import React from 'react'
import ols from '../assets/right.png'
import play from'../assets/play.png'
import plays from'../assets/lopk.png'
import playss from'../assets/posp.png'
import pla from'../assets/opla.png'

function Logoa() {
  return (
    <div className='Look'>
         <div className="assa">
        <p className="text-d">
          Tactivities
        </p>
        <div>
          <a className='btn' href="/">View all
            <img className='old' src={ols} alt="" />
          </a>
        </div>
      </div>
           <div className="contai">
                 <div className="masters">
                  <div className="img-container">
                  <img className='hoverimg' src={play} alt="" />
                  </div>
                      <p className="kosmis">
                      Sailing
                      </p>
                 </div>
                 <div className="masters">
                  <div className="img-container">
                     <img className='hoverimg' src={plays} alt="" />
                  </div>
                      <p className="kosmis">
                      Climbing
                      </p>
                 </div>
                 <div className="masters">
                  <div className="img-container">
                     <img className='hoverimg' src={playss} alt="" />
                  </div>
                      <p className="kosmis">
                      Sailing
                      </p>
                 </div>
                 <div className="masters">
                  <div className="img-container">
                     <img className='hoverimg' src={pla} alt="" />
                  </div>
                      <p className="kosmis">
                      Hiking
                      </p>
                 </div>
           </div>
    </div>
  )
}

export default Logoa