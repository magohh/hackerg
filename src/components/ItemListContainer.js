import ItemList from './ItemList.js'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch';



const ItemListContainer = () =>{
    const[datos, setDatos] = useState([]);
    const {idCategory} = useParams();
    

     useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);


    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

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