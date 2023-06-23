// See https://aka.ms/new-console-template for more information
/*The solution revolves around using a hashmap that would store a key which is uniquely identifies the anagram
signature. This could be done in multiple ways, but the one I settled on was to create a sorted version of any
given word and match it with the other elements. The value for the hashmap would be an array that displays all
the words that are anagrams of each other. Time should be O(n + m) in which N is looping through the word array
only once and generating a hashmap simultaneously. Then, in order to construct a nested array that contains each
group anagram words, we would have to loop through the hashmap once as well hence M. Space should be O(n) in which
we're creating a hashmap. */

using System;

namespace GroupAnagram
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] words = { "god", "hand", "tan", "ant", "nat", "joe", "dhan" };
            string[][] result = getSolution(words);

            foreach (string[] group in result)
            {
                Console.WriteLine(string.Join(", ", group));
            }
        }
        static string[][] getSolution(string[] array)
        {
           Dictionary<string, List<string>> d = new Dictionary<string, List<string>>();
           foreach(string word in array){
                char[] chars = word.ToCharArray();
                Array.Sort(chars);
                string sorted = new string(chars);
                if(d.ContainsKey(sorted)){
                    d[sorted].Add(word);
                } else {
                    d.Add(sorted, new List<string> { word });
                }
           }
           string[][] result = new string[d.Count][];
           int counter = 0;
           foreach(List<string> group in d.Values){
                result[counter++] = group.ToArray();
           }
           return result;
        }
    }
}
