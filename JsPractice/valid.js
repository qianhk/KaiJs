/**
 * Created by kai on 16/12/20.
 */

const pwList = ['187d32c34de5a2a5c8ded60c021cbbbf', '601ba129423c575fd5201ef9c6326a94'
    , '106c67dba69b00b6850cf00b7dccbfd2', '4e2904fe66b17c8c629dce31d2806c9f'];

function onClickValidTest() {
    var inputTxt = idForm.idEdtText.value;
    var md5Txt = hex_md5(inputTxt);
    console.log('onClickValidTest2:' + inputTxt + " md5:" + md5Txt);
    // console.log('onClickValidTest1:' + document.getElementById('idEdtText').value);
    document.getElementById('idTxtResult').innerText = checkSameToPw(md5Txt) ? "通过验证" : "验证不通过";
}

function checkSameToPw(val) {
    return pwList.some(function (item) {
        return item == val;
    });
}