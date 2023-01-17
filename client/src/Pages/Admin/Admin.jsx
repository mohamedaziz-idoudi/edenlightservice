import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom';
import './admin.css';
import {Form} from '../../Components'

const Admin = ({setAuth}) => {
  const [user,setUser] = useState('');
  const [pwd,setPwd] = useState('');
  const navigate=useNavigate('');
  const sign_in = () => {
    Axios.get("http://localhost:3001/api/login", { params: {
      user: user,
      pass: pwd
    }}).then((response) => {
      console.log(response.data);
      if(response.data) {
        setAuth(true);
      }
      else{
        setAuth(false);
      }
    }).then(()=> {
      navigate('/dashboard');
    })
    
  }

  return (
    <div className='eden__form'>
      <div className='form__title'>
        <h1>Please Log In:</h1>
      </div>
      <div className="eden__form_line">
        <label>Username: </label>
        <input type="text" onChange={(e) => {
          setUser(e.target.value);
        }} />
      </div>
      <div className="eden__form_line">
        <label>Password: </label>
        <input type="password" onChange={(e) => {
          setPwd(e.target.value);
        }} />
      </div>
      <div className='form__button'>
        <button onClick={async() => {
          await sign_in()
        }}>Log In</button>
      </div>
    </div>
  )
        
}

export default Admin