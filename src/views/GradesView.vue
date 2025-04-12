<template>
  <my-header>
    {{ myRoute.meta.description }}
  </my-header>
  <my-container class="container-fluid">
    <my-container class="card" v-for="(grade, i) in grades" :key="i">
      <div class="card-header">
        <h2>{{ grade.sub_name }}</h2>
      </div>
      <div class="card-body">
        <h3>Practical Grade : <span>{{ grade.pcl_g }}</span></h3>
        <h3>Theoritical Grade : <span>{{ grade.tcl_g }}</span></h3>
        <h3>Full Grade : <span>{{ grade.fl_g }}</span></h3>
      </div>
      <div class="card-footer">
        <button class="btn btn-danger" @click="deleteGrade(i)">Delete</button>
        <router-link :to="{name: 'confg'}" class="btn btn-success ms-3" @click="loadToUpdate(i)">
          Update
        </router-link>
      </div>
    </my-container>
  </my-container>
</template>

<script setup>
  import {
    useRoute,
    RouterLink
  } from 'vue-router';
  import {
    onMounted
  } from 'vue';
  import managerMethod from '../mixins/myMixin.js';

  const myRoute = useRoute();
  const {
    grades,
    uploadMyGrades,
    deleteGrade,
    loadToUpdate
  } = managerMethod();

  onMounted(() => {
    uploadMyGrades();
  });
</script>