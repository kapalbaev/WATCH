export function getCountProductsInCart(){
    let cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    return cart ? cart.topicsList.length : 0
}

export function calcSubPrice(product){
    return product.count * product.item.price
}

export function calcTotalPrice(topicsList){
    let cart = JSON.parse(localStorage.getItem("cart"))
    let totalPrice = 0
    cart.topicsList.forEach(item => {
        totalPrice += item.subPrice
    })
    return totalPrice
}




export function checkProductInCart(id){
    let cart = JSON.parse(localStorage.getItem("cart"))
    if(!cart){
      cart = {
        topicsList: [],
        totalPrice: 0
      }
    }
    let newCart = cart.topicsList.filter(elem => elem.item.id === id)
    return newCart.length > 0 ? true : false
}