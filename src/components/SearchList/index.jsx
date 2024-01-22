import React from "react";
import './SearchList.css'


export default function SearchList({ onClick }) {
    const cities = ["Helsinki, Finland", "Turku, Finland", "Oulu, Finland", "Vaasa, Finland"];

    return (
        <>
            <ul className="list flex flex-col text-gray-500 absolute left-[90px]">
                {cities.map((city, index) => (
                    <div
                        key={index}
                        className="flex items-center w-[410px] h-12 hover:bg-gray-200 hover:text-white duration-500 location cursor-pointer"
                        onClick={() => onClick(city)}
                    >
                        <span className="material-symbols-outlined">location_on</span>
                        <li>{city}</li>
                    </div>
                ))}
            </ul>
        </>
    );
}
// arreglar el evento onclick

