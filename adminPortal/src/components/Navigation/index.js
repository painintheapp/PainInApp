import React from 'react'
import { useLocation } from "react-router-dom";
import Home from './Home'
import Other from './Others'
const Index = () => {

    const location = useLocation();
    let Nav = <Other />
    if(location.pathname === "/home" || location.pathname === "/") Nav = <Home />
    
    return Nav
}


export default Index;