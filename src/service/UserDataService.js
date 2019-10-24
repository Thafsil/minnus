/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import {ApiHelper} from './ApiHelper';

const apiHelper = new ApiHelper();

export class UserDataService {
    constructor() { }
    getUserData(){
        const uri = `localhost:3000/api/post`;
        return apiHelper.get(uri);
    }
}