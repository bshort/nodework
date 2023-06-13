const request = require('request')



const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/boston.json?access_token=pk.eyJ1IjoiYnNob3J0IiwiYSI6ImNsaTBxNDNsNTBjOXUzcm8wODFzOGluOTMifQ.cciFNk7huBSqw-frcbQarw&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {

        console.log(response.body.features)
        
        if (error) {
            console.log('Unable to connect to location services!')
        } else if (response.body.features.length === 0) {
            console.log('Unable to find location. Try another search.')
        } else {
            const latitude = response.body.features[0].center[0]
            const longitude = response.body.features[0].center[1]
            console.log(latitude, longitude)
        }
    }
);