
Array.prototype.Contains = function( bind, index ) {
    if( index == undefined || index == null ){
        index = 0;
    }
    for( let i = index; i < this.length ; i++ ){
        if( this[i] instanceof Array ){
            if( this[i].indexOf(bind) != -1 ){
                return true;
            }
        }
        else {
            if( this[i] == bind ){
                return true;
            }
        }
    }
    return false;
}

const nn = [ [1,2,3], 5,8,9];

console.log( nn.Contains(3) );