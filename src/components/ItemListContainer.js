import ItemList from './ItemList.js'
import {useEffect, useState} from 'react'
import promise from '../utils/promise'
import { useParams } from 'react-router-dom';
const {products} = require('../utils/products');



const ItemListContainer = () =>{
    const[datos, setDatos] = useState([]);
    const {idCategory} = useParams();
 
    useEffect(()=>{
        if(idCategory == undefined){
            promise(2000,products)
                .then(result => setDatos(result))
                .catch(err => console.log(err))
            }else{
                promise(2000,products.filter(item=> item.categoryId === parseInt(idCategory)))
                    .then(result => setDatos(result))
                    .catch(err => console.log(err))
                }
        },[idCategory]);
    return(
        <>
        <div className='container'>
            <div className='row'>
                <ItemList items={datos}/>
            </div>
        </div>
        
        
        
        </>
    )
}

export default ItemListContainer;