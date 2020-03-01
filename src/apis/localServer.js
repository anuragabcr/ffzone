import axios from 'axios';

let token;
token = (localStorage.getItem('admin')) ? JSON.parse(localStorage.getItem('admin')).token : '';
token = (localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).token : '';

export default axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'admin-token':token,
        'x-auth-token':token
    }
})