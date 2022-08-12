import './App.css';
import React from 'react';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
const styleContent ={
  backgroundColor: "purple",
  fontSize: "20px",
  color:"white",
  width: "500px",
  margin:"auto",
  textAlign:"center",
  borderRadius:"50px",
  marginTop:"100px"
};
function App() {
  return (<div style={styleContent}>
    <div>
    <img src={"./profil.jpg"} alt="title"/>
    </div>

    
    <FullName />
    <Address />
    
    
  </div>
  )


}
export default App;
