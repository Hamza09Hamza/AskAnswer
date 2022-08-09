import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {createUserWithEmailAndPassword } from'firebase/auth'
import {  addDoc , doc, setDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { firestore,fireauth } from './../../firebaseconfig';
const UserRefs=collection(firestore,"Users")

export const settingusers= async(data)=>{
        await createUserWithEmailAndPassword(fireauth,data.Username,data.Password).then(async (res)=>{
            console.log(res)
            await sendtofirestore(data)
            return fireauth.currentUser
         }).catch((err)=>{
             console.log(err)

         },
         )
       
    }  
    export const  signinwithgoogle=async()=>{
        let googleprovider=new GoogleAuthProvider()
         await signInWithPopup(fireauth,googleprovider)
         .then(re=>console.log(re))
         .catch(re=>console.log(re))
     } 
const sendtofirestore=async(data)=>{
        let uid=fireauth.currentUser.uid
        data={...data,uid}
        const NewUserRef = doc(collection(firestore, "Users"));
        await setDoc(NewUserRef, data)
    }