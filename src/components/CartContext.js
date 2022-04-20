import { ConnectingAirportsOutlined } from '@mui/icons-material';
import{ createContext,useState} from 'react'

export const CartContext= createContext();

const CartContextProvider = ({children})=>{
    const [cartList, setCartList]= useState([])

    const addToCart = (item,numberProducts)=>{
        let found = cartList.find(product => product.idItem === item.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.pictureUrl,
                    nameItem: item.title,
                    costItem: item.price,
                    qtyItem: numberProducts
                }
            ]);
            console.log(cartList)
        } else {
            found.qtyItem += numberProducts;
        }
        // setCartList([
            
        //     ... cartList,
        //     item,
        //     {qty:numberProducts}
        // ])
        
    }

    const removeCart = () =>{
        setCartList([]);
    }

    const deleteI = (id)=>{
        let newCart = cartList.filter(item=>item.idItem != id);
        setCartList(newCart);
    }
    return(
        <>
         <CartContext.Provider value = {{cartList, addToCart,removeCart,deleteI}}>
             {children}
         </CartContext.Provider>
        </>
    )
}

export default CartContextProvider