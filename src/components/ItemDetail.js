import {useState} from 'react'
import ItemCount from "./ItemCount";
import CheckoutButton from './CheckoutButton';
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {CartContext} from './CartContext'


const ItemDetail = ({item}) =>{
	const [itemCount, setItemCount] = useState(0);
	const info = useContext(CartContext);

	const onAdd = (numberProducts) =>{
		alert("Agregaste "+ numberProducts)
		setItemCount(numberProducts)
		info.addToCart(item, numberProducts)
		
	}
	return(
		<>
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-7">
					<img className="item_detail_img" src={item.pictureUrl}></img>
				</div>
				<div className="col-md-5 text-center">
				<p className="item_detail_title mt-3">{item.title}</p>
				<p className="item_detail_description">{item.description}</p>
				<p className="item_detail_price">${item.price}</p>
				<p>Servicios disponibles: {item.stock}</p>
				{
					itemCount === 0
					? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
					: <Link to='/cart'><CheckoutButton/></Link>
				}
				
				</div>
			</div>
		</div>
		
		
		
		</>
	)
}

export default ItemDetail;