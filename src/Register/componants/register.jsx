import React ,{useState} from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import Footer from '../../HomePage/Component/Footer'
import logo from '../../HomePage/images/logo.png'
import { Loginindatabase } from '../handlebackendregister'
import { history } from '../../history';
const Register = () => {
    const [user,setUser]=useState({})
    const [Username,setUsername]=useState('')
    const [Password,setPassword]=useState('')
   const  sumbitingregister=async()=>{
        setUser(await Loginindatabase(Username,Password))
        if (user!=={}){
            console.log(user)
        history.push('/')
        window.location.reload(false)
    }
    }
    return ( <>
        <main className='register-body'>
            <section className='register-div '>
                 <div className='logonewdiv'>
                    <div className='alignitems-center'>
                        <img className='logoimg' src={logo} alt="Ask&amp;Answer" />
                        <h3>Ask&amp;Answer</h3>
                    </div>
                </div>
                <div >
                    <div className='inputdiv'>
                        <label htmlFor="Username">Username or Email</label>
                        <input value={Username} type="text"id='Username' onChange={e=>setUsername(e.target.value)} />
                    </div>
                    <div className='inputdiv passworddiv'>
                        <label htmlFor="Password">Password</label>
                        <input value={Password} type="password" id='Password'onChange={e=>setPassword(e.target.value)} />
                    </div>
                </div>
                <div className='btn-div'><button onClick={sumbitingregister} className='Register-button'> Register</button></div>
                
            </section>
            {

            }
            <span className='signinlink'>
                     Don't have an Account ? <Link  className="LINKTOSIGNIN" to="/signin"> Sign in  </Link>
            </span>
        </main>
         <Footer/>
         </>
     );
}
 
export default Register;