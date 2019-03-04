class ProductsList {
    constructor(container = '.products') {
        this.container = container
        this.goods = []
        this.allProducts = []
        this._fetchProducts()
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
            {id: 5, title: 'Microphone', price: 100},
            {id: 6, title: 'Phone', price: 500},
            {id: 7, title: 'Graphics Tablet', price: 150},
            {id: 8, title: 'Flash Card', price: 70},
        ]
    }
    render(){
        const block = document.querySelector(this.container)
        for (let product of this.goods) {
            const productObj = new ProductItem(product)
            this.allProducts.push(productObj)
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
    calcSumCost() {
        for (let i; i < _fetchProducts.length; i++) {
            let sum = this.goods.price
            console.log(sum)
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://school.dreamstudy.ru/proxy/file/images/products/tovar-5-magazin.jpg'){
        this.title = product.title
        this.price = product.price
        this.id = product.id
        this.img = img
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Item">
                <div class="description">
                    <h3>${this.title}</h3>
                    <p>${this.price}£</p><br>
                    <button class="buy-btn">Купить</button>
                </div>
        </div>`
    }
}

class Cart {
    constructor(product, img = 'https://school.dreamstudy.ru/proxy/file/images/products/tovar-5-magazin.jpg'){
        this.title = product.title
        this.price = product.price
        this.id = product.id
        this.img = img
    }
}

class CartElement {
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Item">
                <div class="description">
                    <h3>${this.title}</h3>
                    <p>${this.price}£</p><br>
                    <button class="buy-btn">Удалить</button>
                </div>
        </div>`
    }
}

let list = new ProductsList()
list.render()