 export default function yearsAgo(year) {
    const currentYear = new Date ().getFullYear();
      return currentYear - year;
     
    }
    console.log(yearsAgo(1990));