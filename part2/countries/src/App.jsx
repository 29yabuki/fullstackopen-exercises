import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {

  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')

  useEffect(() => {
    if (country) {
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => {
          const allCountries = response.data
          const searches = allCountries.filter(
            c => c.name.common.toLowerCase().includes(country.toLowerCase()))
          const names = searches.map(c => c.name.common)
          setCountries(searches)
        })
    }
  }, [country])

  const handleChange = (event) => {
    setCountry(event.target.value)
  }

  return (
    <div>
      <div>
        find countries <input value={country} onChange={handleChange} />
      </div>
      <Countries collection={countries} />
    </div>
  )
}

export default App