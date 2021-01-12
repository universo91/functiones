/** desarrollando el metodo Map */
if( !Array.prototype.Map ) {
    
    Array.prototype.Map = function( collback ) {
        const arrayMap = [];
        for( let i = 0 ; i < this.length ; i++ ) {
            arrayMap.push( collback(this[i], i, this ) );
        }      
        return arrayMap;  
    }
}

function toUpperC(element) {
    return element.toUpperCase();
}

const days = ["lunes", "martes", "miercoles", "jueves", "viernes", "Sabado", "Domingo" ];

const products = [
    { id: "1", name: "shirt", category: "clothing" },
    { id: "2", name: "Sports Tennis", category: "accessories" },
    { id: "3", name: "Casual shoes", category: "footwear" },
    { id: "4", name: "skirt", category: "clothing" },
    { id: "5", name: "tie", category: "clothing" }
]

const daysUpperCase = days.Map( toUpperC );

let nameOfProducts = products.Map((product, index, array) => {
    // Cómo solo queremos los nombres, retornamos "name".
    return product.name;
})

console.log(`Solo nombres de producto: ${nameOfProducts} \n`);
console.log( `Dias en mayuscula: ${daysUpperCase}` );

console.log( [1, 4, 9].Map( Math.sqrt) );

