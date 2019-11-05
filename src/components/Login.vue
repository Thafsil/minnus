<template>
  <div class="w-25 m-auto pt-5">
    <!-- Login card -->
    <b-card
      v-if="!signUpCard"
      img-src="@/assets/img/minnus.png"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-input placeholder="Name" />
      <b-input placeholder="password" class="mt-4" />
      <div class="m-auto text-center">
        <b-button class="mt-4 w-100" @click="login()">Login</b-button>
      </div>
    </b-card>
    <p v-if="!signUpCard" class="text-center" style="cursor:pointer;" @click="signUp()">SignUp</p>
    <!-- SignUp Card -->
    <b-card
      v-if="signUpCard"
      title="SignUp"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-input placeholder="Name" v-on:change="name($event)" />
      <b-input placeholder="password" class="mt-4" v-on:change="password($event)" />
      <b-input placeholder="confirm password" class="mt-4" v-on:change="confirmPassword($event)" />
      <div class="m-auto text-center">
        <b-button class="mt-4 w-100" @click="SignUpUser()">SignUp</b-button>
      </div>
    </b-card>
    <p
      v-if="signUpCard"
      class="text-center"
      style="cursor:pointer;"
      @click="backToLogin()"
    >Back to login</p>
  </div>
</template>
<script>
import { UserDataService } from "@/service/UserDataService.js";
const userData = new UserDataService();
export default {
  data() {
    return {
      data: "",
      signUpCard: false,
      signUpUserData: {
        userName: "",
        userPassword: ""
        // userConfirmPassword: "",
      },
      temp: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      userData.getUserData().then(res => {
        this.data = res;
        // console.log(res);
      });
    },
    login() {
      this.$router.push({
        name: "Home"
      });
    },
    signUp() {
      this.signUpCard = true;
    },
    backToLogin() {
      this.signUpCard = false;
    },
    name(name) {
      // console.log(name)
      this.signUpUserData.userName = name;
    },
    password(password) {
      // console.log(password)
      this.signUpUserData.userPassword = password;
    },
    confirmPassword(confirmPassword) {
      // console.log(confirmPassword)
      this.signUpUserData.userConfirmPassword = confirmPassword;
    },
    SignUpUser() {
      userData.registerNewUser(this.signUpUserData).then(res => {
        this.temp = res;
      });
    }
  }
};
</script>