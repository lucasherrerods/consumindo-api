const form = document.querySelector('#form')    
const weather = document.querySelector('#weather')

form.addEventListener('submit', async (event) => {
    event.preventDefault() //tirando o padrão do navegador

    const cityName = document.querySelector('#city-name').value

    if (!cityName) {
        weather.classList.remove('show')
        return showAlert(`
            Você precisa digitar uma cidade!
            <img src="assets/img/typeicon.svg"></img>
        `)
    }

    const token = '3d181d14570e4c10f8a6d3c74d8ac3f4' //meu token da api
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${token}&units=metric&lang=pt_br`//endcode deixa caracteres especias compativeis

    const results = await fetch(url)
    const json = await results.json() //pegando os dados da api e transformando em objeto

    if (json.cod === 200) {
        showInfo({ //objeto para todos os dados que pretendo capturar
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
    showAlert('') //limpando caso tiver alerta

    weather.classList.add('show')

    //mostrando na tela cada item do meu objeto
    document.querySelector('#title').innerHTML = `${json.city}, ${json.country}`
    document.querySelector('#temp-value').innerHTML = `${json.temp.toFixed(1).toString().replace('.', ',')}<sup>ºC</sup>`
    document.querySelector('#temp-img').setAttribute('src', `https://openweathermap.org/img/wn/${json.icon}.png`)
    document.querySelector('#flag').setAttribute('src', `https://flagcdn.com/w320/${json.country.toLowerCase()}.png`) //api de bandeiras de cada país
    document.querySelector('#temp-description').innerHTML = json.description
    document.querySelector('#temp-min').innerHTML = `${json.tempMin.toFixed(1).toString().replace('.', ',')}<sup>ºC</sup>`
    document.querySelector('#temp-max').innerHTML = `${json.tempMax.toFixed(1).toString().replace('.', ',')}<sup>ºC</sup>`
    document.querySelector('#humidity').innerHTML = `${json.humidity}%`
    document.querySelector('#wind').innerHTML = `${json.windSpeed.toFixed(1).toString().replace('.', ',')} km/h`
}

const showAlert = (msg) => {
    document.querySelector('#alert').innerHTML = msg
}