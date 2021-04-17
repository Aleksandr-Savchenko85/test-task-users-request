import axios from 'axios';

const baseURL = 'http://77.120.241.80:8811/api';

export const getUsersList = async () => {
    const url = `${baseURL}/users`;
    let response = {};

    try {
        response = await axios.get(url)
    } catch (error) {
        console.log('Failed fetching exceptions orders');
        throw error;
    }
    return response.data;
};

export const addUser = () => {
    

}
export const updateUser = () => {

}
export const deleteUser = () => {

}


