import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ContactList from './components/contactList';

function App() {

  const [output, setoutput] = useState([])
  
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setoutput(data.output)
      })
  }, [])

  return (
    <>
      {output.map((output, indx) => {
        return (
          <ContactList key={indx} imageUrl={output.picture.large} name={output.name.first} email={output.email} age={output.dob.age} />
        )
      })}
    </>
  )
}

export default App;
