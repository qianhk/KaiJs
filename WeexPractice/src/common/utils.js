
var modal;
__weex_define__('@weex-temp/xyz', function (__weex_require__) {
  modal = __weex_require__('@weex-module/modal');
});

function add(arg1, arg2) {
    return arg1 + arg2;
}

function minus(arg1, arg2) {
    return arg1 - arg2;
}

function toast(message) {
    // let modal = require('@weex-module/modal');
    modal.toast({message:message, length:1});
}

function simpleStringify(object) {
    var simpleObject = {};
    for (var prop in object ) {
        // console.log('simpleStringify typeof(' + prop + ')=' + typeof(object[prop]));
        if (!object.hasOwnProperty(prop)){
            continue;
        }
        if (typeof(object[prop]) == 'object'){
            continue;
        }
        if (typeof(object[prop]) == 'function'){
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
}

module.exports = {
        add: add,
        minus: minus,
        toast: toast,
        simpleStringify: simpleStringify,
};
