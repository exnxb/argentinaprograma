//Imprimir una cuenta regresiva de lanzamiento de un cohete a Marte. Dicha cuenta irá desde 10 hasta el despegue.

for (let i=10; i>=0; i--){
if (i === 10 ){
    console.log ("Cuenta regresiva " + i);}
if (i < 10 && i > 0){
    console.log (i);}
if (i === 0 ){
    console.log (i + " ,Lanzamiento!");}
}
