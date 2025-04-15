<template>
  <my-header>
    {{ myRoute.meta.description }}
  </my-header>
  <my-container class="container py-3">
    <router-link :to="{name: 'myConfig'}" class="btn btn-success px-3 py-2 w-50">
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