import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../../HomePage/images/logo.png'
import Footer from '../../HomePage/Component/Footer';
import { ChekingRoomIdExist } from '../backend/GettingUserRooms';
import InviteSearchBar from './SearchingInvitingUsers';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from './../../firebaseconfig';

const AddNewServ = () => {
   
    const [deleteActivated,setDeleteActivated]=useState(false)
    const [RoomID, setRoomID]=useState('')
    const [RoomName, setRoomName]=useState('')
    const [ErrorID, setErrorID]=useState('')
   const [Display , setDisplay]=useState(
<>
    <div className='Friendsbackground'>
        <button className='btn InviteFriends' onClick={()=>setDisplay(<InviteSearchBar Delete={deleteActivated}/>)} >
            Invite Friends
        </button>
    </div>
</>
)


   const chekingRoomID=(target)=>{
    setRoomID(target.value)
    ChekingRoomIdExist(target.value).then((res)=>{
        setErrorID(res)
    })
   }
    return (<>
    <main className='background'>
                <section className='card-sign'>
                    <div className='logodivsign'>
                        <img  src={logo} alt="Ask&amp;Answer" className='logoimgsignin'  id='logosignin' />
                        <h3>Ask&amp;Answer</h3>
                    </div>
                    <h1 className='title-sign'> Create New Server  in Ask&amp;Answer </h1>
                    <div className="inputdivsignin">
                        <div className='alingitems'>
                            <label  htmlFor="RoomID">Room ID</label>
                            <input 
                            value={RoomID} 
                            id="RoomID"
                            onChange={ (e)=> chekingRoomID(e.target)} 
                            className="inputsignin" 
                            type="text" />
                            {
                                ErrorID!==""&& <div className='Alert'>{ErrorID}</div> 
                            }
                        </div>
                        <div className='alingitems'>
                            <label htmlFor="RoomName">Room Name</label>
                            <input value={RoomName} onChange={e=>setRoomName(e.target.value)}  id="RoomName" className="inputsignin" type="text" />
                        </div>
                    </div>
                  {Display}
                 
                    <div className='divsignin'>
                            <button     className='Signin-button'>
                           Create Server
                            </button>
                    </div>
                </section>
        </main>
        <Footer/>
        
    </>  );
}
 
export default AddNewServ;