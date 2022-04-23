
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
		} else {
			found.qtyItem += numberProducts;
		}
		
	}

	const removeCart = () =>{
		setCartList([]);
	}

	const removeItem = (id)=>{
		let newCart = cartList.filter(item=>item.idItem != id);
		setCartList(newCart);
	}
	const totalPerItem = (idItem) =>{
		let currentItem = cartList.map(item => item.idItem).indexOf(idItem);
		return cartList[currentItem].costItem * cartList[currentItem].qtyItem;
		
	}

	const calcSubtotal = () =>{
		let totalPerItemvar = cartList.map(item => totalPerItem(item.idItem));
		return totalPerItemvar.reduce((prev, current) => prev + current);
	}
	const taxesItems = () =>{
		let taxes = calcSubtotal()*.16
		return taxes
	}

	const allTotal = () =>{
		let total = calcSubtotal()
		return total
	}

	const itemsQty = ()=>{
		let cant = cartList.map(item => item.qtyItem)
		return cant.reduce(((prev, current) => prev + current), 0)

	}

   

	

	return(
		<>
		 <CartContext.Provider value = {{
			cartList, addToCart,
			removeCart,removeItem,itemsQty,
			totalPerItem, calcSubtotal,taxesItems,allTotal}}>
			{children}
		 </CartContext.Provider>
		</>
	)
}

export default CartContextProvider