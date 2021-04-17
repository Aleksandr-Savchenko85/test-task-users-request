import axios from 'axios';

const baseURL = "http://77.120.241.80:8811/api/users";

export default getUsersList = () => {
    axios.get(baseURL).then(responce => {
        console.log(responce.data);
    });

}




