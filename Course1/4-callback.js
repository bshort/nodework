const request = require('request')
const geo = require('./utils/geocode')

const fore = require('./utils/forecast')
let index = 0;

setTimeout(() => {
    console.log('again ' + index++)
})


const names = ['Brian', 'Susie', 'Ripley', 'Huxley', 'Samantha', 'Sylvia']

/*
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0, 
            longitude: 0
        }
        callback( data)

    }, 2000)

}

geocode('Boston', (data) => {
    console.log('in the geocode call')
    console.log(data)
})

*/



geo('Boston', (error, data) => {
    console.log('in geocode call')
    console.log('-----------------------------------------')
    console.log(data)
    console.log('-----------------------------------------')
    
})


fore(-71.058291,  42.360253, (error, data) => {
    console.log('in forecast call')
})



