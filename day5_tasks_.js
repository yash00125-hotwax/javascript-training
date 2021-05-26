// 1. summ all the values in the list using reduc().

console.log([99,78,7,2,15,12].reduce((a,b) => a+b ,0));   // using arrow functiona and as reduce will create an array and will reduce the values to asingle value.

// remove duplicate values from list using filter().

var t = [1,12,78,78,12,1,6,9,54,9];
console.log([1,12,78,78,12,1,6,9,54,9].filter(removeD(t)));
function removeD(a)
{
    var y;
    l = a.lenght;
    b=[];
    yg={};         

    for( y = 0; y<l ; y++ ){
        yg[a[y]]=0;
    }
    for (y in yg ){

        b.push(y);

    }
    return b;
 
} 
