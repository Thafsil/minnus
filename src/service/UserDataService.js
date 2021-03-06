/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { ApiHelper } from "./ApiHelper";

const apiHelper = new ApiHelper();

export class UserDataService {
  constructor() {}
  getUserData() {
    const uri = `http://localhost:3000/api/dashboard/get`;
    return apiHelper.get(uri);
  }
  registerNewUser(data) {
    const uri = `http://localhost:3000/api/signup`;
    return apiHelper.post(uri, data);
  }
  login(data) {
    const uri = `http://localhost:3000/api/login`;
    return apiHelper.post(uri, data);
  }
}
