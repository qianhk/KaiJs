/**
 * Created by kai on 16/12/20.
 */

const pwList = ['456', '134', 'abc'];

function onClickValidTest() {
    var inputTxt = idForm.idEdtText.value;
    console.log('onClickValidTest2:' + inputTxt);
    // console.log('onClickValidTest1:' + document.getElementById('idEdtText').value);
    document.getElementById('idTxtResult').innerText = checkSameToPw(inputTxt) ? "通过验证" : "验证不通过";
}

function checkSameToPw(val) {
    return pwList.some(function (item) {
        return item == val;
    });
}