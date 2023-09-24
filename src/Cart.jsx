import React, { useEffect } from 'react'
import { useState } from 'react'
import { mencart } from "./Mens"
import { totalamount } from './Mens'
import { womencart } from './Womens'
import { wtotalamount } from './Womens'
import { juniorcart } from './Juniors'
import { jtotalamount } from './Juniors'
import { wtotalprice } from './Womens'
import { totalprice } from './Mens'
import { jtotalprice } from './Juniors'


let maincart = []

let maintotalamount = []
function Cartitem(props) {
    const [add, updadd] = useState(1)
    const [price, updprice] = useState(props.price)
    let counter = 0;
    const increment = (event) => {
        updadd(add + 1)
        let ogprice = Number.parseInt(props.price)
        let newprice = Number.parseInt(price)
        updprice(newprice + ogprice)
        maintotalamount.push(ogprice)
        for (let item in maintotalamount) {
            counter += maintotalamount[item];
        }
        localStorage.setItem("counter", counter)
    }
    useEffect(() => {
        Cart()
    }, [increment])
    const decrement = (event) => {
        updadd(add - 1)
        if (add == 0) {
            updadd(0)
        }
        let ogprice = Number.parseInt(props.price)
        let newprice = Number.parseInt(price)
        if(price==ogprice || price==0){
            updprice(0)
        }
        else{
            updprice(newprice - ogprice )
        }
        function removeItemOnce(arr, value) {
            var index = arr.indexOf(value);
            if (index > -1) {
                arr.splice(index, 1);
            }
            return arr;
        }
        removeItemOnce(maintotalamount, ogprice)
        for (let item in maintotalamount) {
            counter += maintotalamount[item];
        }
        localStorage.setItem("counter", counter)
    }
    useEffect(() => {
        Cart()
    }, [decrement])
    // console.log(display)
    // const Remove = (event) => {
    //      function removeItemOnce(arr, value) {
    //         if (value > -1) {
    //             arr.splice(value, 1);
    //             console.log("index removed")

    //         }
    //         return arr;
    //     }
    //     removeItemOnce(maincart, 0)

    // }
    return (
        <>
            <div className="item">
                <div className="itemimage">
                    <img src={props.imgsrc} alt="" />
                </div>
                <div className="itemtitle">
                    <p>{props.title}</p>
                </div>
                <div className="itemquantity">
                    <button id="itembutn" className='itmbtn' value={props.price} onClick={increment}>+</button>
                    <div className="display">
                        <p> {add}</p>
                    </div>
                    <button id="itembutn" value={props.data_key} onClick={decrement}>-</button>
                </div>
                <div id="prices" className="itemrpice" value={props.price}>
                    <p>{price}</p>
                </div>
                <div className="itemremove">
                    <img src="https://img.icons8.com/?size=512&id=107448&format=png" alt="" value={props.data_key} onClick={"Remove"}></img>
                </div>
            </div>
            <hr />
        </>
    )
}
let total = 0
function Cart(props) {
    total = wtotalprice + jtotalprice + totalprice
    let state = localStorage.getItem("counter")
    let numstate = Number.parseInt(state)
    let tot = document.getElementById("total")
    let fin = document.getElementById("final")

    // For updating the cart's bill automatically! 
    if (state == null) {
        if (tot) {
            tot.innerText = total
        }
        if (fin) {
            fin.innerHTML = total + 200
        }
        if (numstate == 0) {
            if (tot) {
                tot.innerHTML = 0
            }
            if (fin) {
                fin.innerHTML = 0
            }
        }
    }

    else if (state != null) {
        if (tot) {
            tot.innerHTML = numstate
        }
        if (fin) {
            if (numstate != 0) {
                fin.innerHTML = numstate + 200
            }
            else {
                fin.innerHTML = 0

            }

        }
    }

    if (mencart) {
        for (let i in mencart) {
            maincart.push(mencart[i])
        }
        for (var member in mencart) delete mencart[member];

        for (let i in totalamount) {
            maintotalamount.push(totalamount[i])
        }
        for (var member in totalamount) delete totalamount[member];

    }
    if (womencart) {
        for (let j in womencart) {
            maincart.push(womencart[j])
        }
        for (var member in womencart) delete womencart[member];

        for (let j in wtotalamount) {
            maintotalamount.push(wtotalamount[j])
        }
        for (var member in wtotalamount) delete wtotalamount[member];
    }
    if (juniorcart) {
        for (let k in juniorcart) {
            maincart.push(juniorcart[k])
        }
        for (var member in juniorcart) delete juniorcart[member];
        for (let k in jtotalamount) {
            maintotalamount.push(jtotalamount[k])
        }
        for (var member in jtotalamount) delete jtotalamount[member];
    }

    return (
        <>
            <div className="cart col-md-8 mx-auto mt-4">
                <div className="title pt-4 text-center">
                    <h3>Your Cart</h3>
                </div>
                <div className="cartitems pt-3">
                    <div className="itemhead">
                        <div className="imagehead">
                            <p>Product</p>
                        </div>
                        <div className="titlehead">
                            <p>Title</p>
                        </div>
                        <div className="quantityhead">
                            <p>Quantity</p>
                        </div>
                        <div className="pricehead">
                            <p>Price </p>
                        </div>
                        <div className="removehead">
                            <p>Remove</p>
                        </div>
                    </div>
                    {
                        maincart.map((value) => {
                            return (
                                <Cartitem
                                    key={value.id}
                                    data_key={value.id}
                                    imgsrc={value.imgscr}
                                    title={value.title}
                                    price={value.price}
                                />
                            );
                        })
                    }

                </div>
            </div>
            <div className="total col-md-8 mx-auto mt-1">
                <div className="count">
                    <div className="totalprice pt-3">
                        <p>Shipping fee : 200RS</p>
                    </div>
                    <div className="dc">
                        <p>Total : <span id="total"></span></p>
                    </div>
                    <div className="dc">
                        <p>Sub-Total : <span id="final"></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart;
