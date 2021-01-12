
function Pluck(array, propertyy ) {
    const arrayPluck = [];
    for(let i = 0 ; i < array.length ; i++ ) {
        arrayPluck.push( array[ i ][propertyy] );
    }
    return arrayPluck ;
}

var stooges = [{nombre: 'moe', edad: 40}, {nombre: 'larry', edad: 50}, {nombre: 'rizado', edad: 60}]; 

const nameStogges = Pluck( stooges,'nombre' );

console.log( nameStogges );