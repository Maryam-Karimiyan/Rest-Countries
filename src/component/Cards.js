import { Card } from "react-bootstrap";
const Cards = ({ country }) => {
  return (
    <Card key={country.name.common} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={country.flags.png} />
      <Card.Body>
        <Card.Title>{country.name.common}</Card.Title>
        <p>
          Population: <span>{country.population}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </Card.Body>
    </Card>
  );
};
 
export default Cards;