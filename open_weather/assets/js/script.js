const form = document.querySelector('#form')
const weather = document.querySelector('#weather')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const cityName = document.querySelector('#city-name').value

    if (!cityName) {
        weather.classList.remove('show')
        return showAlert(`
            Você precisa digitar uma cidade!
            <img src="assets/img/typeicon.svg"></img>
        `)
    }

    const token = '3d181d14570e4c10f8a6d3c74d8ac3f4'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${token}&units=metric&lang=pt_br`

    const results = await fetch(url)
    const json = await results.json()

    if (json.cod === 200) {
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempMin: json.main.temp_min,
            tempMax: json.main.temp_max,
            description: json.weather[0].description,
            icon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            humidity: json.main.humidity
        })
    } else {
        weather.classList.remove('show')
        showAlert(`
            Não foi possível localizar essa cidade!
            <img src="assets/img/searchicon.svg"></img>
         `)
    }
})

const showInfo = (json) => {
    showAlert('')

    weather.classList.add('show')

    document.querySelector('#title').innerHTML = `${json.city}, ${json.country}`
    document.querySelector('#temp-value').innerHTML = `${json.temp.toFixed(1).toString().replace('.', ',')}<sup>ºC</sup>`
    document.querySelector('#temp-img').setAttribute('src', `https://openweathermap.org/img/wn/${json.icon}@2x.png`)
    document.querySelector('#temp-description').innerHTML = json.description
    document.querySelector('#temp-min').innerHTML = `${json.tempMin.toFixed(1).toString().replace('.', ',')}<sup>ºC</sup>`
    document.querySelector('#temp-max').innerHTML = `${json.tempMax.toFixed(1).toString().replace('.', ',')}<sup>ºC</sup>`
    document.querySelector('#humidity').innerHTML = `${json.humidity}%`
    document.querySelector('#wind').innerHTML = `${json.windSpeed.toFixed(1).toString().replace('.', ',')} km`
}

const showAlert = (msg) => {
    document.querySelector('#alert').innerHTML = msg
}