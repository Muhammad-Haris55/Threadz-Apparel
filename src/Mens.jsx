import React, { useState } from 'react'
import Shirts, { Polos } from "./Shirts"
import { Tshirts } from './Shirts'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Addtocart } from "./Actions(WTD)/Index"
import Cart from './Cart'

let mencart = []
let totalprice = 0
let totalamount = []
function Card(props) {
    const mystate = useSelector((st) =>
        st.Addingtocart
    )
    const dispatch = useDispatch();
    const Cartadd = (event) => {
        dispatch(Addtocart())
        let index = (event.target.value) - 1
        let newindex = Number.parseInt(index)
        if (index <= 4) {
            mencart.push(Shirts[index])
            totalprice += Number.parseInt(Shirts[index]["price"])
            totalamount.push(Number.parseInt(Shirts[index]["price"]))
        }
        else if (index = 5 && index <= 9) {
            let list = [5, 6, 7, 8, 9]
            for (let i in list) {
                if (list[i] == newindex) {
                    mencart.push(Tshirts[i])
                    totalprice += Number.parseInt(Tshirts[i]["price"])
                    totalamount.push(Number.parseInt(Tshirts[i]["price"]))
                }
                else {
                    i += 1
                }
            }
        }
        else if (index = 10 && index <= 15) {
            let list = [10, 11, 12, 13, 14, 15]
            for (let i in list) {
                if (list[i] == newindex) {
                    mencart.push(Polos[i])
                    totalprice += Number.parseInt(Polos[i]["price"])
                    totalamount.push(Number.parseInt(Polos[i]["price"]))
                }
                else {
                    i += 1
                }
            }

        }
        <Cart data={mencart} />
    }

    <Cart data={totalamount} />

    return (
        <>

            <div className="shirts" >
                <div class="card " >
                    <img src={props.imgsrc} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h6 class="card-title text-center">{props.title}</h6>
                        <button id="cardbtn" type="button" class="btn btn-primary mt-2" onClick={Cartadd} data={props.price} value={props.data_key}>{props.price}</button>
                    </div>
                </div>
            </div>

        </>
    )
}


function Mens(props) {
    const mystate = useSelector((st) =>
        st.Addingtocart
    )
    const navigate = useNavigate()
    const cartbtnclick = () => {
        navigate("/Cart")
    }

    return (
        <>
            <div className="col-md-12 mx-auto">
                <div className="menstitle text-center mt-3">
                    <h3 className='animate__animated animate__backInLeft'>Mens-Attire</h3>
                    <div className="cartflex">
                        <div className="carticon" >

                            <button data-quantity={mystate} class="btn-cart" onClick={cartbtnclick} >
                                <svg class="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
                                    <title>icon-cart</title>
                                    <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
                                </svg>
                                <span class="quantity"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="menstypes text-center animate__animated animate__fadeIn animate__delay-1s">
                    <h6>SHIRTS </h6>
                </div>
                <div className="parent"  >
                    <div className="shirt" data-aos="fade-up"  >
                        {Shirts.map((item) => {
                            return (
                                <Card
                                    key={item.id}
                                    data_key={item.id}
                                    imgsrc={item.imgscr}
                                    title={item.title}
                                    price={item.price}
                                />
                            );

                        })}
                    </div>
                    <div className="menstype text-center my-3 " data-aos="zoom-in-up">
                        <h6>T-SHIRTS </h6>
                    </div>
                    <div className="shirt" data-aos="fade-up">
                        {Tshirts.map((item) => {
                            return (
                                <Card
                                    key={item.id}
                                    data_key={item.id}
                                    imgsrc={item.imgscr}
                                    title={item.title}
                                    price={item.price}
                                />
                            );
                        })}
                    </div>
                    <div className="menstype text-center my-3" data-aos="zoom-in-up" >
                        <h6>POLOS </h6>
                    </div>
                    <div className="shirt" data-aos="fade-up" >
                        {Polos.map((item) => {
                            return (
                                <Card
                                    key={item.id}
                                    data_key={item.id}
                                    imgsrc={item.imgscr}
                                    title={item.title}
                                    price={item.price}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Mens
export { mencart };
export { totalprice };
export { totalamount };
