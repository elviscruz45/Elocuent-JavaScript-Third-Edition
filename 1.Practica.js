let total=0;
cuenta=1;

while(cuenta<=10){
    total+=cuenta;
    cuenta+=1;
}

console.log(total);

console.log(sum(range(1,10)))

//FACTORIAL OPCION 1

function factorial(numero){
    if(numero==0){
        return numero=1;
    }
    else{
        return factorial(numero-1)*numero;
        }
    }
console.log(factorial(3))


//FACTORIAL OPCION 2

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

//ROMPER UN CICLO

for (let actual = 20; ; actual = actual + 1) {
    if (actual % 7 == 0) {
      console.log(actual);
 break; }
 }

//SWITCH

switch (prompt("Como esta el clima?")) { case "lluvioso":
console.log("Recuerda salir con un paraguas.");
break;
case "soleado":
console.log("Vistete con poca ropa."); case "nublado":
console.log("Ve afuera.");
     break;
   default:
console.log("Tipo de clima desconocido!");
break; }



a=""
while(a.length<=7){
    a+="#"
    console.log(a)
}