import axios from "axios";
import { getSubdomain, CENTRAL_API_DOMAIN } from "../utils/utilityfuncs";



//TEST IF YOU'RE ON A SUBDOMAIN
let domain = ''

if(window.location.host.split(".").length >= 3){
  //im on subdomain
  const instance = axios.create({
    baseURL: `http://${CENTRAL_API_DOMAIN}/`,
    headers: {'X-Custom-Header': 'foobar'}
  });
}else {
 
}






