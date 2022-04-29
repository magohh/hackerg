import { query, where, collection, getDocs } from '@firebase/firestore';
import db from './firebaseConfig';

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "products"), where('categoryId', '==', parseInt(idCategory)));
    } else {
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}
