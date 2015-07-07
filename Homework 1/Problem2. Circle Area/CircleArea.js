function calcCircleArea(r){
return (r * r *Math.PI);
}
document.getElementById("circle1").innerHTML = calcCircleArea(7);
document.getElementById("circle2").innerHTML = calcCircleArea(1.5);
document.getElementById("circle3").innerHTML = calcCircleArea(20);