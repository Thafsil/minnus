<template>
  <div class="w-25 m-auto pt-5">
    <b-card
      title="Login"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-input placeholder="Name" />
      <b-input placeholder="password" class="mt-4" />
      <div class="m-auto text-center">
        <b-button class="mt-4 w-100">Login</b-button>
      </div>
    </b-card>
  </div>
</template>
<script>
import { UserDataService } from "@/service/UserDataService.js";
const userData = new UserDataService();
export default {
  created() {
    this.getData();
  },
  methods: {
    getData() {
      userData.getUserData().then(res => {
        // console.log(res);
      });
    }
  }
};
</script>