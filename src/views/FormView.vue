<template>
  <my-header>
    {{ myRoute.meta.description }}
  </my-header>

  <my-container class="container py-5">
    <form class="form rounded shadow p-4" method="get" @submit.prevent>
      <h1 class="text-center mb-5">Grade info</h1>
      <div class="collection mb-4">
        <label class="form-label">Subject name</label>
        <input class="form-control" type="text" v-model="sub_name" required />
      </div>

      <div class="collection mb-4">
        <label class="form-label">Practical grade</label>
        <input class="form-control" type="number" v-model.number="pcl_g" min="0" max="30" step="0.01" placeholder="between 0 and 30"/>
      </div>

      <div class="collection mb-4">
        <label class="form-label">Theoretical grade</label>
        <input class="form-control" type="number" v-model.number="tcl_g" min="0" max="100" step="0.01" placeholder="between 0 and 100"/>
      </div>

      <button class="btn btn-success w-100" type="submit" @click="saveNewGrade()">
        Save grade
      </button>
    </form>
  </my-container>
</template>

<script setup>
  import {
    useRoute,
  } from 'vue-router'
  import {
    storeToRefs
  } from 'pinia'
  import {
    useMyGradeStore
  } from '../stores/myGrade.js'
  import {
    useMyGradesStore
  } from '../stores/myGrades.js'

  const myRoute = useRoute();
  const myGrade = useMyGradeStore();
  const myGrades = useMyGradesStore();

  const {
    sub_name,
    pcl_g,
    tcl_g,
  } = storeToRefs(myGrade);

  const resetGrade = myGrade.resetGrade;
  const createNewGrade = myGrades.createNewGrade;

  const saveNewGrade = () => {
    if (sub_name.value.trim() && pcl_g.value !== null && tcl_g.value !== null) {
      if (pcl_g.value >= 0 && tcl_g.value >= 0) {
        if (pcl_g.value > 0 && pcl_g.value <= 30) {
          if (tcl_g.value <= 70) {
            createNewGrade(sub_name.value, pcl_g.value, tcl_g.value);
            resetGrade();
          }
        } else if(pcl_g.value == 0) {
          if (tcl_g.value <= 100) {
            createNewGrade(sub_name.value, pcl_g.value, tcl_g.value);
            resetGrade();
          } else {
            return;
          }
        }
      } else {
        return;
      }
    }
  };

</script>