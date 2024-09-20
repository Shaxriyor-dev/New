import React from 'react'
import l from '../assets/default.png'
import fr from '../assets/k.png'
import op from '../assets/p.png'
import ols from '../assets/right.png'
import ops from '../assets/op.png'
import es from '../assets/es.png'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='Feels'>
            <div>
                <div className="assa">
                    <p className="text-d">
                        Hotels and Restaurants
                    </p>
                    <div>
                        <a className='btn' href="/">View all
                            <img className='old' src={ols} alt="" />
                        </a>
                    </div>
                </div>
                <div className="item-from">
                    <div className="item">
                        <div className="img-container">
                            <img className='hoverimg' src={op} alt="" />
                        </div>
                        <p className="text-h">
                            Monastero Santa Rosa Hotel & Spa
                        </p>
                        <div className="gros">
                            <p className="text-s">
                                Salerno, Italy
                            </p>
                            <p className="text-z">
                                <img src={l} alt="" />
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-container" >
                            <img className='hoverimg' src={fr} alt="" />
                        </div>
                        <p className="text-h">
                            Grand Hotel Tremezzo
                        </p>
                        <div className="gros">
                            <p className="text-s">
                                Lake Como, Italy
                            </p>
                            <p className="text-z">
                                <img src={l} alt="" />
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-container">
                            <img className='hoverimg' src={ops} alt="" />
                        </div>
                        <p className="text-h">
                            The Oberoi Udaivilas, Udaipur
                        </p>
                        <div className="gros">
                            <p className="text-s">
                                Udaipur, India
                            </p>
                            <p className="text-z">
                                <img src={l} alt="" />
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-container">
                        <img className='hoverimg' src={es} alt="" />
                        </div>
                        <p className="text-h">
                            AKA Beverly Hills
                        </p>
                        <div className="gros">
                            <p className="text-s">
                                Los Angeles, United States
                            </p>
                            <p className="text-z">
                                <img src={l} alt="" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero