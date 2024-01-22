import React from 'react';

import cancel from '/cancel.svg';
import Guests from '../Guests';
import SearchList from '../SearchList';


export default function Modal({ onClickClose, searchValue, setSearchValue, searchGuests, setSearchGuests, search }) {
    return (
        <>
            <div className='modal absolute w-full top-0 h-[450px] z-[1] bg-white' onClick={(e) => e.stopPropagation()}>

                <button className='close text-gray-500 w-full h-[70px] flex  justify-end p-5' type='button' onClick={onClickClose}>
                    <img className='flex w-7 text-gray-500' src={cancel} alt="cancel" />
                </button>
                
                <div className='inModal flex w-[1248px] h-14 top-24 left-24 rounded-2xl bg-white '>
                    <input className='inputModal ' type="text" name="city" value={searchValue || ''} onChange={setSearchValue} placeholder='City' />

                    <input type="number" className='inputModal' placeholder='Add Guests' value={searchGuests || ''} onChange={setSearchGuests} />

                    <div className='boxSearchModal'>
                        <button type='button' className='w-32 h-14 top-24 left-[1084px] rounded-2xl flex bg-red-400 items-center justify-center  btnSearchModal hover:bg-red-600' onClick={() => { search(); }}>
                            <span className="material-symbols-outlined">search</span>
                            Search
                        </button>
                    </div>
                </div>
                <Guests/>
                <SearchList/>

            </div>
        </>
    );
}

export function Search(params) {
    
}