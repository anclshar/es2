const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    {id: 5, title: 'Microphone', price: 100},
    {id: 6, title: 'Phone', price: 500},
    {id: 7, title: 'Graphics Tablet', price: 150},
    {id: 8, title: 'Flash Card', price: 70},
]
const renderProduct = (title, price, img = 'https://school.dreamstudy.ru/proxy/file/images/products/tovar-5-magazin.jpg') => {
    return `<div class="product-item">
                <img src="${img}" alt="Item">
                <div class="description">
                    <h3>${title}</h3>
                    <p>${price}£</p><br>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
}

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price))
    document.querySelector('.products').innerHTML = productsList.join('')
}

renderPage(products)