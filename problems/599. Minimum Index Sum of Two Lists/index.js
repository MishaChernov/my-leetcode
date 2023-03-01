/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let hash = new Map();
  let result = new Map();
  let min = Number.MAX_VALUE;
  
  for(let i = 0; i < list1.length; i++) {
   hash.set(list1[i], i);
  }
  
  for(let i = 0; i < list2.length; i++) {
    
    if (hash.has(list2[i])) {
        let smallest = hash.get(list2[i]) + i;

        if (smallest <= min) {
            min = Math.min(smallest, min);
            let prev = result.get(smallest);
            result.set(min, prev ? [...prev, list2[i]] : [list2[i]]);
        }
    }
  }
  
  return Object.values(result.get(min));
};

console.log(findRestaurant(["happy","sad","good"], ["sad","happy","good"]));