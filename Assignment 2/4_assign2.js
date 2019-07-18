var ChkArmstrong = function (a) {
    var x = a;
    var p = 0;
    var q = 0;
    while (x > 0) {
        p = x % 10;
        q = q + (p * p * p);
        x = Math.floor(x / 10);
    }
    if (a == q) {
        console.log('It is Armstrong number');
    }
    else {
        console.log('It is not an Armstrong number');
    }
};
ChkArmstrong(153);
