const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        // userNewUrlParser: true,
         useUnifiedTopology: true,
        // useCreateIndex: true
    }).then((data) => {
        console.log(`mongodb connescted with server ${data.connection.host}`)
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectDatabase;