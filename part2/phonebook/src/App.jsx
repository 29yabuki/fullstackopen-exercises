import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  const [newInput, setInput] = useState(
    {name: '', number: ''}
  )
  const personsToShow = persons.filter(person =>
    person.name.toLocaleLowerCase().includes(search.toLowerCase()), 
    persons
  )

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setInput({
      ...newInput,
      [name]: value
    })
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)

    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  const updatePerson = (id, newPerson) => {
    if (window.confirm(`${newPerson.name} is already added to the phonebook, replace the old number with a new one?`)) {
      personService
        .update(id, newPerson)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id === id ? returnedPerson : p))
      })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      ...newInput
    }
    const sameName = persons.some(person => person.name === nameObject.name)
    const sameNumber = persons.some(person => person.name === nameObject.number)
    const noInput = newInput.name === '' && newInput.number === ''

    if (sameName && sameNumber) {
      alert(`${nameObject.name} is already added to the phone book`)
    } else if (sameName && !sameNumber) {
      const samePerson = persons.find(person => person.name === nameObject.name)
      updatePerson(samePerson.id, nameObject)
    } else if (noInput) {
      alert('Please input something')
    } else {
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }
    setInput({ name: '', number: ''})
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} event={e => setSearch(e.target.value)} />
      <h3>Add a new</h3>
      <PersonForm submit={addPerson} change={handleChange} name={newInput.name} number={newInput.number} />
      <h2>Numbers</h2>
      <Persons collection={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App