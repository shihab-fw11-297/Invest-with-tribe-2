import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"
import mail from './mail.png';

const Header = ()=>{
    const {auth,setAuth}  = useContext(AuthContext)
   
    return <>
    <div className="header">
        <div className="left-header">
            INVEST WITH TRIBE
        </div>
        {
            auth.token!==""?<div className="user">
               <span>Welcome To DashBords </span> 

             {auth.role === "customer" ? <span style={{display:'flex'}}><img src={mail} alt="mail" className="mail" /> <div className="notification">1</div> </span>  : ""}
              
               <div className="mail-text">welcome to desktbord</div>
              
               <Link to="/home"> <button className="header-btn" onClick={()=>setAuth({...auth, token:"", user:""})}>Logout</button></Link>
            </div>:

        <div className="right-header">
            <Link to="/login" className="header-link">Log-in</Link>
            <Link to="/register" className="header-link">Sign-up</Link>
        </div>
        }
    </div>
    
    </>
}

export default Header;