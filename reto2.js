const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts,materials))

function manufacture(gifts, materials) {
   let mat = materials.split("");
   let a_aux = []
   let cont=0;
   for(let i=0;i<gifts.length;i++){
       let g_aux = gifts[i].split("")
        for(let j=0;j<g_aux.length;j++){
            if(mat.includes(g_aux[j])){
               cont++;   
            }
        }
         if (cont == g_aux.length) {
            a_aux.push(gifts[i]);
       }
       cont = 0;
   }
   
   return a_aux;
   
}