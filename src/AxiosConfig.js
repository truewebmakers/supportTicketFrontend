import Axios from 'axios';

const axiosBaseURL = Axios.create({
    baseURL:'https://dev.kahayfaqeer.org/api/',
    headers: {
        'Content-Type': 'application/json',  
    }
});

export default axiosBaseURL