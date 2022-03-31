import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';






function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Hola mundo" />
</>
  );
}

export default App;
