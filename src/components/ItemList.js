import Item from './Item.js'


const ItemList = ({items}) =>{

    return(
        <>
        
        {   
            items.length>0
            ?items.map(item =>
                <Item key={item.id} product={item}/>
                // <Item key={item.id} pictureUrl={item.pictureUrl} name={item.title} description={item.description} price={item.price}/>
                )
            :<p>Cargando...</p>
            
                
        }
        </>
    )
}

export default ItemList