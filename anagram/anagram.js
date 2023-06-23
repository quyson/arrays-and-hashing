/* first solution would be to use a hash map in which it stores key (each letter) and value (amount of times letter occurs)
given that they're the same length, we can then iterate over a hashmap and compare each key/value pair with
the other hash map. Time would be O(n) or O(first hash + second hash) because we'd have to iterate over both
hashes. Space would be the latter because we'd be making two hashes */

const getSolution = (string1, string2) => {
    if(string1.length != string2.length){
        return false;
    }
    const hashMap1 = {};
    const hashMap2 = {};

    for(let i = 0; i < string1.length; i++){
        hashMap1[string1[i]] = 1 + (hashMap1[string1[i]] || 0);
        hashMap2[string2[i]] = 1 + (hashMap2[string2[i]] || 0);
    }
    for(let key in hashMap1){
        if(hashMap1[key] != hashMap2[key]){
            return false
        }
    } return true
};

/* second solution is to actually sort both strings so that they're all in order. Then all we have to do is check
if they're the same string because naturally anagrams would be the same if they share the same order. Time would
be O(nlogn) and space is O(1) because commonly accepted sorting takes no space unless it's merge sort */