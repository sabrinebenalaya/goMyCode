function product(v1, v2){
    let prod = 0;
    for (let i=0; i<v1.length; i++){
        prod += v1[i]*v2[i];
    }
    return prod;
}
if (product([0,0,0],[1,0,2])==0){
    console.log("The dot product of two orthogonal vectors is zero.")
}else{
    console.log("The dot product of two orthogonal vectors is not zero.")
}