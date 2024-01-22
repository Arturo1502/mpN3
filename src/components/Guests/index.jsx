import React, { useState } from "react";
import "./Guests.css";

export default function Guests() {
    const [adults, setadults] = useState(0);
    const [children, setchildren] = useState(0);

    const menorCero = () => {
        if (adults > 0) {
            setadults(adults - 1);
        }
    };

    const mayor = () => {
        setadults(adults + 1);
    };

    const menorCeroChildren = () => {
        if (children > 0) {
            setchildren(children - 1);
        }
    };

    const add = () => {
        setchildren(children + 1);
    };



    return (
        <>
            <div className="adults absolute left-[530px]">
                <p>
                    <strong>Adults</strong>
                </p>
                <p className="text-gray-300">Ages 13 or above</p>
                <div className="flex">
                    <button className="btn" type="button" onClick={menorCero}>-</button>
                    <p className="contador">{adults}</p>
                    <button className="btn" type="button" onClick={mayor}>+</button>
                </div>
            </div>
            <div className="children absolute left-[530px] bottom-20">
                <p>
                    <strong>Children</strong>
                </p>
                <p className="text-gray-300">Ages 2-12</p>
                <div className="flex">
                    <button className="btn" type="button" onClick={menorCeroChildren}>-</button>
                    <p className="contador">{children}</p>
                    <button className="btn" type="button" onClick={add}>+</button>
                </div>
            </div>
        </>
    );
}
