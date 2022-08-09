import React, {useState, useEffect} from 'react'
import './signin.css'
import logo from'../../HomePage/images/logo.png'
import Footer from './../../HomePage/Component/Footer';
import {ChekingUserExist, ChekingPassword,handlebtnchange} from '../backend/handleChanges'
import { settingusers } from '../backend/handlingsignin';
import { Link } from 'react-router-dom';
import { history } from '../../history';
import { getDocs ,collection } from 'firebase/firestore';
import { firestore ,fireauth} from './../../firebaseconfig';
import { signinwithgoogle } from '../backend/handlingsignin';

const UserRefs=collection(firestore,"Users")
const SignIn = () => {
    const [FName,setFName]=useState('')
    const [SName,setSName]=useState('')
    const [Username,setUsername]=useState('')
    const [Password,setPassword]=useState('')
    const [errorUsername,setErrorUsername]=useState("")
    const [errorpassword,setErrorPassword]=useState('')
    const [activatedbtn,setactivatdbtn]=useState(true)
    const [users, setusers]=useState({})
    const [currentuser,setCurrentUser]=useState({})
    useEffect(()=>{
         const gettingAllUsers=async ()=>{
            const data = await getDocs(UserRefs)
              setusers(data.docs.map(doc=>
               ({...doc.data()}) 
              ))
        }
        gettingAllUsers()
        
    },[Username])
    console.log(currentuser)
    console.log(fireauth.currentUser)
    const sumbiting=async ()=>{
        const data= {FName,SName,Username,Password}
        setCurrentUser(await settingusers(data))
        if(currentuser){
            history.push('/')
            window.location.reload(false)
        }
    }
    const signinwithgooglenow=()=>{
        signinwithgoogle()
        setCurrentUser(fireauth.currentUser)
        if(fireauth.currentUser){
            history.push('/')
            window.location.reload(false)
        }
    }
    useEffect(()=>{
        setErrorUsername(ChekingUserExist(users,Username))
        setErrorPassword(ChekingPassword(Password))
        setactivatdbtn(handlebtnchange(Username,Password,errorUsername,errorpassword))
    },[Username,Password])
    return ( <>
        <main className='background'>
                <section className='card-sign'>
                    <div className='logodivsign'>
                        <img  src={logo} alt="Ask&amp;Answer" className='logoimgsignin'  id='logosignin' />
                        <h3>Ask&amp;Answer</h3>
                    </div>
                    <h1 className='title-sign'> Inscreption in Ask&amp;Answer </h1>
                    <div className="inputdivsignin">
                        <div className='alingitems'>
                            <label  htmlFor="FirstName">First Name</label>
                            <input value={FName} onChange={e=>setFName(e.target.value)} className="inputsignin" type="text" />
                        </div>
                        <div className='alingitems'>
                            <label htmlFor="LastName">Last Name</label>
                            <input value={SName} onChange={e=>setSName(e.target.value)} className="inputsignin" type="text" />
                        </div>
                    </div>
                    <div className="datadiv alingitems" >
                            <label htmlFor="Username">Username</label>
                            <input value={Username}  onChange= {e=> setUsername(e.target.value)}className="usernameinput inputsignin"  type="text" />
                            {
                                errorUsername!==""&& <div className='Alert'>{errorUsername}</div> 
                            }       
                    </div>
                    <div className="datadiv alingitems"> 
                        <label htmlFor="Password">Password</label>
                        <input value={Password} onChange={e=>setPassword(e.target.value)}  className="usernameinput inputsignin"  type="password" /></div>
                        {
                                errorpassword!==""&& <div className='Alert'>{errorpassword}</div> 
                            }
                    <div className='divsignin'>
                            <button  disabled={activatedbtn} onClick={sumbiting}  className='Signin-button'>
                            Sign in 
                            </button>
                    </div>
                    <div className='colorwhite'>Or </div>
                    <div className='divsignin signingoogle'>
                         
                        <button  className=" Signin-button " onClick={signinwithgooglenow}> Sign in with Google</button>
                    </div>
                </section>
                <span className='signinlink'>
                     Already  have an Account ? <Link  className="LINKTOSIGNIN" to="/register"> Register</Link>
            </span>
        </main>
        <Footer/>
        </>
     );
}
 
export default SignIn;