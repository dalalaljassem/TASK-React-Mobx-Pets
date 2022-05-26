import petsData from "../petsData";
import PetItem from "./PetItem";
import {useState} from "react";


function PetsList() {
//add the states
const [query, setQuery] = useState("");
const [type, setType] = useState("");
const [data, setPets] = useState(petsData);

//handle change events for onChange 
function handleChange(event){
  setQuery(event.target.value.toLowerCase());
}

function handleType(event){
  setType(event.target.value.toLowerCase())
}

function handleAdopt(id){
  setPets(data.filter(item => item.id !== id));
};

//iterate through pet list then filter and map result to pet
  const petFilter = data
  .filter((pet) => pet.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) && pet.type.includes(type.toLocaleLowerCase()) )

  const petMap = petFilter.map((pet) => <PetItem data={pet} key={pet.id} handle={handleAdopt} />);


  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1> 
      {setQuery}
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={handleChange}
                />
              </div>
              <br />
              Type:
              <select onChange={handleType} className="form-select">
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
              {setType}
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petMap}</div>
      </div>
    </section>
  );
}

export default PetsList;
