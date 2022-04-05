
import {useState} from 'react';

const AddPutOff = () =>{

        const [numberProducts, setnumberProducts]= useState(1);

        const addProduct = () =>{
            if (numberProducts<=4){
                setnumberProducts(numberProducts + 1)
            }
        }

        const putOffProduct = () =>{
            if (numberProducts>=2){
                setnumberProducts(numberProducts - 1)
            }
        }

        const alertNumber = () =>{
            alert(numberProducts)
        }
    return (
        <>
        <div>
            <button className='btn btn-outline-dark' onClick={addProduct}>+</button>
            <span className='m-0-1'>{numberProducts}</span>
            <button className='btn btn-outline-dark' onClick={putOffProduct}>-</button>
            
        </div>
        <button className="btn btn-primary mt-4" onClick={alertNumber}>Añadir al carrito</button>
        
        </>
    )
}

export default AddPutOff;

