import React from 'react';
import Instagram from '../images/instagram.png'
import Twitter from '../images/twitter(1).png'
import Gmail from '../images/gmail(1).png'
import Discord from '../images/discord(1).png'
import Phone from '../images/phone-call.png'
const Footer = () => {
    return ( 
        <div id='Footer'>
        <h2 className='Header-Footer'>
            Contact Us :
        </h2>
         <footer className='askfouter'>
           <div className="footercolumn">
               <img  className="logoimage"src={Discord}alt="" />
               <p>Discord</p>
               <span>
               <a href="https://discordapp.com/users/xxxx/"> My Discord</a>
               </span>
           </div>
           <div className="footercolumn">
               <img  className="logoimage"src={Twitter}alt="" />
               <p>twitter</p>
               <span>
                   <a href="https://twitter.com/HamzaBoukader1">My Twitter</a>
               </span>
           </div>
           <div className="footercolumn">
               <img  className="logoimage"src={Phone} alt="" />
               <p>Phone</p>
               <span>
               <a href="tel:+213656287247">+213656287247</a>
               </span>
           </div>
           <div className="footercolumn">
               <img  className="logoimage"src={Gmail} alt="" />
               <p>EMAIL</p>
               <span>
               <a href="mailto:boukaderhamza71@gmail.com">boukaderhamza71@gmail.com</a>
               </span>
           </div>
           <div className="footercolumn">
               <img  className="logoimage"src={Instagram} alt="" />
               <p>Instagram</p>
               <span>
                   <a href="https://www.instagram.com/hamza._.bkd/"> My Instagram</a>
               </span>
           </div>
       </footer>
        </div>
               
     );
}
 
export default Footer;