<template>
  <my-container class="container-fluid bg-dark py-3">
    <my-container class="container d-flex align-items-center flex-wrap">
      <h6 class="mx-auto text-white">All rights recerved {{ getDate }} | <b class="text-success">Vuetivo</b></h6>
    </my-container>
  </my-container>
</template>

<script setup>
  import {
    computed
  } from 'vue';
  const thisDate = new Date();
  const getDate = computed(() => thisDate.getFullYear());
</script>