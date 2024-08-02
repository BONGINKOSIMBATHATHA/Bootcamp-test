export default function countAllFromTown(regNumbers, town) {
    const regNumArray = regNumbers.split(',');
    let count = 0;
    
    for (let i = 0; i < regNumArray.length; i++) {
        if (regNumArray[i].trim().startsWith(town)) {
            count++;
        }
    }
    
    return count;
}

// Example usage:
const fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
