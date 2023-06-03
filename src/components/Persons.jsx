import persons from "../data/persons";
import Person from "./Person";

function Persons() {
  return (
    <div className="cards">
      {persons.map(function (person) {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
}

export default Persons;
