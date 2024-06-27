
 
let baseFee = 2.44
let cities = ["pallivasal", "keelashevalpatti", "thirumayam", ]
let uberRates = [50, 100, 150]
let customerName = "mani" 
let customerCity = "pallivasal" 
console.log("Hello", customerName+ ",where you want to go ?");
console.log(customerCity);
function getRate(customerCity) {
  function uberRate(customerCity, index) {
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}
getRate(customerCity)
