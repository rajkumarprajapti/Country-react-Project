import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {useState} from "react";
export const Header = () =>{
  
  const [show, setShow] = useState(false);
  
  const handleButtonToggle = ()=>{
        return setShow(!show);
  };
  
    return( 
    <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="logo">
                        
                        <NavLink to = "/">
                        <h1>WordAtlas</h1>
                        </NavLink>
                        </div>
                        <nav className= {show ? "menu-mobile" : "menu-web"}>
                            <ul>
                                <li>
                                     <NavLink to = "/">Home</NavLink>   
                                </li>
                                <li>
                                    
                                <NavLink to = "/about">About</NavLink>
                                </li>
                                <li>
                                        
                                     <NavLink to = "/contact">Contact</NavLink>
                                </li>
                                <li>
                                    
                                <NavLink to = "/country">country</NavLink>
                                </li>
                               
                            </ul>
                        </nav>

                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>

                </div>
            </div>
    </header>
    );
}