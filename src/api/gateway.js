import axios from 'axios';

const baseURL = 'http://77.120.241.80:8811/api';

// ---FETCH USERS----
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

// ---CREATE USER----
export const addUser = async ({
    name,
    surname,
    desc
}) => {
    const url = `${baseURL}/users`;
    let response = {};

    try {
        response = await axios.post(url, {name, surname, desc})
    } catch (error) {
        console.log('Failed add user');
        throw error;
    }
    return response.data;
};

// ---UPDATE USER---
export const updateUser = async ({
    id,
    name,
    surname,
    desc
}) => {
    const url = `${baseURL}/user/${id}`;
    let response = {};

    try {
        response = await axios.put(url,
    {
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

// ---DELETE USER---
export const deleteUser = async (userId) => {
    const url = `${baseURL}/user/${userId}`;
    let response = {};

    try {
        response = await axios.delete(url)
    } catch (error) {
        console.log('Failed delete user');
        throw error;
    }
    return response.data;
};
