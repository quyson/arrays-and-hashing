/* First Way is brute force which is time O(n^2) because we have to check for duplicates for every iterable 
the array. Space is O(1) because we're only interacting with the single array. We can achieve this by using a 
for loop for each element and then another nested for loop to check.

Second Way is to sort it first so that every duplicate would be next to each other. Then we would have
to for loop once to check if each adjacent element is the same. Time would be O(nLogn) because we loop once "n" 
combined with sorting "logN". Space is O(1) cause we're only interacting with one array.

Third Way is the most optimal way. We would create a separate hash set which would contain only unique values.
We would iterate through the array, and check everytime if the same value is in the hash set. If it isn't, then 
we add the element to the hash set, if it is then there is a duplicate. Time is O(n) because we would only
iterate through the array once, but space would be O(n) because the hash set could be the same size as the array
worst case scenario

*/

getSolution = (array) => {
    const hashSet = new Set();
    for(element of array){
        if(!hashSet.has(element)){
            hashSet.add(element);
        } else {
            return true
        }
    } return false;
}