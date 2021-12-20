const Product = require('./models/Product')
require('./connection')

const product = new Product({
    name: 'laptop',
    description: 'lenovo thinkpad x1 carbon 6th generation',
    price: 1300.99
})

product.save((err, document) => {
    if(err) console.log(err)
    console.log(document)
})

console.log(product)