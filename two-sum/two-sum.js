/* first solution is to simply brute force it, run a for loop with the array, and then run a nested for loop for 
every other element. Time would be O(n^2) and space would be O(1) */

/*The second and better solution is to use a hash map which would store the key (actual number) and value (index in array)
then we would iterate through the array subtracting the element from the target, then we would look for the
remainder within the hashmap. if we find it, then that is the two numbers, but if not then we keep iterating.
time would be O(n) because we might have to iterate across the entire array, and space is O(n) because the
hashmap can contain all values in the array */

const getSolution = (array, target) => {
    const hash = {};
    for(let i = 0; i < array.length; i++){
        const searchNumber = target - array[i];
        if(searchNumber in hash){
            return [i, hash[searchNumber]];
        }
        hash[array[i]] = i;
    } return false
}

