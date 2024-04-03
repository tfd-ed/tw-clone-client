<template>
  <div class="flex flex-col md:flex-row items-center h-screen">
    <div class="basis-1/6 md:basis-1/3 lg:basis-1/2 flex">
      <logo-icon class="w-1/4 md:w-1/2 m-auto"></logo-icon>
    </div>
    <div class="basis-1/2 md:basis-2/3 lg:basis-1/2 sm:mx-auto1 px-5">
      <div class="font-bold text-6xl">Happening Now</div>
      <div class="font-bold text-3xl mt-10">Join today.</div>
      <div class="mt-10 w-full md:w-2/3 lg:w-2/3 xl:w-1/3 grid grid-cols-1 space-y-2">
        <button-default class="flex place-content-center gap-2">
          <google-icon></google-icon>
          Sign Up with Google
        </button-default>
        <button-default class="flex place-content-center gap-2">
          <apple-icon></apple-icon>
          Sign Up with Apple
        </button-default>

        <divider-rule>or</divider-rule>

        <button-default class="bg-primary hover:bg-primary-o text-light">Create account</button-default>

        <div class="text-[10px]">
          By signing up, you agree to the <span class="text-primary">Terms of Service</span> and <span class="text-primary">Privacy Policy</span>, including <span class="text-primary">Cookie Use</span>.
        </div>
        <div>
          <div class="mt-14">
            Already have an account?
          </div>
          <button-default class="mt-5 text-primary" @click="showModal">Sign in</button-default>
        </div>
      </div>
    </div>

    <div class="fixed h-screen w-full bg-shadow z-50 flex justify-center animate-fade" v-if="showModalState">
      <div class="w-full h-screen lg:h-auto lg:w-2/5 xl:w-1/3 lg:rounded-2xl xl:rounded-2xl bg-white px-10 lg:py-20 xl:py-10 self-center relative grid place-items-center">
        <div class="absolute left-4 top-4">
          <ButtonTransparent class="cursor-pointer" @click="closeModal">
            <close-icon></close-icon>
          </ButtonTransparent>
        </div>

        <div class="container w-full lg:w-5/6 xl:w-2/3 mx-auto -mt-14 lg:mt-0 xl:mt-0 ">
          <logo-icon class="w-1/6 mx-auto "></logo-icon>
          <div class="text-2xl font-bold my-8">Sign in to X</div>
          <form @submit.prevent="handlelogin(user_obj)">
            <div class="grid grid-cols-1 space-y-5">
              <button-default class="flex place-content-center gap-2 text-">
                <google-icon></google-icon>
                Sign In with Google
              </button-default>
              <button-default class="flex place-content-center gap-2">
                <apple-icon></apple-icon>
                Sign In with Apple
              </button-default>
              <divider-rule>or</divider-rule>
              <input-float v-model="user_obj.username" :title="'Phone, email, or username'" name="'username'" :class="{'border-red-500':loginFail}"/>
              <input-float v-model="user_obj.password" :title="'Password'" name="'password'" :type="'password'" :class="{'border-red-500':loginFail}" />
              <span class="text-danger text-xs" v-if="loginFail">Username or password is incorrect!</span>
              <button-default :dark_mode="true" type="submit">Sign In</button-default>
              <button-default>Forgot password ?</button-default>
              <div>
                Don't have an account? <a href="#" class="text-p">Sign up</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from "@/components/LogoIcon";
import ButtonDefault from "@/components/ButtonDefault";
import DividerRule from "@/components/DividerRule";
import GoogleIcon from "@/components/GoogleIcon";
import AppleIcon from "@/components/AppleIcon";
import CloseIcon from "@/components/CloseIcon";
import InputFloat from "@/components/InputFloat";
import ButtonTransparent from "@/components/ButtonTransparent.vue";

import {mapActions} from "pinia";
import {useUserStore} from "@/stores/users";
import {mapState} from "pinia";

export default {
  name: "LoginPage",
  components: {ButtonTransparent, InputFloat, CloseIcon, AppleIcon, GoogleIcon, DividerRule, ButtonDefault, LogoIcon},
  mounted() {
    if(this.auth_user.username){
      return this.$router.push('/')
    }
  },
  data() {
    return {
      showModalState: false,
      user_obj:{
        username: '',
        password: '',
      },
      loginFail:false
    }
  },
  methods: {
    ...mapActions(useUserStore,['login']),
    handlelogin(user_obj) {
      let data = this.login(user_obj)

      if(data.statusCode===200) return this.$router.push('/')

      this.loginFail = true
    },
    showModal() {
      this.showModalState = true
      this.loginFail = false
    },
    closeModal() {
      this.showModalState = false
    }
  },
  computed:{
    ...mapState(useUserStore,['auth_user'])
  }
}
</script>