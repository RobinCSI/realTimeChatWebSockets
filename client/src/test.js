const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

const values=map1.values()
let sum=0
for(let value of values){
  sum=sum+value
}
console.log(sum);


var isAnagram = function(s, t) {
  if(s.length !==t.length){
    return  false
  }

  let mp1=new Map()
  let mp2=new Map()
  for(let i=0;i<s.length;i++){
      let x=s[i]
      if(mp1.has(x)){
          let v=mp1.get(x)
          v++
          mp1.set(x,v)
      }
      else{
          mp1.set(x,1)
      }
  }
  for(let i=0;i<t.length;i++){
      let x=t[i]
      if(mp2.has(x)){
          let v=mp2.get(x)
          v++
          mp2.set(x,v)
      }
      else{
          mp2.set(x,1)
      }
  }
 console.log(mp1, mp2)

  for(let i=0;i<s.length;i++){
      let x=s[i]
      if(mp1.has(x)&&mp2.has(x)){
          if(mp1.get(x)===mp2.get(x)){
              continue
          }
      }else{
          return false
      }
  }
    for(let i=0;i<t.length;i++){
      let x=t[i]
      if(mp1.has(x)&&mp2.has(x)){
          if(mp1.get(x)===mp2.get(x)){
              continue
          }
      }else{
          return false
      }
  }
  return true
};

console.log(isAnagram("anagram", "nagaram"))


function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();

