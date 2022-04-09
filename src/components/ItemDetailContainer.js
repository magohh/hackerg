import ItemDetail from './ItemDetail';
import {useEffect,useState} from 'react'
import getItem from '../utils/getItem'
const {products} = require('../utils/products');


const ItemDetailContainer = ()=>{
    const [dato,setDato] = useState([]);

    useEffect (()=>{
        getItem(2000,products[4])
        .then(result => setDato(result))
        .catch(error => console.log(error))
    })


    return(
        <>
        <ItemDetail item={dato}/>
        </>
    )
}

export default ItemDetailContainer;