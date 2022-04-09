import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
// import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer';





function App() {
  return (
    <>
    <NavBar/>
    {/* <ItemListContainer greeting="Hola mundo" className="container"/> */}
    <ItemDetailContainer />
</>
  );
}

export default App;
