import ItemList from './ItemList.js'
import {useEffect, useState} from 'react'
// import promise from '../utils/promise'
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig'
// const {products} = require('../utils/products');



const ItemListContainer = () =>{
    const[datos, setDatos] = useState([]);
    const {idCategory} = useParams();

    // useEffect(()=>{
    //     const fetchFromFirestore =  async (idCategory) =>{
    //         const querySnapshot = await getDocs(collection(db, "products"));
    //         const dataFromFirestore = querySnapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             ...doc.data()
    //         }));
    //         return dataFromFirestore
    //     }
    //         fetchFromFirestore(idCategory)
    //         .then( result => setDatos(result))
    //         .catch(err => console.log(err))
        
    //     fetchFromFirestore();
            
    // },[idCategory]);

        useEffect(()=>{
        if(idCategory == undefined){
            const fetchFromFirestore =  async (idCategory) =>{
                const querySnapshot = await getDocs(collection(db, "products"));
                const dataFromFirestore = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                return dataFromFirestore
            }
                fetchFromFirestore(idCategory)
                .then( result => setDatos(result))
                .catch(err => console.log(err))
            
            fetchFromFirestore();
            }else{
                const fetchFromFirestore =  async (idCategory) =>{
                    const querySnapshot = await getDocs(collection(db, "products"));
                    const dataFromFirestore = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    return dataFromFirestore.filter(item => item.idCategory === parseInt(idCategory)) 
                    console.log(dataFromFirestore)
                   
                }
                    fetchFromFirestore(idCategory)
                    .then( result => setDatos(result))
                    .catch(err => console.log(err))
              
                fetchFromFirestore();
                }
        },[idCategory]);
 
    // useEffect(()=>{
    //     if(idCategory == undefined){
    //         promise(2000,products)
    //             .then(result => setDatos(result))
    //             .catch(err => console.log(err))
    //         }else{
    //             promise(2000,products.filter(item=> item.categoryId === parseInt(idCategory)))
    //                 .then(result => setDatos(result))
    //                 .catch(err => console.log(err))
    //             }
    //     },[idCategory]);
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