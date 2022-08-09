import React , { useState, useEffect } from 'react'
import { HandlingSearchBar } from '../../HomePage/usersname';
import { AddingUsertoServer,DeletingUserFromServer,fetchingData } from '../backend/addingdata';
import ListOfFriends from './ListOfFriends';
const InviteSearchBar = () => {
    const [ friend, setFriend]=useState('')
    const [Data, setData]=useState([])
    const [count , setCount]=useState(0)
    
    useEffect(()=>{
        const getdata=async ()=>{
            setData(await fetchingData())
        }
        getdata()
        
    },[count])
    
      
    useEffect(()=>{
        HandlingSearchBar(Data,friend).then(res=>setData(res))
    },[friend])
    const AddingUser=(data)=>{
        AddingUsertoServer({Name:data.FName+' '+data.SName,uid:data.uid})
        setCount(count=>count+1)
    }
    const DeleteFromServer=(data)=>{
        DeletingUserFromServer(data)
        setCount(count=>count+1)
    }
    return ( <>
        <div className='Friendsbackground'>
                                 <div className='Friend-Div'>
                                    <div className='flexdiv'>
                                    <input  value={friend} 
                                            className='inputsignin'
                                            placeholder='Search for Freinds' 
                                            onChange={(e)=>setFriend(e.target.value)}
                                    />
                                     </div>
                                     
                                        <div className='UserDisplay'>
                                            {Data &&Data.map((dat)=>(<>
                                            <div className='FriendDisplay'>
                                                <p className='displayingUsersName'>{dat.FName+' '+dat.SName}</p>
                                                <button className='button-Add' id={dat.uid} onClick={()=>AddingUser(dat)} > Add </button>
                                            </div>
                                            </>
                                            )
                                            )}
                                        </div>

                                     
                                 </div>  
                       </div>
                       <ListOfFriends DeleteFromServer={DeleteFromServer}/>
        </>
         );
}
 
export default InviteSearchBar;