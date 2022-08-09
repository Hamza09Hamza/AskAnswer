import React, { useState,useEffect} from 'react'
import './main.css'
import Logo from '../../HomePage/images/logo.png'
import { sendingmsgs } from '../backend/msgwithdatabase';
import ChatRoom from './ChatRoom';
import { Link } from 'react-router-dom';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { quermist,gettinguid } from '../backend/msgwithdatabase';
import PrivateChannels from './PrivateChannels';
import { createNewRoom } from './../backend/addingdata';
const MainPage = () => {
    const [messages] = useCollectionData(quermist, {});
    const [Message,setMessage]=useState('')
    const [Room, setRoom]=useState('Public')
    const gettingRoomChat=(RoomId)=>{
        if(messages){
            return messages.filter(msg=>msg.RoomId===RoomId)
        }
    }
    const SumbitMessage=(e)=>{
        e.preventDefault()
        let data ={
            uid:gettinguid(),
            text:Message,
            createdAt:new Date().toLocaleString(),
            RoomId:Room
        }
        sendingmsgs(data)
        setMessage('')
    }
    const ChangingRoom=(value)=>{
        if(value!==''){
                setRoom(value)
        }
    } 
    const createNewRoomID=async ()=>{
        await createNewRoom()
    }
    return <main className='background-section'>
    <section className='sectionmain'>
        <section className='choices-part'>
            <div className='server-avaible'>
                <div className='Private-chat'>
                   <PrivateChannels onChanginRoom={(data)=>ChangingRoom(data)}/>
                </div>
                <div className='Add-Server'>
                    <button className='button-selection' onClick={createNewRoomID} ><Link to="/AddNewServ">+</Link></button>
                </div>
                <div className='Public-chat'>
                    <button className='button-selection' 
                    id='Public' 
                    onClick={(e)=>ChangingRoom(e.target.id)}
                    >
                    <p className='testp'> Hello Public</p>
                    </button>
                </div>
                <div className='Add-Server'>
                    <button className='button-selection'>+</button>
                </div>
            </div>
        </section>
        <section className='chat-part'  >
            <section className='messages-part'> 
                <div className='search-div'>
                    <input  type="text" className='Searchfoinfo' placeholder='Search  A&amp;A' /> 
                     
                </div>
                <div className='displaymssgs parts-receiv-send'>
                <ChatRoom messageDisplayed={gettingRoomChat(Room)}/>
                </div>
            
            </section>
            <section className='input-part'>     
                <input value={Message} className='inputmsg' type="text" placeholder='Start typing ...'  onChange={e=>setMessage(e.target.value)}/>
                <button onClick={e=>SumbitMessage(e)} className='button-send'><img className='sendlogo' src={Logo} alt="" /> <span className='ASK-Answer-btn'> Ask </span> </button>
                <button onClick={e=>SumbitMessage(e)} className='button-send'><img className='sendlogo' src={Logo} alt="" /><span  className='ASK-Answer-btn'> Answer</span> </button>
            </section>
        </section>
    </section>
    </main>
    
}
 
export default MainPage;