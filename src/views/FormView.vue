<!-- @format -->

<template>
  <my-header>
    {{ myRoute.meta.description }}
  </my-header>

  <my-container class="container py-5">
    <form
      class="form rounded shadow p-4"
      method="get"
      @submit.prevent>
      <h1 class="text-center mb-5">Grade info</h1>
      <div class="collection mb-4">
        <label class="form-label">Subject name</label>
        <input
          class="form-control"
          type="text"
          v-model="sub_name"
          required />
      </div>

      <div class="collection mb-4">
        <label class="form-label">Practical grade</label>
        <input
          class="form-control"
          type="number"
          v-model.number="pcl_g"
          min="0"
          max="30"
          step="0.01"
          placeholder="between 0 and 30" />
      </div>

      <div class="collection mb-4">
        <label class="form-label">Theoretical grade</label>
        <input
          class="form-control"
          type="number"
          v-model.number="tcl_g"
          min="0"
          max="100"
          step="0.01"
          placeholder="between 0 and 100" />
      </div>
      <button
        class="btn btn-success w-100"
        type="submit"
        @click="saveNewGrade()">
        Save grade
      </button>
    </form>
  </my-container>
</template>

<script setup>
  import managerMethod from '../mixins/dataMixin.js';

  const { myRoute, myGrades, myGrade, validateForm } = managerMethod();

  import { storeToRefs } from 'pinia';

  const { sub_name, pcl_g, tcl_g } = storeToRefs(myGrade);

  const resetGrade = myGrade.resetGrade;
  const createNewGrade = myGrades.createNewGrade;

  const appendNewGrade = () => {
    if (createNewGrade(sub_name.value, pcl_g.value, tcl_g.value)) {
      resetGrade();
    } else {
      return;
    }
  };

  const saveNewGrade = () => {
    if (validateForm(sub_name.value, pcl_g.value, tcl_g.value)) {
      appendNewGrade();
    } else {
      return;
    }
  };
</script>
