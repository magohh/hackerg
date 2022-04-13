
import ReactHover,{Trigger,Hover} from 'react-hover'
import {Link} from 'react-router-dom'

const optionsCursorTrueWithMargin = {
	followCursor: false,
	shiftX: 0,
	shiftY:0,
  }
// const Item = ({id, pictureUrl, description,price,title}) => {
	const Item = ({product}) => {
	return (
		<>
		<div className="col-md-3 text-center">
			
				<ReactHover options={optionsCursorTrueWithMargin}>
					
					<Trigger type="trigger">
						<Link to={`/item-detail/${product.id}`}>
							<img className="product_img" src={product.pictureUrl}/>
						</Link>
					</Trigger>
					
					<Hover type="hover" className="relative">
						<div className="relative">
						
						<span className='info'>
							<p>{product.description}</p>
							<p>${product.price}</p>
							
						</span>
						<div className='black_filter'></div>
						</div>
				
					</Hover>
				</ReactHover>
			
			
			<h5 className='mt-3'>{product.title}</h5>
			
		</div>
		</>
	)
}

export default Item