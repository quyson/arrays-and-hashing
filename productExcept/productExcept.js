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
    for(let j = result.length - 2; j > 0; j--){
        counter = counter * array[j+1]
        result[j] = result[j] * counter;
    }
    return result;
};



