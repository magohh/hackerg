import Item from './Item.js'


const ItemList = ({items}) =>{
    
    return(
        <>
        
        {
            items.map(item =>
                <Item key={item.id} pictureUrl={item.pictureUrl} name={item.title} description={item.description} price={item.price}/>
                )
                
        }
        </>
    )
}

export default ItemList