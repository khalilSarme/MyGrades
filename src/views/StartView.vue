<template>
  <my-header>
    {{ myRoute.meta.description }}
  </my-header>
  <my-container class="container py-5">
    <router-link :to="{name: 'myConfig'}" class="btn btn-success px-3 py-2">
      Get Started
    </router-link>
  </my-container>
</template>

<script setup>
  import managerMethod from "../mixins/dataMixin.js";

  import {
    RouterLink
  } from 'vue-router'

  const {
    myRoute
  } = managerMethod();
</script>