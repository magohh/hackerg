import {CartContext} from './CartContext'
import {useContext} from 'react'
import {Link} from 'react-router-dom'


const Cart = ()=>{
	const info = useContext(CartContext)
	return(
		<div className='container'>
			<div className='row'>
				<div className='col-md-12 text-center mt-3'>
					<h4>Carrito</h4>
				</div>
				<div className='col-md-12'>
					
					{
						(info.cartList.length > 0)

						? 
						<div className='d-flex justify-content-between'>
							<Link to="/">Seguir comprando</Link>
							<button onClick={info.removeCart}>Borrar todo</button>
							
						</div>
						: <p className='text-center'>Tu carrito está vacío</p>
						
					}
				</div>
			</div>
		{
			info.cartList.length > 0 &&(
				
				<div className="container mt-5">
					{
						info.cartList.map(item =>
							<div className="row">
								
								<div className="col-md-3">
									<img className="cart_img" src={item.imgItem}></img>
								</div>
								<div className="col-md-9 text-center">
								<p className="item_detail_title mt-3">{item.nameItem}</p>
								<p className="item_detail_price">${item.costItem}</p>
								<p>{item.qtyItem} seleccionados</p>
								<button onClick={() => info.deleteI(item.idItem)}>Borrar Item</button>
								
								</div>
							</div>
							
							)
					}
					
				</div>
				
				
			)
		}
		
		</div>
	)
}

export default Cart;