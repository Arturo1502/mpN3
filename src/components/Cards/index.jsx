import React from 'react';
import './Cards.css';

export default function Cards(img, superHost, type, beds, rating, title) {
    return (
        <li>
            <img src={img} alt="Department Photo" className='w-96 h-64 top-[200px] left-[94px] rounded-3xl' />
            <div className='information'>
                <div className='flex items-center justify-between'>
                    <span className={`${ superHost } ? "superHost bg-transparent rounded-xl border border-solid border-stone-500 w-[100px] h-[28px] shrink-0 text-stone-500" : "false"}`}>SUPER HOST</span>
                    <p className="text-neutral-500">{ type }</p>
                </div>
                <div className='flex items-center'>
                    <img className='h-4' src='/public/star.svg' alt="star" />
                    <p>{rating}</p>
                </div>
                <p><strong>{title}</strong></p>
            </div>
        </li>

    )
}
