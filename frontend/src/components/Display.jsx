import personsServices from "../services/persons"

const Display = ({ persons, filter, setPersons }) => {
    const filteredPeople = () => {
        return persons.filter(person => person.name.includes(filter))
    }

    const handleDelete = (id) => {
        personsServices.remove(id).then(_ => {
            setPersons(persons.filter(p => p.id !== id))
        })
    }

    return (filteredPeople().map(person =>
        <div key={person.id}>
            <p>
                {person.name} {person.number}
                <button onClick={() => handleDelete(person.id)}>delete</button>
            </p>
        </div>
    ))
}

export default Display