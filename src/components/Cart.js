import {CartContext} from './CartContext'
import {useContext} from 'react'


const Cart = ()=>{
	const info = useContext(CartContext)
	return(
		<>
		{
			info.cartList.length > 0 &&(
				
				<div className="container mt-5">
					{
						info.cartList.map(item =>
							<div className="row">
								
								<div className="col-md-3">
									<button onClick={info.removeCart}>Borrar todo</button>
									<button></button>
									<img className="cart_img" src={item.pictureUrl}></img>
								</div>
								<div className="col-md-9 text-center">
								<p className="item_detail_title mt-3">{item.title}</p>
								<p className="item_detail_description">{item.description}</p>
								<p className="item_detail_price">${item.price}</p>
								<p> seleccionados</p>

								
								</div>
							</div>
							
							)
					}
					
				</div>
				
				
			)
		}
		
		</>
	)
}

export default Cart;