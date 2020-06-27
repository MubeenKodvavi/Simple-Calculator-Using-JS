function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value)
}

function backSpace() {
    var result = document.getElementById("result");
    var change = result.value;
    change = change.slice(0, change.length - 1);
    result.value = change;
}