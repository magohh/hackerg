
import {useState} from 'react';
import { useEffect } from 'react';

const ItemCount = ({stock=0,initial=1,onAdd}) =>{

        const [numberProducts, setnumberProducts]= useState(0);
        useEffect(() => {
            setnumberProducts(initial);
        },[]);
        const addProduct = () =>{
            if (numberProducts<stock){
                setnumberProducts(numberProducts + 1)
            }
        }

        const putOffProduct = () =>{
            if (numberProducts>initial){
                setnumberProducts(numberProducts - 1)
            }
        }
        
        
    return (
        <>
        <div>
            <button className='btn btn-outline-dark' onClick={addProduct}>+</button>
            <span className='m-0-1'>{numberProducts}</span>
            <button className='btn btn-outline-dark' onClick={putOffProduct}>-</button>
            
        </div>
        <button className="btn btn-primary mt-4" onClick={() => onAdd(numberProducts)}>Añadir al carrito</button>
        
        </>
    )
}

export default ItemCount;

