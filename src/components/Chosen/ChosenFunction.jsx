export function getCountProductsInChosen(){
    let chosen = JSON.parse(localStorage.getItem("chosen"))
    return chosen ? chosen.topicsList.length : 0
}

export function calcSubChosen(product){
    return product.count * product.item.price
}

export function calcTotalChosen(topicsList){
    let totalPrice = 0
    topicsList.forEach(item => {
        totalPrice += item.subPrice
    })
    return totalPrice
}

export function checkProductInChosen(id){
    let chosen = JSON.parse(localStorage.getItem("chosen"))
    if(!chosen){
      chosen = {
        topicsList: [],
        totalPrice: 0
      }
    }
    let newChosen = chosen.topicsList.filter(elem => elem.item.id === id)
    return newChosen.length > 0 ? true : false
}