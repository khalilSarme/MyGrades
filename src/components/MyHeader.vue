<template>
  <my-container class="container-fluid bg-alpha-success mb-5 py-4">
    <my-container class="container">
    <h5 class="mx-auto">
      <slot></slot>
    </h5>
    </my-container>
  </my-container>
</template>

<style>
  .bg-alpha-success {
    background-color: rgba(10, 180, 160, 0.2);
  }
</style>