import React,{ useContext, useEffect,useState}from 'react'
import { AuthContext } from '../Context/AuthContext'


export const Users = () => {
   const [data,setData]= useState([]);
   const [state]= useContext(AuthContext);

  const fetchData=()=>{
    fetch(`https://assosapi.herokuapp.com/mensData`).then(r=>r.json())
     .then(d=>setData(d))
  }

   useEffect(()=>{
     fetchData();
   },[])

   console.log(data)
  
  return (
    <div>
        <h1>Welcome to users page</h1>
        {state.token && <h6>Token: {state.token}</h6>}

        <div className='user_cont'>
          {data?.map(item=>{
            return (
              <div key={item.id} className='user_data'>
                <img src={item.imgu} alt='not available' />
                <p style={{fontSize:'5px'}}>{item.title}</p>
                <p>{item.price}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}
