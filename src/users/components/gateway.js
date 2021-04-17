import axios from 'axios';

const baseURL = "http://77.120.241.80:8811/api/users";

/* export default getUsersList = () => {
    axios.get(baseURL).then(responce => {
        console.log(responce.data);
    });

} */

export const getExceptionsOrders = async (

) => {
    const url = baseURL;

    let response = {};

    try {
        response = axios.get(url)
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Failed fetching exceptions orders');

        throw error;
    }

    return response.data;
};


