<template>
  <div class="bg-white dark:bg-dim-900">
    <div class="container mx-auto h-screen">
      <div class="flex flex-row justify-center">
        <LeftNav/>
        <Middle/>
        <RightNav/>
      </div>
    </div>
  </div>
</template>
<script>
import LeftNav from "@/components/LeftNav.vue";
import Middle from "@/components/Middle.vue";
import RightNav from "@/components/RightNav.vue";

export default {
  name: "HomePage",
  components: {RightNav, Middle, LeftNav}
};
</script>