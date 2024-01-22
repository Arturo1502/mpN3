import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import Modal from '../Modal'

const Navbar = ({ img, searchValue, setSearchValue, search, searchGuests, setSearchGuests, abrirModal, setabrirModal }) => {


    const clickClose = () => {
        if (abrirModal) {
            setabrirModal(false);
        }
    };

    const handleCityClick = (city) => {
        setSearchValue(city);
    };


    return (
        <>
            <nav className="flex items-center justify-between p-7 flex-wrap" onClick={clickClose}>
                <img src={img} alt="logo windBNB" className="w-28 object-contain icono" />

                {/* no te confundas esto forma parte del modal */}
                <button className="transform hover:scale-110 transition duration-300 ease-in-out" type="button" onClick={() => setabrirModal(!abrirModal)}>

                    <div className="inputs items-center flex min-h-11 rounded-2xl border border-solid border-gray-100 text-sm text-gray-200  hover:border-gray-400 duration-300">

                        <input className="min-w-12 text-[13px] pr-[12px]" value={searchValue || "City"} onChange={(e) => setSearchValue(e.target.value)} />

                        <input className="inputGuests border-l border-l-gray-100 min-w-[90px] text-xs " value={searchGuests || "Add Guests"}/>


                        <div className="items-center flex text-red-400 pl-2 hover:text-sky-300 duration-300">
                            <span className="material-symbols-outlined">search</span>
                        </div>

                    </div>
                </button>
            </nav>

            {abrirModal && (
                <Modal
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    search={search}

                    searchGuests={searchGuests}
                    setSearchGuests={setSearchGuests}
                    onClickClose={clickClose}
                    handleCityClick={handleCityClick}
                />
            )}
        </>
    );
};

export default Navbar;
