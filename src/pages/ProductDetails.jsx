import React, { useState } from 'react'
import "./product-detail.css";
import { Icon } from '@iconify/react';
import Green from "../assets/product/green.png"


function ProductDetails() {

    const [like, setLike] = useState("white");
    const [color, setColor] = useState("white");

    function activeLike() {
        if (like == "white") {
            setLike("red");
        } else {
            setLike("white")
        }
    }


    function changeImage(){
       
    }

    return (

        <div className='product-detail'>

            <div className='background-card-back'>
                <div className='bg-sn '></div>
                <div className='bg-sn2'></div>
            </div>

            <div className='background-card'>
                <div className='bg-color'></div>
                <div className='bg-color2'></div>
            </div>

            <div className='container-product'>

                <div className='box-product'>
                    <div className='img-product'>
                        <div className='tenis'>
                            <img src={Green} />
                        </div>
                    </div>


                    <div className='info-product'>

                        <div className='complete-description'>
                            <div className='title-product'>
                                <h2>Nike epic react</h2>
                                <button onClick={activeLike}> <span><Icon icon="mdi:heart" color={like} width={"20px"} /></span></button>
                            </div>
                            <div className='subtitle-product'>
                                <h3>flyknit sneaker</h3>
                            </div>
                            <div className='star'>
                                <label><input type="checkbox" /><Icon icon="tabler:star-filled" color="gray" width={"10px"} /></label>
                                <label><input type="checkbox" /><Icon icon="tabler:star-filled" color="gray" width={"10px"} /></label>
                                <label><input type="checkbox" /><Icon icon="tabler:star-filled" color="gray" width={"10px"} /></label>
                                <label><input type="checkbox" /><Icon icon="tabler:star-filled" color="gray" width={"10px"} /></label>
                                <label><input type="checkbox" /><Icon icon="tabler:star-filled" color="gray" width={"10px"} /></label>
                            </div>
                            <div className='menu-product'>
                                <ul>
                                    <li><button className='sub-menu' >Description</button></li>
                                    <li><button className='sub-menu' >Details</button></li>
                                    <li><button className='sub-menu' >Reviews</button></li>
                                    <li><button className='sub-menu' >Size & fit</button></li>
                                </ul>

                                <div className='product-description'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, tortor ut lobortis efficitur,
                                        pururs nunc placerat dui, et ornare nibh
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className='data-extra'>

                            <div className='size'>
                                <h4>Size</h4>
                                <ul>
                                    <li><button className=''>6</button></li>
                                    <li><button className=''>7</button></li>
                                    <li><button className=''>8</button></li>
                                    <li><button className=''>9</button></li>
                                    <li><button className=''>10</button></li>
                                </ul>
                                <a>guide</a>
                            </div>

                            <div className='qty'>
                                <h5>Qty</h5>
                                <input type='number' defaultValue={1} min={0} />
                            </div>

                            <div className='color-product'>
                                <h5>Color</h5>
                                <button  onClick={changeImage} id='white' className='color' ></button>
                                <button  onClick={changeImage} id='purple' className='color'></button>
                                <button  onClick={changeImage} id="green" className='color'></button>
                                <button  onClick={changeImage}  id="blue" className='color'> </button>
                            </div>

                            <div className='price-product'>
                                <strike className='before'>$650</strike>
                                <p className='now'>$500</p>
                            </div>

                            <div className='shoping'>
                                <button>buynow</button>
                                <Icon icon="ic:round-share" color="gray" width={"20px"} />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails