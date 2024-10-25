import CountryDetail from '../../../components/countryDetails'; 

type CountryData = {
  [key: string]: {
    name: string;
    population: string;
    capital: string;
  };
};

const countryData: CountryData = {
  pakistan: { name: 'Pakistan', population: "225 million", capital: 'Islamabad' },
  india: { name: 'India', population: "1.38 billion", capital: 'New Delhi' },
  china: { name: "China", population: "1.44 billion", capital: "Beijing" },
  canada: { name: 'Canada', population: "37 million", capital: 'Ottawa' },
};
export default function CountryPage({ params }: { params: { country_name: string } }) {
  const { country_name } = params;

  const country = countryData[country_name];

  if (!country) {
    return <p>Country not found!</p>;
  }

  return <CountryDetail {...country} />;
}
