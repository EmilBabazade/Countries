import React, {useEffect, useState} from 'react';
import countriesService from './services/countries'
import Country from './components/country'

const App = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesService
      .getAll()
      .then(result => {
        const counts = result.map(c => {
          return {
            name: c.name,
            flag: c.flag
          }
        })
        setCountries(counts)
      })
      .catch(err => console.log(err))
  }, [])

  // name;capital;region;subregion,population;timezones;borders;nativeName;currencies;languages;flag
  return(
    <div>
      <ol>
        {countries.length === 0 ? "Waiting" : 
          countries.map(country => <li><Country key={country.flag} name={country.name} flag={country.flag} /></li>)
        }
      </ol>
    </div>
  )
}

export default App;
