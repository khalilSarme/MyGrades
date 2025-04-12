<template>
  <my-header>
    {{ myRoute.meta.description }}
  </my-header>
  <my-container class="container p-3">
    <router-link :to="{name: 'confg'}" class="px-2 py-1 text-white bg-success">
      Get Started
    </router-link>
  </my-container>
</template>

<script setup>
  import {
    useRoute,
    RouterLink
  } from 'vue-router';
  const myRoute = useRoute();
</script>