import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
        <h1 style={{ fontSize: "24px" }}>
          WikiCountries: Your Guide to the World
        </h1>

        <div className="list-group">
          {countries.map((country) => (
            <a
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
              href={`/countryDetailsPage/${country.alpha3Code}`}
            >
              <Link
                to={`/countries/${country.alpha3Code.toLowerCase()}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={`${country.name.common} Flag`}
                  style={{
                    marginRight: "10px",
                    width: "72px",
                    height: "54px",
                    objectFit: "contain",
                  }}
                />
                {country.name.common}
              </Link>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
