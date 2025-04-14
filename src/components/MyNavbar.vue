<template>
  <div class="sticky-top bg-white">
    <nav class="navbar navbar-expand-xl">
      <my-container class="container">
        <router-link :to="{name: 'myStart'}" class="navbar-brand">
          Vuetivo
        </router-link>
      </my-container>
    </nav>
    <my-container class="container-fluid bg-dark p-0">
      <my-container class="container links  d-flex flex-wrap gap-2">
        <router-link v-for="route in routes" :key="route.name" :to="{name: route.name}" class="text-white px-3 py-2">{{ route.meta.text }}</router-link>
      </my-container>
    </my-container>
  </div>
</template>

<script setup>
  import {
    useRouter,
    useRoute,
    RouterLink
  } from 'vue-router'
  
  const router = useRouter();
  const route = useRoute();
  const routes = router.options.routes;
</script>