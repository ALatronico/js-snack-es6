/* **Snack 3 (Bonus)**
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

function Snack(array, a, b){
  if ( a >= b){
    console.error("Il valore 'a' dev'essere più piccolo di 'b'");
    return [];
  }
  if(!Array.isArray(array)){
    console.error("Il primo argomento deve essere un array.");
    return [];
  }
  if (a < 0 || b > array.length) {
    console.error("Gli indici devono essere compresi tra 0 e la lunghezza dell'array.");
    return [];
}

return array.slice(a, b);
}