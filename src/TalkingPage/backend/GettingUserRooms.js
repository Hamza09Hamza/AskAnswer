import { fireauth,firestore } from "../../firebaseconfig"
import { getDocs ,collection} from '@firebase/firestore';
const CollectionRooms=collection(firestore, "Servers")
const gettingAllRooms=async ()=>{
  let Rooms=[]
   const RoomsData= await getDocs(CollectionRooms)
    RoomsData.docs.map((doc)=>{
        Rooms.push({...doc.data()})
   })
   return Rooms
}
export const  gettingUserRooms=async ()=>{
  let Rooms=await  gettingAllRooms()
  Rooms.filter(room=>{
    let exist= false
    room.UsersIn.map((u)=>{
     if( u===fireauth.currentUser.uid){
      exist=true
     }
    })
    return exist
  })
  return Rooms
}
export const ChekingRoomIdExist=async(data)=>{
  let Rooms=await  gettingAllRooms()
  let response=''
  Rooms.map((room)=>{
   if( room.RoomID===data){
    response='Room ID Already exist'
   }
  })
  return response
}