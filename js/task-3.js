// const findBestEmployee = function (employees) {
//   const arrs = Object.entries(employees);

//   let maxNumberOfTask = 0;
//   let bestEmployee;

//   for (let arr of arrs) {
//     if (arr[1] > maxNumberOfTask) {
//       maxNumberOfTask = arr[1];
//       bestEmployee = arr[0];
//     }
//   }

//   return bestEmployee;
// };

const findBestEmployee = function (employees) {
  let maxNumberOfTask = 0;
  let bestEmployee;

  for (let key in employees) {
    if (employees[key] > maxNumberOfTask) {
      maxNumberOfTask = employees[key];
      bestEmployee = key;
    }
  }

  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
