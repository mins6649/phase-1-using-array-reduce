const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const sumBatteries = function(){
    const initalValue = 0;
    //you need to add the initial value after: (accumulator + currentValue, initalValue) to tell the function where we start adding.
   return batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, initalValue);

}
const totalBatteries = sumBatteries();
