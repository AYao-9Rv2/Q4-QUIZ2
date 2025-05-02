function viewS() {
    var sci = Number(document.getElementById('sci').value);
    var math = Number(document.getElementById('math').value);
    var eng = Number(document.getElementById('eng').value);
    var ave = (sci+math+eng)/3;


    if (!sci || !math || !eng || eng == 0) {
        alert('Invalid value! Try again');
        return;
      }

    var ave =(sci+math+eng)/3;
    ave = ave.toFixed(2);

    if (ave < 74.99) {
        window.alert('your average is ' + ave + ': poor');

      } else if (ave >= 75 && ave <= 79.99) {
        window.alert('your average is ' + ave + ': needs improvement');

      } else if (ave >= 87 && ave <= 93.99) {
        window.alert('your average is ' + ave + ': above satisfactory');

      } else {
        window.alert('your average is ' + ave + ': excellent');
      }
    }
