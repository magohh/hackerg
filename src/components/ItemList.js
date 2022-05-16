import Item from './Item.js'

const ItemList = ({items}) =>{

    return(
        <>
        
        {   
            items.length>0
            ?items.map(item =>
                <Item key={item.id} product={item}/>
                )
            :<p>Cargando...</p>
            
                
        }
        </>
    )
}

export default ItemList