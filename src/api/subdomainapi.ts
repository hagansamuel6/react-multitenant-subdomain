import axios from "axios";
import { getSubdomain, CENTRAL_API_DOMAIN } from "../utils/utilityfuncs";



const instance = axios.create({
    baseURL: `http://${getSubdomain()}.${CENTRAL_API_DOMAIN}/api/`,
    headers: { 'X-Custom-Header': 'foobar' }
});

export const fetchTest = () => {
    // console.log('subdomain', getSubdomain()?.toString())
    // return axios.get(getSubdomain()?.toString())
    return instance.get('/user');
}

export const Login = (values: any) => {
    console.log('values', values);
    return instance.post('/auth/login', {
        ...values
    });
}
