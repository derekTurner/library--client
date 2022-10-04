import {useState} from 'react'
import Contacts from './components/contacts';

function App() {

  const [contacts, setContacts] = useState([]);

  fetch('http://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then((data) => {
    setContacts({ contacts: data })
  })
  .catch(console.log)


  return (
    <Contacts contacts={contacts} />
  )
 
}  

export default App;
