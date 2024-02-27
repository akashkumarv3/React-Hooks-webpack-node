import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Menu=()=>{
  const [menuItem,setMenuItems]=useState('')
  const menuItems=[
    {
      text:"Home",
      path:"/home"
    },
    {
      text:"About",
      path:"/about"
    },
    {
      text:"Contact",
      path:"/contact"
    }
  ]

  const fnMenuClick=(text)=>{
    setMenuItems(text)
  }
  
  //return dont disturb beow
  return <div >
    <BrowserRouter>
    <div>
          <ul className="menu">
            {
              menuItems.map((obj,index)=>{
                 return <li className={`${menuItem ==obj.text && 'menu-active'}`} onClick={()=>fnMenuClick(obj.text)} key={index}><Link to={obj.path}>{obj.text}</Link></li>
              })
            }
            
            
          </ul>
          </div>
          <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/home" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/contact" Component={Contact}/>
         </Routes>
          </BrowserRouter>

  </div> 



}
export default Menu;