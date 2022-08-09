import { signInWithEmailAndPassword } from 'firebase/auth';
import { fireauth } from '../firebaseconfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
export const Loginindatabase= async(Username,Password)=>{
    let user={}
        await signInWithEmailAndPassword(fireauth,Username,Password)
        .then(res=>
         user=res   )
        .catch(err=>console.log(err))
       return user
}
export const  signinwithgoogle=async()=>{
    let googleprovider=new GoogleAuthProvider()
     await signInWithPopup(fireauth,googleprovider).then(re=>console.log(re)).catch(re=>console.log(re))
 }