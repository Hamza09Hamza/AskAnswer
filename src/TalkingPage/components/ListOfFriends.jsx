import React from 'react';
import './main.css'
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from './../../firebaseconfig';
const queryServer=collection(firestore,"SupportData")
const ListOfFriends = (props) => {
    const [freinds] = useCollectionData(queryServer, {id:'id'  });
    return ( <>
     <div className='Add-friends-Display-flex'>
           Members: 
            {
                freinds&&freinds.map(({data})=>
                data.slice(0,3).map((t)=>(<div className='button-friend'>
                <p>{t.Name}</p>
                <button className='btn-delete' onClick={()=>props.DeleteFromServer(t)}>x</button>
                </div>)))
            }                           
                    </div>
                   {freinds&& freinds[0].data.length>=4 && <div className='moretextdiv'>
                    <p className='moretext'>And  {freinds&&freinds[0].data.length-3} More freinds</p>
                    </div>}
    </> );
}
 
export default ListOfFriends;