import axios from 'axios';

const baseURL = "http://77.120.241.80:8811/api/users";

export const getUsersList = async () => {
    const url = baseURL;
    let response = {};
    try {
        response = axios.get(url)
    } catch (error) {
        console.log('Failed fetching exceptions orders');
        throw error;
    }
    return response.data;
};

export const addUser =()=>{
    
}


