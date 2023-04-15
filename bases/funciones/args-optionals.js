"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "No lastname"}`;
    };
    const name = fullName("Tony", "stark");
    console.log(name);
})();
