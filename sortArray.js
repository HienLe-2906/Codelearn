//https://codelearn.io/learningtask/index?id=3477&taskid=17776
function sortArray(arr){
    arr.map(ele=>{
        for(let i =0; i<arr.length; i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
            }
        }
    });
    return arr;
}
