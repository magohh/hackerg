import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import About from '../components/About.js'
import Cart from '../components/Cart.js'

import CartContextProvider from '../components/CartContext'


const Home = ()=>{
    return(
        <>
       <CartContextProvider>
            <BrowserRouter>
            <NavBar/>
            
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
                <Route path="/item-detail/:idItem" element={<ItemDetailContainer/>}/>	
                <Route path="/about" element={<About/>}/>
                <Route path="/cart" element={<Cart/>}/>	
            </Routes>

            </BrowserRouter>
       </CartContextProvider>
        </>
    )
}

export default Home;