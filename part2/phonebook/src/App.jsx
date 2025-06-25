import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  const [newInput, setInput] = useState(
    {name: '', number: '', id: ''}
  )
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const personsToShow = persons.filter(person =>
    person.name.toLocaleLowerCase().includes(search.toLowerCase()), 
    persons
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setInput({
      ...newInput,
      [name]: value
    })
  }

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      ...newInput,
      id: persons.length + 1
    }

    if (persons.some(person => person.name === nameObject.name)) {
      const errorMsg = `${nameObject.name} is already added to the phonebook`
      alert(errorMsg)
    } else if (newInput.name === '' && newInput.number === '') {
      alert('Please input something')
    } else {
      setPersons(persons.concat(nameObject))
    }
    setInput({name: '', number: '', id: ''})
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} event={e => setSearch(e.target.value)} />
      <h3>Add a new</h3>
      <PersonForm submit={addPerson} change={handleChange} name={newInput.name} number={newInput.number} />
      <h2>Numbers</h2>
      <Persons collection={personsToShow}/>
    </div>
  )
}

export default App