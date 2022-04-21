import {CartContext} from './CartContext'
import {useContext} from 'react'
import {Link} from 'react-router-dom'


const Cart = ()=>{
	const info = useContext(CartContext)
	
	return(
		<div className='container'>
			<div className='row'>
				<div className='col-md-12 text-center mt-5'>
					<h3>Carrito</h3>
				</div>
				<div className='col-md-12'>
					
					{
						(info.cartList.length > 0)

						? 
						<div className='d-flex justify-content-between'>
							<Link to="/">Seguir comprando</Link>
							<button className="btn btn-primary mt-4" onClick={info.removeCart}>Borrar todo</button>
							
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
							<div className="row mt-5">
								
								<div className="col-md-3">
									<img className="cart_img" src={item.imgItem}></img>
								</div>
								<div className="col-md-3 text-left">
								<p className="item_detail_title">{item.nameItem}</p>
								<p className="item_detail_price">${item.costItem} c/u</p>
								<p>{item.qtyItem} seleccionados</p>
								<button className="btn btn-primary mt-2" onClick={() => info.deleteI(item.idItem)}>Borrar Item</button>
								
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