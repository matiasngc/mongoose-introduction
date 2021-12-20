require('../connection')

const Product = require('../models/Product')

const someFunction = async () => {
    // const result = await Product.deleteMany({name: 'keyboard'})
    // const result = await Product.deleteOne({name: 'laptop hp'})
    // const result = await Product.findOneAndDelete({name: 'laptop'})
    const result = await Product.findByIdAndDelete('61ba42761c00fc4a1dc5397a')

    console.log(result)
}

someFunction()