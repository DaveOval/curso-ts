(() =>{

    const fullName = (firstName: string, lastName?: string): string =>{
        return `${firstName} ${lastName || "No lastname"}`;
    }

    const name = fullName("Tony", "stark");

    console.log(name)
})()