(()=>{
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string,
        ){}
    }

    const wolverine: Mutante = new Mutante("Wolverine", "logan");
})()