(() =>{

    type Avengers={
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.123123,
    }

    const {poder, vision} = avengers

    //console.log(poder.toFixed(2), vision.toUpperCase())

    const printAvenger = ( {vision} : Avengers)=>{
        console.log(avengers.vision);
    }

   // printAvenger(avengers);
   const avengersArr: string[] = ["Capitan america", "Ironman", "hulk"];

    const [ , ironman ] = avengersArr;
    //console.log({ironman})

})()