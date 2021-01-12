
const array = [ 2, 4, 5, 8, 12, 16 ];

Array.prototype.Find = function( callback ) {
    for( let i = 0; i < this.length ; i++ ) {
        if( callback( this[i] , i, this) ) {
            return this[ i ];
        }
    }
}

const x = array.Find( element => element > 12 );

console.log( x );