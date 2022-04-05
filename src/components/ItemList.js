import Item from '../components/Item.js'
const {products} = require ('../utils/products');

const ItemList = ({items})=>{
    return(
        <>
        {
            products.map(item =>
                <Item key={item.id} srcImage={item.srcImage} name={item.name}/>
                )
        }
        </>
    )
}

export default ItemList