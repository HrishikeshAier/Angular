function ChkString(str) {
    var strarr;
    strarr = str.split(' ');
    for (var i = 0; i < strarr.length; i++) {
        if (strarr[i] == 'Marvellous') {
            return ('String contains Marvellous in it');
        }
    }
    return ('String does not contains Marvellous in it');
}
var res;
res = ChkString('Pune Kothrud Marvellous Infosystems');
console.log(res);
