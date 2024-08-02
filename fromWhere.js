  export default function fromWhere(registrationNumber) {
    // Extract the first two characters (prefix) from the registration number
    var prefix = registrationNumber.substring(0, 2);

    // Use a switch statement to determine the town based on the prefix
    switch (prefix) {
        case "CY":
            console.log(registrationNumber + " is from Bellville");
            return "Bellville"; // If prefix is "CY", return "Bellville"
        case "CJ":
            console.log(registrationNumber + " is from Paarl");
            return "Paarl"; // If prefix is "CJ", return "Paarl"
        case "CA":
            console.log(registrationNumber + " is from Cape Town");
            return "Cape Town"; // If prefix is "CA", return "Cape Town"
        default:
            console.log(registrationNumber + " is from Some other place");
            return "Some other place!"; // If prefix doesn't match any case, return "Some other place"
    }
}


// Test cases
console.log(fromWhere('CY123456')); // Output: Bellville
console.log(fromWhere('CJ987654')); // Output: Paarl
console.log(fromWhere('CA246813')); // Output: Cape Town
console.log(fromWhere('GP369258')); // Output: Some other place