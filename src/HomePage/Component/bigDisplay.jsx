import React from 'react'


import Image from'../images/bigimg.jpg'
import { history } from '../../history';
import { fireauth } from '../../firebaseconfig';
const FBody = () => {
        const GettingStarted=()=>{
                if(fireauth.currentUser){
                        history.push('/main')
                        window.location.reload(false)
                }else{
                        history.push('/register')
                        window.location.reload(false)
                }
        }
    return  (
    <section className='sectionOne'>
            <img  className="bigimage" src={Image} alt="" />
            <div className='text'>
                    <h1 className='Title'>Ask&amp;Answer </h1>
                    <span className='first-speech'>
                        you are connected to the right place: a forum for questions,
                        answers and all the intermediate discussions.
                        Take a look at our rules &amp; our different topics,
                        and start a discussion that interests you today.
                    </span>
                        <button onClick={GettingStarted} className="fixed-btn">
                                Get started &gt;&gt;
                        </button>
                    
            </div>
    </section>
              );
}
 
export default FBody;