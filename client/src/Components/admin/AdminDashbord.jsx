import { AuthContext } from "../../context/AuthContext";
import { useContext } from 'react';

const CustomerDashbord = () =>{
    const { auth } = useContext(AuthContext)
    console.log(auth);
    return(
        <div className="signin-container">
          
            <h1> <span style={{textTransform:'uppercase'}}>{auth.username}</span> Welcome To Admin Dashbord </h1>
      </div>
    )
}

export default CustomerDashbord