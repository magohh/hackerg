import Producto from '../components/Producto.js'
const products = [
    {
        id:1,
        srcImage:"https://images.unsplash.com/photo-1619878079079-833bd76cf0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        name:"Flores"
    },
    {
        id:2,
        srcImage:"https://images.unsplash.com/photo-1595438280062-bab772735ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name:"Pay"
    },
    {
        id:3,
        srcImage:"https://images.unsplash.com/photo-1563201180-1c57435ae249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name:"Café"
    }
]

const ItemListContainer = (texto) =>{
    return(
        <>
        <div className='container'>
            <div className='row'>
            {
                products.map(item =>
                    <Producto key={item.id} srcImage={item.srcImage} name={item.name}/>
                    )
            }
            </div>
            <p>{texto.greeting}</p>
        </div>
        
        
        
        </>
    )
}

export default ItemListContainer;