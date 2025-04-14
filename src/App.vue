<script setup>
  import {
    RouterView
  } from 'vue-router'
  
  import MyNavbar from './components/MyNavbar.vue'
  
  import MyFooter from './components/MyFooter.vue'
  
</script>

<template>
  <my-navbar></my-navbar>
  <div class="min-vh-100">
    <router-view></router-view>
  </div>
  <my-footer></my-footer>
</template>

<style scoped>
  #pp {
    position: relative;
  }
</style>