import {React} from 'react'
import './header.css'

const Header=()=>{
    return(
      <>
      <div className='navbar'>
     <h1>logo</h1>
     <div  style={{display :"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"10px"}}>
     <h3>platform</h3>
          <h3>plan</h3>
          <h3>enterprise</h3>
          <h3>resourse</h3>
          <h3>education</h3>

     </div>
    

     <div className='elements' style={{display :"flex",flexWrap:"wrap",justifyContent:"space-between"}} >
         <p  style={{marginRight:"10px",marginTop:"30px"}}>
              coontact us
         </p>
         <p style={{marginRight:"10px",marginTop:"30px"}}>sigin</p>
         <div>
         <button >login</button>
         </div>
        
     </div>
    
      </div>
      </>
    );
}

export default Header;