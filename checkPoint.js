console.log("problem 1 : find the sum of all distinct elements from the set")
console.log("problem 2 : ")

function problem1(tab1, tab2) {
  let sum = 0;

  let tab3 = tab1.concat(tab2);
  for (let i = 0; i <= tab3.length - 1; i++) {
    for (let j = 0; j <= tab3.length - 1; j++) {
      if (tab3[i] === tab3[j] && i !== j) {
        tab3[i] = 0;
        tab3[j] = 0;
        break;
      }
    }
  }
  for (let i = 0; i <= tab3.length - 1; i++) {
    sum += tab3[i];
  }

  return sum;
}
console.log("problem 1 : find the sum of all distinct elements from the set, method 1:",problem1([3, 1, 7, 9], [2, 4, 1, 9, 3]));

function problem2(tab1, tab2) {
    let sum = 0;
    let tab3 = tab1.concat(tab2);
    for (let i = 0; i <= tab3.length - 1; i++) {
      for (let j = 0; j <= tab3.length - 1; j++) {
        if (tab3[i] == tab3[j] && i !== j) {
          sum += tab3[i];         
        }
      } 
    }
  
  
    return sum/2;
  }
  console.log("problem 2 : find the the sum of overlapping elements in two set, method 1 :", problem2([3, 1, 7, 9], [2, 4, 1, 9, 3]));

function problem1_1(tab1, tab2) {
  let sum1 = 0;
  let sum2 = 0;
  const htab = {};
  let tab3 = tab1.concat(tab2);

  for (let i = 0; i < tab3.length; i++) {
    if (!htab.hasOwnProperty(tab3[i])) {
      htab[tab3[i]] = 0; /*not exist*/
    } else {
      htab[tab3[i]] = 1;/*exsist*/
    }
  }
  for (let k in htab) {
    if (htab[k] == 1) {
      sum2 += parseInt(k);
    } else {
      sum1 += parseInt(k);
    }
  }
  let tab = [sum1, sum2];
  return tab;
}
console.log("problem 1 and 2, method 2: ",problem1_1([3, 1, 7, 9], [2, 4, 1, 9, 3]));


