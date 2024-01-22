import React, { useEffect, useState } from 'react';
import { getData } from '../../App'
import './SearchList.css';

const SearchList = ({ setSearchValue }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const datajson = await getData();
                setData(datajson);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleCityClick = (city) => {
        setSearchValue(city);
    };

    return (
        <>
            {data.map((city, i) => (
                <ul key={i} className="list text-gray-500">
                    <div className="flex items-center w-[410px] h-12 hover:bg-gray-200 hover:text-white duration-500 location cursor-pointer">
                        <li className='w-full flex items-center' onClick={() => handleCityClick(city)}>
                            <span className="material-symbols-outlined">location_on</span>
                            {city}
                        </li>

                    </div>

                </ul>
            ))}
        </>
    );
};

export default SearchList;
