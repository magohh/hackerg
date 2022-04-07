import ItemCount from './ItemCount'
import ReactHover,{Trigger,Hover} from 'react-hover'

const optionsCursorTrueWithMargin = {
	followCursor: false,
	shiftX: 0,
	shiftY:0,
  }
const Item = (props) => {
	
	return (
		<>
		<div className="col-md-3 text-center">
			<p>{props.id}</p>
				
				
				
				<ReactHover options={optionsCursorTrueWithMargin}>
					<Trigger type="trigger">
					<img className="product_img" src={props.pictureUrl}/>
					</Trigger>
					<Hover type="hover" className="relative">
						<div >
						
						<span className='info'>
							<p>{props.description}</p>
							<p>${props.price}</p>
							
						</span>
						{/* <div className='black_filter'></div> */}
						</div>
				
					</Hover>
				</ReactHover>
			
			
			<h5 className='mt-3'>{props.name}</h5>
			<ItemCount stock={5} initial={1}/>
		</div>
		</>
	)
}

export default Item