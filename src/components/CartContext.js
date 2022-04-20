import{ createContext,useState} from 'react'

export const CartContext= createContext();

const CartContextProvider = ({children})=>{
    const [cartList, setCartList]= useState([])

    const addToCart = (item)=>{
        setCartList([
            
            ... cartList,
            item,
        ])
        
    }

    const removeCart = () =>{
        setCartList([]);
    }
    return(
        <>
         <CartContext.Provider value = {{cartList, addToCart,removeCart}}>
             {children}
         </CartContext.Provider>
        </>
    )
}

export default CartContextProvider