const names = 'Brian'
const userAge = 48

const user = {
    name: names, 
    age:userAge,
    location:'Philadelphia'
}

console.log(user)


const product = {
    label: 'red notebook',
    price: 3, 
    stock: 201,
    salePrice: undefined
}


const {label: productLabel, stock, rating = 5} = product

console.log(productLabel)

console.log(stock)

