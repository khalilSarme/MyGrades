<template>
  <my-header>
    {{ myRoute.meta.description }}
  </my-header>

  <my-container class="container-fluid py-5 my_grades">
    <div class="card mx-auto" v-for="(g, i) in grades" :key="i">
      <div class="card-header">
        <h2>{{ g.sub_name }}</h2>
      </div>
      <div class="card-body">
        <h4>Practical grade <span>{{ g.pcl_g }}</span></h4>
        <h4>Theoretical grade <span>{{ g.tcl_g }}</span></h4>
        <h4>Final grade <span>{{ g.pcl_g + g.tcl_g }}</span></h4>
      </div>
      <div class="card-footer">
        <button class="btn btn-danger" @click="deleteGrade(i)">
          Delete
        </button>
        <button class="btn btn-success ms-3" @click="edit(i)">
          Update
        </button>
      </div>
    </div>
  </my-container>

  <my-container class="container">
    <div class="card p-3 mx-auto">
      <h2 class="mb-3" v-if="empty">No any grades here yet ...</h2>
      <router-link :to="{name: 'myConfig'}" class="btn btn-dark px-3 py-2">
        Add new grade
      </router-link>
    </div>
  </my-container>

  <my-container class="container-fluid upToDate" v-if="updateForm">

    <my-container class="container mx-auto">
      <form class="form rounded shadow p-4 bg-white" method="get" @submit.prevent>
        <h1 class="text-center mb-5">Grade info</h1>
        <div class="collection mb-4">
          <label class="form-label">Subject name</label>
          <input class="form-control" type="text" v-model="sub_name" required />
        </div>

        <div class="collection mb-4">
          <label class="form-label">Practical grade</label>
          <input class="form-control" type="number" v-model.number="pcl_g" min="0" max="30" step="0.01" />
        </div>

        <div class="collection mb-4">
          <label class="form-label">Theoretical grade</label>
          <input class="form-control" type="number" v-model.number="tcl_g" min="0" max="100" step="0.01" />
        </div>

        <button class="btn btn-outline-dark" @click="rejectChanges()">
          discard changes
        </button>
        <button class="btn btn-success ms-3" @click="applyChanges()">
          apply changes
        </button>
      </form>
    </my-container>

  </my-container>

</template>

<script setup>
  import {
    ref,
    computed,
    onMounted
  } from 'vue'
  import {
    useRoute,
    RouterLink
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
  const updateForm = ref(false);
  const myGrade = useMyGradeStore();
  const myGrades = useMyGradesStore();

  const {
    id,
    sub_name,
    pcl_g,
    tcl_g
  } = storeToRefs(myGrade);

  const {
    grades
  } = storeToRefs(myGrades);
  const empty = computed(() => grades.value.length === 0);

  const deleteGrade = myGrades.deleteGrade;
  const fillGradeData = myGrade.fillGradeData;
  const resetGrade = myGrade.resetGrade;
  const uploadMyGrades = myGrades.uploadMyGrades;

  onMounted(async () => {
    await uploadMyGrades();
  });

  const edit = (i) => {
    fillGradeData(i, grades.value[i].sub_name, grades.value[i].pcl_g, grades.value[i].tcl_g);
    updateForm.value = true;
  };

  const rejectChanges = () => {
    let x = window.confirm('Are you sure you want to discard changes ?');
    if (x) {
      resetGrade();
      updateForm.value = false;
    } else {
      return;
    }

  };

  const applyChanges = () => {
    if (sub_name.value.trim() && pcl_g.value !== null && tcl_g.value !== null) {
      if (pcl_g.value >= 0 && tcl_g.value >= 0) {
        if (pcl_g.value > 0 && pcl_g.value <= 30) {
          if (tcl_g.value <= 70) {
            let x = window.confirm('Are you sure you want to apply changes ?');
            if (x) {
              grades.value[id.value] = {
                sub_name: sub_name.value,
                pcl_g: Math.abs(Math.round(pcl_g.value)),
                tcl_g: Math.abs(Math.round(tcl_g.value)),
              };
              resetGrade();
              updateForm.value = false;
            } else {
              rejectChanges();
            }
          }
        } else if (pcl_g.value == 0) {
          if (tcl_g.value <= 100) {
            let x = window.confirm('Are you sure you want to apply changes ?');
            if (x) {
              grades.value[id.value] = {
                sub_name: sub_name.value,
                pcl_g: Math.abs(Math.round(pcl_g.value)),
                tcl_g: Math.abs(Math.round(tcl_g.value)),
              };
              resetGrade();
              updateForm.value = false;
            } else {
              rejectChanges();
            }
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