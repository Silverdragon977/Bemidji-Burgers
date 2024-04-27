function pay(){
    var Money = document.getElementById('moneyLeft').value;
    var Bill = document.getElementById('totalBill').value;
    var totalLeft;
    totalLeft = Money - Bill;
    if (Math.sign(totalLeft) === 1){
        document.getElementById('moneyLeft').value = totalLeft;
        document.getElementById('totalBill').value = 0;
        alert('Thank you for your patronage');
    }
    else if (Math.sign(totalLeft) === -1){
        alert("You don't have enough money to pay for this!");
        document.getElementById('totalBill').value = 0;
    }
    else if (Math.sign(totalLeft) === 0){
        document.getElementById('moneyLeft').value = totalLeft;
        document.getElementById('totalBill').value = 0;
        alert('Thank you for your patronage!');
    }

}
function addToCart(){
        var item = 0;
        var item = document.forms[0];
        var order = 0;
        var i;
        for (i = 0; i < item.length; i++) {
          if (item[i].checked) {
            order += parseFloat(item[i].value);
          }
        }
        document.getElementById("totalBill").value = order;
      }
function addMoney(){
      var money = parseFloat(document.getElementById('money').value);
      var wallet = parseFloat(document.getElementById('moneyLeft').value);
      var transaction = parseFloat(money) + parseFloat(wallet);
      document.getElementById('moneyLeft').value = transaction;
      document.getElementById('money').value = 0;
  
}