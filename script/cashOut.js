document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);

    const cashOutAmount = document.getElementById('cashout-amount').value;

    const convertedCashOutAmount = parseFloat(cashOutAmount);

    const mainBalance = document.getElementById('main-balance').innerText;

    const convertedMainBalance = parseInt(mainBalance);

    if (convertedPin === 1234) {
        const sum = convertedMainBalance - convertedCashOutAmount;

        document.getElementById('main-balance').innerText = sum ;
    } else {
        alert('Enter The Correct Pin');
    };

})