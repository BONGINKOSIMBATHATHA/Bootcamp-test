 export default function findItemsOver20(items){
     
    let overTwenty = []
    for(var i = 0; i< items.length; i++){
        if(items[i].qty > 20){
            overTwenty.push({ name: items[i].name, qty: items[i].qty })
        }
    }
    return overTwenty;
}
console.log(findItemsOver20([
   {name : 'apples', qty : 10},
   {name : 'pears', qty : 37},
   {name : 'bananas', qty : 27},
   {name : 'apples', qty : 3},
]))


