// login button event handeler

let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    let container = document.querySelector(".container");
    container.style.display = "none";

    let transactionArea = document.querySelector(".transaction-area");
    transactionArea.style.display = "block";
})

// deposit button event handler

let depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click",()=>{
    let depositAmount = document.getElementById("deposit-amount").value;
    let depositNumber = parseFloat(depositAmount);

    let currentDeposit = document.getElementById("current-deposit").innerText;
    let currentDepositNumber = parseFloat(currentDeposit);
    let totalDeposit = depositNumber + currentDepositNumber;
    
    document.getElementById("current-deposit").innerText = totalDeposit;
    document.getElementById('deposit-amount').value = "";

    let balenceAmount = document.getElementById("balence-amount").innerText;
    let balenceAmountNumber = parseFloat(balenceAmount);
    let totalAmount = depositNumber + balenceAmountNumber;

    document.getElementById("balence-amount").innerText = totalAmount;
})

// withdraw button event handler

let withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click",()=>{
    let withdrawAmount = document.getElementById("withdraw-amount").value;
    let withdrawNumber = parseFloat(withdrawAmount);
    
    let currentWithdraw = document.getElementById("current-withdraw").innerText;
    let currentWithdrawNumber = parseFloat(currentWithdraw);
    let totalWithdraw = withdrawNumber + currentWithdrawNumber;

    document.getElementById("current-withdraw").innerText = totalWithdraw;
    document.getElementById("withdraw-amount").value = "";

    let balenceAmount = document.getElementById("balence-amount").innerText;
    let balenceAmountNumber = parseFloat(balenceAmount);
    let totalAmount = balenceAmountNumber - withdrawNumber;
    document.getElementById("balence-amount").innerText = totalAmount;
})