import {ApiHelper} from './ApiHelper';

const apiHelper = new ApiHelper();

export class ProductService{
    constructor() { }
    getProductsData(){
        const uri = `http://localhost:3000/api/products/get`;
        return apiHelper.get(uri);
    }
    addProductData(data){
        const uri = `http://localhost:3000/api/product/post`;
        return apiHelper.post(uri,data);
    }
}