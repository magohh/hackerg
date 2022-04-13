import {useEffect,useState} from 'react'
import { useParams } from "react-router";
import ItemDetail from './ItemDetail';
import getItem from '../utils/promise'
const {products} = require('../utils/products');



const ItemDetailContainer = ()=>{
    const [dato,setDato] = useState([]);
    const { idItem } = useParams();

    useEffect (()=>{
        
        getItem(2000,products.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(error => console.log(error))
       
        
    },[])


    return(
        <>
            <ItemDetail item={dato}/>  
        </>
    )
}

export default ItemDetailContainer;
