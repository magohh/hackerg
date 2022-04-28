import {useEffect,useState} from 'react'
import { useParams } from "react-router";
import ItemDetail from './ItemDetail';
// import getItem from '../utils/promise'
// const {products} = require('../utils/products');

import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig'

const ItemDetailContainer = ()=>{
    const [dato,setDato] = useState([]);
    const { idItem } = useParams();

    useEffect (()=>{
        const firestoreOne = async () =>{
            const docRef = doc(db, "products", idItem);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return {
                    id: idItem,
                    ...docSnap.data()
                }
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        }
        firestoreOne()
            .then(result => setDato(result))
            .catch(err => console.log(err))
        
    },[]) 


    // useEffect (()=>{
        
    //     getItem(2000,products.find(item => item.id === parseInt(idItem)))
    //         .then(result => setDato(result))
    //         .catch(error => console.log(error))
        
    // },[])
    // .filter(item => item.id === parseInt(idItem)), console.log(idItem)
    // .find(item => item.id === parseInt(idItem))
    return(
        <>
            <ItemDetail item={dato}/>  
        </>
    )
}

export default ItemDetailContainer;
