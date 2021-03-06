const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=da270dd99cb709305c9754ba1ed36c4d&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain. It feels like ' + body.current.feelslike + " degrees and the humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast