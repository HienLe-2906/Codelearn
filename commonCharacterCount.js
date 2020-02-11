function commonCharacterCount(s1, s2){
    var count=0;
    s1= s1.split('');
    s2=s2.split('');
    for(let i = 0; i < s1.length; i++){
        for(let j = 0; j < s2.length; j++){
            if(s1[i]==s2[j]){
                s1.splice(i,1);      
                s2.splice(j,1);
                count+=1;
                i -=1;
            }
        }
    }
   return count;
}
