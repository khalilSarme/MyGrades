<template>
  <nav v-bind="$attrs" class="navbar navbar-expand-xl">
    <my-container class="container">
      <router-link :to="{name: 'start'}" class="navbar-brand">
        Vuetivo
      </router-link>
      <my-container class="container-fluid mx-auto bg-dark">
        <router-link v-for="route in routes" :key="route.name" :to="{name: route.name}" class="px-3 py-2 ms-2 text-white">{{ route.meta.text }}</router-link>
      </my-container>
    </my-container>
  </nav>
</template>

<script setup>
  import {
    useRouter,
    useRoute,
    RouterLink
  } from 'vue-router';
  const router = useRouter();
  const route = useRoute();
  const routes = router.options.routes;
</script>

<style scoped>
  .navbar-brand, .router-link-exact-active {
    color: var(--bs-success) !important;
  }
</style>