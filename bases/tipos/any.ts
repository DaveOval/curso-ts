(()=>{

    let avenger: any = 123;
    let exist;
    let power;

    avenger = 'Dr Strrange'
    //console.log(avenger.charAt(0))
    console.log((avenger as string).charAt(0));

    avenger= 150.232323;

    console.log(<number>avenger.toFixed(2))

})()