import axios from 'axios';


export class ApiHelper {
    
    constructor() { }
    get(uri = {}) {
        // if (Object.keys(data).length > 0) {
        //   uri = `${uri}?${qs(data)}`
        // }
        return axios.get(uri, {
            // headers: this.getHeaders(),
            // withCredentials: false
        }).then(this.checkResponse)
            .catch(this.handleError)
    }
    post(uri, data) {
        return axios.post(uri, data, {
            // headers: this.getHeaders(),
            // withCredentials: false
        }).then(this.checkResponse)
            .catch(this.handleError)
    }
}