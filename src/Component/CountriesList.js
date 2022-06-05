import React from "react";
import { useEffect, useState } from "react";
import Cards from "./Cards";
const CountriesList = () => {
  const [countries, setCountries] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        await setCountries(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="cardsContainer">
      {countries &&
        countries.map((c) => {
          return (
             <Cards country={c}/>
           
          );
        })}
    </div>
  );
};

export default CountriesList;
