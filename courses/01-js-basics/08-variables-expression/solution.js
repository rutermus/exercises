/* eslint-disable no-console */

const eurosCount = 100;
const eurUsd = 1.25;
const usdRub = 60;

const usdCount = eurosCount * eurUsd;
const rubCount = usdCount * usdRub;

console.log(usdCount);
console.log(rubCount);
