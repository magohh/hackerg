import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
	const onAdd = (numberProducts) =>{
		alert("Agregaste "+ numberProducts)
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
				<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
				</div>
			</div>
		</div>
		
		
		
		</>
	)
}

export default ItemDetail;