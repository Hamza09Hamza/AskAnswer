import { collection } from '@firebase/firestore';
import { addDoc } from '@firebase/firestore';
import { firestore, fireauth } from '../../firebaseconfig';
import { query, orderBy, limit } from "firebase/firestore";  

const CollectionChatsMessages=collection(firestore, "ChatsMessages")
export const quermist =query(CollectionChatsMessages,orderBy('createdAt'),limit(27))
export const sendingmsgs= async (data)=>{
    await addDoc(CollectionChatsMessages,data)
}
export const gettinguid=()=>{
    if(fireauth.currentUser){
      return  fireauth.currentUser.uid
    }else{
        return ''
    }
}
