document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    // console.log(amount);
    const convertedAmount = parseFloat(amount);

    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(mainBalance);

    if (convertedPin === 1234) {
        const sum = convertedBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum ;
    } else {
        alert('Pin Incorrect ')
    }
});