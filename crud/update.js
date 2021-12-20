require('../connection')

const User = require('../models/User')

const someFunction = async () => {
    const user = await User.findOne({username: 'joe'})
    console.log(user)
    user.password = 'myNewPassword'
    user.save()
    console.log(user)
}

const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username: 'clark'}, {
        name: 'Gordon Clark'
    }, {new: true})
    console.log(user)
}

const updateUsers = async () => {
    const userModified = await User.update({username: 'fazt'}, {
        password: 'contraseñaSegura'
    })
    //no es necesario el método .save()
    console.log(userModified)
}

otherFunction()