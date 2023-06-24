/* Solution involves utilizing a hashset to store each unique number in the array. Then, iterate over the array
once while checking if element - 1 exists, if it does then that means this number is not the beginning of the
longest sequence because there is a lower adjacent number present in the set. However, once finding the 
beginning of a sequence, a while loop will be set to uncover the length of adjacent numbers after the starting
number. This length will be temporarily saved onto the length variable and then the longest variable once the
for loop moves onto the next number in the array which will repeat the process but will compare the new longest
sequence to the length of the previous longest sequence from the previous element. Once all numbers have been
looped through, the true longest will be returned. Time complexity is O(n) because we will only have to loop
through the array. Space is O(n) because of the hashset */


const getSolution = (array) => {
    if(array.length == 0){
        return 0;
    }
    let longest = 0;
    const set = new Set(array);
    for(const number of array){
        const length = 0;
        if(!set.has(number - 1)){
            while(set.has(number + length)){
                length++
            } longest = Math.max(longest, length)
        }
    } return longest;
}