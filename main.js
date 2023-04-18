"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    const wolverine = new Mutante("Wolverine", "logan");
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger("antman", "Capitan", "ScottLang");
})();
(() => {
    class Avenger {
        constructor(name, realNAme) {
            this.name = name;
            this.realNAme = realNAme;
            console.log("Constructo Avender llamado");
        }
        getFullName() {
            return `${this.name} ${this.realNAme}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen llamado");
        }
        get fullName() {
            return `${this.name} - ${this.realNAme}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("El nombre debe de ser mayor de 3 letras");
            }
            this.name = name;
        }
        getFullnameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverone = new Xmen("Wolverine", "logan", true);
})();
//# sourceMappingURL=main.js.map