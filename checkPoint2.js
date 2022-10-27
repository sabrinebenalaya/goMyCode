function tri(tab){
    for(let i = 0; i < tab.length; i++){
  
      let min = i; 
      for(let j = i+1; j < tab.length; j++){
        if(tab[j] < tab[i]){
            let tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp; 
        }
      }
      
    }
    return tab;
  }
console.log("function tri :", tri([0,5,-1,1]))