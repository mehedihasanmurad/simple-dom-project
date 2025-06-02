
//total cost function
function updateTotalCost(value) {
    const totalCost = setParseIntValue("total-cost");
    const sum = totalCost + parseInt(value);
    document.getElementById("total-cost").innerText = sum;
}

//grand total function and jodi coupon code sotti hoy tahole total cost theke 20% discount hoye grandTotal a man ta dekhabe

function updateGrandTotal(status) {
    // console.log(status)
    const totalCost = setParseIntValue("total-cost");
    document.getElementById("grand-total").innerText = totalCost;
    if (status === undefined) { 
    }

    else {
        const couponCode = document.getElementById("coupon-code").value;
        if (couponCode === "love420") {
            const discounted = totalCost * 0.20;
            document.getElementById("grand-total").innerText = totalCost - discounted;
        }
        else {
            alert("Please enter valid coupon code");
        }
    }
}

//common function of parseInt value
function setParseIntValue(id) {
    const parseIntValue = document.getElementById(id).innerText;
    const convertParseIntValue = parseInt(parseIntValue);
    return convertParseIntValue;
}
