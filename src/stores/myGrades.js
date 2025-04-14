import {
  ref,
  watch,
} from 'vue'

import {
  defineStore
} from 'pinia'

export const useMyGradesStore = defineStore('grades', () => {
  // state
  const grades = ref([]);

  watch(
    () => grades.value,
    (newVal) => {
      localStorage.setItem('my_stored_grades', JSON.stringify(newVal))
    },
    {
      deep: true
    }
  );

  // actions
  const createNewGrade = (n, p, t) => {
    let isExist = grades.value.findIndex((r) => r.sub_name === n);
    if (isExist !== -1) {
      let x = window.confirm(`Note, ${n} is already exist. Are you sure you want to apply changes ?`);
      if (x) {
        grades.value[isExist] = {
          sub_name: n,
          pcl_g: Math.abs(Math.round(p)),
          tcl_g: Math.abs(Math.round(t))
        }
      } else {
        return;
      }
    } else {
      grades.value.push({
        sub_name: n,
        pcl_g: Math.abs(Math.round(p)),
        tcl_g: Math.abs(Math.round(t))
      });
    }
  };

  const deleteGrade = (i) => {
    grades.value.splice(i, 1);
  };

  const resetGrades = () => {
    grades.value = [];
  };

  const uploadMyGrades = async () => {
    grades.value = await JSON.parse(localStorage.getItem('my_stored_grades'));
  }

  return {
    grades,
    createNewGrade,
    deleteGrade,
    resetGrades,
    uploadMyGrades,
  }
});