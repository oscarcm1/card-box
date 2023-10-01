import { React, useState } from "react"
import "./card.css"
let visible = false;

function CardGlass() {

    const [text, setText] = useState("Leer Más");
    function active() {
        visible = !visible;
        if (visible) {
            document.querySelector('.complement').classList.add('active');
            setText("Ocultar")
        } else {
            document.querySelector('.complement').classList.remove('active');
            setText("Leer más")
        }
    }
    return (
        <div className='nature'>
            <div className='box-glass'>
                <div className='box-title'>
                    <h1>Title</h1>
                </div>
                <div className='box-info'>
                    <p>
                        Lorem ipsum dolor sit amet. Cum impedit architecto sit earum esse rem reprehenderit consequatur sit ducimus esse et quibusdam dolorem vel magnam odit eos consequuntur voluptate. Ut velit odio eum perferendis sunt ut praesentium inventore!
                    </p>
                    <div className='complement'>
                        <p>   Ab vitae beatae vel voluptas iusto et voluptas dolor vel aliquam nihil. Aut minima minus ex veniam iste aut quia ullam aut dolor molestias 33 enim atque. Sed eius quaerat sit repudiandae adipisci qui sequi praesentium est rerum illo est corrupti magni!</p>
                    </div>

                    <div className='btn'>
                        <button onClick={active}>{text}</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CardGlass