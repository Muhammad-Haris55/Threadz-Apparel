import React from 'react'
import { useNavigate } from 'react-router-dom'
import Typed from "typed.js";
import Summersale from "./Summer"
import { Coll2 } from "./Summer"
import { Coll3 } from "./Summer"

function Hero() {
    // Typed js library
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Starting from $20.00'],
            startDelay: 120,
            typeSpeed: 40,
            backDelay: 60,
            loop: true,
            backSpeed: 60,
            smartBackspace: true,
        });
    }, []);
    // Navigating to NEw arrival from shop now button
    const navigate = useNavigate()
    const Redirect = () => {
        navigate("/Newarrival")
    }
    return (
        <>
            <div className="hero col-md-10 mx-auto pt-4">
                <div className="h1">
                    <div className="h1text">
                        <div className="trend">
                            <p className='animate__animated animate__backInLeft'>Trending Items!</p>
                        </div>
                        <div className="sale">
                            <p className='animate__animated animate__backInLeft'>Largest Fashion Sale</p>
                        </div>
                        <div className="start">
                            <p className='animate__animated animate__backInLeft'>  <span ref={el}></span></p>
                        </div>
                    </div>
                    <div className="h1butn">
                        <button className="cta animate__animated animate__backInLeft" onClick={Redirect}>
                            <span className="hover-underline-animation "> Shop now </span>
                            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="h2 ">
                    <div className="h2img animate__animated animate__fadeIn animate__delay-1s">
                        <img src="h2img.png" alt="" />
                    </div>
                </div>
            </div>
            <div id="maincol" className="col-md-12 mx-auto pt-3">
                <div id="sumsale" className="menstitle text-center pt-3">
                    <div className="new">

                     <h3>NEW ARRIVALS</h3>
                    </div>
                </div>
                {/* Shirts Mapping */}
                <div className="parent">
                    <div className="shirt mt-2" data-aos="fade-right">
                        {Coll2.map((value) => {
                            return (
                                <Card id="cardheight"
                                    key={value.id}
                                    imgsrc={value.imgscr}
                                    title={value.title}
                                    price={value.price}
                                />
                            );
                        })}
                    </div>

                    <div className="shirt mt-4"  data-aos="fade-right">
                        {Coll3.map((value) => {
                            return (
                                <Card id="cardheight"
                                    key={value.id}
                                    imgsrc={value.imgscr}
                                    title={value.title}
                                    price={value.price}
                                />
                            );
                        })}
                    </div>
                    <div className="shirt mt-4" data-aos="fade-right">
                        {Summersale.map((value) => {
                            return (
                                <Card
                                    key={value.id}
                                    imgsrc={value.imgscr}
                                    title={value.title}
                                    price={value.price}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
function Card(props) {
    return (
        <>
            <div className="shirts">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h6 className="card-title text-center">{props.title}</h6>
                        <button id="cardbtn" type="button" className="btn btn-primary">{props.price}</button>
                    </div>
                </div>
            </div>
        </>
    )
}


function Newarrival() {
    return (
        <>
            <div id="maincol" className="">
                <div id="sumsale" className="menstitle text-center mt-3">
                    <div> <h3>NEW ARRIVAL</h3></div>
                </div>

                <div id="shrt" className="shirt mt-2 ">
                    {Coll2.map((value) => {
                        return (
                            <Card id="cardheight"
                                key={value.id}
                                imgsrc={value.imgscr}
                                title={value.title}
                                price={value.price}
                            />
                        );
                    })}
                </div>

                <div className="shirt mt-4">
                    {Coll3.map((value) => {
                        return (
                            <Card id="cardheight"
                                key={value.id}
                                imgsrc={value.imgscr}
                                title={value.title}
                                price={value.price}
                            />
                        );
                    })}
                </div>

                <div className="shirt mt-4">
                    {Summersale.map((value) => {
                        return (
                            <Card
                                key={value.id}
                                imgsrc={value.imgscr}
                                title={value.title}
                                price={value.price}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Hero
export { Newarrival };

