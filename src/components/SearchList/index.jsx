import React from "react";
import './SearchList.css'
export default function SearchList() {
    return (
        <>
            <ul className="list flex flex-col text-gray-500 absolute left-[90px]">
                <div className="flex items-center w-[410px] h-12 hover:bg-gray-200 hover:text-white duration-500 location cursor-pointer">
                    <span class="material-symbols-outlined">location_on</span>
                    <li>Helsinki, Finland</li>
                </div>
                <div className="flex items-center w-[410px] h-12 hover:bg-gray-200 hover:text-white duration-500 location cursor-pointer">
                    <span class="material-symbols-outlined">location_on</span>
                    <li>Turku, Finland</li>
                </div>
                <div className="flex items-center w-[410px] h-12 hover:bg-gray-200 hover:text-white duration-500 location cursor-pointer">
                    <span class="material-symbols-outlined">location_on</span>
                    <li>Oulu, Finland</li>
                </div>
                <div className="flex items-center w-[410px] h-12 hover:bg-gray-200 hover:text-white duration-500 location cursor-pointer">
                    <span class="material-symbols-outlined">location_on</span>
                    <li>Vaasa, Finland</li>
                </div>

            </ul>
        </>
    );
}
