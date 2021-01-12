
const numbers = [ 1, 5, 7, 12, 6, 8, 3];

let suma = 0;
function cuadradoElementosArray( elemento ) {
    suma += elemento;
}

/** si nno existe la propiedad ForEach para los arrays entoces crea esa propiedad */
if( !Array.prototype.ForEach ) {
    Array.prototype.ForEach = function( collback) {
        for( let i = 0; i < this.length ; i++ ) {
            collback( this[i], i, this );
        }
    }
}

numbers.ForEach( cuadradoElementosArray );
numbers.ForEach( elemento => {
    console.log( Math.pow(elemento, 2 ) );
});
console.log( `suma de los elementos del array: ${suma}`);

