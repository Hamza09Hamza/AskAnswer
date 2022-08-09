import './Home.css';
import FBody from './Component/bigDisplay';
import Header from './Component/header';
import SBody from './Component/Subjects';
import Instructions from './Component/Instruction';
import Footer from './Component/Footer';
const  Home=()=> {
   
  return (
      <>
  <Header/> 
      <FBody/>
      <SBody/>
      <Instructions/>
      <Footer/>
      </>
  );
}

export default Home;
