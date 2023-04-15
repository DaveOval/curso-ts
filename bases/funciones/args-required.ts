(() =>{

    const fullName = (firstName: string, lastName: string): string =>{
        return `${firstName} ${lastName}`;
    }

    const name = fullName("Tony", "stark");

    console.log(name)
})()