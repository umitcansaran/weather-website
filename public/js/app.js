const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
let message1 = document.getElementById('message-1')
let message2 = document.getElementById('message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    message1.innerHTML = "Loading ..."
    message2.innerHTML = ""

    fetch('http://localhost:3000/weather?address=' + search.value).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            message1.innerHTML = data.error
        } else {
            message1.innerHTML = data.location
            message2.innerHTML = data.forecast
        }
    })
})
})