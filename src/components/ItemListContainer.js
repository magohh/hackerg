import ItemList from './ItemList.js'
import customFetch from '../utils/customFetch'
import { useEffect, useState } from 'react'
const {products} = require ('../utils/products');



const ItemListContainer = () =>{
    const [info, setInfo] = useState([])

    useEffect(()=>{
        customFetch(2000,products)
        .then(result => setInfo(result))
        .catch (err => console.log(err))
    },[])
    return(
        <>
        <div className='container'>
            <div className='row'>
            <ItemList items={info}/>
            </div>
            
        </div>
        
        
        
        </>
    )
}


export default ItemListContainer;