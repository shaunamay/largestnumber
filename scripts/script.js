var array=[14, 2, 19, 26, 54, 21, 66, 39];
var largestNumber=array[0];

function theLargest(){
    for(var i=0;i<=array.length;i++){
        if(largestNumber<array[i]){
            largestNumber=array[i];
        }
    }
    alert("The largest number is: "+largestNumber);
}