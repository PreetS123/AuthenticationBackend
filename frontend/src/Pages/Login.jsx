import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../Styles/Login.module.css';


export const Login = () => {
  const navigate= useNavigate();
const [inpVal,setInpVal]= useState({
  email:'',
  password:''
});

  const handleChange=(e)=>{
       setInpVal({...inpVal,[e.target.name]:e.target.value})  
  }

  const handleSubmit=async(e)=>{
    // console.log(inpVal)
    e.preventDefault();
       await fetch('http://localhost:8080/auth/login',{
        method:'POST',
        body:JSON.stringify(inpVal),
        headers:{
          'content-type':'application/json'
        }
       }).then(r=>r.json())
       .then(res=>{
        if(res.token){
          localStorage.setItem('token',JSON.stringify(res.token))
          console.log('login',res.token);
          alert('LOGIN DONE');
          navigate('/users')
        }
       }).catch(er=>console.log(er))
  }


  return (
    <div>
      <div className={styles.loginWrapper}>
        <div className={styles.loginDiv}>
          <div className={styles.loginImage}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.02LdA2YkojxyL5Y9a8Ik7gHaEi&pid=Api&P=0"
              alt="COMPANY"
            />
          </div>
          <h2> Start Your Journey</h2>
          <form >
            <div className={styles.formWrapper}>
              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="email">Email</label>
                </InsideDiv>
                <InsideDiv>
                  <input className={styles.inputWrapper}  type="email" name="email" onChange={handleChange} autoComplete='off' />
                </InsideDiv>
              </div>

              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="password">Password</label>
                </InsideDiv>
                <InsideDiv>
                  <input className={styles.inputWrapper} type="password" name="password" onChange={handleChange} autoComplete='off' />
                </InsideDiv>
              </div>
               
              
              <FormButtonDiv>
                <button className={styles.btn} onClick={handleSubmit} >LOGIN</button>
              </FormButtonDiv>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}





const InsideDiv = styled.div`
  font-size: 15px;
`;

const FormButtonDiv = styled.div`
  width: 70%;
`;