import {
  useGradeStore
} from "../stores/grade.js";
import {
  useMyGradesStore
} from "../stores/grades.js";
import {
  storeToRefs
} from 'pinia';

const managerMethod = () => {
  // data
  const myGrade = useGradeStore();
  const myGrades = useMyGradesStore();
  const {
    sub_name,
    pcl_g,
    tcl_g,
    fl_g,
    normalizeFullGrade,
  } = storeToRefs(myGrade);
  fl_g.value = normalizeFullGrade;
  const {
    grades,
  } = storeToRefs(myGrades);

  // methods
  const resetGrade = myGrade.resetGrade;
  const resetMyGrades = myGrades.resetMyGrades;
  const uploadMyGrades = myGrades.uploadMyGrades;
  const deleteGrade = myGrades.deleteGrade;
  const generateGrade = myGrades.generateGrade;
  const loadToUpdate = (i) => {
    sub_name.value = grades.value[i].sub_name;
    pcl_g.value = grades.value[i].pcl_g;
    tcl_g.value = grades.value[i].tcl_g;
  }
  

  // return
  return {
    sub_name,
    pcl_g,
    tcl_g,
    fl_g,
    normalizeFullGrade,
    grades,
    resetGrade,
    resetMyGrades,
    uploadMyGrades,
    deleteGrade,
    generateGrade
  }
};

export default managerMethod;