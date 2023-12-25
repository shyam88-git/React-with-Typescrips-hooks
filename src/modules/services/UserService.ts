import axios from "axios";
export class UserService{

     private static serverUrl:string='https://jsonplaceholder.typicode.com';

     public static getAllUsers():Promise<any>{

        return axios.get(`${this.serverUrl}/users`);
     }
}
