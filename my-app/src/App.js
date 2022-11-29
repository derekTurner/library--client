import {useState, useEffect} from 'react'
import Catalog from './components/catalog';

function App() {

  const [libCatalog, setlibCatalog] = useState([]);
  useEffect(() => {getCatalog();},[]);

  const getCatalog = () => {
    fetch('http://127.0.0.1:3001/catalog')
    .then(res => res.json())
    .then(
      (data) => {
        console.log ("data: ",data );
  
        setlibCatalog (data );
      },
      (error) => {
        console.log(error);
        setlibCatalog(null);
      }
    );
  };

 if (!libCatalog) return <div>No Record Found</div>;
  return (
    <Catalog libCatalog={libCatalog} />
  )
 
}  

export default App;
