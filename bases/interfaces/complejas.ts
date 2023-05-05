(() =>{

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddres( id: string ) : string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }


    const person: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 124,
            zip: "KY SUD",
            city: "ottawa"
        },
        getFullAddres( id: string ){
            return this.address.city
        }
    }

    const client2: Client = {
        name: "melissa",
        age: 30,
        address: {
            id: 3123,
            zip: "123",
            city: "awdawd"
        },
        getFullAddres( id: string ){
            return this.address.city
        }
    }

})()