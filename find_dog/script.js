const apiDogs = () => {

    const url = `https://api.thedogapi.com/v1/breeds`
    const button = document.querySelector('#btn')

    button.addEventListener('click', () => {

        const idNumber = document.querySelector('#idDog').value

        fetch(url)
            .then(response => response.json())
            .then(apiResult => {

                const selectedDog = apiResult.find(dog => dog.id == idNumber)

                if (selectedDog) {
                    const nameDog = document.querySelector('.titulo')
                    const lifeTime = document.querySelector('.resposta')
                    const weightDog = document.querySelector('.recomendacao')
                    const imageDog = document.querySelector('.image')

                    nameDog.innerHTML = `Nome do cachorro: ${selectedDog.name}`
                    lifeTime.innerHTML = `Prazo de vida: ${selectedDog.life_span}`
                    weightDog.innerHTML = `Peso do cachorro: ${selectedDog.weight.imperial}`
                    imageDog.setAttribute('src', `https://cdn2.thedogapi.com/images/${selectedDog.reference_image_id}.jpg`)
                }
                else {
                    alert('ID não encontrado')
                }
            })
            .catch(error => console.error(`Erro ao encontrar API`, error))
    })
}
apiDogs()