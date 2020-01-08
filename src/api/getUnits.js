import unitData from './unitData'

export default function getUnits() {
    return new Promise(resolve => {
      setTimeout(() => {

        let units = unitData.data.nyc_unit;

        resolve(units);
      }, 1000);
    });
  }

