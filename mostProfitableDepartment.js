  export default    function mostProfitableDepartment(salesData){
     
    let mstProObject = {}
    let highestDep = 0; 
 
    for(var i = 0; i < salesData.length; i++){
       let data = salesData[i]
       mstProObject[data.department] = 0 // ==> { hardware: 0, outdoor: 0, carpentry: 0 }
    }
    
    for(var i = 0; i < salesData.length; i++){
       let data = salesData[i]
       /*console.log(data) ==> { department: 'hardware', sales: 4500, day: 'Monday' }
                               { department: 'outdoor', sales: 1500, day: 'Monday' }
                               { department: 'carpentry', sales: 5500, day: 'Monday' }
                               { department: 'hardware', sales: 7500, day: 'Tuesday' }
                               { department: 'outdoor', sales: 2505, day: 'Tuesday' }*/

      // console.log(mstProObject)
       let totDep = mstProObject[data.department] 
    
       totDep += data.sales
     mstProObject[data.department] = totDep;
        
    }
    
    const values = Object.values(mstProObject);
    
      for(var i = 0; i < values.length; i++){
       let data = values[i];
       if(data > highestDep){
           highestDep = data;
       }
      
    }
    highestDep = Object.keys(mstProObject).find(key =>
       mstProObject[key] === highestDep);
       
  return highestDep
}

var salesData = [
   {department : 'hardware', sales : 4500, day : 'Monday'},
   {department : 'outdoor', sales : 1500, day : 'Monday'},
   {department : 'carpentry', sales : 5500, day : 'Monday'},
   {department : 'hardware', sales : 7500, day : 'Tuesday'},
   {department : 'outdoor', sales : 2505, day : 'Tuesday'},
   {department : 'carpentry', sales : 1540, day : 'Tuesday'},
   {department : 'hardware', sales : 1500, day : 'Wednesday'},
   {department : 'outdoor', sales : 8507, day : 'Wednesday'},
   {department : 'carpentry', sales : 8009, day : 'Wednesday'},
   {department : 'hardware', sales : 12000, day : 'Thursday'},
   {department : 'outdoor', sales : 18007, day : 'Thursday'},
   {department : 'carpentry', sales : 6109, day : 'Thursday'},
   {department : 'hardware', sales : 7005, day : 'Friday'},
   {department : 'outdoor', sales : 12006, day : 'Friday'},
   {department : 'carpentry', sales : 16109, day : 'Friday'},
];
console.log(mostProfitableDepartment(salesData))

