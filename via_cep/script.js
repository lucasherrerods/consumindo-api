document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector('#search-btn')

    const searchCep = () => {
        let cep = document.querySelector('#cep').value
        let url = `https://viacep.com.br/ws/${cep}/json/`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                showAddress(data)
            })
    }

    const showAddress = (data) => {
        let address = document.querySelector('#address')
        let neighbor = document.querySelector('#neighbor')
        let city = document.querySelector('#city')

        address.value = data.logradouro
        neighbor.value = data.bairro
        city.value = data.estado
    }

    button.addEventListener('click', searchCep)
})