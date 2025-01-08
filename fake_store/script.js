const button = document.querySelector('#btn-search')
const containerProduct = document.querySelector('.product')

const getProduct = async () => {
  const id = document.querySelector('#product-id').value

  if (!id || id < 1 || id > 20) {
    return alert('Preencha o campo corretamente.')
  }

  const request = await fetch(`https://fakestoreapi.com/products/${id}`)
  const product = await request.json()

  console.log(product)
  showProduct({
    image: product.image,
    category: product.category,
    price: product.price,
    rate: product.rating.rate
  })
}

const showProduct = (json) => {
  containerProduct.classList.remove('hide')

  const image = document.querySelector('#product-img')
  image.setAttribute('src', json.image)

  document.querySelector('#category').innerHTML = json.category
  document.querySelector('#price').innerHTML = `$ ${json.price}`
  document.querySelector('#rate').innerHTML = `<i class="fa-solid fa-star"></i> ${json.rate}`
}

button.addEventListener('click', getProduct)