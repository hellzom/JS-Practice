//let, var, const
//let, const == lexical scope k andr
//var == out of scope v kaam krta hai
// {} --> Scope
//global scope is different in code env like node and different in browser env.
if(1){
    var a = 10;
}

console.log(a); //should'nt have the access to scope of a but var lets you use that.