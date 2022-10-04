import {useState, useEffect} from 'react'
import Contacts from './components/contacts';

function App() {

  const [contacts, setContacts] = useState([]);
  useEffect(() => {getContacts();},[]);

  const getContacts = () => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
     console.log (data );
      setContacts (data );
    },
    (error) => {
      console.log(error);
      setContacts(null);
    }
  );
};

 if (!contacts) return <div>No Record Found</div>;
  return (
    <Contacts contacts={contacts} />
  )
 
}  

export default App;
