<template>
  <my-header>
    {{ myRoute.meta.description }}
  </my-header>
  <my-container class="container py-4">
    <form class="form rounded shadow p-4" method="get" @submit.prevent>
      <h1 class="text-center mb-5">Grade info</h1>
      <div class="collection mb-4">
        <label class="form-label">Subject name</label>
        <input class="form-control" type="text" id="sub_name" v-model="sub_name" required />
      </div>

      <div class="collection mb-4">
        <label class="form-label">Practical grade</label>
        <input class="form-control" type="number" id="pcl_g" v-model.number="pcl_g" min="0" max="30" step="0.01" />
      </div>

      <div class="collection mb-4">
        <label class="form-label">Thoritical grade</label>
        <input class="form-control" type="number" id="tcl_g" v-model.number="tcl_g" min="0" max="100" step="0.01" />
      </div>
      <input type="hidden" v-model="normalizeFullGrade" />

      <button class="btn btn-success w-100" type="submit" @click="saveMark">
        Save grade
      </button>
    </form>
  </my-container>
</template>

<script setup>
  import {
    useRoute,
  } from 'vue-router';
  import managerMethod from '../mixins/myMixin.js';
  
  const myRoute = useRoute();
  const {
    sub_name,
    pcl_g,
    tcl_g,
    normalizeFullGrade,
    resetGrade,
    generateGrade
  } = managerMethod();
  
  const saveMark = () => {
    if(generateGrade({'sub_name': sub_name.value,'pcl_g':pcl_g.value,'tcl_g':tcl_g.value,'fl_g':normalizeFullGrade})) {
      resetGrade();
    } else {
      return;
    }
  }
  
</script>