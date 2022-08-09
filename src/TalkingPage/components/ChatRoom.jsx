import React,{useState ,useEffect } from 'react'
import { fireauth } from '../../firebaseconfig';
const ChatRoom = (props) => {
    const [ userID,setUserID]=useState('')
    useEffect(()=>{
        if(fireauth.currentUser){
        setUserID(fireauth.currentUser.uid)
    }
})
    const chekingOriginMsg=(ID)=>{
        if(ID===userID){
            return 'send'
        }
        else{
            return'recv'
        }
    }
    return ( <>
    {
        props.messageDisplayed
        &&

        props.messageDisplayed.map(obj=>(
            <div className={'blockdiv'+chekingOriginMsg(obj.uid)}>
                <div className={'msg-div-'+chekingOriginMsg(obj.uid)}>
                    {obj.text}
                </div>
            </div>
        ))
    }
    </>);
}
 
export default ChatRoom;