// API units static class
import * as unitData from './unitData'


export default function getUnits() {
    return new Promise(resolve => {
      setTimeout(() => {

        let units = unitData.data;

        resolve(units);
      }, 1000);
    });
  }

