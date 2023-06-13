const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=8697d4f202bd5396884732c7f01a52bf&query=45, -75' 

const request = http.request(url, (response) => {

    let data = ''


    response.on('data', (chunk) => {
            data = data + chunk.toString();
    })

    response.on('end', () => {
        console.log(data)
        const body = JSON.parse(data)
        console.log(body)
    })
    console.log(response)
})

request.end()