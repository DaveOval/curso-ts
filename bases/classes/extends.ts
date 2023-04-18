(() => {
    class Avenger {

        constructor(
            public name: string,
            public realNAme: string,
        ) {
            console.log("Constructo Avender llamado")
        }

        protected getFullName() {
            return `${this.name} ${this.realNAme}`
        }
    }
    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName)
            console.log("Constructor Xmen llamado")

        }

        get fullName() {
            return `${this.name} - ${this.realNAme}`
        }
        set fullName(name: string) {
            if (name.length < 3){
                throw new Error ("El nombre debe de ser mayor de 3 letras")
            }
                this.name = name;
        }

        getFullnameDesdeXmen() {
            console.log(super.getFullName())
        }

    }

    const wolverone = new Xmen("Wolverine", "logan", true)

    //console.log(wolverone.fullName)
    //wolverone.fullName = "Fe"
    //console.log(wolverone.fullName)
    //wolverine.getFullnameDesdeXmen();
})()