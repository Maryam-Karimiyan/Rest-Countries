import { useEffect, useState } from "react";
import CountriesList from "./CountriesList";
import { getAllCountries } from "../api/countries";


const CountriesPage = () => {

   const [countries, setCountries] = useState();
    
   useEffect(() => {
     getAllCountries().then(({ data }) => setCountries(data));
   }, []);

   return <div>{countries && <CountriesList countriesData={countries} />}</div>;
}
 
export default CountriesPage;