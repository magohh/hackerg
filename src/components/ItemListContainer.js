import ItemList from './ItemList.js'
import {useEffect} from 'react'
import {useState} from 'react'
const {products} = require('../utils/products');


const ItemListContainer = (texto) =>{
    const[datos, setDatos] = useState([]);
    useEffect(()=>{
        let is_stock = true;

            const customFetch = (time, task) => {
                return new Promise((resolve, reject) => {
                    if (is_stock) {
                        setTimeout(() => {
                            resolve(task)
                        }, time);
                    } else {
                        reject("Error")
                    }
                })
            }
            customFetch(2000,products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    },[]);
    return(
        <>
        <div className='container'>
            <div className='row'>
            <ItemList items={datos}/>
            </div>
            <p>{texto.greeting}</p>
        </div>
        
        
        
        </>
    )
}

export default ItemListContainer;