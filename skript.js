var data = {
    locations: [
        {
            Id: 1,
            Name: 'Tbilisi',
            ConnectedLocationIds: [2]
        },
        {
            Id: 2,
            Name: 'Rustavi',
            ConnectedLocationIds: [1]
        },
        {
            Id: 3,
            Name: 'Batumi',
            ConnectedLocationIds: [4, 5]
        },
        {
            Id: 4,
            Name: 'Kobuleti',
            ConnectedLocationIds: [3, 6]
        },
        {
            Id: 5,
            Name: 'Poti',
            ConnectedLocationIds: [3]
        },
        {
            Id: 6,
            Name: 'Ureki',
            ConnectedLocationIds: [4]
        },
    ]
}

function checkConnected(locationData, firstId, secondId){
}
