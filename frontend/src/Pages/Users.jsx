import React,{ useContext, useEffect}from 'react'
import { AuthContext } from '../Context/AuthContext'


export const Users = () => {
  //  const [data,setData]= useState([]);
   const [state]= useContext(AuthContext);



   useEffect(()=>{
     
   },[])

  
  return (
    <div>
        <h1>Welcome to users page</h1>
        {state.token && <h6>Token: {state.token}</h6>}
    </div>
  )
}
