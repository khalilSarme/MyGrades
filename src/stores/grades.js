import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useMyGradesStore = defineStore('myGrades', () => {
  // state
  const grades = ref([]);
  
  // getters
  const getGrades = computed(() => grades.value);
  
  // watcher for update 
  watch(
    () => grades.value,
    (newGrades) => {
    localStorage.setItem('my_grades_data', JSON.stringify(newGrades))},
    { deep: true });
  
  // actions
  const uploadMyGrades = () => {
    grades.value = JSON.parse(localStorage.getItem('my_grades_data')) || [];
  };
  const resetMyGrades = () => {
    grades.value = [];
    localStorage.removeItem('my_grades_data');
  };
  const deleteGrade = (i) => {
    grades.value.splice(i, 1);
  }
  const generateGrade = (e = {
    sub_name: "",
    pcl_g: 0,
    tcl_g: 0,
    fl_g: 0,
  }) => {
    const isExistGrade = gradis.value.findIndex((r) => r.sub_name === e.sub_name);
    if(isExistGrade !== -1) {
      let x = window.confirm(`${e.sub_name} is already exists, are you sure yo want to overwrite it ?`);
      if(x) {
        grades.value[isExistGrade] = e;
        return true;
      } else {
        return false;
      }
    } else {
      grades.value.push(e);
      return true;
    }
  }
  
  return {
    grades,
    getGrades,
    uploadMyGrades,
    resetMyGrades,
    deleteGrade,
    generateGrade
  }
})
