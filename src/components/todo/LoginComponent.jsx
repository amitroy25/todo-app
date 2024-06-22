import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'



export default function LoginComponent(){

    const [username,setUsername] = useState('amitroy')
    const [password,setPassword] = useState('')

    const [errorMessage,setErrorMessage] = useState(false)
    const navigate=useNavigate();
    const authContext=useAuth()



    function handleUsernameChange(Event){
       setUsername(Event.target.value)

    }
    function handlePasswordChange(Event){
       setPassword(Event.target.value)

    }
    async function handleSubmitButton(){
           
    if(await authContext.login(username,password)){
            navigate(`/welcome/${username}`)
    }
    else{

       setErrorMessage(true)

       }
    }
   
   return (
       <div className="Login">
                    <h1>Login!</h1>

           {errorMessage && <div>Authentication Unsuccessfull..please try again</div>}
              <div className="LoginForm">
                 <div>
                   <label>User Name</label>
                   <input type="text" name="username"  value ={username} onChange={handleUsernameChange}/>
                 </div>
                 <div>
                   <label>Password</label>
                   <input type="password" name="password" value ={password} onChange={handlePasswordChange}/>
                 </div>
                 <div>
                   <button type="button" name="loginButton" onClick={handleSubmitButton}>Login</button>
                 </div>



              </div>
       </div>
       )
}


