const request = require('request')

const forecast = (latitude, longitude, location, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8697d4f202bd5396884732c7f01a52bf&query=' + longitude + ',' + latitude

    console.log(url)
    request({ url: url, json: true }, (error, response) => {
        console.log(response.body.data)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'In ' + location + '. It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast