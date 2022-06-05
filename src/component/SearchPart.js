import { useEffect, useState } from "react";
import React from "react";
import Cards from "./Cards";
import Filtering from "./Filtering";
const SearchPart = () => {
    const { countries, setCountries } = useState([]);
    const [selectedValue, setSelectedValue] = useState("");
    const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/all/name/`
        );
        const data = await response.json();
        await setCountries(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);


  function handleSelectedItemChange({ selectedItem }) {
    setSelectedValue(selectedItem);
  }
  const list = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(inputValue.toLowerCase())
    )
    .filter((country) => {
      return country.continents.some((continent) =>
        continent.toLowerCase().includes(selectedValue.toLowerCase())
      );
    });

  

  return (
    <div className="search">
      <Filtering
        selectedValue={selectedValue}
        handleSelectedItemChange={handleSelectedItemChange}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {list && list.map((country) => <Cards country={country} />)}}
    </div>
  );
};

export default SearchPart;
