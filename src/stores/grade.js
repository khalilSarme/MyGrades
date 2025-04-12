import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGradeStore = defineStore('grade', () => {
  // state
  const sub_name = ref("");
  const pcl_g = ref(null);
  const tcl_g = ref(null);
  const fl_g = ref(null);
  
  // getters
  const normalizeFullGrade = computed(() => Math.abs(Math.round(pcl_g.value + tcl_g.value)));
  
  // actions
  const resetGrade = () => {
    sub_name.value = "";
    pcl_g.value = null;
    tcl_g.value = null;
    fl_g.value = null;
  };
  
  return {
    sub_name,
    pcl_g,
    tcl_g,
    fl_g,
    normalizeFullGrade,
    resetGrade
  }
})
