import axios from 'axios';

const baseURL = 'http://77.120.241.80:8811/api';

export const getUsersList = async () => {
    const url = `${baseURL}/users`;
    let response = {};
    try {
        response = await axios.get(url)
    } catch (error) {
        console.log('Failed get users');
        throw error;
    }
    return response.data;
};

export const addUser = async ({
    name,
    surname,
    desc

}) => {
    const url = `${baseURL}/users`;
    let response = {};

    try {
        response = await axios.get(url,
            {
                name,
                surname,
                desc
            })
    } catch (error) {
        console.log('Failed add user');
        throw error;
    }
    return response.data;
};



export const updateUser = async ({
    userId,
    name,
    surname,
    desc

}) => {
    const url = `${baseURL}/users${userId}`;
    let response = {};

    try {
        response = await axios.put(url,
            {
                userId,
                name,
                surname,
                desc
            })
    } catch (error) {
        console.log('Failed update user');
        throw error;
    }
    return response.data;
};

export const deleteUser = async ({
    userId,

}) => {
    const url = `${baseURL}/users${userId}`;
    let response = {};

    try {
        response = await axios.delete(url)

    } catch (error) {
        console.log('Failed add user');
        throw error;
    }
    return response.data;
};





