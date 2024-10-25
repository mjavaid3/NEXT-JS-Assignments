import Link from 'next/link';

export default function countryPage() {
  const countries = ["canada", "pakistan", "india", "china"];

  return (
    <div>
      <h1>Country List</h1>
      <ul>
        {countries.map((country) => (
          <li key={country}>
            <Link href={`/country/${country}`}>{country.charAt(0).toUpperCase() + country.slice(1)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}