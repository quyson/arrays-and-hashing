// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using System.Linq;

namespace topKFrequent
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] number = {1,1,1,2,2,2,2,3,3,5};
            int target = 3;
            int[] answer = getSolution(number, target);
            Console.WriteLine(answer);
        }
        static int[] getSolution(int[] array, int target)
        {
            Dictionary<int, int> d = new Dictionary<int , int>();
            foreach(int number in array){
                if(d.ContainsKey(number)){
                    d[number] = d[number] + 1;
                } else {
                    d.Add(number, 1);
                }
            }
            List<int> result = new List<int>();
            for(var i = target; i > 0; i--){
                int max = d.Values.Max();
                int foundKey = d.FirstOrDefault(x => x.Value == max).Key;
                result.Add(foundKey);
                d.Remove(foundKey);
            }
            
            return result.ToArray();
        }
    }
}


