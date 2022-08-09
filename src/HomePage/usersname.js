import { fireauth,firestore } from "../firebaseconfig";
import { getDocs } from 'firebase/firestore';
import { collection } from '@firebase/firestore';
import { getModularInstance } from "@firebase/util";
const CollectionUsers=collection(firestore, "Users")
const getAllUsers=async()=>{
    let Users=[]
       const data= await getDocs(CollectionUsers)
        data.docs.map(doc=>{
            Users.push({...doc.data()})
                })

        return Users;
}

export const getUsername= async()=>{
    const  Users= await  getAllUsers()
    let Username=null
    if(Array.isArray(Users)){
        Users.map((user)=>{
            if(fireauth.currentUser.uid===user.uid)
            {
                Username=user.FName
            }   
        })
        return Username
    }
}
export const HandlingSearchBar=async(data,input)=>{
    if(input!==''){
        if(Array.isArray(data)){
           data=data.filter((user)=>(true ? `${user.FName+user.SName}`.toLowerCase().includes(input.toLowerCase()):false)
        )}
        return data
    }else{
        return data
    }

}
export const getDataFromServer=async()=>{
    return await getAllUsers().then((res)=>res)
}