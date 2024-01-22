import React, { useState } from 'react';

import cancel from '/cancel.svg';
import Guests from '../Guests';
import SearchList from '../SearchList';


export default function Modal({ onClickClose, searchValue, setSearchValue, searchGuests, setSearchGuests, search }) {

    const [showModalCity, setshowModalCity] = useState(false);
    const [showModalGuests, setshowModalGuests] = useState(false);
    const [total, setTotal] = useState(0);
    const handleOpenModalGuests = () => {
        setshowModalGuests(true);
    };

    const handleCloseModalGuests = () => {
        setshowModalGuests(false);
    };

    const handleOpenModalCity = () => {
        setshowModalCity(true);
    };

    const handleCloseModalCity = () => {
        setshowModalCity(false);
    };


    return (
        <>
            <div className='modal absolute w-full top-0 h-[450px] z-[1] bg-white' onClick={(e) => e.stopPropagation()}>

                <button className='close text-gray-500 w-full h-[70px] flex  justify-end p-5' type='button' onClick={onClickClose}>
                    <img className='flex w-7 text-gray-500' src={cancel} alt="cancel" />
                </button>

                <div className='inModal flex w-[1248px] h-14 top-24 left-24 rounded-2xl bg-white '>
                    <input className='inputModal transform hover:scale-110 transition duration-300 ease-in-out' type="text"  value={searchValue || ''} onChange={(e) => setSearchValue(e.target.value)} onClick={() => {
                        handleOpenModalCity();
                        handleCloseModalGuests();
                    }} placeholder='City' />

                    <input type="text" className='inputModal transform hover:scale-110 transition duration-300 ease-in-out' placeholder='Add Guests' value={searchGuests || total || ''} onChange={setSearchGuests} onClick={() => {
                        handleCloseModalCity();
                        handleOpenModalGuests();
                    }} />

                    <div className='boxSearchModal'>
                        <button type='button' className='w-32 h-14 top-24 left-[1084px] rounded-2xl flex bg-red-400 items-center justify-center  btnSearchModal hover:bg-red-600 transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => {
                            search();
                            onClickClose();
                        }}>
                            <span className="material-symbols-outlined">search</span>
                            Search
                        </button>
                    </div>
                </div>
                {showModalGuests && <Guests setTotal={setTotal}/>}
                {showModalCity && <SearchList setSearchValue={setSearchValue} />}
            </div>
        </>
    );
}

