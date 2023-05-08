import React from "react";





export const HomePage = (props) => {
    return (
        
        <div className="HApp">
     
            
                <div className="div1">
                    <button className="Logout" onClick={props.logout}>Logout</button>
                </div>
            
            
                <div className="userPROFILE">
                    <text>User Profile: </text>
                </div>
            

            <div className="mss">
                <h1>Successfully logged in</h1>
            </div>
    
        </div>   
    )
    
  
    
  
      
}