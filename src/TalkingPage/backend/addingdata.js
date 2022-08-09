import { firestore } from './../../firebaseconfig';
import {addDoc,collection,doc,getDocs,updateDoc } from '@firebase/firestore';
import { getDataFromServer} from '../../HomePage/usersname';
const queryServer=collection(firestore,"SupportData")
let id=''
export const createNewRoom=async()=>{
  id=(await addDoc(queryServer,{data:[]})).id
  console.log(id) 
}
const getData=async ()=>{
    let variable
    variable =await  getDocs(queryServer).then(snapshot=>snapshot.docs.map((data)=>{
      return  (data.data())
    }))
    return variable
  
}
export const AddingUsertoServer=async (dataAdded)=>{
    let variable= await getData()
    let RoomNum=variable.indexOf(id)
    variable=variable[RoomNum].data
    variable=variable[RoomNum].data
    variable.push(dataAdded)
    const userDoc=doc(firestore,"SupportData",id)
    const Newdata={data:variable}
    await updateDoc(userDoc,Newdata)
  }
export const DeletingUserFromServer=async (dataDelt)=>{
    let variable= await getData()
    let RoomNum=variable.indexOf(id)
    variable=variable[RoomNum].data
    variable=variable.filter((vari)=>vari.uid!==dataDelt.uid)
    const userDoc=doc(firestore,"SupportData",id)
    const Newdata={data:variable}
    await updateDoc(userDoc,Newdata)
  }

export const fetchingData=async ()=>{
  const ListofAllUsers=await getDataFromServer()
  const ListofSelectedUsers=await getData()
  console.log(id)
  let RoomNum=ListofSelectedUsers.indexOf(id)
 console.log(ListofSelectedUsers[RoomNum].data)
 if(ListofSelectedUsers[RoomNum].data.length>0){
   let  dataSELECTED=ListofSelectedUsers[RoomNum].data.map(({uid})=>ListofAllUsers.filter((LAU)=>LAU.uid!==uid))[0]
   return dataSELECTED
 }
   else{
    return ListofAllUsers
   }
}
