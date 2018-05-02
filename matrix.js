var isToeplitzMatrix = function(matrix) {
    var check = {};
    for(var i=0; i<matrix.length; i++){
       for(var j=1; j<matrix[i].length; j++){
         var key = 'key'+j
         var num = j-1
         var fit = 'key'+ num
         // console.log(fit);
         if(i===0){
             check.key0 = matrix[i][0];
             check[key] = matrix[i][j];
             // console.log(check);
         }  else if(check[fit]!=matrix[i][j]){
           console.log('matrix', matrix[i]);
           console.log('check', check);
           console.log('check of fit', check[fit]);
           console.log('number', matrix[i][j]);
            console.log(false);
             return false;
         }else if(j === matrix[i].length-1){
           console.log('j else', j);
           console.log('check else', check);
           console.log('check of fit else', check[fit]);
           console.log('number else', matrix[i][j]);
              var newKey = 0
              for (var k = 0; k < matrix[i].length; k++) {
                var phrase = 'key' + newKey
                console.log(phrase);
                check[phrase] = matrix[i][k];
                newKey ++;
              }
         }
       }
    }
    console.log(true);
    return true
};
isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]])
