import axios from 'axios';
import { getCookie } from 'typescript-cookie'

const baseURL = 'http://localhost:3004';

type IUserData = {
  name: string,
  userName: string,
  email: string,
  password: string,
  actors: string,
  avatar: string,
};

type ILoginData = {
    email: string,
    password: string,
}

export function loginUser(data: ILoginData) {
  const response = axios.post(`${baseURL}/login`, data);
  return response;
}

export function userLogged() {
    const response = axios.get(`${baseURL}/user/:id`, {
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      }
    });
    
    return response;
  }
