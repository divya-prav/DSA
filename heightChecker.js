function heightchecker(heights) {
  let notPositionedCount = 0;
  let map = new Map();
  let sortedmap = new Map();

  for (let i = 0; i < heights.length; i++) {
    map.set(i, heights[i]);
  }
  heights.sort((a, b) => a - b);
 
  for (let i = 0; i < heights.length; i++) {
    sortedmap.set(i, heights[i]);
  }

  for(let[key,value] of map){
    if(sortedmap.get(key) !== value) notPositionedCount++;
  }
  return notPositionedCount;
}

console.log(heightchecker([1, 1, 4, 2, 1, 3]));
