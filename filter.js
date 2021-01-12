
const array = [5, 8, 9, 6, 7, 3 ];

if( !Array.prototype.Filter ) {
    Array.prototype.Filter = function( collback ) {
        let arrayFilter = [];
        for( let i = 0 ; i < this.length ; i++ ) {
            if( collback( this[ i ] ) ) {
                arrayFilter.push( this[ i ] );
            }
        }
        return arrayFilter;
    }
    
}

function evenElements( element ) {
    return element % 2 == 0 ;         
}

/* Primer ejemeplo */
const arrayEvenElements = array.Filter( evenElements );

/* Segundo ejemplo */
 const arrayOddElements = array.Filter( element => element % 2 != 0 );

console.log( `numeros pares ${arrayEvenElements}` );
console.log( `numeros impares ${arrayOddElements}` );