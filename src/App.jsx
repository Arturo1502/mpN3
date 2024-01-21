import { useEffect, useState } from "react";
import Windbnb from "/logo.svg";
import "./App.css";
import Navbar from "./components/Navbar"
import Cards from "./components/Cards";


function App() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const [categorias, setCategories] = useState();
  const [filteredCategories, setFilteredCategories] = useState();
  const [searchValue, setSearchValue] = useState();

  async function getData() {
    const fetchData = await fetch("stays.json");

    const datajson = await fetchData.json();

    setCategories(datajson);
    setFilteredCategories(datajson);


  }

  useEffect(() => {
    getData();
  }, []);

  const [guests, setGuests] = useState('');

  const search = () => {
    const data = categorias.filter((categoria) =>
      categoria.city.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredCategories(data);
  };
  return (
    <>
      <Navbar
        searchValue={searchValue}
        setSearchValue={(e) => setSearchValue(e.target.value)}
        search={search}
        img={Windbnb}
        searchGuests={guests}
        setSearchGuests={(e) => setGuests(e.target.value)}
        isSearchVisible={isSearchVisible}
        setIsSearchVisible={setIsSearchVisible}
      />

      <div className="title">
        <h1 className="text-3xl">
          <strong>Stays in Finland</strong>
        </h1>
        <span className="stays">12+ stays</span>
      </div>

      <ul className="contenido ">
        {filteredCategories &&
          filteredCategories.map((user, id) => (

            <Cards
              key={id.id}
              img={user.photo}
              superHost={user.superHost}
              beds={user.beds}
              type={user.type}
              rating={user.rating}
              title={user.title}
            />

          ))}
      </ul>
      <footer>
        <p>
          created by{" "}
          <a href="">
            <strong>Arturo Alvarez</strong>
          </a>
          - devChallenges.io
        </p>
      </footer>
    </>
  );
}

export default App;
