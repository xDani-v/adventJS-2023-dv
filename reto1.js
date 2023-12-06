const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) 

function findFirstRepeated(gifts) {
  let aux = [];
  if(gifts.length==0) return -1;
  for(let i=0;i<gifts.length;i++){
     if(!aux.includes(gifts[i])){
      aux.push(gifts[i])
     }else{
       return gifts[i];
     }
     if(aux.length===gifts.length) return -1;
  } 
}