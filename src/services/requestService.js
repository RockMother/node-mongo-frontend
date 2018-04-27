import axios from 'axios';

export function makeSecurityRequest() {
    return axios.create({
        headers: { 'tokenAPI': localStorage.getItem('tokenAPI') }
    });
}


export function makeRequest() {
    return axios.create();
}