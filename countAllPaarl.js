  export default function countAllPaarl(registrationNumbers) {
    var registrationNumberList = registrationNumbers.split(', ');
    
    var count = 0;
    
    for (let i = 0; i < registrationNumberList.length; i++) {
      
      const registration = registrationNumberList[i].trim();
      
      if (registration.startsWith('CJ')) {
        count++;
      }
    }
    
    return count;
  }
  console.log(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'))