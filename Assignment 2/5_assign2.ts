function ChkString(str:string):string
{
    var strarr:string[];
    strarr = str.split(' ');
    for(var i=0; i<strarr.length; i++)
    {
        if(strarr[i] == 'Marvellous')
        {
            return ('String contains Marvellous in it');
        }
    }
    return ('String does not contains Marvellous in it');
}

var res:string;

res = ChkString('Pune Kothrud Marvellous Infosystems');

console.log(res);