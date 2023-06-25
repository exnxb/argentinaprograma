//Imprimir la cuenta regresiva del lanzamiento de un cohete a Marte. Dicha cuenta irá desde el número 10, hasta el despegue (el número 0).

for (let i=10; i>=0; i--){
if (i === 10 ){
    console.log ("Cuenta regresiva " + i);}
if (i < 10 && i > 0){
    console.log (i);}
if (i === 0 ){
    console.log (i + ", Lanzamiento!");}
}


