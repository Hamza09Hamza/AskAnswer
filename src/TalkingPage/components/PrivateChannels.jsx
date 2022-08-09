import React from 'react'
import { useState, useEffect } from 'react';
import { gettingUserRooms } from '../backend/GettingUserRooms';
const PrivateChannels = (props) => {
    const [privateChannel,setPrivateChannel]=useState([])
    useEffect(  ()=>{
        const gettingdata=async()=>{
            setPrivateChannel(await gettingUserRooms())
        }
      gettingdata()
    },[])
    
    return ( 
    <>
    {privateChannel&&
    privateChannel.map(chnl=>(
        <button className='button-selection'  id={chnl.RoomID} onClick={ e=>props.onChanginRoom(e.target.id)}><p className=' testp'>{chnl.Name}</p></button>
    ))
    
      } 
     </> 
    );
}
 
export default PrivateChannels;