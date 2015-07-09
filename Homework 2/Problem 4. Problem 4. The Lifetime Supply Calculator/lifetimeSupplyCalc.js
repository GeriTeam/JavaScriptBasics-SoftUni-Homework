calcSupply = function(age, maxAge, food, foodPerDay){
    var maximumfood = ((maxAge - age) * 365) *foodPerDay ;
  console.log(maximumfood + "kg of " + food + "would be enough until I am " + maxAge + " years old.")
}
