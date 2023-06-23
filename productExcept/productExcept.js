const getSolution = (array) => {
    let result = [1]
    for(let i = 0; i < array.length; i++){
        if(i != 0){
            result.push(array[i - 1] * result[i - 1]);
        } else {
            result.push(array[i]);
        }
    }
    let counter = 1
    for(let j = result.length - 1; j > 0; j--){
        if(j < result.length - 1){
            result[j - 1] = result[j - 1] * array[j] * counter
            counter = counter * array[j]
        } else {
            result[j - 1] = result[j - 1] * array[j]
            counter = counter * array[j];
        }
    }
    return result;
};



