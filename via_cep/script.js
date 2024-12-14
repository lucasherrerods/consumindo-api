// espera a página carregar inteira antes de começar
document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector('#search-btn')

    let cep = document.querySelector('#cep')
    $('#cep').mask('00000-000') //adicionando máscara no input

    const searchCep = () => {
        let url = `https://viacep.com.br/ws/${cep.value}/json/`

        //requisição na api
        fetch(url)
            .then(response => response.json()) //transformando resposta de texto pra json
            .then(data => {
                showAddress(data)
            })
    }

    //função pra pegar os dados e jogar nos inputs
    const showAddress = (data) => {
        let address = document.querySelector('#address')
        let neighbor = document.querySelector('#neighbor')
        let city = document.querySelector('#city')

        address.value = data.logradouro || 'Não encontrado'
        neighbor.value = data.bairro || 'Não encontrado'
        city.value = data.estado || 'Não encontrado'

        if (address.value == 'Não encontrado') {
            alert('CEP inválido. Verifique e tente novamente.')
        }
    }

    button.addEventListener('click', searchCep)
})