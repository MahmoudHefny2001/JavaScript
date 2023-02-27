function getAverage(marks){
  
  let summationOfTheArrayElements = 0;
  for(let i = 0; i < marks.length; i++){
    summationOfTheArrayElements += marks[i];
  }
  return Math.floor(summationOfTheArrayElements / marks.length);
  
}


avg = getAverage([1,1,1,1,1,1,1,2]);
console.log(avg);
