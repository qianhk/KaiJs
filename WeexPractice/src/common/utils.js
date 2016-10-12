
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


module.exports = {
        add: add,
        minus: minus,
        toast: toast,
};
