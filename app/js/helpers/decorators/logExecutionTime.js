System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logExecutionTime(seconds = false) {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                let divider = 1;
                let timeUnit = 'milisegundos';
                if (seconds) {
                    divider = 1000;
                    timeUnit = 'segundos';
                }
                console.log('-----------------------');
                console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const returnValue = originalMethod.apply(this, args);
                console.log(`Resultado do método: ${JSON.stringify(returnValue)}`);
                const t2 = performance.now();
                console.log(`${propertyKey} demorou ${(t2 - t1) / divider} ${timeUnit}`);
                console.log('-----------------------');
                return returnValue;
            };
            return descriptor;
        };
    }
    exports_1("logExecutionTime", logExecutionTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
