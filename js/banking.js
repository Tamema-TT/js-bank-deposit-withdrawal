//handle buttons with function
function getInput(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    input.value = '';
    return inputValue;
}

function updateTotal(totalId, inputAmount) {
    const currentTotal = document.getElementById(totalId);
    currentTotal.innerText = inputAmount + parseFloat(currentTotal.innerText);
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance');
    const balanceTotalAmount = parseFloat(balanceTotal.innerText);
    return balanceTotalAmount;
}
function updateBalance(inputAmount, isAdd) {
    const balanceTotal = document.getElementById('balance');
    const currentBalance = getCurrentBalance();
    if(isAdd == true) {
        balanceTotal.innerText = currentBalance + inputAmount;
    }
    else {
        balanceTotal.innerText = currentBalance - inputAmount;
    }
}

document.getElementById('deposit-submit').addEventListener('click', function() {
    const depInputValue = getInput('deposit-input');
    if(depInputValue > 0) {
        updateTotal('deposit-total', depInputValue);
        updateBalance(depInputValue, true);
    }
    else {
        alert("Please give valid input.");
    }
});

document.getElementById('withdraw-submit').addEventListener('click', function() {
    const withdrawInputValue = getInput('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawInputValue > 0 && currentBalance > withdrawInputValue) {
        updateTotal('withdraw-total', withdrawInputValue);
        updateBalance(withdrawInputValue, false);
    }
    else {
        alert("Please give valid input.");
    }
}); 

//handle deposit button
/* document.getElementById('deposit-submit').addEventListener('click', function() {
    const depInput = document.getElementById('deposit-input');
    const depTotal = document.getElementById('deposit-total');
    const balanceTotal = document.getElementById('balance');
    depTotal.innerText = parseFloat(depInput.value) + parseFloat(depTotal.innerText);
    balanceTotal.innerText = parseFloat(depInput.value) + parseFloat(balanceTotal.innerText);
    depInput.value = ''; 
});

//handle withdraw button
document.getElementById('withdraw-submit').addEventListener('click', function() {
    const withInput = document.getElementById('withdraw-input');
    const withdrawTotal = document.getElementById('withdraw-total');
    const balanceTotal = document.getElementById('balance');
    withdrawTotal.innerText = parseFloat(withInput.value) + parseFloat(withdrawTotal.innerText);
    balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(withInput.value);
    withInput.value = '';
}); */