import React, { Component } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from'./HomePage/Home';
import Register from './Register/componants/register';
import NotFound from './notFound';
import SignIn from './Sign in/components/SignIn';
import MainPage from './TalkingPage/components/main';
import AddNewServ from './TalkingPage/components/AddNewPrivateServer';
const AllIn = () => {
    return ( 
        <Router>
            <Routes>
                <Route path='/AddNewServ' element={<AddNewServ/>}/>
                <Route path='/main' element={<MainPage/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path={'*'} element={<NotFound/>}/>
                <Route path={"/"}  element={<Home/>}/>
            </Routes>
        </Router>
     );
}
 
export default AllIn;
