import ItemList from './ItemList.js'
import {useEffect} from 'react'
import {useState} from 'react'
import promise from '../utils/promise'
const {products} = require('../utils/products');



const ItemListContainer = () =>{
    const[datos, setDatos] = useState([]);
    useEffect(()=>{
        promise(2000,products)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    },[datos]);
    return(
        <>
        <div className='container'>
            <div className='row'>
            <ItemList items={datos}/>
            </div>
            {/* <p>{texto.greeting}</p> */}
        </div>
        
        
        
        </>
    )
}

export default ItemListContainer;