import Person from './Person.jsx'

const Persons = ( {collection} ) => {
  return (
    <ul>
      {collection.map(person => 
        <Person key={person.id} name={person.name} number={person.number} />
      )}
    </ul>
  )
}

export default Persons