import {
  ref
} from 'vue'

import {
  defineStore
} from 'pinia'

export const useMyGradeStore = defineStore('grade' , () => {
  // state 
  const id = ref(null);
  const sub_name = ref("");
  const pcl_g = ref(null);
  const tcl_g = ref(null);
  
  // actions
  const fillGradeData = (i, n, p, t) => {
    id.value = i;
    sub_name.value = n;
    pcl_g.value = p;
    tcl_g.value = t;
  };
  
  const resetGrade = () => {
    id.value = null;
    sub_name.value = "";
    pcl_g.value = null;
    tcl_g.value = null;
  };
  
  return {
    id,
    sub_name,
    pcl_g,
    tcl_g,
    fillGradeData,
    resetGrade
  }
});