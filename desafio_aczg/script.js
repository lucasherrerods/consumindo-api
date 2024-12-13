// DESAFIO 1
const aczgChallenge1 = () => {

    const url = `https://desafio-endpoint-hashcode-n2.onrender.com/passo1`

    fetch(url)
        .then(response => response.json())
        .then(apiUrl => {
            console.log(apiUrl)
        })
}
aczgChallenge1()


// DESAFIO 2
const aczgChallenge2 = () => {

    const url = `https://desafio-endpoint-hashcode-n2.onrender.com/passo2`
    const data = {
        cpf: '434.771.508-05'
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(apiUrl => {
            console.log(apiUrl)
        })
}
aczgChallenge2()


//DESAFIO 3
const aczgChallenge3 = () => {

    const url = `https://desafio-endpoint-hashcode-n2.onrender.com/passo3`
    const data = {
        cpf: '434.771.508-05',
        respostaQuestaoObjetiva: '22'
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(apiUrl => {
            console.log(apiUrl)
        })
}
aczgChallenge3()


//DESAFIO 4
const aczgChallenge4 = () => {

    const url = `https://desafio-endpoint-hashcode-n2.onrender.com/passo4`
    const token = '?cpf=434.771.508-05&token=5abb52d3bc753ca01f5e957a8ad8887ba3ffe8b1'

    fetch(url + token)
        .then(response => response.json())
        .then(apiUrl => {
            console.log(apiUrl)
        })
}
aczgChallenge4()