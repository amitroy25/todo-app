import { useParams,Link} from 'react-router-dom'
import { useState } from 'react'
import { retriveHelloWorldBean,retriveHelloWorldPathVariable } from './api/HelloWorldApi'

export default function WelcomeComponent(){
    const {username}=useParams()
    const [message,setMessage]=useState(null)
    function callHelloWorldRestApi(){
          console.log('clicked')
        //   retriveHelloWorldBean()
        //   .then( (response) => successfullResponse(response) )
        //   .catch( (error) => errorResponse(error) )
        //   .finally( () => console.log('cleanup'))
           retriveHelloWorldPathVariable('ankit')
          .then( (response) => successfullResponse(response) )
          .catch( (error) => errorResponse(error) )
          .finally( () => console.log('cleanup'))


    }
    function successfullResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }
    function errorResponse(error){
        console.log(error)
    }

    return (
        <div className="WelcomeComponent">
                     <h1>Welcome {username}!</h1>

            <div>
                Manage Your todos - <Link to="/todos">Goto!</Link>
            </div>
            <div m-5>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi} >Call Hello World</button>
            </div>
            <div className="text-info">{message}</div>

        </div>
    )

}


