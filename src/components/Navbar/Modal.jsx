import React from 'react';
import './Navbar.css';

export default function Modal({ onClickClose, searchValue, setSearchValue, searchGuests, setSearchGuests, search }) {
    return (
        <>
            <div className='modal absolute w-[100px] top-0 h-[450px] z-[1] bg-white' onClick={(e) => e.stopPropagation()}>
                <button className='close text-gray-50 w-full h-[70px] flex items-start content-end p-5' type='button' onClick={onClickClose}>
                    <span>cancel</span> {/* colocarle un icono de cancel*/}
                </button>
                <div className='inModal flex w-[1248px] h-14 top-24 left-24 rounded-2xl bg-white '>
                    <input className='inputModal ' type="text" name="city" value={searchValue || ''} onChange={setSearchValue} placeholder='City' />

                    <input type="number" className='inputModal' placeholder='Add Guests' value={searchGuests || ''} onChange={setSearchGuests} />

                    <div className='boxSearchModal'>
                        <button type='button' className='w-32 h-14 top-24 left-[1084px] rounded-2xl flex bg-red-400 items-center justify-center  btnSearchModal hover:bg-red-600' onClick={() => { search(); }}>
                            <span className=''> search</span> {/* Colocarle un icono de lupa */}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
