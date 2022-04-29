import {CartContext} from './CartContext'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import { serverTimestamp } from 'firebase/firestore'
import {doc,collection,setDoc,updateDoc, increment} from 'firebase/firestore'
import db from '../utils/firebaseConfig'


const Cart = ()=>{
	const info = useContext(CartContext)
	
	const checkout = ()=>{

		info.cartList.forEach(async (item) => {
			const itemRef = doc(db, "products", item.idItem);
			await updateDoc(itemRef, {
			  stock: increment(-item.qtyItem)
			});
		  });

		let order = {
			buyer:{
				name:"Da Vinci",
				email:"davinci@pintor.com",
				phone:"5543434343",
			},
			date: serverTimestamp(),
			items:info.cartList.map(item =>({
				id:item.idItem,
				title:item.nameItem,
				price:item.costItem,
				qty:item.qtyItem
			})),
			total:info.allTotal()
		}
		
		const createOrderFirestore = async ()=>{
			const newOrderRef = doc(collection(db,"orders"))
			await setDoc (newOrderRef,order)
			return newOrderRef
		}

		createOrderFirestore()
			.then(result => alert ("Se creo tu orden. Porfavor conserva tu clave: "+ result.id + "."))
			.catch(err => console.log(err))

		info.removeCart();
		
	}
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
						<div className='d-flex justify-content-between align-middle'>
							<Link to="/">Seguir comprando</Link>
							<button className="btn btn-danger mt-4" onClick={info.removeCart}>Borrar todo</button>
							
						</div>
						: 
						<>
							<p className='text-center'>Tu carrito está vacío</p>
							<Link to="/" className='text-center'><p>Seguir comprando</p></Link>
						</>
					}
				</div>
			</div>
		{
			info.cartList.length > 0 &&(
				
				<div className="container mt-5">
					<div className='row mt-5'>
						<div className='col-md-8'>
							{
							info.cartList.map(item =>
								<div className="row" key={item.idItem}>
									<div className="col-md-6 mt-2">
										<img className="cart_img" src={item.imgItem}></img>
									</div>
									<div className="col-md-6 text-left">
										<p className="item_cart_title m-0">{item.nameItem}</p>
										<p className='m-0'>${item.costItem} c/u</p>
										<p className='m-0'>{item.qtyItem} seleccionados</p>
										<p className="item_detail_price">$ {info.totalPerItem(item.idItem)}</p>
										<button className="btn btn-primary mt-2" onClick={() => info.removeItem(item.idItem)}>Borrar Item</button>
									</div>	
								</div>
								)	
							}
						</div>
						<div className='col-md-4 p-0 text-center'>
							<div className='bg_summary'>
								<h4 className='text-center mt-3'>Resumen de la compra</h4>
								<hr className='mb-5'></hr>
								<p className="summary_title d-flex justify-content-between">Subtotal: <span>$ {info.calcSubtotal()}</span></p>
								<p className="summary_title d-flex justify-content-between taxes_dis">Impuestos: <span>$ {info.taxesItems().toFixed(2)}</span></p>
								<p className="summary_title d-flex justify-content-between">Total: <span>$ {info.allTotal()}</span></p>
								<button className='btn btn-primary mt-4' onClick={checkout}>Terminar compra</button>
							</div>
						</div>
					</div>
				</div>	
			)
		}	
		</div>
	)
}

export default Cart;