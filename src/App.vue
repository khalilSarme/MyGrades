<script setup>
import { RouterView } from 'vue-router';
import MyNavbar from "./components/MyNavbar.vue";
import MyFooter from "./components/MyFooter.vue";
</script>

<template>
  <my-navbar></my-navbar>
  <keep-alive>
    <RouterView />
  </keep-alive>
  <my-footer></my-footer>
</template>
