import React from 'react'
import Summersale from "./Summer"
import { Coll2 } from "./Summer"
import { Coll3 } from "./Summer"


function Card(props) {
    return (
        <>
            <div className="shirts">
                <div class="card">
                    <img src={props.imgsrc} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h6 class="card-title text-center">{props.title}</h6>
                        <button id="cardbtn" type="button" class="btn btn-primary">{props.price}</button>
                    </div>
                </div>
            </div>
        </>
    )
}


function Collection() {
    return (
        <>
        <div className="col-md-12 mx-auto">
                <div id="sumsale" className="menstitle text-center mt-3">
                    <div> <h3>SUMMER COLLECTION</h3></div>
                </div>
                <div className="shirt mt-2" data-aos="fade-up" >
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
                <div className="shirt mt-4" data-aos="fade-up" >
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
                <div className="shirt mt-4" data-aos="fade-up" >
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
        </div>

            
        
        </>
    )
}

export default Collection
