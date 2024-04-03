<template>
  <div class="flex flex-col h-screen justify-center mx-auto">
    <svg class="w-8 h-8 animate-spin-fast mx-auto">
      <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          stroke-width="4"
          style="stroke: rgb(29, 161, 242); opacity: 0.2"
      ></circle>
      <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          stroke-width="4"
          style="
                  stroke: rgb(29, 161, 242);
                  stroke-dasharray: 80;
                  stroke-dashoffset: 60;
                "
      ></circle>
    </svg>
  </div>
</template>
<script>
import {useAuthStore} from "@/stores/auth";
import {mapActions} from "pinia";

export default {
  async mounted() {
    const code = this.$route.query.code;
    try {
      await this.googleLogin(code);
      this.$router.push('/home');
    } catch (e) {
      //Toast
      this.$toast.open('Google Login Error');
    }

  },
  methods: {
    ...mapActions(useAuthStore, ['googleLogin'])
  }
}
</script>