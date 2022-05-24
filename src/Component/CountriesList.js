import React from "react";
import { Card } from "react-bootstrap";
const CountriesList = ({ countriesData }) => {
     console.log(countriesData);
    return ( 
        <div>
            <div className="search">

            </div>
            <div>
                {countriesData?.map(c=>{
                    return(
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={c.flags.png} />
                      <Card.Body>
                        <Card.Title>{c.name.common}</Card.Title>
                        <p>
                          Population: <span>{c.population}</span>
                        </p>
                        <p>
                          Region: <span>{c.region}</span>
                        </p>
                        <p>
                          Capital: <span>{c.capital[0]}</span>
                        </p>
                      </Card.Body>
                    </Card>
                    );
                  
              })}
            </div>
        </div>
     );
}
 
export default CountriesList;