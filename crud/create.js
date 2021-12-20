require('../connection')

const Product = require('../models/Product')

const createProducts = (async () => {
    
    const laptopOne = new Product({
        name: 'laptop hp',
        description: 'htp pavilion 15'
    })
    await laptopOne.save()

    const laptopTwo = new Product({
        name: 'laptop lenovo',
        description: 'lenovo x1'
    })
    await laptopTwo.save()
})()
