import React from 'react'
import "./card.css"
import Camara from "../assets/camara.png"

function Card() {
    return (

        <div className='card-box' >

            <div className='card'>
                <div className='left'>
                    <div className='producto'>
                        <img src={Camara} alt='' />
                    </div>
                    <div className='precio'>
                        <h2>Insta mini 90 neo classic</h2>
                        <p>$144.99</p>
                    </div>
                </div>

                <div className='right'>

                    <div className='titulo'>
                        <h2>credit card checkout</h2>
                    </div>
                    <div className='data'>
                        <div className='info'>
                            <p>Cardholder´s name</p>
                            <input placeholder='Jillian Lawrence' />
                        </div>

                        <div className='info'>
                            <p>Card number</p>
                            <input placeholder='4001 9890' />
                        </div>

                        <div className='meses'>
                            <div>
                                <p>Expire date</p>
                                <input type='date' />
                            </div>
                            <div>
                                <p>Cvv</p>
                                <input placeholder='34' />
                            </div>
                        </div>
                    </div>
                    <div className='boton'>
                        <button>Place order</button>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Card