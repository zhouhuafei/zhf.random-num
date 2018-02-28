(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('randomNum', function () {
    function randomNum(min, max) {
        if (!max) {
            max = min;
            min = 0;
        }
        return Math.round(Math.random() * (max - min) + min);
    }

    return randomNum;
});
