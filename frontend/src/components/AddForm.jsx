import personsServices from "../services/persons"
import Notifications from './Notifications'

const AddForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons, setSuccessMessage, setErrorMessage }) => {
    const handleChangeInName = (event) => {
        setNewName(event.target.value)
    }

    const handleChangeInNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.map(person => person.name).includes(newName)) {
            if (confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
                // const id = persons.find(person => person.name == newName).id
                // const newPerson = {
                //     name: newName,
                //     number: newNumber
                // }
                // personsServices.update(id, newPerson).then(updatedPerson => {
                //     const updatedPersons = persons.map(person => person.name === newName ? updatedPerson : person)
                //     setPersons(updatedPersons)
                // }).catch(_ => {
                //     setErrorMessage(`Information of ${newName} has already been removed from server`)
                //     setTimeout(() => {
                //         setErrorMessage(null)
                //     }, 5000)
                // })
            }

        }
        else {
            const newPerson = {
                name: newName,
                number: newNumber
            }
            personsServices.create(newPerson).then(createdPerson => {
                setPersons(persons.concat(createdPerson))
                setSuccessMessage(`Added ${newName}`)
                setTimeout(() => {
                    setSuccessMessage(null)
                }, 5000)
            })
            setNewName('')
            setNewNumber('')
        }
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleChangeInName} />
            </div>
            <div>number: <input value={newNumber} onChange={handleChangeInNumber} /></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddForm