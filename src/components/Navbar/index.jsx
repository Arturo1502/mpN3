import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import Modal from './Modal'

const Navbar = ({ img, searchValue, setSearchValue, search, searchGuests, setSearchGuests, isSearchVisible, setIsSearchVisible }) => {


    const clickClose = () => {
        if (isSearchVisible) {
            setIsSearchVisible(false);
        }
    };


    return (
        <>
            <nav className="flex items-center justify-between p-7 flex-wrap" onClick={clickClose}>
                <img src={img} alt="logo windBNB" className="w-28 object-contain icono" />

                {/* no te confundas esto forma parte del modal */}
                <button className="transform hover:scale-110 transition duration-300 ease-in-out" type="button" onClick={() => setIsSearchVisible(!isSearchVisible)}>

                    <div className="inputs items-center flex min-h-11 rounded-2xl border border-solid border-gray-100 text-sm text-gray-200 hover:bg-gray-500 hover:border-gray-400 duration-300">
                        <span className="min-w-12 text-[13px] pr-[12px]">Helsinki, Finland</span>  {/* hacerlo dinamico*/}
                        <span className="inputGuests border-l border-l-gray-100 min-w-[90px] text-xs ">Add Guests</span>
                        <div className="items-center flex text-red-400 pl-2 hover:text-sky-300 duration-300">
                        <span className="material-symbols-outlined">search</span>
                        </div>

                    </div>
                </button>
            </nav>

            {isSearchVisible && (
                <Modal
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    search={search}

                    searchGuests={searchGuests}
                    setSearchGuests={setSearchGuests}
                    onClickClose={clickClose}
                />
            )}
        </>
    );
};

export default Navbar;
