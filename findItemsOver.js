 export default function findItemsOver(items, overNumber){
    
    let overNum = []
    for(var i = 0; i< items.length; i++){
        if(items[i].qty > overNumber){
            overNum.push({ name: items[i].name, qty: items[i].qty })
        }
    }
    return overNum;
}
console.log(findItemsOver([
   {name : 'apples', qty : 10},
   {name : 'pears', qty : 37},
   {name : 'bananas', qty : 27},
   {name : 'apples', qty : 3},
], 5))