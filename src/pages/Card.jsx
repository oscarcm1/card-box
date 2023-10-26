import React from 'react'
import "./card.css"

let action = false;

function Card() {

    function Active(){
    action = !action;
        if(action){
            document.querySelector('.card').classList.add('active');
            document.querySelector('.info').classList.add('active');
        }else{
            document.querySelector('.card').classList.remove('active');
            document.querySelector('.info').classList.remove('active');
        }

    }


  return (
    <div  className='card-box'>

        <div className='btn'>
            <button onClick={Active}><i className="bi bi-list"></i></button>
        </div>

        <div className='card'>

            <div className='item'>
                <img src='https://images6.alphacoders.com/878/878584.jpg'/>
                <h2>Title</h2>
            </div>

            <div className='item'>
            <img src='https://images5.alphacoders.com/119/1190670.jpg'/>
                <h2>Title</h2>
            </div>
            
            <div className='item'>
            <img src='https://images8.alphacoders.com/438/438455.jpg'/>
                <h2>Title</h2>
            </div>

            <div className='item'>
            <img src='https://images4.alphacoders.com/677/677225.jpg'/>
                <h2>Title</h2>
            </div>

            <div className='item'>
            <img src='https://images3.alphacoders.com/869/869170.jpg'/>
                <h2>Title</h2>
            </div>
            
            <div className='item'>
            <img src='https://images.alphacoders.com/676/676809.jpg'/>
                <h2>Titler</h2>
            </div>
        </div>

    </div>
  )
}

export default Card