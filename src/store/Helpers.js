import axios from 'axios'

export const API_ROOT = 'https://jsonplaceholder.typicode.com/'

// Login Method
export const postLogin = (url, data) => {
    return axios.post(API_ROOT + url, data, {
    }).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        var message;
        if (err.response && err.response.status) {
            switch (err.response.status) {
                case 404: message = "Sorry! the page you are looking for could not be found"; break;
                case 500: message = "Sorry! something went wrong, please contact our support team"; break;
                case 401: message = "Invalid credentials"; break;
                default: message = err[1]; break;
            }
        }
        throw message;
    });
}

// GET Method
export const get = (url) => {
    return axios.get(API_ROOT + url, {
        headers: {
            Authorization: `Bearer ` + JSON.parse(localStorage.getItem('accesstoken'))
        }
    }).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        var message;
        if (err.response && err.response.status) {
            switch (err.response.status) {
                case 400: message = "Sorry! Internal error"; break;
                case 404: message = "Sorry! the page you are looking for could not be found"; break;
                case 500: message = "Sorry! something went wrong, please contact our support team"; break;
                case 401: message = "Invalid credentials"; break;
                default: message = err[1]; break;
            }
        }
        throw message;
    });
}
