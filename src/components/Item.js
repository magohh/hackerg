
import ReactHover,{Trigger,Hover} from 'react-hover'
import {Link} from 'react-router-dom'

const optionsCursorTrueWithMargin = {
	followCursor: false,
	shiftX: 0,
	shiftY:0,
  }
const Item = ({id, pictureUrl, description,price,name}) => {
	
	return (
		<>
		<div className="col-md-3 text-center">
			<p>{id}</p>
				
				<ReactHover options={optionsCursorTrueWithMargin}>
					
					<Trigger type="trigger">
						<Link to={`/item-detail/${id}`}>
							<img className="product_img" src={pictureUrl}/>
						</Link>
					</Trigger>
					
					<Hover type="hover" className="relative">
						<div >
						
						<span className='info'>
							<p>{description}</p>
							<p>${price}</p>
							
						</span>
						{/* <div className='black_filter'></div> */}
						</div>
				
					</Hover>
				</ReactHover>
			
			
			<h5 className='mt-3'>{name}</h5>
			
		</div>
		</>
	)
}

export default Item