import { addDoc, collection, getDocs } from "firebase/firestore";
import {DB} from "../firebaseConfig"

export default class DBService{

    BasePath = "";
    CollectionRef = null

    constructor(collectionName)
    {
        this.BasePath = import.meta.env.VITE_BASE_DB_COLLECTION;
        this.CollectionRef = collection(DB, collectionName);
    }

    Add = async (object) => {        
        return await addDoc(this.CollectionRef, object)    
    }

    Get = async () => {
        const data = await getDocs(this.CollectionRef)
        return data.docs.map((doc) => ({...doc.data(), id : doc.id}))
    }

    
} 
