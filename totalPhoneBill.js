 export default function totalPhoneBill(data) {
    const calls = data.split(',').filter(item => item.trim() === 'call').length;
    const sms = data.split(',').filter(item => item.trim() === 'sms').length;
    
    const callCost = calls * 2.75;
    const smsCost = sms * 0.65;
    
    const totalCost = callCost + smsCost;
    
    return 'R' + totalCost.toFixed(2);
}

// Example usage:
const data = 'call, sms, call, sms, sms';
console.log(totalPhoneBill(data)); // Output: R7.45