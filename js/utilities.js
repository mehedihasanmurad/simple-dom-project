
//total cost function
function updateTotalCost(value) {
    const totalCost = setParseIntValue("total-cost");
    const sum = totalCost + parseInt(value);
    document.getElementById("total-cost").innerText = sum;
}

//grand total function
function updateGrandTotal() {
    const grandTotal = setParseIntValue("total-cost");
    document.getElementById("grand-total").innerText = grandTotal;
}

//common function of parseInt value
function setParseIntValue(id) {
    const parseIntValue = document.getElementById(id).innerText;
    const convertParseIntValue = parseInt(parseIntValue);
    return convertParseIntValue;
}
