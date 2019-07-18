function Area(radious, pi) {
    if (pi === void 0) { pi = 3.14; }
    var calarea;
    calarea = radious * radious * pi;
    return calarea;
}
var result;
result = Area(5);
console.log(result);
