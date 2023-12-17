import axios from 'axios';
import { getSession } from 'next-auth/react';

let token = ''

let instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`,

  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${token}`,
},
})

instance.interceptors.request.use(
    async config => {
        const data = await getSession()
        const tokenn = data?.accessToken
        const auth = tokenn ? `Bearer ${tokenn}` : ''

        config.headers['Authorization'] = auth
        return config
    },
    error => Promise.reject(error),
)

export default instance;