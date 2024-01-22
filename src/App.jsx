import { useEffect, useState } from "react";
import Windbnb from "/logo.svg";
import "./App.css";
import Navbar from "./components/Navbar"
import Cards from "./components/Cards";
import total from "./components/Guests";

export async function getData() {
  const fetchData = await fetch("stays.json");
  const datajson = await fetchData.json();
  const citys = Array.from(new Set(datajson.map((ciudad) => ciudad.city)));

  return citys;
}

function App() {
  const [abrirModal, setabrirModal] = useState(false);

  const [categorias, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [guests, setGuests] = useState("");

  const [enlistarCiudad, setEnlistarCiudad] = useState("");



  async function getData() {
    const fetchData = await fetch("stays.json");

    const datajson = await fetchData.json();
    setCategories(datajson);
    setFilteredCategories(datajson);

    const citys = Array.from(new Set(datajson.map((ciudad) => ciudad.city)));

    setEnlistarCiudad(citys);
  }

  useEffect(() => {
    getData();
  }, []);


  const search = () => {
    const data = categorias.filter((categoria) => {
      const city =
        categorias === "" ||
        categoria.city.toLowerCase().includes(searchValue.toLowerCase());

      const guestsFilter =
        guests === "" || categoria.maxGuests >= parseInt(guests);
      return city && guestsFilter;
    });
    setFilteredCategories(data);
  };

  return (
    <>
      <Navbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        search={search}
        searchGuests={guests}
        setSearchGuests={(e) => setGuests(e.target.value)}
        img={Windbnb}
        abrirModal={abrirModal}
        setabrirModal={setabrirModal}
        enlistarCiudad={enlistarCiudad}
        total={total}
      />

      <div className="title">
        <h1 className="text-3xl">
          <strong>Stays in Finland</strong>
        </h1>
        <span className="stays">12+ stays</span>
      </div>

      <ul className="contenido">
        {filteredCategories &&
          filteredCategories.map((user) => (

            <Cards
              key={user.id}
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
