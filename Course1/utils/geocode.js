const request = require('request')


const  geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYnNob3J0IiwiYSI6ImNsaTBxNDNsNTBjOXUzcm8wODFzOGluOTMifQ.cciFNk7huBSqw-frcbQarw&limit=1'

    console.log(address)
    console.log(url)

    request({url: url, json:true}, (error, response) => {
        if (error) {
            callback('unable to connect!');
        } else if (response.body.features.length === 0) {
            console.log('resopnse.body.features.length is zero')
            callback('empty body')
        } else {
           // console.log(response);
           console.log(response.body.features);
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name,
                url: "https://www.wikidata.org/wiki/" + response.body.features[0].properties.wikidata
            })
        }
    })

}

module.exports = geocode