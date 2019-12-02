<template>
    <div>
        <b-card
    title="Total products"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{productLength}}
    </b-card-text>

  </b-card>
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
      productLength: ''
    }
  },
  created(){
    this.getProductS();
  },
  methods:{
    getProductS(){
      productService.getProductsData().then( res =>{
        this.productLength = res.data.length;
      })
    }
  }
}
</script>