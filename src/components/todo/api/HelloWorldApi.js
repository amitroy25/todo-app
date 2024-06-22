import { apiClient } from "./apiClient"
export const retriveHelloWorldBean = ()=>apiClient.get('/hello-world/path-variable/{name}')

export const retriveHelloWorldPathVariable = (username)=>apiClient.get(`/hello-world/path-variable/${username}`
// ,{
//     headers:{
//         Authorization: 'Basic YW1pdHJveTphbWl0'
//     }
// }
)
