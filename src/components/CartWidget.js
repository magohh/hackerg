import {AiOutlineShoppingCart} from 'react-icons/ai'
import { CartContext } from './CartContext';
import { useContext} from 'react';

const CartWidget = () =>{
	let numberItems = 4
	const info = useContext(CartContext);
	let onCart = info.cartList.length
	console.log(onCart)
	return(
		<>
		<div className='relative'>
		 <AiOutlineShoppingCart/>

		 {
			onCart > 0
			? <div className='cart_items'>{info.itemsQty()}</div>
			: <div className='cart_items_0'></div>
			 
		 }
		</div>
		
		</>
	)
}

export default CartWidget;