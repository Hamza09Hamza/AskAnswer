import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import menu from '../images/bar.png'
import {signOut } from 'firebase/auth'
import { history } from '../../history';
import {getUsername} from'../usersname'
import { fireauth } from '../../firebaseconfig';

const Header = () => {
    let [Activated,setActivated]=useState(false)
    const [partHeader ,setPartHeader]=useState(<></>)
    const [curuser,setCurrentUser]=useState({})
    const [ username,setUsername]=useState('')
    const [ count ,setCount]=useState(0) 
 useEffect(()=>{
    setCurrentUser(fireauth.currentUser)
    getUsername().then(res=>setUsername(res))
    setCount(count=>count+1)
},[fireauth.currentUser])   
const  Activemenu=()=>{
        if(Activated===true){
            setActivated(Activated=false)
        }else{
            setActivated(Activated=true)
        }
    }
    const Singout=()=>{
        signOut(fireauth)
        history.push('/')
        window.location.reload(false)
    }
   useEffect(()=>{
        if(curuser!==null){
            setPartHeader (<>
            <li><button onClick={Singout} className='Header-btn'>Sign out</button></li>
            <li> <span className=' WelcomUSER'> Welcom  {username} !!</span></li>
            </>)
             
        }else{
            setPartHeader(<>
             <li><Link to="/signin"><button className="Header-btn"> Sign in</button></Link></li>
                <li><Link to="/register"><button className="Header-btn fixed-btn">Register </button> </Link></li>
            </>)
             
        }

    },[count])
     
    return (<>
        <header className='Header' >
            <div className='logodiv'>
                <img className='logo' src={Logo} alt="Ask&amp;Answer" />
                <h3>Ask&amp;Answer</h3>
            </div>
            
            <ul className='remove'>
                <li><button className="Header-btn">Home </button> </li>
                <li><button className="Header-btn">About us</button>   </li>
                <li><a href="#Footer"><button  className="Header-btn">Contact Us </button> </a>  </li>
               {partHeader}
        
            </ul>
            <span className='transparent' onClick={Activemenu}><img className='Menu' src={menu} alt="" /></span>
        </header>
    {   Activated&& 
        <div className='menu-grid'>  
            <a href="#Footer" className="menu-items">Contact Us</a>
            <a href="#" className="menu-items">Sign in</a>
            <a href="#" className="menu-items">Register</a>
        </div>
    }
        </>
        )
   
}
 
export default Header;