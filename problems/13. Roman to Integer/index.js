/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const d=Object.entries({CM:900,CD:400,XC:90,XL:40,IX:9,IV:4,I:1,V:5,X:10,L:50,C:100,D:500,M:1000});
  for(let i=0; i<d.length; i++){s = s.replaceAll(d[i][0], `${d[i][1]},`)}
  return s.split`,`.reduce((p,c) => +p + +c);
}

console.log(romanToInt('MCMXCIV'));