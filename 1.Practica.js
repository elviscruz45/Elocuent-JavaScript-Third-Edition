let total=0;
cuenta=1;

while(cuenta<=10){
    total+=cuenta;
    cuenta+=1;
}

console.log(total);

console.log(sum(range(1,10)))




function factorial(numero){
    if(numero==0){
        return numero=1;
    }
    else{
        return factorial(numero-1)*numero;
        }
    }


console.log(factorial(3))




function factorial(numero){
    if(numero==0){
        console.log("no pasa nada")
    }
    else{
        a=[]
        for(i=1;i<=numero;i++){
            a.push(i)
        }
        fact=1;
        for(i=1;i<a.length;i++){
            fact*=a[i]

        }
    console.log(fact)
        }

    }


factorial(2)