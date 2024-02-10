import axios from 'axios';
import { getCookie } from 'typescript-cookie'

const baseURL = 'http://localhost:3004';

type IUserData = {
  email: string,
  password: string,
  confirmPassword?: string,
};

type ILoginData = {
    email: string,
    password: string,
}

function generateName() {
  const randomNumber = Math.floor(Math.random() * 1000);
  return `user-${randomNumber}`;
}

export function loginUser(data: ILoginData) {
  const response = axios.post(`${baseURL}/login`, data);
  return response;
}

export function createUser(data: IUserData) {
  delete data.confirmPassword;
  const body = {
    ...data,
    name: generateName(),
    userName: generateName(),
    avatar: "https://i.imgur.com/xmI2QAo.jpg",
  };
  const response = axios.post(`${baseURL}/user`, body);
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
