import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ img, searchValue, setSearchValue, search }) => {
    const [inputCity, setInputCity] = useState(40);
    const [inputGuests, setInputGuests] = useState(40);

    const inputCityRef = useRef(null);
    const inputGuestsRef = useRef(null);

    const anchoInputCity = () => {
        setInputCity(250);
        setInputGuests(40); // Cerrar el otro input
    };

    const anchoInputGuests = () => {
        setInputGuests(250);
        setInputCity(40); // Cerrar el otro input
    };

    const handleClickOutside = (event) => {
        if (
            inputCityRef.current &&
            !inputCityRef.current.contains(event.target) &&
            inputGuestsRef.current &&
            !inputGuestsRef.current.contains(event.target)
        ) {
            // Hacer algo al hacer clic fuera de los inputs (restablecer anchos en este caso)
            setInputCity(40);
            setInputGuests(40);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <header className="flex items-center justify-between p-[30px] flex-wrap">
                <img
                    src={img}
                    alt="logo de la página"
                    className="w-28 object-contain imgIcon"
                />
                <div className="flex items-center min-h-11 rounded-2xl border border-solid border-slate-50 text-sm inputs">
                    <input
                        placeholder="City"
                        value={searchValue}
                        onChange={setSearchValue}
                        type="text"
                        className="min-w-[50px] focus:outline-none"
                        style={{ width: `${inputCity}px`, transition: "width 0.5s" }}
                        onClick={anchoInputCity}
                        ref={inputCityRef}
                    />

                    <input
                        type="text"
                        className="inputText focus:outline-none"
                        placeholder="Add guests"
                        style={{ width: `${inputGuests}px`, transition: "width 0.5s" }}
                        onClick={anchoInputGuests}
                        ref={inputGuestsRef}
                    />

                    <button type="button" className="flex items-center text-red-500 hover:text-sky-400 hover:duration-300" onClick={search}>
                        <span className="material-symbols-outlined">search</span>
                    </button>
                </div>
            </header>



        </>
    );
};

export default Navbar;
