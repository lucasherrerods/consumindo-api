const button = document.querySelector('#generate')

const randomApi = async () => {
    let url = 'https://randomuser.me/api/'

    const result = await fetch(url)
    const json = await result.json()

    showUser({
        image: json.results[0].picture.large,
        firstName: json.results[0].name.first,
        lastName: json.results[0].name.last,
        cell: json.results[0].cell,
        email: json.results[0].email,
        country: json.results[0].location.country
    })
}

const showUser = (json) => {
    let icon = document.querySelector('#icon-img')

    icon.classList.remove('hide')
    icon.setAttribute('src', json.image)

    document.querySelector('#name').innerHTML = `${json.firstName} ${json.lastName}`
    document.querySelector('#country').innerHTML = `${json.country}`
    document.querySelector('#cell').innerHTML = `Phone: ${json.cell}`
    document.querySelector('#email').innerHTML = `E-mail: ${json.email}`
}

button.addEventListener('click', randomApi)