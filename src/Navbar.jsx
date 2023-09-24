import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// Mens
import Shirts from "./Shirts"
import { Tshirts } from './Shirts'
import { Polos } from './Shirts'
// Womens
import Wshirts from './WomenShits'
import { Wtshirts } from './WomenShits'
import { Wpolos } from './WomenShits'
// Juniors
import { JuniorShirt } from './Juniorshirts'
import JuniorTShirts from './Juniorshirts'
import { JuniorP } from './Juniorshirts'



function Navbar() {
    // For Search Bar functionalities!!
    let searchcart = [...Shirts, ...Tshirts, ...Polos, ...Wshirts, ...Wtshirts, ...Wpolos, ...JuniorShirt, ...JuniorTShirts, ...JuniorP]
    const [search, updsearch] = useState(null)
    let onchange = (event) => {
        updsearch(event.target.value)
    }
    // Agr false hoga to -1 return krta hai
    // indexOf Agr jo type kr rhy wo index m ha to us k (index) return kr deta hai,Aur yh case sensitive hota hai
    
    let index = 0
    let Searchclick = () => {
        let find = search.toUpperCase()
    }
    let onSearch = (item) => {
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid col-md-10 mx-auto">
                    <NavLink className="navbar-brand" id="navtitle" to="Home">Threadz</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li id="navli" className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="Home">Home</NavLink>
                            </li>
                            <li id="navli" className="nav-item">
                                <NavLink className="nav-link" to="Mens">Men's</NavLink>
                            </li>
                            <li id="navli" className="nav-item">
                                <NavLink className="nav-link" to="Womens">Women's</NavLink>
                            </li>
                            <li id="navli" className="nav-item">
                                <NavLink className="nav-link" to="Juniors">Junior's</NavLink>
                            </li>
                            <li id="navli" className="nav-item">
                                <NavLink className="nav-link" to="Cart">Cart </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="">
                                    Discover
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink id="dropdown" className="dropdown-item" to="SummerCollection">Summer Collection</NavLink></li>
                                    <li><NavLink id="dropdown" className="dropdown-item" to="SummerSale">Summer Sale</NavLink></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><NavLink id="dropdown" className="dropdown-item" to="NewArrival">New Arrival</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="" role="search">
                            <div className="input d-flex">
                                <input className="form-control me-2" id="input" type="search" placeholder="Search" autoComplete="off" value={search} onChange={onchange} aria-label="Search"></input>
                                <button className="btn btn-primary" id="formbtn" type="submit" onClick={Searchclick} >Search </button>
                            </div>
                            <div className="dropdown2">
                                {
                                    searchcart.filter(item => {
                                        if (search) {
                                            let find = search.toUpperCase()
                                            let shirt = item.title.toUpperCase()
                                            // Includes s us letter s matching saray ajay g
                                            // return find && shirt.includes(find)
                                            return find && shirt.startsWith(find)
                                        }
                                    }).map((item) => {
                                        return (
                                            <div className="dropdown2-row" >
                                                <div className="div1">
                                                    <img src={item.imgscr} alt="" />
                                                </div>
                                                <div className="div2">
                                                    <p>{item.title}</p>
                                                    <p id="div2p2">{item.price}</p>
                                                <hr />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div >
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
