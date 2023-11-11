import React from 'react'
import "./card.css"
import A from "../assets/b.png"

import Ok from "../assets/ok.mp4"
function Card() {
    return (
        <div className='box'>


            <div className='perpective'>
                <div className='card'> 
                </div>
                <div className='background'>
                    <video src={Ok}  autoPlay loop muted> </video>
                 </div>
            </div>

            <div className='perpective'>
                <div className='card'> 
                </div>
                <div className='background'>
                    <video src={Ok}  autoPlay loop muted> </video>
                 </div>
            </div>

           




        </div>
    )
}

export default Card