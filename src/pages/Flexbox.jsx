import React from 'react'
import "./flexbox.css"
import { showHidden } from './funciones';

function Flexbox() {

  return (
    <div className='container'>

        <div className='card'>
            <div  className='card-img'>
                <img alt='information' src='https://images.pexels.com/photos/6153740/pexels-photo-6153740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </div>
            <div className='card-information'>
                <h2>Heading</h2>
                <p>This is a short description about the card.</p>

                <div className='text1'>
                   <p>This is a long description about the card
                    for example.</p>
                </div>
                <button id='1' onClick={()=>showHidden("text1")}>Ver más</button>
            </div>
        </div>


         <div className='card'>
            <div  className='card-img'>
                <img alt='information' src='https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </div>
            <div className='card-information'>
                <h2>Heading</h2>
                <p>This is a short description about the card.</p>

                <div className='text2'>
                   <p>This is a long description about the card
                    for example.</p>
                </div>
                <button  id='2'   onClick={()=>showHidden("text2")}>Ver más</button>
            </div>
        </div>








        <div className='card'>
            <div  className='card-img'>
                <img alt='information' src='https://images.pexels.com/photos/326506/pexels-photo-326506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </div>
            <div className='card-information'>
                <h2>Heading</h2>
                <p>This is a short description about the card.</p>
                <div className='text4'>
                   <p>This is a long description about the card
                    for example.</p>
                </div>
                <button  id='4'   onClick={()=>showHidden("text4")} >Ver más</button>
            </div>
        </div>






        

    </div>
  )
}

export default Flexbox