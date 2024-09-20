import React from 'react'
import grun from '../assets/img.png'
import run from '../assets/s.png'
import un from '../assets/kit.png'
import n from '../assets/W.png'
import u from '../assets/l.png'
import o from '../assets/o.png'

function Over() {
    return (
        <div className='Overtake'>
            <div>
                <p className="text-w">
                    Popular Destinations
                </p>
                <div className="takes">
                    <div className="horld">
                        <img className='animated' src={grun} alt="png" />
                        <p className="text-t">
                            Big Sur
                        </p>
                        <p className="text-k">
                            California, USA
                        </p>
                    </div>
                    <div className="horld">
                        <img className='animated' src={run} alt="png" />
                        <p className="text-t">
                        Prescott
                        </p>
                        <p className="text-k">
                        Arizona, USA
                        </p>
                    </div>
                    <div className="horld">
                        <img className='animated' src={un} alt="png" />
                        <p className="text-t">
                        Florida, USA
                        </p>
                        <p className="text-k">
                            California, USA
                        </p>
                    </div>
                    <div className="horld">
                        <img className='animated' src={n} alt="png" />
                        <p className="text-t">
                        Tucson
                        </p>
                        <p className="text-k">
                        Arizona, USA
                        </p>
                    </div>
                    <div className="horld">
                        <img className='animated' src={u} alt="png" />
                        <p className="text-t">
                        St. Joseph
                        </p>
                        <p className="text-k">
                        Michigan, USA
                        </p>
                    </div>
                    <div className="horld">
                        <img className='animated' src={o} alt="png" />
                        <p className="text-t">
                        Madrid
                        </p>
                        <p className="text-k">
                        Spain
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Over