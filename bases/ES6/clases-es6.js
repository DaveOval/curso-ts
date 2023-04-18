(() =>{

    class Avenger {
        name;
        power;

        constructor( name, power){
            this.name = name;
            this.power = power;
        }
    }
    class Volador extends Avenger{
        fly;

        constructor( name, power){
            super(name, power);
            this.fly = true;
        }


    }

    const hulk = new Avenger("hulk", 9000)
    const falcon = new Volador("Falcon", 50)

    console.log(hulk)
    console.log(falcon)
    


})()