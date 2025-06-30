const Country = ( { country }) => {
  const languages = country.languages;
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        Capital {country.capital}<br />
        Area {country.area}
      </div>
      <h1>Languages</h1>
      <ul>
        {Object.entries(languages).map(([key, val]) => (
          <li key={key}>{val}</li>
        ))}
      </ul>
      <img src={country.flags.png}/>
    </div>
  )
}

export default Country