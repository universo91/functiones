

function Without(...args) {
    //const arrayVar = arguments[0];
    for( let j = 1; j < args.length ; j++ ) 
    {
        for( let i = 0 ; i < args[0].length ; i++)
        {        
            if( args[0].find( element => element == args[j]) ) {
                const indice = nums.findIndex(element => element == args[j]);
                args[0].splice( indice, 1 );
                //console.log( `${nums} ${nums.length}` );
                i = -1;
            }
        }
    }
}
let nums = ['a','v','j','a','a'];

Without(nums, 'a','v');
console.log( nums );

