
const array = [ {nombre:"Juan", edad:22, talla: 1.7 },
                {nombre:"Fiorela", edad: 18, talla: 1.5},
                {nombre:"Mario", edad: 15, talla: 1.6}
              ];
const array1 = [ 4, 2, 6, 6, 9 ];

/** Estableciendo el metodo FindIndex */
Array.prototype.FindIndex = function( callback ) {
    for( let i = 0 ; i < this.length ; i++ ) {
        if( callback( this[i], i, this ) ) {
            return i;
        }        
    }
    return -1;
}

function edad15( element ) {
    return element.edad == 15;
}

const index = array.FindIndex( edad15 );
console.log( index );

const index1 = array1.FindIndex( element => {
    let counter = 0;
    for( let i = 2; i <= parseInt( element / 2 )  ; i++ )
    {
        if( element % i == 0 ){
            counter++;
        }        
    }
    return counter < 1 ;
        
});

console.log( index1 );
