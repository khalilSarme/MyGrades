/** @format */

import { useRoute } from 'vue-router';
import { useMyGradeStore } from '../stores/myGrade.js';
import { useMyGradesStore } from '../stores/myGrades.js';

const managerMethod = () => {
  // data
  const myRoute = useRoute();
  const myGrade = useMyGradeStore();
  const myGrades = useMyGradesStore();

  const validateForm = (n, p, t) => {
    if (String(n).trim() && p !== null && t !== null) {
      if (p >= 0 && t >= 0) {
        if (p > 0 && p <= 30) {
          if (t <= 70) {
            return true;
          }
        } else if (p == 0) {
          if (t <= 100) {
            return true;
          }
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return {
    myRoute,
    myGrades,
    myGrade,
    validateForm,
  };
};

export default managerMethod;
