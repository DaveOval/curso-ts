(()=>{

    const batman: string = 'Batman';
    const linternaVerde: string = 'Linterna verde';
    const volcanNegro: string = `Heroe: Volcan Negro`;

    const abc = 123;

    console.log(`I'm ${batman}, ${abc}`);

    console.log(batman.toLocaleUpperCase());

    console.log(batman[10]?.toUpperCase() || "No esta presente");

})()