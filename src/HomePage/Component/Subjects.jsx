import React,{useState} from 'react';
import IT from '../images/ITphoto.jpg'
import Sport from '../images/sportPhoto.jpg'
import Politics  from '../images/Politicsphoto.jpg'
import Gamer from '../images/Gamingphoto.jpg'
import Fashion from '../images/Fashionphoto.jpg'
import Commerce from '../images/Commerce.jpg'
import Progrssion from'../images/Progression.jpg'
const SBody = () => {
    const [grids,setGrids]=useState([
        {
            name:"IT",
            URL:IT,
            discription:"wants some advices in IT?...trouble shouting?... want some solutions ?",
            buttontext:"IT community",
            dataaos:"fade-left"
        },
        {
            name:"Sport",
            URL:Sport ,
            discription:" Have trouble in gym or any kind of sport ?...need motivation? ... Or Just want to talk to some experts in Sports ?",
            buttontext:" Sport Team ",
            dataaos:"fade-right"
        },
        {
            name:"Politics",
            URL:Politics ,
            discription:" Want to get the  recent news?...need to disscuss with some  Subjects ? ... or just  need some informations ?",
            buttontext:" Statesman Groupe  ",
            dataaos:"fade-left"
        }, 
        {
            name:"Gamers",
            URL:Gamer ,
            discription:" Wants some news ?...want  to disscuss about games ? ... Or Just want to invite some gamers ?",
            buttontext:"Gamers Room  ",
            dataaos:"fade-right"
        },
        {
            name:"Fashion",
            URL:Fashion ,
            discription:" Need advice in Fashion  ?... Want to stay in touch ? ... Or Just  you like to disscuss about the recent Fashion ?",
            buttontext:" Fashion Home ",
            dataaos:"fade-left"
        },
        {
            name:"Commerce",
            URL:Commerce,
            discription:" Need diffrents tips from  diffrent experts ?... Want to develope your work ?....Interested in Commerce ? ",
            buttontext:"  Commerce family ",
            dataaos:"fade-right"
        },
        
    ])
    return(
    <section className='Part2'>
          <h2 className='hobbies-selection'>What are your hobbies ? </h2>
          <div className='parts-display'>
    {
        grids.map((grid)=>(
        <div  className="parts"  >
                <img  className='parts-images width-height-settings' src={grid.URL} alt={grid.name+" photo "} />
                <p className='discription' >
                 {grid.discription}
                </p>
                <button className='black-btn'>
                     Join our {grid.buttontext}  <span className='arrow'>&gt;&gt;</span>
                </button>
        </div>
        ))
    }
    </div>
    <div className="parts endparts" >
        <img  className='parts-images width-height-settings' src={Progrssion} alt={ "Progression photo "} />
        <p className='discription'>
         still didnt find your prefences ?..... 
         Dont Worry there is more and more topics and subjects 
         ...so what are you waiting for ?...
        </p>
        <button className='black-btn'>
             Join our Ask&amp;Answer <span className='arrow'>&gt;&gt;</span>
        </button>
    </div>
    </section>
    );
}
 
export default SBody;