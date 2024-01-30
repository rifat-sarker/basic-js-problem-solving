//problem -1(basic math)
function cubeNumber(number) {
    let result = Math.pow(number, 3);
    if (typeof number !== "number") {
        return "input should be number";
    }
    return result;
}



//problem -2 
function matchFinder(string1, string2) {
   
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return 'Both input should be strings';
    }
    
    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }

}


//problem -3
function sortMaker(arr) {
    if(arr[0] === arr[1]){
        return "equal";
    }
    else if(typeof arr[0] === 'number' && typeof arr[1] === 'number' && arr[0] > 0 && arr[1] > 0) {
        // arr.sort(function (b, a) {
        //     return a - b;
        // });
        arr.sort((a, b) => b-a);
        return arr;
    }
    
    else{
        return "Invalid Input"
    }
}



// problem -4
function findAddress(obj) {
    if(obj.hasOwnProperty('street') && obj.hasOwnProperty('house') && obj.hasOwnProperty('society')){
        const street = obj.street;
        const house = obj.house;
        const society = obj.society;    
        return `${street},${house},${society}`;
    }
    else{
        const street =obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';

        return `${street},${house},${society}`;
    }
}



//problem -5 
function canPay(changeArray, totalDue) {
    if(changeArray.length === 0){
        return 'Dont input empty array';
    }

    const sumOfArray = changeArray.reduce((acc, curr) => acc + curr, 0);
    if(sumOfArray >= totalDue){
        return true;
    }
    else{
        return false;
    }
} 

    