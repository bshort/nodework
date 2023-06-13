const request = require('request')

// const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-112'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')   
//     }
// })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYnNob3J0IiwiYSI6ImNsaTBxNDNsNTBjOXUzcm8wODFzOGluOTMifQ.cciFNk7huBSqw-frcbQarw&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {

    example("first argument", () => {console.log('in example call')});

    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})


const example = (arg1, callback) => {
    console.log('in example');
    callback();
}


const example2 = (arg1, callback) => {

}


