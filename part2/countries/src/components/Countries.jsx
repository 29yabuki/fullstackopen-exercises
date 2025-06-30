import { useState, useEffect } from 'react'
import Country from "./Country"

const Countries = ( {collection} ) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    setCountries(collection)
  }, [collection])

  const handleShow = (country) => {
    setCountries([country])
  }

  if (countries.length === 0) {
    return null
  } else if (countries.length === 1) {
    const country = countries[0]
    return <Country country={country} />
  } else {
    return (
      <div>
        {countries.map(c => (
          <div key={c.cca3}>
            {c.name.common} <button onClick={() => handleShow(c)}>Show</button>
          </div>
        ))}
      </div>
    )
  }
}

export default Countries