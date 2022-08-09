import React from 'react'
import FFriends from '../images/FFriends.jpg'
import SFriends from '../images/SFreinds.jpg'
const Instructions = () => {
    return(
    <section className='blacksection'>
            <div className='Note-header'>
                <h2 className='white-header'> 
                FORUM INSTRUCTIONS 
                </h2>
                <p className='white-header text-discription'>
                    Ask&amp;Anwser guidelines are based on mutual respect for all forum members.
                    Our goal is to make users feel safe and comfortable sharing their knowledge and interests through healthy and lively discussions.
                    We therefore ask all forum participants to follow our rules,
                    and to keep the conversation pleasant and encouraging.
                    Happy posting!
                    </p>
            </div>
            
                <div className='Notes'>

                    <div className='Note-image' >
                        <img className='imagegreind' src={FFriends} alt=" first-friends" />
                
                    <div className='Note-text'>
                        <h4>
                            NO OFFENSIVE CONTENT
                        </h4>
                        <p>
                        Posting content that incites hatred,
                        promoting discrimination or intolerance (anti-religion, sexist, homophobic, racist...) is not allowed.
                        </p>
                    </div>
                    </div>
                    <div className='Note-image' >
                        <img className='imagegreind' src={SFriends} alt=" first-friends" />
                
                    <div className='Note-text2'>
                        <h4>
                        NO PERSONAL INFORMATION
                        </h4>
                        <p>
                        For your own safety and that of others,
                        we ask that you avoid sharing personal information as well as asking other users to provide their personal information on this forum.
                        </p>
                    </div>
                    </div>
                    
                </div>
              
            
    </section>
    );
}
 
export default Instructions;