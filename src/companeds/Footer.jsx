import React from 'react'

function Footer({ Loq , gr , fill , fillm }) {
    return (
        <div>
            <footer>
                <div>
                    <div>
                        <img src={Loq} alt="" />
                        <p className="text-kb">
                            We always make our customers happy by providing as many choises as possible.
                        </p>
                           <div>
                              <a href="#">
                                <img src={gr} alt="png" />
                              </a>
                              <a href="#">
                                <img src={fill} alt="png" />
                              </a>
                              <a href="#">
                                <img src={fillm} alt="png" />
                              </a>
                           </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
