function quadraticequation(a,b,c){
    var D = new Number(0);
    D =  (b*b) - (4*a*c);
    var x1,x2;
    if (D < 0)
      console.log('Not real rots');
    if (D === 0){
        x1 = (-1*b)/(2*a);
        console.log('X = ' + x1)
    }
    if (D > 0){
        x1 = ((-1*b) + Math.sqrt(D)) / (2*a);
        x2 = ((-1*b) - Math.sqrt(D)) / (2*a);
        console.log('X1 = ' + x1 + ',  X2= ' + x2)
    }
}

