import {React} from 'react'

const Footer=()=>{
    return(
      <>
      <div style={{ display:"flex",flexWrap:"wrap" ,justifyContent:"space-evenly",marginTop:"50px"}}>
        <div>
            <img  style={{height:"150px"}} src='https://t4.ftcdn.net/jpg/05/00/92/89/360_F_500928932_xssY3GuM0xDpyK3t1fWREoYvG356L5qE.jpg' alt=' '  />
            <h2>2500</h2>
            <h3>organised correctly</h3>
        </div>
        <div>
            <img style={{height:"100px"}}src='https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png' alt=' ' />
            <h2>50000</h2>
            <h3>organised correctly</h3>
        </div>
        <div>
            <img style={{height:"120px"}}src='https://www.shutterstock.com/image-vector/vit-human-logo-template-simple-260nw-1394747648.jpg' alt=' ' />
            <h2>2000000+</h2>
            <h3>organised correctly</h3>
        </div>
       
        
      </div>
      </>
    );
}

export default Footer;