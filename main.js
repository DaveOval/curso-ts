"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    Validations.validateDate = (fecha) => {
        return isNaN(fecha.valueOf())
            ? false
            : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Fer'));
//# sourceMappingURL=main.js.map