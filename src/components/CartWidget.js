import {AiOutlineShoppingCart} from 'react-icons/ai'

const CartWidget = () =>{
    let numberItems = 4
    return(
        <>
        <div className='relative'>
         <AiOutlineShoppingCart/>
         <div className='cart_items'>{numberItems}</div>
        </div>
        
        </>
    )
}

export default CartWidget;