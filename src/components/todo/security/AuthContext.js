import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/apiClient";


//1. create a context
export const AuthContext= createContext()
export const useAuth=()=> useContext(AuthContext)
//2. Share the created context with other component
export default function AuthProvider({children}){
    //3.put some state in the context
    const [isAuthenticated,setAuthentication]=useState(false)
    const [username,setUsername]=useState(null)
    const [token,setToken]=useState(null)


    // function login(username,password){
    //     if(username==='amitroy'&&password==='amit'){
    //         setAuthentication(true)
    //         setUsername(username)
             
    //       return true
    //     }
    //   else{
    //     setAuthentication(false)
    //     setUsername(false)
  
    //        return false  
    //      }


    // } 
  //  async function login(username,password){
   

  //     const baToken = 'Basic ' + window.btoa(username + ":" + password)
      
    
  //     try{
  //   const response= await executeBasicAuthenticationService(baToken)
                       
      
   
      
  //     if(response.status==200){
  //         setAuthentication(true)
  //         setUsername(username)
  //         setToken(baToken)
  //         apiClient.interceptors.request.use(
  //           (config) => {
  //             console.log('intercepting and adding a token')
  //             config.headers.Authorization=baToken
  //             return config
  //           }




  //         )
           
  //       return true
  //     }
  //   else{
  //   logout()

  //        return false  
  //      }
  //     }catch(error){
  //     logout()

  //        return false 


  //     }


  // }
  async function login(username,password){
   

    
  
    try{
  const response= await executeJwtAuthenticationService(username,password)
                     
    
 
    
    if(response.status==200){
      const jwtToken = 'Bearer ' + response.data.token
        setAuthentication(true)
        setUsername(username)
        setToken(jwtToken)
        apiClient.interceptors.request.use(
          (config) => {
            console.log('intercepting and adding a token')
            config.headers.Authorization=jwtToken
            return config
          }




        )
         
      return true
    }
  else{
  logout()

       return false  
     }
    }catch(error){
    logout()

       return false 


    }


}
    function logout(){
        setAuthentication(false)
        setUsername(null)
        setToken(null)


    }

    return (
        <AuthContext.Provider value={{isAuthenticated,login,logout,username,token}}>
            {children}

        </AuthContext.Provider>
    )


}
