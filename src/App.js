import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
// import IconButton from '@mui/material/IconButton';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/icons-material/Icon';




function App() {
  return (
    <>
    <NavBar/>
    <IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>
<DeleteIcon/>
</>
  );
}

export default App;
