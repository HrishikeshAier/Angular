function Area(radious:number,pi:number=3.14):number
{
    var calarea:number;
    calarea = radious*radious*pi;
    return calarea;
}

var result:number;

result = Area(5);

console.log(result);