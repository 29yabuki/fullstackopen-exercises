import Person from './Person.jsx'

const Persons = ( {collection, deletePerson} ) => {
  return (
    <ul>
      {collection.map(person =>
        <Person key={person.id} name={person.name} number={person.number} deletePerson={() => deletePerson(person.id)} />
      )}
    </ul>
  )
}

export default Persons