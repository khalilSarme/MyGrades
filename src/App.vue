<script setup>
  import {
    RouterView,
    useRouter
  } from 'vue-router'
  
  import MyNavbar from './components/MyNavbar.vue'
  
  import MyFooter from './components/MyFooter.vue'
  
  import {
    onMounted
  } from 'vue'
  
  const myRouter = useRouter();
  
  onMounted(() => myRouter.push({name: 'myStart'}))
  
</script>

<template>
  <my-navbar></my-navbar>
  <div class="min-vh-100">
    <router-view></router-view>
  </div>
  <my-footer></my-footer>
</template>