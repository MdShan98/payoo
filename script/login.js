// alert('This has been Added');
document.getElementById('logIn-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;

    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    
    if (accountNumber.length === 9) {
        // console.log("Yes ready to proceed");
        if(convertedPin === 1234){
            window.location.href="main.html"
        }
        else{
            alert("check the pin");
        }
    } else {
        alert("please check the account number");
    }
});