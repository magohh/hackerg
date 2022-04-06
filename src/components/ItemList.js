import Item from './Item.js'


const ItemList = ({items}) =>{
    
    return(
        <>
        
        {
            items.map(item =>
                <Item key={item.id} srcImage={item.srcImage} name={item.name}/>
                )
        }
        </>
    )
}

export default ItemList