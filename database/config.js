require('dotenv');
require('colors');
const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            // useUndefinedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        });

        console.log('base de datos online'.green)

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicar la base de datos');
    }
}

module.exports = {
    dbConnection,
}