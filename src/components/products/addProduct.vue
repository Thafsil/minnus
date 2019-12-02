<template>
    <div>
        <p class="add-product-title">Add Product</p>
         <b-form-select v-model="selected" :options="options" @change="getCategory($event)"></b-form-select>
        <p class="mt-2">Name</p>
        <b-input class="w-100" @change="getName($event)"/>

         <p>Quantity</p>
        <b-input type="number" class="w-100" @change="getQuantity($event)"/>

         <p>Color</p>
        <b-input class="w-100" @change="getColor($event)"/>
        <b-button class="mt-2" @click="addProduct()">Add</b-button>
    </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import {ProductService} from "../../service/ProductService.js"
const productService = new ProductService();
export default {
    data(){
        return{
            productData:{
                productName: "",
                quantity: "",
                category: "",
                color: ""
            },
            selected : null,
            options: [
                { value: null, text: 'Please select an option' },
                { value: 'gents', text: 'Gents' },
                { value: 'ladies', text: 'Ladies' },
                { value: 'kids', text: 'Kids' },
            ],
        }
    },
    methods:{
        getName(name){
            this.productData.productName = name;
        },
        getQuantity(quantity){
            this.productData.quantity = quantity;
        },
        getCategory(category){
            this.productData.category = category;  
        },
        getColor(color){
            this.productData.color = color;
        },
        addProduct(){
            productService.addProductData(this.productData).then(res =>{
                console.log(res)
            })
        },
    }
}
</script>
<style scoped>
/* .add-product-title{
    float: left;
} */
</style>