(()=> {


    type Avengers = {
        name: string,
        weapon: string,
    }

    const ironman: Avengers = {
        name: "Tony Stark",
        weapon: "Armor suit",
    }
    const capAmerica: Avengers = {
        name: "Capitan America",
        weapon: "Shield",
    }
    const thor: Avengers = {
        name: "Thor",
        weapon: "Mjolnir",
    }

    const avengers = [ironman, thor, capAmerica];

    for  (const avenger of avengers) {
        console.log(avenger)
    }

})()