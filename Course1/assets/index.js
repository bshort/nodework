const fore = require('./utils/forecast')
const geos = require('./utils/geocode')

const  express = require('express')

const address = 'Boston, MA'

const app = express()

const port = 3000
let geo;
let fors;

if (!address) {
    console.log('Please provide an address')
} else {
     geo = geos(address, (error, data) => {
        if (error) {
            return console.log(error)
        }

         fors = fore(data.latitude, data.longitude, data.location, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(data.location)
            console.log(geo)
            console.log(fors)
        })
    })
}


app.get('', (req, res) => {
    res.send('<h1>Content</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'brian',
        age:48
    })
})


app.get('/geo', (req, res) => {
    res.send(geo)
})

app.get('/fore', (req, res) => {
    res.send(fors)
})

app.get('/favicon.ico', (req, res) => {
    res.send('')
})

app.post('', (req, res) => {
    res.send(
        ''
    )
})

app.put('', (req, res) => {
    res.send('PUT hello express!')
})


app.patch('', (req, res) => {
    res.send('PATCH hello express!')
})

app.delete('', (req, res) => {
    res.send('DELETE hello express!')
})


app.listen(port, () => {
    console.log('server is up on port ' + port)
})