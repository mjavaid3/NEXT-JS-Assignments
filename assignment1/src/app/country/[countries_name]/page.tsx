
import countries from '../../../../data/countries.jsx';

export default function CountriesPage({ params }: { params: { countries_name: string } }) {
  const countryKey = params.countries_name.toLowerCase();
  const country = countries[countryKey];

  if (!country) {
    return <h1>Country not found</h1>;
  }

  return (
    <div>
      <h1><strong>Country Name:</strong>{country.name}</h1>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
    </div>
  );
}
