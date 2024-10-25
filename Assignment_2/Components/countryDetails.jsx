// components/CountryDetail.js

export default function CountryDetail({ name, population, capital }) {
    return (
      <div>
        <h2>{name}</h2>
        <p>Population: {population.toLocaleString()}</p>
        <p>Capital: {capital}</p>
      </div>
    );
  }
  